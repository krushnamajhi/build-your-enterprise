import { useRouter } from 'next/router';
import React from 'react';
import FormButtons from '../../../apputils/components/FormButtons';
import FormHeader from '../../../apputils/components/FormHeader';
import InputSuggestion from '../../../apputils/components/InputSuggestion';
import RecordContext from '../../../apputils/contexts/recordContext';
import ItemService from '../../../apputils/services/ItemService';
import UnitService from '../../../apputils/services/UnitService';

function FormAssemblyBuild(props) {

    const router = useRouter()
    const recordType = "assembly-build"

    const save = () => {
        if (checkIfEmpty) {
            alert("Please enter Item Name")
            return
        }
        console.log("Success")
    }

    const reset = () => {
        setName('')
        setDescription('')
        setHsnsac('')
        setUnit('')
    }

    const deleteItem = () => {
        router.push("/app/list/item")
    }

    return (
        <div className='container'>
            <FormHeader recordtype={recordType} />
            <RecordContext.Provider value={
                {
                    data: {
                    },
                    func: {
                        save: save,
                        reset: reset,
                        delete: deleteItem
                    }
                }
            }>
            <FormButtons />
           </RecordContext.Provider> 
           <div className='text-center card shadow my-2 p-5'>
           <table className='container'>
                    <tbody>
                        <tr>
                            <td style={{ width: "50%" }}>
                                <div className='container'>
                                    <label className='my-2'>{recordType} Name</label>
                                    <br />
                                    <InputSuggestion placeholder={`${recordType} Name`} name='itemName' className='form-control' required={true} fetcher = {ItemService}/>
                                </div>
                            </td>
                            <td>
                                <div className='container'>
                                    <label className='my-2'>Item Description</label>
                                    <br />
                                    <textarea placeholder='Item Description' name='itemdetails' className='form-control' required={true} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className='container'>
                                    <label className='my-2'>HSN / SAC Number</label>
                                    <br />
                                    <input placeholder='Item HSN/ SAC' name='hsnsac' className='form-control' required={true} />
                                </div>
                            </td>
                            <td>
                                <div className='container'>
                                    <label className='my-2'>Primary Unit</label>
                                    <br />
                                    <InputSuggestion placeholder='Unit' name='unit' className='form-control' required={true} fetcher = {UnitService}/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default FormAssemblyBuild;