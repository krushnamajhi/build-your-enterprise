import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import FormButtons from '../../../apputils/components/FormButtons';
import FormHeader from '../../../apputils/components/FormHeader';
import InputSuggestion from '../../../apputils/components/InputSuggestion';
import RecordContext from '../../../apputils/contexts/recordContext';
import ItemService from '../../../apputils/services/ItemService';
import UnitService from '../../../apputils/services/UnitService';

function CreateItem(props) {
    const router = useRouter()
    const recordType = "Item"
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [hsnsac, setHsnsac] = useState('')
    const [unit, setUnit] = useState('')
    const [allunits, setallunits] = useState([])

    const handleNameChange = (e) => {
        setName(e.target.value)
        console.log(name, checkIfEmpty())
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleHsnsacChange = (e) => {
        setHsnsac(e.target.value)
    }

    const handleUnitChange = (e) => {
        setUnit(e.target.value)
    }

    const save = () => {
        if (checkIfEmpty()) {
            alert("Please enter All Details")
            return
        }
        let item = {
            name: name,
            hsn_sac: hsnsac,
            description: description,
            unit: unit
        }
        if (router.query.e == undefined && router.query.id == undefined) {
            ItemService.create(item)
        }
        else if (router.query.e != undefined && router.query.id != undefined) {
            ItemService.update(router.query.id, item)
        }
        alert("Record Saved Successfully")
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

    const checkIfEmpty = () => {
        return name == "" || unit == "" || hsnsac == "";
    }

    useEffect(() => {
        if (router.query.e != undefined && router.query.id != undefined) {
            ItemService.findById(Number(router.query.id)).then(({ data }) => {
                setName(data.name)
                setHsnsac(data.hsn_sac)
                setUnit(data.unit)
            })
        }
    }, [])

    useEffect(() => {
        UnitService.findAll().then(({ data }) => {
            setallunits(data);
        });
    }, []);

    return (
        <div className='container'>
            <FormHeader recordtype={recordType} />
            <RecordContext.Provider value={
                {
                    data: {
                        name: name,
                        hsnsac: hsnsac,
                        description: description,
                        unit: unit
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
            <div className='shadow my-2 p-5'>
                <div className='text-center p-3'>
                    <table className='container'>
                        <tbody>
                            <tr>
                                <td style={{ width: "50%" }}>
                                    <div className='container'>
                                        <label className='my-2'>{recordType} Name</label>
                                        <br />
                                        <input placeholder={`${recordType} Name`} name='itemName' onChange={handleNameChange} value={name} className='form-control' required={true} />
                                    </div>
                                </td>
                                <td>
                                    <div className='container'>
                                        <label className='my-2'>Item Description</label>
                                        <br />
                                        <textarea placeholder='Item Description' name='itemdetails' onChange={handleDescriptionChange} value={description} className='form-control' required={true} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='container'>
                                        <label className='my-2'>HSN / SAC Number</label>
                                        <br />
                                        <input placeholder='Item HSN/ SAC' name='hsnsac' onChange={handleHsnsacChange} value={hsnsac} className='form-control' required={true} />
                                    </div>
                                </td>
                                <td>
                                    <div className='container'>
                                        <label className='my-2'>Primary Unit</label>
                                        <br />
                                        <select className='form-control' value={unit} onChange={handleUnitChange}>
                                            <option></option>
                                            {allunits.map(x =>
                                                <option key={x.id} value={x.id}>{x.name}</option>)}
                                        </select>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='card m-4'>
                <h1 className='h2 p-2 m-2'>Inventories</h1>
                <table className=' p-2 m-2'>
                    <thead>
                        <th>Vendor</th>
                        <th>Quantity</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Gupta Traders</td>
                            <tr> 4</tr>
                        </tr>
                        
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
}

export default CreateItem;