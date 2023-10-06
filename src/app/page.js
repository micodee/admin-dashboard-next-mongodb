import DashboardLayout from "@/components/page-dashboard/dashboard-layout"
import { ExtractAllProduct } from "@/services/product"
import { ExtractAllVisitors } from "@/services/visitors"

export default async function Home() {

  const allProducts = await ExtractAllProduct()
  const allVisitors = await ExtractAllVisitors()

  return (
    <DashboardLayout allProducts={allProducts?.data} allVisitors={allVisitors?.data} />
  )
}
