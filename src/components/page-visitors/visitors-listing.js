import Table from "../table";
import { monthMapper } from "@/utils/monthMapper";
import { visitorsTableHeaders } from "@/utils/tableVisitors";

const extractAllVisitors = async () => {
  const res = await fetch("http://localhost:3000/api/visitors/all-visitors", {
    method: "GET",
    cache: "no-store",
  });

  return await res.json();
};

export default async function VisitorsListing() {
  const allVisitors = await extractAllVisitors();
  const { data } = allVisitors || {};
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
        tableHeaderCells={visitorsTableHeaders}
        data={
          allVisitors && allVisitors.data && allVisitors.data.length
            ? allVisitors?.data?.map((item) => ({
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
