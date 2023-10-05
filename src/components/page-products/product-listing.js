import {productTableHeaders } from "@/utils/tableProducts";
import Table from "../table";
import { monthMapper } from "@/utils/monthMapper";

const extractAllProduct = async () => {
  const res = await fetch("http://localhost:3000/api/product/all-product", {
    method: "GET",
    cache: "no-store",
  });

  return await res.json();
};

export default async function ProductListing() {
  const allProducts = await extractAllProduct();
  const { data } = allProducts || {};
  return (
    <>
      {/* {data?.map((itm) => {
        return (
          <>
            <p>{itm.name}</p>
            <p>{itm.price}</p>
          </>
        );
      })} */}

      <Table
        tableHeaderText="All Products Overview"
        tableHeaderCells={productTableHeaders}
        data={
          allProducts && allProducts.data && allProducts.data.length
            ? allProducts?.data?.map((item) => ({
                ...item,
                revenue: parseInt(item.price * item.sales),
                month: monthMapper[item.month]
              }))
            : []
        }
      />
    </>
  );
}
