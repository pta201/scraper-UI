import Row from "./row";
const Products = ({ products }) => {
  return (
    <>
      <div className="container">
        <div className="flex">
          <div className="flex-1 p-2">Name</div>
          <div className="flex-1 p-2">Image</div>
          <div className="flex-1 p-2">Price</div>
          <div className="flex-1 p-2">TotalSale</div>
          <div className="flex-1 p-2">SalesPerMonth</div>
        </div>
        <ul className="container">
          {products.map((product) => {
            console.log(product);
            return (
              <>
                <Row
                  key={product.itemId}
                  name={product.name}
                  imgSrc={product.image}
                  minPrice={product.priceRange.priceMax}
                  maxPrice={product.priceRange.priceMin}
                  totalSales={product.totalSales}
                  salesPerMonth={product.salesPerMonth}
                />
                <div className="border-b  border-solid border-gray-300"></div>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Products;
