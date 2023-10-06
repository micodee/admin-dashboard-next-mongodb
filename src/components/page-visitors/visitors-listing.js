import { ExtractAllVisitors } from "@/services/visitors";
import Table from "../table";
import { monthMapper } from "@/utils/monthMapper";
import { visitorsTableHeaders } from "@/utils/tableVisitors";

export default async function VisitorsListing() {

  const allVisitors = await ExtractAllVisitors();

  return (
    <>
      <Table
        tableHeaderText="All Products Overview"
        tableHeaderCells={visitorsTableHeaders}
        data={
          allVisitors && allVisitors.data && allVisitors.data.length
            ? allVisitors?.data?.map((item) => ({
                ...item,
                revenue: parseInt(item.price * item.sales),
                month: monthMapper[item.month],
                device: (item.device.charAt(0).toUpperCase() + item.device.slice(1)),
                location: (item.location.charAt(0).toUpperCase() + item.location.slice(1))
              }))
            : []
        }
      />
    </>
  );
}
