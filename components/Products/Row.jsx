import PropsType from "prop-types";
const Row = (props) => {
  return (
    <div className={`flex ${props.className}`}>
      <div className="text-lg flex-1 p-2">{props.name}</div>
      <div className="flex-1 p-2">
        <img
          src={props.imgSrc}
          className="max-w-full min-w-full placeholder:bg-cyan-300 h-full w-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2 p-2">
        <div className="text-green-500">{props.minPrice}</div>
        <div className="text-red-500">{props.maxPrice}</div>
      </div>
      <div className="text-purple-400 flex-1 p-2">{props.salesPerMonth}</div>
      <div className="text-orange-300 flex-1 p-2">{props.totalSales}</div>
    </div>
  );
};

export default Row;
Row.PropsType = {
  name: PropsType.string,
  imgSrc: PropsType.string,
  maxPrice: PropsType.number,
  minPrice: PropsType.number,
  salesPerMonth: PropsType.number,
  totalSales: PropsType.number,
};
