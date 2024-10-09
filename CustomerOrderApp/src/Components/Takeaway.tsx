type TakeawayProps = {
    takeAway: boolean;
    setTakeaway: React.Dispatch<React.SetStateAction<boolean>>;
}
const Takeaway = ({takeAway, setTakeaway}: TakeawayProps) => {
  return (
    <div className='flex w-[156px] min-h-[88px] cursor-pointer'
    >
        <div className={`table-status w-[8px] rounded-l-[10px] bg-[#0CBB00]`}>
        </div>
        {
            takeAway
            ?
            <div className='relative flex-1 bg-CustomBrand-300 p-[4px] flex justify-center items-center shadow-table'>
                <span className="font-poppins font-[500] text-[16px] leading-[24px] text-[#0CBB00] text-wrap">Take Away</span>
            </div>
            :<div className='flex-1 bg-[#EBF3FE] p-[4px] flex justify-center items-center shadow-table
                            hover:bg-[#D6E6FF] hover:ShadowTableHover active:bg-[#EBF3FE]'
            >
                <span className="font-poppins font-[500] text-[16px] leading-[24px] text-[#0CBB00] text-wrap">Take Away</span>
            </div>
        }
    </div>
  )
}

export default Takeaway
