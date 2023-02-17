import FormInput from '@/app/components/fields/forminput';
import FormSelect from '@/app/components/fields/formselect';
import FormTextArea from '@/app/components/fields/formtextarea';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function Item() {
  const router = useRouter()
  const { id, edit } = router.query
  const [model, setmodel] = useState({})
  const f = { name: "", desc: "", hsnnumber: "", unit: "" }

  useEffect(() => {
    if (id != undefined) {
      setmodel({})
    }
  })
  return (
    <div className='container mx-5'>
      <div className='text-2xl my-3'>Item</div>
      <div>
        <form method='POST' action='/item/item' className='w-full max-w-lg' >
          <div className="flex flex-wrap mb-6">
            <div><button className='bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'>Save</button></div>
          </div>
          <div className='block uppercase tracking-wide text-lg my-3'>Primary Information</div>
          <div className="flex flex-wrap mb-6">
            <FormInput fieldid="name" type="text" label="Item Name" required={true} />
            <FormInput fieldid="hsnnumber" type="number" label="HSN Number" required={true} />
            <FormTextArea fieldid="desc" type="text" label="Item Description" />
            <FormSelect fieldid="unit" type="text" label="Unit" />
          </div>
        </form>
      </div>
    </div>
  )
}
