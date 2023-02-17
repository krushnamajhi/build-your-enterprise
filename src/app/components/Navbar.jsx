import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='flex flex-col md:justify-start md:flex-row justify-center items-center bg-red-700'>
            <div className='nav mx-5'>
                <ul className='flex items-center space-x-3 font-bold md:text-lg text-white'>
                    <Link href={"/vendor/vendorlist"}><li>Vendor</li></Link>
                    <Link href={"/item/itemlist"}><li>Items</li></Link>
                    <Link href={"/employee/employeelist"}><li>Employees</li></Link>
                    <Link href={"/unit/unitlist"}><li>Units</li></Link>
                    <Link href={"/account/accountlist"}><li>Accounts</li></Link>
                    <Link href={"/transaction/transactionlist"}><li>Purchase Order</li></Link>
                </ul>
            </div>
        </div>
    )
}
