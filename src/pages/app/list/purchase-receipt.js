import React, { createContext } from 'react';
import RecordContext from '../../../apputils/contexts/recordContext';
import ListHeader from '../../../apputils/components/ListHeader';
import ListTable from '../../../apputils/components/ListTable';
import UnitService from '../../../apputils/services/UnitService';
import PurchaseRecieptService from '../../../apputils/services/PurchaseRecieptService';

function PurchaseReceiptsList(props) {
    const record = "purchase-receipt"
    const colNames = ["Vendor", "Account", "Price"]

    return (
        <div>
            <RecordContext.Provider value={{ recordType: record, service: UnitService, colNames: colNames }}>
                <ListHeader name={record} />
                <ListTable name={record} colNames={colNames} tableData={props.data}  />
            </RecordContext.Provider>
        </div>
    );
}

export default PurchaseReceiptsList;

export async function getStaticProps() {
    const response = await PurchaseRecieptService.findAll();
    let data = [];
    const total_data = await response.data;
    total_data.forEach((element) => {
        data.push({
            id: element.id,
            vendorName: element.vendorName,
            accountName: element.accountName,
            totalPrice: element.total_price
        });
    });
    return {
        props: {
            data: data,
            done: true,
        }
    };
}
