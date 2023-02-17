import Image from 'next/image'
import React from 'react'

export default function TopPanel() {
    return (
        <div className='flex flex-col md:justify-start md:flex-row justify-center items-center'>
            <div className='logo mx-5'>
                <Image className='border-solid border-spacing-3 border-white' src={"/logo1.png"} alt = "Logo"
                 width={400} height={150}></Image>
            </div>
        <div className='cart absolute right-0 top-2 mx-4'>
            Login       
        </div>
        </div>
    )
}
