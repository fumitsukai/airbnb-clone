import { Experience } from "../Experience";

export function ExperienceGallery() {
  return (
    <>
      <section className="container mx-auto grid grid-cols-4 gap-4 px-8">
        <Experience />
        <Experience />
        <Experience />
        <Experience />
      </section>
    </>
  );
}
