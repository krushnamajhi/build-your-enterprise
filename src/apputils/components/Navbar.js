import React from 'react';
import Link from 'next/link'

function Navbar(props) {
  return (
    <header className="p-1 bg-primary text-white">
      <div className="container">
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link href="/"><a  className="nav-link px-2 text-white">Home</a></Link></li>
          <li><Link href="/app/list/item"><a  className="nav-link px-2 text-white">Item</a></Link></li>
          <li><Link href="/app/list/employee"><a  className="nav-link px-2 text-white">Employee</a></Link></li>
          <li><Link href="/app/list/vendor"><a  className="nav-link px-2 text-white">Vender</a></Link></li>
          <li><Link href="/app/list/unit"><a  className="nav-link px-2 text-white">Unit</a></Link></li>
          <li><Link href="/app/list/account"><a  className="nav-link px-2 text-white">Account</a></Link></li>
          <li><Link href="/app/list/purchase-receipt"><a className="nav-link px-2 text-white">Purchase Receipt</a></Link></li>
          <li><Link href="/app/list/assembly-build"><a className="nav-link px-2 text-white">Assembly Build</a></Link></li>
          <li>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
            </form>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;