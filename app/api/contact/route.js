//routes for contact page
import { NextResponse } from "next/server";
import Contact from "../../models/contact"
import mongoose from "mongoose";
import connectDB from "../../lib/mongodb";
import { ObjectId } from 'mongodb';


//API for POST request  to submit password Form.
export async function POST(req) {
  await connectDB();

  const { application, clientName, url, project, password } = await req.json();

  try {
    await Contact.create({ application, clientName, url, project, password });
    return NextResponse.json({
      msg: ['Password saved successfully'],
      success: true,
    });
  } catch (error) {
    console.error('Error during password_saver.create:', error);

    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json(error);
    }
  }
}

// API for GET request to get passwordList
export async function GET() {
  await connectDB();
  const passwordList = await Contact.find().sort({ date: 'desc' });
  return NextResponse.json({ passwordList })
}


// API for DELETE request to delete a password
export async function DELETE(request) {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    // Assuming Contact is your Mongoose model
    const result = await Contact.deleteOne({
      "_id": new ObjectId(id)
    });

    if (result) {
      return NextResponse.json({ message: "Contact deleted" });
    } else {
      return NextResponse.json({ message: "Contact not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error during DELETE:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}