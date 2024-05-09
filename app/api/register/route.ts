import prisma from '@/libs/prismadb'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        console.log('ding')
        const {email,name, password} = body;
        console.log(email,name,password)
    
        if(!email || !name || !password) {
            return new NextResponse('Missing info', {status: 400})
        }
    
        const hashedPassword = await bcrypt.hash(password, 12)
        console.log(hashedPassword)
        const user = await prisma.user.create({
            data: {
                email,name,hashedPassword
            }
        })
        
        return NextResponse.json(user)
    } catch (err: any) {
        console.log(err, 'REGISTRATION_ERROR')
        return new NextResponse('Internal Error', {status: 500});
    }
    

}