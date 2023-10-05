import Visitors from "@/database/models/visitors";
import { ConnectMongoDB } from "@/database/mongodb";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await ConnectMongoDB();
    const getAllVisitorsInfo = await Visitors.find();

    if (getAllVisitorsInfo) {
      return NextResponse.json({
        success: true,
        data: getAllVisitorsInfo,
      });
    } else {
      return NextResponse.json({
        success: true,
        message:
          "failed to fetch the visitors, please try again after some time",
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
