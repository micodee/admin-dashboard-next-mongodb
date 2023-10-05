import Visitors from "@/database/models/visitors";
import { ConnectMongoDB } from "@/database/mongodb";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function POST(req) {
 try {
  await ConnectMongoDB()
  const extractData = await req.json()
  const newlyCreatedVisitors = await Visitors.create(extractData)
  if (newlyCreatedVisitors) {
   return NextResponse.json(
    {
     success: true, 
     message: "vistors added successfully"
    },
   )
  } else {
   return NextResponse.json(
    {
     success: false, 
     message: "failed to add a vistors, please try after some time"
    },
   )
  }
  
 } catch (error) {
  console.log("error post: ", error);
  return NextResponse.json(
    {
      success: false,
      message: "something went wrong, please try again",
    },
    { status: 500 }
  );
}
}