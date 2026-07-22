import { NextResponse } from 'next/server';
import { connectDB } from '../../../lib/db';
import Course from '../../../models/Course';

export async function GET(request){try{await connectDB();const q=request.nextUrl.searchParams;const filter={isActive:true};if(q.get('category')&&q.get('category')!=='all')filter.category=q.get('category');if(q.get('featured')==='true')filter.isFeatured=true;if(q.get('search')){const r=new RegExp(q.get('search'),'i');filter.$or=[{title:r},{description:r},{skillsCovered:r},{category:r}]};const data=await Course.find(filter).sort({isFeatured:-1,sortOrder:1}).lean();return NextResponse.json({success:true,count:data.length,data})}catch(e){return NextResponse.json({success:false,message:e.message},{status:500})}}
export async function POST(request){try{await connectDB();const data=await Course.create(await request.json());return NextResponse.json({success:true,data},{status:201})}catch(e){return NextResponse.json({success:false,message:e.message},{status:400})}}
