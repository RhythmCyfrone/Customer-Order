const ItemsNavbar = () => {
  return (
    <div className='mt-[16px] w-full flex pt-[4px] pe-[24px] pb-[4px] ps-[20px] bg-[#DDEBFF]'>
        <span className='font-./ItemStatusToggle text-[12px] leading-[18px] flex-1'>Items</span>
        <div className='flex-1 flex justify-between'>
            <span className='font-poppins font-medium text-[12px] leading-[18px]'>Count</span>
            <span className='font-poppins font-medium text-[12px] leading-[18px]'>Status</span>
            <span className='font-poppins font-medium text-[12px] leading-[18px]'>Price</span>
        </div>
    </div>
  )
}

export default ItemsNavbar
