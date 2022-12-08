import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import FormButtons from '../../../apputils/components/FormButtons';
import FormHeader from '../../../apputils/components/FormHeader';
import renderAccountOptions from '../../../apputils/components/purchaseReciept/AccountOptions';
import renderItemSublist from '../../../apputils/components/purchaseReciept/ItemSublist';
import rendorVendorOptions from '../../../apputils/components/purchaseReciept/VendorOptions';
import RecordContext from '../../../apputils/contexts/recordContext';

function CreatePurchaseReceipt(props) {
    const router = useRouter()
    const recordType = "Purchase-Receipt"
    const [vendorId, setVendorId] = useState(null)
    const [vendorData, setVendorData] = useState(null)
    const [accountId, setAccountId] = useState(null)
    const [accountData, setAccountData] = useState(null)
    const [orderDate, setOrderDate] = useState(new Date())
    const [receiptDate, setReceiptDate] = useState(new Date())

    function dateToStr(d){
        return d.toISOString().slice(0,10)
    }

    function strToDate(d){
        let dateArr = d
        return new Date(dateArr[1] + "/" + dateArr[2] + "/" + dateArr[0])
    }

    const save = () => {
        // if (checkIfEmpty()) {
        //     alert("Please enter All Details")
        //     return
        // }
        // let item = {
        //     name: name,
        //     hsn_sac: hsnsac,
        //     description: description,
        //     unit: unit
        // }
        // if (router.query.e == undefined && router.query.id == undefined) {
        //     ItemService.create(item)
        // }
        // else if (router.query.e != undefined && router.query.id != undefined) {
        //     ItemService.update(router.query.id, item)
        // }
        // alert("Record Saved Successfully")
    }

    const reset = () => {
    }

    const deleteItem = () => {
        router.push("/app/list/purchase-receipt")
    }

    const checkIfEmpty = () => {
        return false;
    }

    function handleReceiptDateChange(e){
        setReceiptDate(strToDate(e.target.value))
        console.log(receiptDate)
    }

    function handleOrderDateChange(e){
        setOrderDate(strToDate(e.target.value))
    }

    // useEffect(() => {
    //     if (router.query.e != undefined && router.query.id != undefined) {
    //         ItemService.findById(Number(router.query.id)).then(({ data }) => {
    //             setName(data.name)
    //             setHsnsac(data.hsn_sac)
    //             setUnit(data.unit)
    //         })
    //     }
    // }, [])

    // useEffect(() => {
    //     UnitService.findAll().then(({ data }) => {
    //         setallunits(data);
    //     });
    // }, []);

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
                                <label className='my-2'>Order Date</label>
                                <input name='orderdate' type='date' value={dateToStr(orderDate)} onChange={handleOrderDateChange} className='form-control' required={true} />
                                </div>
                            </td>
                            <td style={{ width: "50%" }}>
                            <div className='container'>
                                <label className='my-2'>Receipt Date</label>
                                <input name='receiptdate' type='date' value={dateToStr(receiptDate)} onChange={handleReceiptDateChange} className='form-control' required={true} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <div className='container'>
                                    <label className='my-2'>Vendor</label>
                                    <br />
                                    {rendorVendorOptions(vendorId, setVendorId, vendorData, setVendorData)}
                                </div>
                            </td>
                            <td>
                                <div className='container'>
                                    <label className='my-2'>Account</label>
                                    <br />
                                    {renderAccountOptions(accountId, setAccountId, accountData, setAccountData)}                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {renderItemSublist()}
            </div>
        </div>
    );
}

export default CreatePurchaseReceipt;