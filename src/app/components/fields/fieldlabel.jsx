import React from 'react'

export default function FieldLabel(props) {
  return (
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for={props.fieldid}>
    {props.label}
  </label>
  )
}
