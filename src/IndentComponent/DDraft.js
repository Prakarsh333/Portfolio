import React, { useState, useEffect, useRef } from 'react';
import itemData from "../ItemData/item.json"

function ImageWithAlt({ src, alt, className }) {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
}

// const itemData = [
//   { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4fe994fbb50ea3901cd9bd59edf5bc9859de31ae3093b9f6e5eaf9a1f3484d95?apiKey=d07d3de89fb2406f80b717f88505014b&', name: 'Apple', bgClass: 'bg-blue-200' },
//   { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/55a72e40ec41801c7acc95f5f940f366f5de1e9d461cdfe544507ae2e4c8b604?apiKey=d07d3de89fb2406f80b717f88505014b&', name: 'Chicken', bgClass: 'bg-indigo-50' },
//   { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1b76822702ee0eaf693a795102bd8360e1ae588c4114089aee833053536daa72?apiKey=d07d3de89fb2406f80b717f88505014b&', name: 'Mango', bgClass: 'bg-blue-200' },
//   { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3184ad50261dc99612f0366e1fd129fb371c99b3fc3b7065a7be95666c20e1ca?apiKey=d07d3de89fb2406f80b717f88505014b&', name: 'Chocolate', bgClass: 'bg-indigo-50' },
//   { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a2f7c3696031f8892ae44410b248486f9d2e0aca552a1754fb87dda8cb9e5847?apiKey=d07d3de89fb2406f80b717f88505014b&', name: 'Cauliflower', bgClass: 'bg-blue-200' },
//   { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4a8edec4d3b23019b33999079511438afa221584f4416659e8af9b84a82c225d?apiKey=d07d3de89fb2406f80b717f88505014b&', name: 'Green apples', bgClass: 'bg-indigo-50' },
//   { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9838786a8ee67ec6926ebb56e7ce319ba005488ac9cfde580b7695c23ddf1c09?apiKey=d07d3de89fb2406f80b717f88505014b&', name: 'Tomato', bgClass: 'bg-blue-200' },
//   { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fe8828b7537dc406abba3a1b596d82a912ab51bd8e88d0501c03a5ff6df71463?apiKey=d07d3de89fb2406f80b717f88505014b&', name: 'Carrot', bgClass: 'bg-indigo-50' },
//   { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e928bae31460d14c0afddc251af94a3560a8e3f3c637422d61c10ac9399e017e?apiKey=d07d3de89fb2406f80b717f88505014b&', name: 'Meat', bgClass: 'bg-blue-200' },
//   { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/061e33e8c63fa03e9eaec5878c2ad94bbc7dcad4b73db88be707c57c8a584bdf?apiKey=d07d3de89fb2406f80b717f88505014b&', name: 'Chicken', bgClass: 'bg-indigo-50' }
// ];

function Draft() {
  const [clicked,setClicked] = useState(false);

  function handleClick(){
    setClicked(!clicked);
  }

  return itemData.map((item) => (
    <>
    <button onClick={handleClick}>Click to change State</button>
    <div className={`flex flex-wrap gap-5 gap-y-24 justify-between content-center items-center px-1 mt-1.5 w-full ${item.bgClass} rounded-lg max-md:pr-5 max-md:max-w-full`}>
      {clicked && <>
      <div className='flex gap-1 self-stretch py-1 pr-1'>
        <div className='flex justify-center items-center px-0.5 pt-0.5 pb-1 bg-white rounded h-[41px] w-[41px]'>
          <ImageWithAlt src={item.src} alt={item.name} className='w-10 aspect-[0.98]' />
        </div>
        <div className='my-auto text-base font-semibold text-zinc-800'>{item.name}</div>
      </div>
      <div className='self-stretch my-auto text-xl font-medium text-black'>kgs</div>
      <div className='self-stretch my-auto text-xl font-medium text-black'>25</div>
      <div className='self-stretch my-auto text-xl font-medium text-black'>10</div>
      <div className='flex gap-5 justify-between items-start self-stretch my-auto text-2xl font-semibold whitespace-nowrap text-zinc-800'>
        <div className='justify-center px-2.5 bg-white rounded-md'>-</div>
        <div className='justify-center self-stretch px-4 py-1 text-blue-500 bg-white rounded'>10</div>
        <div className='justify-center px-2 bg-white rounded-md'>+</div>
      </div></>}
    </div></>
  ));
}



export default Draft;