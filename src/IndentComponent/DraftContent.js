import ItemData from "../ItemData/item.json";

function ImageWithAlt({ src, alt, className }) {
    return <img loading="lazy" src={src} alt={alt} className={className} />;
}

function MenuItem(item) {
    return (
      <>
      <div className={`flex flex-wrap gap-5 gap-y-24 justify-between content-center items-center px-1 mt-1.5 w-full rounded-lg max-md:pr-5 max-md:max-w-full`}>
      
      <div className='flex gap-1 self-stretch py-1 pr-1'>
        <div className='flex justify-center items-center px-0.5 pt-0.5 pb-1 bg-white rounded h-[41px] w-[41px]'>
          <ImageWithAlt src={item.src} alt={item.name} className='w-10 aspect-[0.98]' />
        </div>
        <div className='my-auto text-base font-semibold text-zinc-800'>{item.name}</div>
      </div>
      <div className='self-stretch my-auto text-xl font-medium text-black'>{item.UOM}</div>
      <div className='self-stretch my-auto text-xl font-medium text-black'>{item.parcelevel}</div>
      <div className='self-stretch my-auto text-xl font-medium text-black'>{item.currentInventory}</div>
      <div className='flex gap-5 justify-between items-start self-stretch my-auto text-2xl font-semibold whitespace-nowrap text-zinc-800'>
        <div className='justify-center px-2.5 bg-white rounded-md'>-</div>
        <div className='justify-center self-stretch px-4 py-1 text-blue-500 bg-white rounded'>10</div>
        <div className='justify-center px-2 bg-white rounded-md'>+</div>
      </div>
    </div>
      </>
    );
}
  
function ItemDocumentMenu({ item }) {
    return (
      <section >
        {item.map((item, idx) => (
          <MenuItem key={idx} item={item} />
        ))}
      </section>
    );
}

function DraftContent(){
    return(
        <>
            <ItemDocumentMenu item={ItemData}/>
        </>

    );
}

export default DraftContent;