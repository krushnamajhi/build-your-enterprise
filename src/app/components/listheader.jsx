import React from 'react'

export default function ListHeader(props) {
    const record = props.record
  return (
    <div className='container mx-5'>
    <div className='text-2xl my-3'>{record.pluralName}</div>
    <div><button onClick={() => document.location = `${record.url}`} className='bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'>New {record.name}</button></div>
    <div>Filters</div>
  </div>

  )
}
