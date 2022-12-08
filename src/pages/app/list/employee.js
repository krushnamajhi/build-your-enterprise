import React, { createContext } from "react";
import { useRouter } from "next/router";
import RecordContext from "../../../apputils/contexts/recordContext";
import ListHeader from "../../../apputils/components/ListHeader";
import ListTable from "../../../apputils/components/ListTable";
import ItemService from "../../../apputils/services/ItemService";
import UnitService from "../../../apputils/services/UnitService";
import EmployeeService from "../../../apputils/services/EmployeeService";

function EmployeeList(props) {
  const record = "employee";
  const colNames = ["Employee Name", "Employee Email"];

  return (
    <div>
        <ListHeader name={record} />
        <ListTable name={record} colNames={colNames} tableData={props.data} />
    </div>
  );
}

export default EmployeeList;

export async function getStaticProps() {
  const response = await EmployeeService.findAll();
  let data = [];
  const total_data = await response.data;
  total_data.forEach((element) => {
    data.push({
      id: element.id,
      name: element.lastname + ", " + element.firstname,
      email: element.email
    });
  });
  return {
    props: {
      data: data,
      done: true,
    },
  };
}
