import React from 'react'
import FieldLabel from './fieldlabel';

export default function FormInput(props) {
    function isRequired(){
        if(props.required && props.required == null)
            return true;
        else if(props.required === true)
            return true;
        else 
            return false;
    }
  return (
    <div className="w-full md:w-1/2 px-3 py-4 mb-6 md:mb-0">
    <FieldLabel {...props}/>
    <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${isRequired() ? "border-red-500": "border-gray-200" } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id={props.fieldid} type={props.type}/>
    { isRequired() ? <p className="text-red-500 text-xs italic">Please fill out this field.</p> : ''}
  </div>
  )
}
