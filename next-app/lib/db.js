import mongoose from 'mongoose';
const state=globalThis.__eduraMongo||(globalThis.__eduraMongo={connection:null,promise:null});
export async function connectDB(){if(state.connection)return state.connection;if(!process.env.MONGO_URI)throw new Error('MONGO_URI is not configured');if(!state.promise)state.promise=mongoose.connect(process.env.MONGO_URI,{maxPoolSize:10,serverSelectionTimeoutMS:5000});state.connection=await state.promise;return state.connection}
