'use server'
 
import { cookies } from 'next/headers'
 
export async function saveToken(token:string) {
  cookies().set('authToken', token, { secure: true })
}