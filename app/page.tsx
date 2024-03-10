'use client';

import Link from "next/link";

const Home = () => {

  function buttonClick() {
    alert('clicked!');
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Hello World! This is the Home page</p>
      <p>
        Visit the <Link href="/about">About</Link> page.
      </p>
      <button onClick={buttonClick}>test</button>
    </div>
  );
};

export default Home;
