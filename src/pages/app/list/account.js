import React, { createContext } from 'react';
import RecordContext from '../../../apputils/contexts/recordContext';
import ListHeader from '../../../apputils/components/ListHeader';
import ListTable from '../../../apputils/components/ListTable';
import AccountService from '../../../apputils/services/AccountService';

function AccountList(props) {
    const record = "account"
    const colNames = ["Account Name","Branch", "Available Balance(INR)"];

    return (
        <div>
          {console.log(props.data)}
                <ListHeader name={record}/>
                <ListTable name={record} colNames={colNames} tableData={props.data} />
        </div>
    );
}

export default AccountList;

export async function getStaticProps() {
  const response = await AccountService.findAll();
  let data = [];
  const total_data = await response.data;
  total_data.forEach((element) => {
    data.push({
      id: element.id,
      name: element.name,
      branch: element.branch,
      available_balance:element.available_balance
    });
  });
  return {
    props: {
      data: data,
      done: true,
    },
  };
}
  