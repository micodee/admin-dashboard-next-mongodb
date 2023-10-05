import User from "@/database/models/user";
import { ConnectMongoDB } from "@/database/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email } = await req.json();
    await ConnectMongoDB();

    const newUser = await User.create({ name, email });
    if (newUser) {
      return NextResponse.json({
        success: true,
        message: "user registered",
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "failed register the user! please try again",
        },
        { status: 400 }
      );
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
