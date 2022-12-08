import { useEffect, useState } from "react";
import ItemService from "../../services/ItemService";
import RenderItemSublistLine from "./ItemSublistLine";

function renderItemSublist(){
    const defaultData = {item: '', quantity:0, rate:0, amount:0} 
    const [itemLines, setitemLines] = useState([defaultData])

    function handleAddButtonClick() {
        let temp = [...itemLines]
        temp.push(defaultData)
        setitemLines(temp)
        console.log(itemLines)
    }

    function handleDeleteButtonClick() {
        let temp = [...itemLines]
        temp.pop(defaultData)
        setitemLines(temp)
    }

    return (<div className="m-3 p-2 border border-dark">
        <table className="table">
            <thead className="thead-dark">
                <th className="col" style={{ width: "25%" }}>Item</th>
                <th className="col" style={{ width: "25%" }}>Quantity</th>
                <th className="col" style={{ width: "25%" }}>Rate</th>
                <th className="col" style={{ width: "25%" }}>Amount</th>
            </thead>
            <tbody>
                {itemLines.map((x,index) => <RenderItemSublistLine itemLine={x}/>)}
            </tbody>
        </table>
        <button className="btn btn-primary px-3 m-2" onClick={handleAddButtonClick}>Add</button>
        <button className="btn btn-primary px-3 m-2" disabled={itemLines.length == 1} onClick={handleDeleteButtonClick}>Delete</button>
    </div>)
}
export default renderItemSublist;
