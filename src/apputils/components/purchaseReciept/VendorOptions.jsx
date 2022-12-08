import React, { useEffect, useState } from "react";
import VendorService from "../../services/VendorService";

function rendorVendorOptions(vendorId, setVendorId, vendorData, setVendorData) {
  const [allVendors, setVendors] = useState([]);

  useEffect(() => {
    VendorService.findAll().then((res) => setVendors(res.data));
  }, []);

  const handleVendorChange = (e) => {
    setVendorId(e.target.value);
    if(vendorId == null || vendorId === '')
        setVendorData(null)
    else
      VendorService.findById(vendorId).then((res) => setVendorData(res.data));
  };

  function showAddress() {
    return (
      vendorData != null && (
        <div className="card border border-dark text-dark p-3 my-3 mx-4">{vendorId}
          {vendorData.address} <br /> {vendorData.city}, {vendorData.state}
        </div>
      )
    );
  }

  return (
    <div>
      <select
        className="form-control" value={vendorId} onChange={handleVendorChange}>
        <option value=""></option>
        {allVendors.map((x) => (
          <option key={x.vendorId} value={x.vendorId}>
            {x.name}
          </option>
        ))}
      </select>
      {showAddress()}
    </div>
  );
}

export default rendorVendorOptions;
