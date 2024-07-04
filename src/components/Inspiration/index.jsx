import { motion as m } from "framer-motion";

export function Inspiration() {
  return (
    <>
      <section className="bg-gray-light px-20 pt-10 mt-10 border-b pb-6">
        <h1 className="font-medium text-2xl mb-3">
          Inspiration for future getaways
        </h1>
        <div className="flex justify-start gap-3 pb-3 mb-3 border-b font-light text-sm">
          <button className="border-b-2 border-black">Popular</button>
          <button>Historic</button>
          <button>Coastal</button>
          <button>Islands</button>
          <button>Unique stays</button>
          <button>Categories</button>
          <button>Things to do</button>
        </div>
        <div>For loop to search for stuff</div>
      </section>
    </>
  );
}
