export function MapBtn({ img, name }) {
  return (
    <>
      <div className="w-32 h-40 rounded-2xl hover:bg-gray-md">
        <img
          src={img}
          className="mx-auto mt-2 border border-solid object-contain w-28 rounded-2xl bg-gray-light mapImg"
        />
        <p className="ms-2 mt-2">{name}</p>
      </div>
    </>
  );
}
