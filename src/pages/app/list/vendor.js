import React, { createContext } from "react";
import { useRouter } from "next/router";
import RecordContext from "../../../apputils/contexts/recordContext";
import ListHeader from "../../../apputils/components/ListHeader";
import ListTable from "../../../apputils/components/ListTable";
import VendorService from "../../../apputils/services/VendorService";

function VendorList(props) {
  const record = "vendor";
  const colNames = ["Vendor Name", "City", "State"];

  return (
    <div>
        <ListHeader name={record} />
        <ListTable name={record} colNames={colNames} tableData={props.data} />
    </div>
  );
}

export default VendorList;

export async function getStaticProps() {
  const response = await VendorService.findAll();
  let data = [];
  const total_data = await response.data;
  total_data.forEach((element) => {
    data.push({
      id: element.vendorId,
      name: element.name,
      city: element.city,
      state: element.state,
    });
  });
  return {
    props: {
      data: data,
      done: true,
    },
  };
}
