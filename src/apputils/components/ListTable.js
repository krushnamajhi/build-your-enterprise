import React, { useContext, useEffect, useRef, useState } from 'react';
import RecordContext from '../contexts/recordContext';
import ListAction from './ListAction';

function ListTable({ name, colNames, tableData }) {

    return (
        <div className='container'>
            <table className='table table-bordered shadow my-2 text-center table-sm table-hover'>
                <thead>
                    <tr id={name}>
                        <th key={name + "-no"}>{(name + " NO.").toUpperCase()}</th>
                        {
                            colNames.map(colName =>
                                <th key={name + '-' + colName}>{colName.toUpperCase()}</th>
                            )
                        }
                        <th id={name + '-actions'}>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map(row =>
                            <tr key={row.id}>
                                {
                                    Object.values(row).map((data, index) =>
                                        <td key={colNames[index] + row.id}>{data}</td>)
                                }
                                <ListAction recordid={row.id} recordName={name} />
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListTable;