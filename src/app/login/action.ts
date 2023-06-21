'use server'
 
import { cookies } from 'next/headers'
 
export async function saveToken(token:string) {
  return new Promise((resolve, reject)=>{
    try {
      cookies().set('authToken', token, { secure: true })
      resolve('successfully setup')
    } catch (error) {
      reject(error)    }
  })
   
}


export async function removeToken() {
  cookies().set({
    name: 'authToken',
    value: ''
  } )
}