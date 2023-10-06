"use client";

import { deviceAnalyticChartOptions } from "@/utils/dashboard";
import ReactApexChart from "react-apexcharts";

function getDeviceByVisitors(data, getDevice) {
  if (data.length === 0 && data.filter(item => item.device === getDevice).length === 0 ) return 0

  return data.filter(items => items.device === getDevice).reduce((acc, deviceItem) => acc + deviceItem.visitors, 0)
}

export default function DeviceAnalyticChart({ allVisitors }) {
  const series = [
    getDeviceByVisitors(allVisitors, 'desktop'),
    getDeviceByVisitors(allVisitors, 'laptop'),
    getDeviceByVisitors(allVisitors, 'tablet'),
    getDeviceByVisitors(allVisitors, 'mobile'),
  ]

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-7 shadow sm:px-7.5 xl:col-span-5">
      <div className="flex items-start justify-between flex-col flex-wrap w-full gap-3 sm:flex-nowrap">
        <p className="font-bold text-primary">Visitors Analytics by Devices</p>
        <div className="w-full mb-2">
          <div id="DeviceAnalyticChart" className="mx-auto flex justify-center">
            <ReactApexChart
              options={deviceAnalyticChartOptions}
              series={series}
              type="donut"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
