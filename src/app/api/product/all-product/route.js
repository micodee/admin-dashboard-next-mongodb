import Product from "@/database/models/product";
import { ConnectMongoDB } from "@/database/mongodb";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await ConnectMongoDB();
    const getAllProduct = await Product.find();

    if (getAllProduct) {
      return NextResponse.json({
        success: true,
        data: getAllProduct,
      });
    } else {
      return NextResponse.json({
        success: true,
        message:
          "failed to fetch the products, please try again after some time",
      });
    }
    
  } catch (error) {
    console.log("error catch: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "something went wrong, try again",
      },
      {
        status: 500,
      }
    );
  }
}
