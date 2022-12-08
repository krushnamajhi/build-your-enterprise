import React from 'react';
import { useRouter } from 'next/router';


function FormHeader(props) {

    const router = useRouter()
    const recordId = router.query.recordId
    const { recordtype } = props

    const showHeader = () => {
        if (recordId == undefined) {
            return "CREATE " + recordtype.toUpperCase();
        }
        else {
            return recordId
        }
    }

    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <h1 className='h1 my-4'>{showHeader()}</h1>
                    </td>
                    <td style={{ width: "5%" }}>
                        <button className='btn btn-info px-5' onClick={() => router.push("/app/list/" + recordtype.toLowerCase())}>List</button>
                    </td>
                </tr>
            </tbody>
        </table>

    );
}

export default FormHeader;