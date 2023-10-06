'use client'

import { yearlyAnalyticChartOptions } from "@/utils/dashboard"
import ReactApexChart from "react-apexcharts"

function getSales(products, getMonth) {
  if(products.filter(item => item.month === getMonth).length === 0) {
    return 0
  }
  return products.filter(item=> item.month === getMonth).reduce((acc, productItem) => acc + productItem.sales, 0)
}
function getRevenue(products, getMonth) {
  if(products.filter(item => item.month === getMonth).length === 0) {
    return 0
  }
  return products.filter(item=> item.month === getMonth).reduce((acc, productItem) => acc + productItem.revenue, 0)
}
function getCost(products, getMonth) {
  if(products.filter(item => item.month === getMonth).length === 0) {
    return 0
  }
  return products.filter(item=> item.month === getMonth).reduce((acc, productItem) => acc + productItem.cost, 0)
}

export default function YearlyAnalyticChart({allProducts}) {

  const series = [
    {
      name: 'Sales',
      data: yearlyAnalyticChartOptions.xaxis.categories.map(month => getSales(allProducts, month.toLowerCase()))
    },
    {
      name: 'Cost',
      data: yearlyAnalyticChartOptions.xaxis.categories.map(month => getCost(allProducts, month.toLowerCase()))
    },
    {
      name: 'Revenue',
      data: yearlyAnalyticChartOptions.xaxis.categories.map(month => getRevenue(allProducts, month.toLowerCase()))
    },
  ]

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-7 shadow sm:px-7.5 xl:col-span-8">
      <div className="flex items-start justify-between flex-col flex-wrap w-full gap-3 sm:flex-nowrap">
        <p className="font-bold text-primary">Yearly Analytics Overview</p>
        <div className="w-full">
          <div id="YearlyAnalyticChart" className="-ml-5">
            <ReactApexChart 
              options={yearlyAnalyticChartOptions}
              series={series}
              type="area"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
