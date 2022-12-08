import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import FormHeader from '../../../apputils/components/FormHeader'
import FormButtons from '../../../apputils/components/FormButtons'
import TableContext from '../../../apputils/contexts/tableContext';
import FormTable from '../../../apputils/components/FormTable';
import RecordContext from '../../../apputils/contexts/recordContext';
import UnitService from '../../../apputils/services/UnitService';

function CreateUnit(props) {
    const router = useRouter()
    const recordType = "Unit"
    const recordId = router.query.recordId
    const [name, setName] = useState([])
    const [pluralName, setPluralName] = useState([])
    const [abbreviation, setabbreviation] = useState([])
    const [pluralAbbreviation, setpluralAbbreviation] = useState([])

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlepluralNameChange = (e) => {
        setPluralName(e.target.value)
    }

    const handleabbreviationChange = (e) => {
        setabbreviation(e.target.value)
    }

    const handlepluralAbbreviationChange = (e) => {
        setpluralAbbreviation(e.target.value)
    }

    const save = () => {
        if (checkIfEmpty()) {
            alert(`Please enter All Details`)
            return
        }
        let unit = {
            name: name,
            plural_name: pluralName,
            abbreviation: abbreviation,
            plural_abbreviation: pluralAbbreviation
        }
        if (router.query.e == undefined && router.query.id == undefined) {
            UnitService.create(unit)
        }
        else if(router.query.e != undefined && router.query.id != undefined)
        {
            UnitService.update(router.query.id, unit)
        }
        alert("Record Saved Successfully")
        }

    const reset = () => {
        setName('')
        setPluralName('')
        setabbreviation('')
        setUnit('')
    }

    const deleteItem = () => {

    }

    const checkIfEmpty = () => {
        return name == "" || pluralName == "" || pluralAbbreviation =="" || abbreviation =="";
    }

    useEffect(() => {
        if (router.query.e != undefined && router.query.id != undefined) {
            UnitService.findById(Number(router.query.id)).then(({data}) =>{
                setName(data.name)
                setPluralName(data.pluralName)
                setabbreviation(data.abbreviation)
                setpluralAbbreviation(data.pluralAbbreviation)
            } )
        }
    },[])

    return (
        <div className='container'>
            <FormHeader recordtype={recordType} />
            <RecordContext.Provider value={
                {
                    data: {
                        name: name,
                        abbreviation: abbreviation,
                        pluralName: pluralName,
                        unit: pluralAbbreviation
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
                <table className='container text-center' style={{ width: "100%", overflow: "scroll" }}>
                    <tbody>
                        <tr>
                            <td>
                                <div className='container'>
                                <label className='m-2'>{recordType} Name</label>
                                <input placeholder={`${recordType} Name`} name='itemName' onChange={handleNameChange} value={name} className='form-control' required={true} />
                                </div>
                            </td>
                            <td>
                            <div className='container'>

                                <label className='m-2'>Plural Name</label>
                                <input placeholder='Plural Name' name='pluralName' onChange={handlepluralNameChange} value={pluralName} className='form-control' required={true} />
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <div className='container'>

                                <label className='m-2'>Unit's abbreviation</label>
                                <input placeholder="Unit's abbreviation" name='abbreviation' onChange={handleabbreviationChange} value={abbreviation} className='form-control' required={true} />
                            </div>
                            </td>
                            <td>
                            <div className='container'>
                                <label className='m-2'>Plural Name's Abbreviation</label>
                                <input placeholder="Plural Unit's abbreviation" name='unit' value={pluralAbbreviation} onChange={handlepluralAbbreviationChange} className='form-control' required={true} />
                            </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CreateUnit;