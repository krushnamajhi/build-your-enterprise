import { useEffect, useState } from "react";
import ItemService from "../../services/ItemService";

function RenderItemSublistLine({key, itemLine}) {
  const [quantity, setQuantity] = useState(0);
  const [rate, setRate] = useState(0);
  const [amount, setAmount] = useState(0);
  const [item, setItem] = useState("");

  function handleQuantity(e){
    setQuantity(Number(e.target.value))
  }

  function handleAmount(e){
    setAmount(Number(e.target.value))
  }

  function handleRate(e){
    setRate(Number(e.target.value))
  }

  function handleBlurOfQuantityField(e){
    setAmount(Number(quantity*rate))
  }

  function handleBlurOfRateField(e){
    setAmount(Number(quantity*rate))
    console.log(amount)
  }

  function handleBlurOfAmountField(e){
    setAmount(e.target.value)
    if(rate != 0 && quantity != 0)
    {
      setRate(Number(amount/quantity))
    }
  }

  useEffect(() => {
    itemLine.item = item
    itemLine.quantity = quantity;
    itemLine.rate = rate;
    itemLine.amount = amount;
  }, [item, quantity, rate, amount]);

  function getItemDropDown() {
    const [allItems, setAllItems] = useState([]);

    function handleItemChange(e) {
      setItem(e.target.value);
    }

    useEffect(() => {
      ItemService.findAll().then((res) => setAllItems(res.data));
    }, []);

    return (
      <select className="form-control" required={true} value={item} onChange={handleItemChange}>
        <option value=''></option>
        {allItems.map((x) => (
          <option key={x.id} value={x.id}>
            {x.name}
          </option>
        ))}
      </select>
    );
  }

  return (
    <tr key={key}>
      <td>{getItemDropDown()}</td>
      <td>
        <input type="number" step = ".01" className="form-control" value={quantity} onBlur={handleBlurOfQuantityField} onChange={handleQuantity} />
      </td>
      <td>
        <input type="number" step = ".01" className="form-control" onBlur={handleBlurOfRateField} value={rate} onChange={handleRate}/>
      </td>
      <td>
        <input type="number" step = ".01" className="form-control" onBlur={handleBlurOfAmountField} value={amount} onChange={handleAmount}/>
      </td>
    </tr>
  );
}

export default RenderItemSublistLine;
