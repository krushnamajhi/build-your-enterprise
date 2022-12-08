import React, { createContext } from "react";
import { useRouter } from "next/router";
import RecordContext from "../../../apputils/contexts/recordContext";
import ListHeader from "../../../apputils/components/ListHeader";
import ListTable from "../../../apputils/components/ListTable";
import ItemService from "../../../apputils/services/ItemService";
import UnitService from "../../../apputils/services/UnitService";

function ItemList(props) {
  const record = "item";
  const colNames = ["Item Names", "HSN/SAC Number"];

  return (
    <div>
        <ListHeader name={record} />
        <ListTable name={record} colNames={colNames} tableData={props.data} />
    </div>
  );
}

export default ItemList;

export async function getStaticProps() {
  const response = await ItemService.findAll();
  let data = [];
  const total_data = await response.data;
  total_data.forEach((element) => {
    data.push({
      id: element.id,
      name: element.name,
      hsn_sac: element.hsn_sac
    });
  });
  return {
    props: {
      data: data,
      done: true,
    },
  };
}
