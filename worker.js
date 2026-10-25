// ronaldjones.me: serves the static site and records anonymous visit events.
// Events land in Workers Analytics Engine (binding: VISITS). No cookies, no IP addresses stored.

const EVENTS = new Set(['view', 'section', 'click', 'time']);
const BOTS = /bot|crawl|spider|preview|headless|lighthouse|monitor|uptime|curl|wget|python|node-fetch|slurp/i;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/e') {
      if (request.method !== 'POST') {
        return new Response(null, { status: 405, headers: { Allow: 'POST' } });
      }
      return record(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};

async function record(request, env) {
  const length = Number(request.headers.get('content-length')) || 0;
  if (length > 1024) return new Response(null, { status: 413 });

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  const ua = request.headers.get('user-agent') || '';
  if (!EVENTS.has(body.e) || BOTS.test(ua)) return new Response(null, { status: 204 });

  const clean = (value, max = 64) => String(value ?? '').replace(/[^\w .:/%-]/g, '').slice(0, max);
  const cf = request.cf || {};

  env.VISITS.writeDataPoint({
    indexes: [clean(body.v, 16)],            // random id for one page load
    blobs: [
      body.e,                                // 1 event: view | section | click | time
      clean(body.d, 80),                     // 2 detail: section id or link name
      clean(body.s, 40),                     // 3 source tag from ?s=
      clean(body.r, 80),                     // 4 referrer host
      cf.country ?? '',                      // 5 country
      cf.region ?? '',                       // 6 region
      cf.city ?? '',                         // 7 city
      clean(body.w, 10),                     // 8 device class
      cf.asOrganization ?? '',               // 9 network owner (company or ISP)
    ],
    doubles: [Math.min(Number(body.n) || 0, 1800)], // visible seconds since last "time" event
  });

  return new Response(null, { status: 204 });
}
