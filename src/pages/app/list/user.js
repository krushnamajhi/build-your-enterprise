import React, { createContext } from 'react';
import RecordContext from '../../../apputils/contexts/recordContext';
import ListHeader from '../../../apputils/components/ListHeader';
import ListTable from '../../../apputils/components/ListTable';
import ItemService from '../../../apputils/services/ItemService';
import UserService from '../../../apputils/services/UserService';

function UserList(props) {
    const record = "user"
    const colNames = ["User Name", "User Email"]

    return (
        <div>
            <RecordContext.Provider value = {{recordType:record, service: UserService, colNames: colNames}}>
                <ListHeader name={record}/>
                <ListTable name = {record}/>
            </RecordContext.Provider>
        </div>
    );
}

export default UserList;