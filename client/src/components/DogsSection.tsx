import dogsPhoto from "../assets/dogs.jpg";

export function DogsSection() {
  return (
    <section id="dogs" className="py-20 px-6 bg-card/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
          The Real Decision Makers
        </h2>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's be honest—they run the show. My schedule revolves around their walks, my meetings get interrupted by their opinions, and any claims of work-life balance are subject to their approval. They keep me grounded, humble, and remind me daily that no matter how important the meeting, there's always time for a good belly rub.
        </p>

        <div className="rounded-lg overflow-hidden max-w-lg mx-auto">
          <img
            src={dogsPhoto}
            alt="Ron's dogs - the real bosses"
            className="w-full h-auto object-cover rounded-lg"
            data-testid="img-dogs"
          />
        </div>
      </div>
    </section>
  );
}
