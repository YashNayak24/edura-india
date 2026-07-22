import { cache } from 'react';
import { connectDB } from './db';
import Course from '../models/Course';
export const getCourseBySlug=cache(async(slug)=>{try{await connectDB();const item=await Course.findOne({slug,isActive:true}).lean();return item?JSON.parse(JSON.stringify(item)):null}catch{return null}});
export async function getActiveCourses(filter={}){await connectDB();const items=await Course.find({isActive:true,...filter}).sort({isFeatured:-1,sortOrder:1}).lean();return JSON.parse(JSON.stringify(items))}
