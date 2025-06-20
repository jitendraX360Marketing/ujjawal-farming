import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.phone || !data.subject || !data.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('ujjawal-farming'); // Use your database name here

    const contactCollection = db.collection('contact');

    const result = await contactCollection.insertOne({
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.company || '',
      subject: data.subject,
      message: data.message,
      inquiryType: data.inquiryType || 'general',
      createdAt: new Date(),
    });

    return NextResponse.json({ message: 'Contact form submitted successfully', id: result.insertedId });
  } catch (error) {
    console.error('Error saving contact form data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
