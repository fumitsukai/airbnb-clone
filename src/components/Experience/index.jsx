import Carousel from "../Carousel";
import "./index.css";

export function Experience() {
  return (
    <>
      <div className="card max-w-96">
        <Carousel />
        <h4 className="font-semibold">Heading</h4>
        <p className="font-thin">Hosted by a X</p>
        <p className="font-thin mb-1">Date range</p>
        <p className="font-medium">
          £3200<span className="font-normal"> total</span>
        </p>
      </div>
    </>
  );
}
