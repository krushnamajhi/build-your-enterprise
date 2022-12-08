import React, { createContext } from 'react';
import RecordContext from '../../../apputils/contexts/recordContext';
import ListHeader from '../../../apputils/components/ListHeader';
import ListTable from '../../../apputils/components/ListTable';
import UnitService from '../../../apputils/services/UnitService';

function AssemblyBuildList(props) {
    const record = "assembly-build"
    const colNames = ["Assembly Name", "Assembly No", "Abbreviation", "Plural Abbreviation"]

    return (
        <div>
            <RecordContext.Provider value = {{recordType:record, service:UnitService, colNames: colNames}}>
                <ListHeader name={record}/>
                {/* <ListTable name = {record}/> */}
            </RecordContext.Provider>
        </div>
    );
}

export default AssemblyBuildList;