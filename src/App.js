import React from 'react';
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './Data';

function App() {
  const lists = Data.map(item => <Card key={item.id} {...item}/>)

  return (
    <div >
      <Navbar/>
      <Hero/>
      <section className='cards-name'>
        {lists}
      </section>
    </div>
  );
}

export default App;
