import {productTableHeaders } from "@/utils/tableProducts";
import Table from "../table";
import { monthMapper } from "@/utils/monthMapper";
import { ExtractAllProduct } from "@/services/product";

export default async function ProductListing() {
  const allProducts = await ExtractAllProduct();
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
