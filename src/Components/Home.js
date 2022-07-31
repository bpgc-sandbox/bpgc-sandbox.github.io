import React from 'react';
import { usePage } from './Navbar';

function Home() {
  const state = usePage();
  return state.home && <div>Home</div>;
}

export default Home;
