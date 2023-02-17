import React, { useState } from 'react'

export default function ListTable({tableData, recordUrl}) {

    const styles = {
        td: "text-sm font-medium text-gray-900 px-6 py-4 text-left",
        actionButton: 'bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-3 rounded'
    }
    
    return (
        <div>
            <table className='table-auto w-full'>
                <tbody className='border-b-2 border-blue-50'>
                    {tableData == null || tableData.length === 0 ? <tr><td>No Data Available</td></tr> :
                        tableData.map((rowData, index) =>
                            <tr key={"row-" + index} id={"row-" + index}>
                                {Object.values(rowData).map((col, colIndex) =>
                                    <td key={"col-" + index + "-" + colIndex} id={"col-" + index + "-" + colIndex} className={styles.td}>{col}</td>)}
                                    <td className={styles.td}>
                                        <form method='GET' action={recordUrl} className='space-x-2'>
                                            <input name="id" value={index} style={{display:"none"}}></input>
                                            <button type='submit' name="edit" value={"T"} className={styles.actionButton}>Edit</button>
                                            <button type='submit' name="edit" value={"F"} className={styles.actionButton}>View</button>
                                        </form>
                                    </td>
                            </tr>)}
                </tbody>
            </table>
        </div>
    )
}
