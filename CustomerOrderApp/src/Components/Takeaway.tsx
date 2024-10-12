import useTakeawayViewModel from "../ViewModels/TakeawayViewModel";

type TakeawayProps = {
    takeAway: boolean;
    setTakeaway: React.Dispatch<React.SetStateAction<boolean>>;
}
const Takeaway = ({takeAway, setTakeaway}: TakeawayProps) => {
    const {
        selectedTable, handleTakeaway
    } = useTakeawayViewModel()
  return (
    <div className='flex w-[156px] min-h-[88px] cursor-pointer'
        onClick={() => handleTakeaway()}
    >
        <div className={`table-status w-[8px] rounded-l-[10px] bg-[#0CBB00]`}>
        </div>
        {
            selectedTable == 'AddTakeaway'
            ?
            <div className='relative flex-1 bg-CustomBrand-300 p-[4px] flex justify-center items-center shadow-table rounded-r-[10px]'
                onClick={() => setTakeaway(false)}
            >
                <span className="font-poppins font-[500] text-[16px] leading-[24px] text-white text-wrap">Take Away</span>
            </div>
            :<div className='flex-1 bg-[#EBF3FE] p-[4px] flex justify-center items-center shadow-table rounded-r-[10px]
                            hover:bg-[#D6E6FF] hover:ShadowTableHover active:bg-[#EBF3FE]'
                onClick={() => setTakeaway(true)}
            >
                <span className="font-poppins font-[500] text-[16px] leading-[24px] text-[#0CBB00] text-wrap">Take Away</span>
            </div>
        }
    </div>
  )
}

export default Takeaway
