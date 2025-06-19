import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const client = await clientPromise;
    const db = client.db('ujjawal-farming'); // You can change the database name as needed
    const collection = db.collection('quotes');

    await collection.insertOne(data);

    return NextResponse.json({
      message: 'Quote request received and saved successfully',
      receivedData: data,
    });
  } catch (error) {
    console.error('Error saving quote request:', error);
    return NextResponse.json(
      { error: 'Failed to process the request' },
      { status: 500 }
    );
  }
}
