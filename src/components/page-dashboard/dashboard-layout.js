'use client'

import Card from "../card"

import {FaUsers} from 'react-icons/fa'
import {BiMoneyWithdraw} from 'react-icons/bi'
import {MdProductionQuantityLimits} from 'react-icons/md'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import YearlyAnalyticChart from "./yearly-analytic-chart"
import VisitorsAnalyticChart from "./visitors-analytic-chart"
import DeviceAnalyticChart from "./device-analytic-chart"

export default function DashboardLayout({allProducts, allVisitors}) {

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
        <Card 
        data={allVisitors?.reduce((acc, visitorsItem) => parseInt(acc + visitorsItem.premiumUserNo), 0)}
        label={"Total Premium Visitors"}
        icon={<FaUsers size={25}/>}
        />
        <Card 
        data={allProducts?.length}
        label={"Total Products"}
        icon={<MdProductionQuantityLimits size={25}/>}
        />
        <Card
        data={allProducts?.reduce((acc, productsItem) => parseInt(acc + productsItem.sales), 0)} 
        label={"Total Sales"}
        icon={<BiMoneyWithdraw size={25}/>}
        />
        <Card 
        data={allVisitors?.reduce((acc, visitorsItem) => parseInt(acc + visitorsItem.visitors), 0)}
        label={"Total Visitors"}
        icon={<BsFillPersonCheckFill size={25}/>}
        />
      </div>
      <div className="mt-44 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7 2xl:gap:7">
        <YearlyAnalyticChart 
          allProducts={allProducts?.map((product) => ({
            ...product,
            revenue: product.sales + product.sales*6,
            cost: product.sales*4,
          }))}
        />
        <VisitorsAnalyticChart allVisitors={allVisitors && allVisitors.length ? allVisitors : []}/>
      </div>
      <div className="cols-span-12">
        <DeviceAnalyticChart allVisitors={allVisitors && allVisitors.length ? allVisitors : []}/>
      </div>
    </div>
  )
}
