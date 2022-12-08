import React, { useContext } from 'react';
import RecordContext from '../contexts/recordContext';

function FormButtons(props) {

    const data = useContext(RecordContext)

    return (
        <div className='my-4'>
            <button className='btn btn-success px-5 m-2' onClick={data.func.save}>Save</button>
            <button className='btn btn-primary px-5 m-2'>Reset</button>
            <button className='btn btn-danger px-5 m-2' onClick={data.func.delete}>Delete</button>
        </div>
    );
}

export default FormButtons;