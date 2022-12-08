import React, { useContext, useEffect, useState } from 'react';
import TableContext from '../contexts/tableContext';

function FormTable(props) {

    const { theaders } = useContext(TableContext)
    const [row, setRow] = useState([])
    const [tbody, setTbody] = useState([])

    useEffect(() => {
        const r = []
        for(let i = 0; i < theaders.length; i++){
            r.push('')
        }
        setRow(r)
        setTbody([r])
    },[])

    return (
        <div className='my-3' style={{width:"flex"}}>
            <table className='container text-center'>
                <thead>
                    {
                        theaders.map(
                            header => (
                                <th key={header}>
                                    <label>{header}</label>
                                </th>
                            )

                        )
                    }
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div>
                                <button className='btn btn-primary'>Add</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FormTable;