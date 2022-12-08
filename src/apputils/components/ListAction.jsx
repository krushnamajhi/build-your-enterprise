import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import RecordContext from '../contexts/recordContext';

function ListAction({ recordid, recordName }) {

    const router = useRouter()

    const handleEditClick = () => {
        router.push(`/app/form/${recordName}?id=${recordid}&e=true`)
    }

    const handleViewClick = () => {
        router.push(`/app/form/${recordName}?id=${recordid}&e=false`)
    }

    return (
        <td key={recordid + "-actions"}>
                <button className='btn btn-success btn-sm m-1 px-2' onClick={handleEditClick}>Edit</button>
                <button className='btn btn-primary btn-sm m-1 px-2' onClick={handleViewClick}>View</button>
        </td>

    );
}

export default ListAction;