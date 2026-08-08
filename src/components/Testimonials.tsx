export default function Testimonials() {
  const testimonials = [
    {
      name: "Samuel Eggins",
      title: "Founder, Dupeids (Sydney, Australia)",
      duration: "18-month contract • Feb 2021 - Aug 2023",
      quotes: [
        "Throughout Ahnaf's employment, he was able to fulfil every single need of my business. Ahnaf constantly adjusted his schedule to prioritise work and was able to keep up-to-date on a strict work schedule. He was able to develop my business' website and its service within three months of work, which involved setting up email, administration, contact support and ultimately developing the service.",
        "He continuously conveyed effective time management during the website's development, an ability to communicate and listen to create my vision, the confidence to discuss with me his own ideas and an interest in his work.",
        "Ahnaf is a good worker - he was able to do everything I asked of him with great attention to detail.",
      ],
    },
    {
      name: "Joseph Allen",
      title: "Contract Client",
      duration: "December 2020 (2 projects)",
      quotes: [
        "Excellent work... I will definitely be working with this developer in the future! I highly recommend Ahnaf, he is adaptable, hardworking, and proactive.",
        "This is my second project with this developer... I struck gold with Ahnaf! He is my first developer on Fiverr and has made a very good impression on myself and my team.",
      ],
    },
  ];

  return (
    <section className="bg-theme-bg py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center md:text-left font-title">
          TESTIMONIALS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-neutral-900 border border-neutral-800 rounded-lg flex flex-col justify-center"
              style={{ padding: "2rem" }}
            >
              <div className="h-full flex flex-col justify-center">
                {testimonial.quotes.map((quote, index) => (
                  <blockquote
                    key={index}
                    className="italic text-theme-text leading-relaxed"
                    style={{ marginBottom: index === testimonial.quotes.length - 1 ? "1.5rem" : "1rem" }}
                  >
                    &quot;{quote}&quot;
                  </blockquote>
                ))}
              </div>

              <div
                className="border-t border-neutral-700"
                style={{ paddingTop: "1rem", marginTop: "auto" }}
              >
                <p className="text-theme-accent font-title font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-theme-muted text-sm">{testimonial.title}</p>
                <p className="text-theme-muted text-sm" style={{ marginTop: "0.25rem" }}>
                  {testimonial.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
