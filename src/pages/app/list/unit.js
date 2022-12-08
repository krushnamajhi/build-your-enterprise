import React, { createContext } from 'react';
import ListHeader from '../../../apputils/components/ListHeader';
import ListTable from '../../../apputils/components/ListTable';
import RecordContext from '../../../apputils/contexts/recordContext';
import UnitService from '../../../apputils/services/UnitService';

function UnitList(props) {
    const record = "unit"
    const colNames = ["Unit Name", "Plural Name", "Abbreviation", "Plural Abbreviation"]

    return (
        <div>
            <RecordContext.Provider value = {{recordType:record, service:UnitService, colNames: colNames}}>
                <ListHeader name={record}/>
                <ListTable name={record} colNames={colNames} tableData={props.data} />
            </RecordContext.Provider>
        </div>
    );
}

export default UnitList;

export async function getStaticProps() {
    const response = await UnitService.findAll();
    let data = [];
    const total_data = await response.data;
    total_data.forEach((element) => {
      data.push({
        id: element.id,
        name: element.name,
        plural_name: element.plural_name,
        abbreviation: element.abbreviation,
        plural_abbreviation: element.plural_abbreviation
      });
    });
    return {
      props: {
        data: data,
        done: true,
      },
    };
  }