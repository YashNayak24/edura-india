import { NextResponse } from 'next/server';import { submitEnquiry } from '../../../../lib/enquiries';
export const runtime='nodejs';export async function POST(request){try{const r=await submitEnquiry(await request.json());return NextResponse.json(r.body,{status:r.status})}catch{return NextResponse.json({success:false,message:'Server error. Please try again.'},{status:500})}}
