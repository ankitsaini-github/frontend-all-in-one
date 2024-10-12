import './App.css';

import Accordian from './components/accordian/Accordian';
import Carousel from './components/carousel/Carousel';
import DarkMode from './components/dark-mode/DarkMode';
import LoadMore from './components/load-more/LoadMore';
import Navbar from './components/navbar/Navbar';
import RandomColor from './components/random-color/RandomColor';
import Rating from './components/rating/Rating';
import React from 'react'
import Tabs from './components/custom-tabs/Tabs';
import TreeMenu from './components/tree-menu/TreeMenu';
import data from './data';

const App = () => {
  return (
    <div className='App'>
      
      {/* Navbar */}
      <Navbar/>

      {/* Accordian */}
      <section>
        <Accordian data={data.accordian}/>
      </section>

      {/* Random color */}
      <section>
        <RandomColor/>
      </section>
      
      {/* Rating 😊 ⭐*/}
      <section>
        <Rating icon='⭐' max={5}/>
      </section>

      {/* Carousel */}
      <section>
        <Carousel data={data.carousel}/>
      </section>

      {/* Load More */}
      <section>
        <LoadMore/>
      </section>

      {/* Tree Menu */}
      <section>
        <TreeMenu menuList={data.treemenu}/>
      </section>

      {/* Dark Mode */}
      <section>
        <DarkMode/>
      </section>

      {/* Custom Tabs */}
      <section>
        <Tabs data={data.tabs}/>
      </section>
      
    </div>
  )
}

export default App