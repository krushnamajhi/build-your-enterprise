import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

export default function Item() {
  const router = useRouter()
  const { id, edit } = router.query

  useEffect(() => {
    if (id != undefined) {

    }
  })
  return (
    <div className='container mx-5'>
      {console.log(id, edit)}
      <div className='text-2xl my-3'>Item</div>
      <div>
        <form method='POST'>

        </form>
      </div>
    </div>
  )
}
