import React, { useEffect, useState } from "react";
import AccountService from "../../services/AccountService";

function renderAccountOptions(accountId, setAccountId, accountData, setAccountData) {
  const [allAccounts, setAccounts] = useState([]);
  useEffect(() => {
    AccountService.findAll().then((res) => setAccounts(res.data));
  }, []);

  const handleAccountChange = (e) => {
    setAccountId(e.target.value);
    if(accountId == null || accountId === '')
        setAccountData(null)
    else
      AccountService.findById(accountId).then((res) => setAccountData(res.data));
  };

  function showAccountDetails() {
    return (
      accountData != null && (
        <div className="card border border-dark text-dark p-3 my-3 mx-4">{accountId}
          Branch: {accountData.branch} <br />
          Current Balance: {accountData.available_balance}
        </div>
      )
    );
  }

  return (
    <div>
      <select
        className="form-control"
        value={accountId}
        onChange={handleAccountChange}
      >
        <option value=""></option>
        {allAccounts.map((x) => (
          <option key={x.id} value={x.id}>
            {x.name}
          </option>
        ))}
      </select>
      {showAccountDetails()}
    </div>
  );
}

export default renderAccountOptions;
