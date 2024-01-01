import { NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";
import Contact from "../../models/contact";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const searchValue = searchParams.get('q');

  try {
    await connectDB();

    // Perform a case-insensitive search on multiple fields using $regex operator
    const results = await Contact.find({
      $or: [
        { "project": { $regex: searchValue, $options: 'i' } },
        { "clientName": { $regex: searchValue, $options: 'i' } },
        { "password": { $regex: searchValue, $options: 'i' } },
        { "url": { $regex: searchValue, $options: 'i' } },
        { "application": { $regex: searchValue, $options: 'i' } },
      ],
    });

    if (results.length > 0) {
      // If matching documents are found
      return NextResponse.json({ message: "Documents found", results });
    } else {
      // If no matching documents are found
      return NextResponse.json({ message: "No documents found for the search value", status: 404 });
    }
  } catch (error) {
    console.error("Error performing search:", error);
    return NextResponse.json({ message: "Internal Server Error", status: 500 });
  }
}
