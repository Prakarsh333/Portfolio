import React, { useState, useEffect, useRef } from 'react';
import SideBar from './IndentComponent/Sidebar';
import Draft from './IndentComponent/DDraft'
import './temp.css'

function App(){
  return (
    <>
    <SideBar />
    <Draft />
    {/* {<view className='temp'>
      <SideBar />
      <view className='viewprop'>
        <view className='header_view'>This is view!</view>
        <Draft />
      </view>
      <aside className="flex gap-5 justify-between self-start mt-12 max-md:mt-10">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8d845dc574dea35d57690cd56aa5645063c2e4052073768913cd562931acc18?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="" className="shrink-0 w-8 aspect-square" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1b3d3315196820006e46054d67fa76a66216850d2075e7ee4580fb8b149a903?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="" className="shrink-0 w-8 rounded-full aspect-square" />
      </aside>
      
    </view>} */}
      
    </>
  )
}

export default App;