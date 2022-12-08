import { useRouter } from 'next/router';
import React, { useContext, useEffect, useNavigate } from 'react';
import RecordContext from '../contexts/recordContext';

function ListHeader({name}) {

    const router = useRouter()

    useEffect(() => {
        document.title = "List of " + name + "s"
    })

    const handleNewButtonClick = (e) => {
        e.preventDefault()
        router.push(`/app/form/${name}`)
    }

    return (
        <div className='container'>
            <h1 className='container h1 text-center my-4' style={{ textTransform: "uppercase" }}>
                {name + "s"}
            </h1>
            {
                name === "user" ? <br /> : (
                    <div className='row'>
                        <button className='btn btn-info' style={{ textTransform: "uppercase" }} onClick={handleNewButtonClick}>
                            {"NEW " + name}
                        </button>
                    </div>
                )}
        </div>
    );
}

export default ListHeader;