import axios from "axios";
import { useState } from "react";
import Products from "../../Products";
const ScrapePage = () => {
  const [products, setProducts] = useState();
  const [data, setData] = useState({
    shopName: "babykoi2014",
    totalPageNum: 1,
  });
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchProducts = async () => {
    setIsFetching(true);
    setIsError(false);
    // shopName: data.shopName,
    // pageNumber: data.totalPageNum,
    try {
      const apiURL = process.env.API_URL;
      const url = `${apiURL}/api/v1/products/scrape/${data.shopName}/${data.totalPageNum}`;
      console.log(apiURL, url);
      const res = await axios.get(url);
      console.log(res);
      setProducts(res.data.data.products);
      setIsFetching(false);
    } catch (error) {
      setIsError(true);
      setIsFetching(false);
    }
  };

  return (
    <main className="col-span-12">
      {/* Inputs */}
      <div className="container flex flex-col  gap-2 mt-4 mx-auto max-w-md">
        <div className="container flex justify-center  gap-2 ">
          <input
            type="text"
            className="px-3 py-1.5 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out
focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            placeholder="Shop name"
            id="shopname"
            onChange={(e) => {
              setData({ ...data, shopName: e.target.value });
            }}
          />
          <input
            type="text"
            className="px-3 py-1.5 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out
        focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            placeholder="Shop total page"
            id="page"
            onChange={(e) => {
              setData({ ...data, totalPageNum: e.target.value });
            }}
          />
        </div>

        <button
          className=" bg-orange-300 p-2 rounded-md hover:bg-orange-600 hover:text-white transition duration-300"
          onClick={() => fetchProducts()}
        >
          Submit
        </button>
      </div>
      {isFetching && <div className="text-lime-500">Đang load nè ...</div>}
      {isError && <div className="text-red-500">Lỗi rồi 😢😭😭</div>}
      {/* Products */}
      {!isFetching && products && (
        <div className="container mx-auto">
          <Products products={products} />
        </div>
      )}
    </main>
  );
};

export default ScrapePage;
