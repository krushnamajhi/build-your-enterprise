import ListHeader from '@/app/components/listheader'
import ListTable from '@/app/components/listtable'
import React, { useState } from 'react'

export default function ItemList() {

  const columns = ["Item name", "HSN Number", "Unit"]
  const record= {name: "Item", pluralName: "Items", url: "/item/item"}
  return (
    <div className='container'>
      <ListHeader record={record}/>
      <div>
        <table className='table-auto w-full'>
          <thead className='border-b-2'>
            <tr>
              {columns.map((col, index) => <th key={index} id={"header-col-" + index} className="text-sm font-medium text-gray-900 px-6 py-4 text-left">{col}</th>)}
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Action</th>
            </tr>
          </thead>
        </table>
        <ListTable recordUrl={record.url} tableData={[{itemName: "Shoes", hsnnumber: "12345", unit: "Piece"}]}/>
      </div>
    </div>
  )
}
