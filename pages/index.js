import React from 'react';
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1>첫 페이지</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/About">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="Axios/AxiosApi">
            <a>Axios</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;