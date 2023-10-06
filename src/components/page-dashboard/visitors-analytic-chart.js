"use client";

import { vistorsAnalyticChartOptions } from "@/utils/dashboard";
import ReactApexChart from "react-apexcharts";

function getAllVisitors(data, country) {
  if(data.length === 0) {
    return 0
  }
  return data.filter(item=> item.location.toLowerCase() === country).reduce((acc, visitorsItem) => acc + visitorsItem.visitors, 0)
}
function getAllPremiumVisitors(data, country) {
  if(data.length === 0) {
    return 0
  }
  return data.filter(item=> item.location.toLowerCase() === country).reduce((acc, visitorsItem) => acc + visitorsItem.premiumUserNo, 0)
}

export default function VisitorsAnalyticChart({allVisitors}) {

  const uniqueLocation = [...new Set(allVisitors?.map(item => item.location.toLowerCase()))]

  let updateOptions = {
    ...vistorsAnalyticChartOptions,
    xaxis : {
      categories: uniqueLocation.slice(0, uniqueLocation.length > 5 ? 5 : uniqueLocation.length)
    }
  }

  const series = [
    {
    name: 'Visitors',
    data: uniqueLocation.map(locItem => getAllVisitors(allVisitors, locItem))
    },
    {
    name: 'Premium Visitors',
    data: uniqueLocation.map(locItem => getAllPremiumVisitors(allVisitors, locItem))
    }
  ]

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-7 shadow sm:px-7.5 xl:col-span-4">
      <div className="flex items-start justify-between flex-col flex-wrap w-full gap-3 sm:flex-nowrap">
        <p className="font-bold text-primary">Visitors by Country</p>
        <div className="w-full">
          <div id="YearlyAnalyticChart" className="-ml-5">
            <ReactApexChart
              options={updateOptions}
              series={series}
              type="bar"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
