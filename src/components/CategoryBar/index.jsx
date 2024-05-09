import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import category from "../../utils/category";

export function CategoryBar() {
  const categoryListItems = category.map((item) => (
    <li>
      <FontAwesomeIcon icon={item.icon} className="m-3 px-5"></FontAwesomeIcon>
      <p>{item.name}</p>
    </li>
  ));
  return (
    <>
      <div className="w-full px-5">
        <ul className="flex justify-around mt-6 mb-2 gap-3 overflow-scroll">
          {categoryListItems}
        </ul>
      </div>
    </>
  );
}
