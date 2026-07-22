import { NextResponse } from 'next/server';import { verifyEnquiryOTP } from '../../../../lib/enquiries';
export const runtime='nodejs';export async function POST(request){try{const r=await verifyEnquiryOTP(await request.json());return NextResponse.json(r.body,{status:r.status})}catch{return NextResponse.json({success:false,message:'Server error'},{status:500})}}
