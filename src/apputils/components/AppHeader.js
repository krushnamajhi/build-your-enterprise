import { useRouter } from 'next/router';
import React from 'react';

function AppHeader(props) {
  const router = useRouter()
    return (
<header className="p-2 bg-dark text-white">
    <div className="container px-3">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none h3">
         ByE
        </a>
        <div className="text-end mx-4">
          <button type="button" className="btn btn-outline-light me-2" onClick={() => router.push("/login")}>Login</button>
          <button type="button" className="btn btn-warning" onClick={() => router.push("/signup")}>Sign-up</button>
        </div>
      </div>
    </div>
  </header>
    );
}

export default AppHeader;