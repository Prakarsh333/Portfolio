import * as React from "react";

function IndentItem({ altText, imgSrc, itemName, itemUOM, parLevel, currentInventory, orderQty }) {
  return (
    <div className="flex flex-wrap gap-5 gap-y-24 justify-between content-center items-center px-1 mt-1.5 w-full bg-blue-200 rounded-lg max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-1 self-stretch py-1 pr-1">
        <div className="flex justify-center items-center px-0.5 pt-0.5 pb-1 bg-white rounded h-[41px] w-[41px]">
          <img loading="lazy" src={imgSrc} alt={altText} className="w-10 aspect-[0.98]" />
        </div>
        <div className="my-auto text-base font-semibold text-zinc-800">{itemName}</div>
      </div>
      <div className="self-stretch my-auto text-xl font-medium text-black">{itemUOM}</div>
      <div className="self-stretch my-auto text-xl font-medium text-black">{parLevel}</div>
      <div className="self-stretch my-auto text-xl font-medium text-black">{currentInventory}</div>
      <div className="flex gap-5 justify-between items-start self-stretch my-auto text-2xl font-semibold whitespace-nowrap text-zinc-800">
        <div className="justify-center px-2.5 bg-white rounded-md"> - </div>
        <div className="justify-center self-stretch px-4 py-1 text-blue-500 bg-white rounded">{orderQty}</div>
        <div className="justify-center px-2 bg-white rounded-md">+</div>
      </div>
    </div>
  );
}

function MyComponent() {
  const indentItems = [
    {
      altText: "Apple",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4fe994fbb50ea3901cd9bd59edf5bc9859de31ae3093b9f6e5eaf9a1f3484d95?apiKey=d07d3de89fb2406f80b717f88505014b&",
      itemName: "Apple",
      itemUOM: "kgs",
      parLevel: 25,
      currentInventory: 10,
      orderQty: 10
    },
    {
      altText: "Chiken",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/55a72e40ec41801c7acc95f5f940f366f5de1e9d461cdfe544507ae2e4c8b604?apiKey=d07d3de89fb2406f80b717f88505014b&",
      itemName: "Chiken",
      itemUOM: "kgs",
      parLevel: 25,
      currentInventory: 10,
      orderQty: 10
    }
    // More items...
  ];

  return (
    <section className="pt-1.5 bg-white">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <aside className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
          <nav className="flex flex-col grow pb-20 mx-auto w-full text-base font-semibold bg-white shadow-lg max-md:mt-10">
            <div className="flex z-10 justify-center items-center px-16 py-6 -mt-1.5 text-sm text-center text-white bg-blue-500 shadow-sm max-md:px-5">
              <div className="flex flex-col items-center max-w-full w-[154px]">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc8430b248b8458ce9cd02956c0432cc02df68213036ac841e9296c9ab3ec321?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="Jubilee Hills" className="w-full aspect-[3.23]" />
                <div className="mt-2">Jubilee Hills</div>
              </div>
            </div>
            <div className="flex gap-5 justify-between py-2.5 pr-6 pl-4 mx-6 mt-6 max-w-full tracking-wide text-white bg-blue-500 rounded-lg shadow-sm w-[331px] max-md:pr-5 max-md:mx-2.5">
              <div className="flex gap-2">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fb42a504c132a33a0c3ed937d000c49ae8c6898bdaf8c024f189bf5b559a762?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="" className="shrink-0 w-6 aspect-square" />
                <div className="my-auto">Indent </div>
              </div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/15942853cf34cab4046955c9e02f0abb7259475c0c984cfd41d04e048f72b006?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="" className="shrink-0 my-auto aspect-square fill-white w-[18px]" />
            </div>
            <div className="flex gap-2 px-4 py-2 mx-6 mt-2 font-medium text-blue-500 whitespace-nowrap bg-indigo-50 rounded-md max-md:mx-2.5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/398e837d8ab86d02e47f81ccdfe69738d9c39439bc83dad3c90c2329f058a0ff?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="Draft Icon" className="shrink-0 self-start aspect-square w-[18px]" />
              <div>Draft</div>
            </div>
            <div className="flex gap-2 px-4 py-2 mx-6 mt-2 font-medium text-blue-500 rounded-md max-md:mx-2.5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3607fc6160e071f2a1ad88db35e7d40e9fe8a724670cc167bfb2bc8808882f3b?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="Raised to Stores Icon" className="shrink-0 self-start aspect-square w-[18px]" />
              <div>Raised to Stores</div>
            </div>
            <div className="flex gap-2 px-4 py-2 mx-6 mt-2 font-medium text-blue-500 rounded-md max-md:mx-2.5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4ffc02422f694fee593746b5ea4228b622b9c35f91d7333751ed54c792cc5f6?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="Approved by HOD Icon" className="shrink-0 self-start aspect-square w-[18px]" />
              <div>Approved by HOD</div>
            </div>
            <div className="flex gap-2 px-4 py-2 mx-6 mt-2 font-medium text-blue-500 whitespace-nowrap rounded-md max-md:mx-2.5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/64bf1b15b60e1719674c01c289a0069f84bf26e2c642b77eb7cc8763a541c701?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="Issued by Stores Icon" className="shrink-0 self-start aspect-square w-[18px]" />
              <div>Issued by Stores</div>
            </div>
            <div className="flex gap-2 px-4 py-2 mx-6 mt-2 font-medium text-blue-500 whitespace-nowrap rounded-md max-md:mx-2.5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2edec92400c764642f7802e6d23d47be976d44fadb1a7e0ad0728229e6e98cc3?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="History Icon" className="shrink-0 self-start aspect-square w-[18px]" />
              <div>History</div>
            </div>
            <div className="flex gap-5 justify-between py-2.5 pr-6 pl-4 mx-6 mt-8 max-w-full tracking-wide text-blue-500 bg-indigo-50 rounded-lg w-[331px] max-md:pr-5 max-md:mx-2.5">
              <div className="flex gap-2">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a1bef1636d8c451bc110d6d3cbf23deb3085b6782a9ed52975d5bf79ff9591b?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="" className="shrink-0 w-6 aspect-square" />
                <div className="my-auto">MVP Order Request Sheet</div>
              </div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/01c1d638a3624cf2e977ed115f8964bb8e944bbdae9bfef62bc2e4488e101886?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="" className="shrink-0 my-auto aspect-square fill-blue-500 w-[18px]" />
            </div>
            <div className="flex gap-5 justify-between py-2.5 pr-6 pl-4 mx-6 mt-6 max-w-full tracking-wide text-blue-500 bg-indigo-50 rounded-lg w-[331px] max-md:pr-5 max-md:mx-2.5">
              <div className="flex gap-2">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/356b468d5d111fe4db27c60b97e6a1746552e038e4e7700529488de1730bbfbe?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="" className="shrink-0 w-6 aspect-square" />
                <div className="my-auto">Purchase Order</div>
              </div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/01c1d638a3624cf2e977ed115f8964bb8e944bbdae9bfef62bc2e4488e101886?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="" className="shrink-0 my-auto aspect-square fill-blue-500 w-[18px]" />
            </div>
            <div className="flex gap-5 justify-between px-4 py-2.5 mx-6 mt-12 max-w-full tracking-wide whitespace-nowrap bg-red-100 rounded-lg w-[329px] max-md:pr-5 max-md:mx-2.5 max-md:mt-10">
              <div className="my-auto text-red-400">Alert</div>
              <div className="flex flex-col justify-center text-red-100">
                <div className="justify-center items-center w-6 h-6 bg-red-500 rounded-full">05</div>
              </div>
            </div>
          </nav>
        </aside>
        <main className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <header className="flex gap-5 justify-between self-end">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a20ef3419049690b1905fe2fcbfc61446c8783a12975ddb0c799f578d26a180?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="Logo" className="shrink-0 w-8 aspect-square" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1b3d3315196820006e46054d67fa76a66216850d2075e7ee4580fb8b149a903?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="User avatar" className="shrink-0 w-8 rounded-full aspect-square" />
            </header>
            <section className="flex gap-5 mt-14 w-full max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex-auto self-start text-xl font-semibold text-black">Indent/Draft</div>
              <div className="flex flex-1 gap-5 justify-between items-start">
                <div className="flex overflow-hidden relative flex-col justify-center w-10 rounded-3xl aspect-square">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6047fab321567b2068b6794548798c76883bef3ec7ef27d0f00890e5616c029a?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="Graph" className="object-cover absolute inset-0 size-full" />
                  <div className="relative shrink-0 w-full h-10 bg-indigo-50 rounded-3xl" />
                </div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/94751ba479cef91d4150cbb6ef49c78c18efde9f80b89e7a8ba7a59de62a131e?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="Icon" className="shrink-0 w-10 aspect-square" />
              </div>
            </section>
            <section className="flex gap-5 justify-between px-14 py-2 mt-4 w-full text-xl font-semibold text-white bg-blue-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-3 px-px">
                <div>Item Name</div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/15942853cf34cab4046955c9e02f0abb7259475c0c984cfd41d04e048f72b006?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="Sort Icon" className="shrink-0 my-auto w-3.5 aspect-[1.16] fill-white" />
              </div>
              <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-5 justify-between self-start px-2 max-md:flex-wrap max-md:max-w-full">
                  <div>UOM</div>
                  <div className="text-center">Par level</div>
                  <div>Current Inventory</div>
                </div>
                <div>Order Qty</div>
              </div>
            </section>
            {indentItems.map((item, index) => (
              <IndentItem
                key={index}
                altText={item.altText}
                imgSrc={item.imgSrc}
                itemName={item.itemName}
                itemUOM={item.itemUOM}
                parLevel={item.parLevel}
                currentInventory={item.currentInventory}
                orderQty={item.orderQty}
              />
            ))}
            <div className="flex gap-5 justify-between mt-9 w-full text-base font-semibold tracking-wide max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
              <div className="flex gap-2 justify-center py-2.5 pr-6 pl-4 text-blue-500 rounded-lg border border-blue-500 border-solid max-md:px-5">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3c79910dc165996c5957048ab5500ddc10000306addfae94bff48101b7b2a59?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="Add Icon" className="shrink-0 w-6 aspect-square" />
                <div className="my-auto">Add More</div>
              </div>
              <div className="flex gap-5 justify-between self-start whitespace-nowrap">
                <button className="justify-center px-6 py-2.5 text-blue-500 rounded-lg border border-blue-500 border-solid max-md:px-5">Cancel</button>
                <button className="justify-center px-6 py-2.5 text-white bg-blue-500 rounded-lg max-md:px-5">Confirm</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default MyComponent;