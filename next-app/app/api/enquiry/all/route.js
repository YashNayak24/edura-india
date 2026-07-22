import { NextResponse } from 'next/server';
import { connectDB } from '../../../../lib/db';
import Enquiry from '../../../../models/Enquiry';
export const runtime='nodejs';
export async function GET(request){try{await connectDB();const q=request.nextUrl.searchParams;const page=parseInt(q.get('page')||'1'),limit=parseInt(q.get('limit')||'20');const filter={};if(q.get('formType'))filter.formType=q.get('formType');if(q.get('status'))filter.status=q.get('status');const [data,total]=await Promise.all([Enquiry.find(filter).sort({createdAt:-1}).skip((page-1)*limit).limit(limit).select('-otp').lean(),Enquiry.countDocuments(filter)]);return NextResponse.json({success:true,total,page,data})}catch{return NextResponse.json({success:false,message:'Server error'},{status:500})}}
