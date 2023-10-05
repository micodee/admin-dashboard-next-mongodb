import Product from "@/database/models/product";
import { ConnectMongoDB } from "@/database/mongodb";
import { NextResponse } from "next/server";

// export const dynamic = 'force-dynamic'

export async function POST(req) {
 try {
  await ConnectMongoDB()
  const extractData = await req.json()
  const newlyCreatedProduct = await Product.create(extractData)
  if (newlyCreatedProduct) {
   return NextResponse.json(
    {
     success: true, 
     message: "product added successfully"
    },
   )
  } else {
   return NextResponse.json(
    {
     success: false, 
     message: "failed to add a product! please try after some time"
    },
   )
  }
  
 } catch (error) {
  console.log("error post: ", error);
  return NextResponse.json(
    {
      success: false,
      message: "something went wrong! please try again",
    },
    { status: 500 }
  );
}
}