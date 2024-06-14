import React, { useState, useEffect, useRef } from 'react';

function MenuItem({ iconSrc, text, alt, isIndented }) {
  return (
    <div className={`flex gap-2 ${isIndented ? 'justify-between py-2.5 pr-[24px] pl-[24px] mx-6 mt-6 tracking-wide bg-blue-500 text-white shadow-sm rounded-lg' : 'px-4 py-2 mx-6 mt-2 font-medium text-blue-500 rounded-md hover:bg-indigo-100 hover:text-blue-600'} max-md:mx-2.5`}>
      <div className="flex gap-2">
        <img loading="lazy" src={iconSrc} alt={alt} className="shrink-0 w-6 aspect-square " />
        <div className="my-auto">{text}</div>
      </div>
      {isIndented && <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/15942853cf34cab4046955c9e02f0abb7259475c0c984cfd41d04e048f72b006?apiKey=d07d3de89fb2406f80b717f88505014b&" alt="" className="shrink-0 my-auto aspect-square fill-white w-[18px]" />}
    </div>
  );
}

function DocumentMenu({ documents }) {
  return (
    <section >
      {documents.map((doc, idx) => (
        <MenuItem key={idx} iconSrc={doc.iconSrc} text={doc.text} alt={doc.alt} isIndented={doc.isIndented} />
      ))}
    </section>
  );
}

const Indentdocuments = [
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/398e837d8ab86d02e47f81ccdfe69738d9c39439bc83dad3c90c2329f058a0ff?apiKey=d07d3de89fb2406f80b717f88505014b&", text: "Draft", alt: "Draft Icon", isIndented: false },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3607fc6160e071f2a1ad88db35e7d40e9fe8a724670cc167bfb2bc8808882f3b?apiKey=d07d3de89fb2406f80b717f88505014b&", text: "Raised to Stores", alt: "Raised to Stores Icon", isIndented: false },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4ffc02422f694fee593746b5ea4228b622b9c35f91d7333751ed54c792cc5f6?apiKey=d07d3de89fb2406f80b717f88505014b&", text: "Approved by HOD", alt: "Approved by HOD Icon", isIndented: false },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e29565572781ba0510fe456424743bfa63285b609de86ef8320043496f8dbe5a?apiKey=d07d3de89fb2406f80b717f88505014b&", text: "Issued by Stores", alt: "Issued by Stores Icon", isIndented: false },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/24e3385e9daa6ce9a1a6fd0811df32fba08af2d083ec56294aea7bca580832e0?apiKey=d07d3de89fb2406f80b717f88505014b&", text: "History", alt: "History Icon", isIndented: false }
];
const MVPdocuments = [
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/398e837d8ab86d02e47f81ccdfe69738d9c39439bc83dad3c90c2329f058a0ff?apiKey=d07d3de89fb2406f80b717f88505014b&", text: "Draft", alt: "Draft Icon", isIndented: false },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3607fc6160e071f2a1ad88db35e7d40e9fe8a724670cc167bfb2bc8808882f3b?apiKey=d07d3de89fb2406f80b717f88505014b&", text: "Raised to Stores", alt: "Raised to Stores Icon", isIndented: false },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4ffc02422f694fee593746b5ea4228b622b9c35f91d7333751ed54c792cc5f6?apiKey=d07d3de89fb2406f80b717f88505014b&", text: "Approved by HOD", alt: "Approved by HOD Icon", isIndented: false },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e29565572781ba0510fe456424743bfa63285b609de86ef8320043496f8dbe5a?apiKey=d07d3de89fb2406f80b717f88505014b&", text: "Issued by Stores", alt: "Issued by Stores Icon", isIndented: false },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/24e3385e9daa6ce9a1a6fd0811df32fba08af2d083ec56294aea7bca580832e0?apiKey=d07d3de89fb2406f80b717f88505014b&", text: "History", alt: "History Icon", isIndented: false }
];
const PurchaseOrderdocuments = [
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/398e837d8ab86d02e47f81ccdfe69738d9c39439bc83dad3c90c2329f058a0ff?apiKey=d07d3de89fb2406f80b717f88505014b&", text: "Draft", alt: "Draft Icon", isIndented: false },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3607fc6160e071f2a1ad88db35e7d40e9fe8a724670cc167bfb2bc8808882f3b?apiKey=d07d3de89fb2406f80b717f88505014b&", text: "Raised to Stores", alt: "Raised to Stores Icon", isIndented: false },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4ffc02422f694fee593746b5ea4228b622b9c35f91d7333751ed54c792cc5f6?apiKey=d07d3de89fb2406f80b717f88505014b&", text: "Approved by HOD", alt: "Approved by HOD Icon", isIndented: false },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e29565572781ba0510fe456424743bfa63285b609de86ef8320043496f8dbe5a?apiKey=d07d3de89fb2406f80b717f88505014b&", text: "Issued by Stores", alt: "Issued by Stores Icon", isIndented: false },
  { iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/24e3385e9daa6ce9a1a6fd0811df32fba08af2d083ec56294aea7bca580832e0?apiKey=d07d3de89fb2406f80b717f88505014b&", text: "History", alt: "History Icon", isIndented: false }
];

function SideBarContent() {
  const [dropDownIndent, setdropDownIndent] = useState(false);
  const [dropDownMVP, setdropDownMVP] = useState(false);
  const [dropDownPurchaseOrder, setdropDownPurchaseOrder] = useState(false);

  const toggleDropdownIndent = () => {
    setdropDownIndent(!dropDownIndent);
    setdropDownMVP(false);
    setdropDownPurchaseOrder(false);
  };

  const toggleDropdownMVP = () => {
    setdropDownMVP(!dropDownMVP);
    setdropDownIndent(false);
    setdropDownPurchaseOrder(false);
  };

  const toggleDropdownPurchaseOrder = () => {
    setdropDownPurchaseOrder(!dropDownPurchaseOrder);
    setdropDownIndent(false);
    setdropDownMVP(false);
  };

  return (
    <>
     <div className="flex gap-5 justify-between pt-1.5 bg-white max-md:flex-wrap w-[360px]">
      <section className="flex flex-col pb-20 text-base font-semibold bg-white shadow-lg w-[360px] h-auto">
        <div onClick={toggleDropdownIndent}>
        <MenuItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1309be01885a17f7c817cd1714568e71a6a8760a280ea1cc05ada94afbc1270c?apiKey=d07d3de89fb2406f80b717f88505014b&"
          text="Indent"
          alt="Indent Icon"
          isIndented
        />
        </div>

        {dropDownIndent && <DocumentMenu documents={Indentdocuments} />}
        
        <div onClick={toggleDropdownMVP}>
        <MenuItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b7cc67c74f9ee6147baa1cf0e18ca7f619951e0ab9de15cfd8c42a4cf1fb5990?apiKey=d07d3de89fb2406f80b717f88505014b&"
          text="MVP Order Request Sheet"
          alt="MVP Order Request Sheet Icon"
          isIndented
        />
        </div>

        {dropDownMVP && <DocumentMenu documents={MVPdocuments} />}


        <div onClick={toggleDropdownPurchaseOrder}>
        <MenuItem
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5ce2ebce5bf47927563a0f21b2b7519d5e8ec2c25333ccb65cf41a1c10f9d2e3?apiKey=d07d3de89fb2406f80b717f88505014b&"
          text="Purchase Order"
          alt="Purchase Order Icon"
          isIndented
        />
        </div>

        {dropDownPurchaseOrder && <DocumentMenu documents={PurchaseOrderdocuments} />}


        <div className="flex gap-5 justify-between px-4 py-2.5 mx-6 mt-12 tracking-wide whitespace-nowrap bg-red-100 rounded-lg max-md:mx-2.5 max-md:mt-10">
          <div className="my-auto text-red-400">Alert</div>
          <div className="flex flex-col justify-center text-red-100">
            <div className="justify-center items-center w-6 h-6 bg-red-500 rounded-full">05</div>
          </div>
        </div>
      </section>

    </div>
    </>
  );
}

export default SideBarContent;