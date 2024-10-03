import SplitBillsIcon from '../../Assets/Icons/SplitBill.svg'
import SeparatingLine from '../../Assets/Icons/SeparatingLine.svg'
import DeleteItemCountIcon from '../../Assets/Icons/DeleteItemCount.svg'
import AddItemCountIcon from '../../Assets/Icons/AddItemCount.svg'

type SplitBillsProps = {
    setSplitBills: React.Dispatch<React.SetStateAction<boolean>>;
}
const SplitBills = ({setSplitBills}: SplitBillsProps) => {
  return (
    <div className={`absolute bottom-[0px] z-10`}>
        <div className={`relative w-[420px] h-[500px] bg-[#DDEBFF] rounded-t-[32px] flex flex-col pt-[24px] pb-[40px]`}>
            <div className={`absolute left-[50%] top-[0px] -translate-x-[50%] -translate-y-[60%] transform-all duration-500 w-[147px] min-h-[60px] bg-[#DDEBFF] rounded-t-[16px]
                                flex flex-col items-center p-[8px]`}
                >
            </div>
            <div className="ps-[32px] pe-[32px] flex gap-x-[17px]">
                <img src={SplitBillsIcon} />
                <span className="font-poppins font-medium text-[20px] leading-[30px]">Split Bill</span>
                <div className="flex-1 flex justify-end gap-x-[8px] items-center ">
                    <span className="font-poppins font-normal text-[16px] leading-[16px] cursor-pointer">Table</span>
                    <span className="font-poppins font-normal text-[24px] leading-[24px] cursor-pointer text-[#FFB800]">A2</span>
                </div>
            </div>
            <img src={SeparatingLine} className="pt-[8px] pb-[8px]"/>
            <div className='flex justify-between p-0 items-center ps-[32px] pe-[32px]'>
                <span className='font-poppins font-normal text-[16px]'>Grand Total</span>
                <span className='font-poppins font-normal text-[24px]'>1000 /-</span>
            </div>
            <div className='flex justify-between p-0 items-center ps-[32px] pe-[32px] mt-[32px]'>
                <span className='font-poppins font-normal text-[20px]'>No. of Partitions</span>
                <div className='flex w-[25%] gap-x-[12px]'>
                    <img src={DeleteItemCountIcon} className={`cursor-pointer`}/>
                    <div className={`text-center flex-1 bg-white p-[8px] pt-[2px] pb-[2px] rounded`}> 
                        <span className='font-poppins font-medium text-[24px] leading-[36px]'>2</span>
                    </div>
                    <img src={AddItemCountIcon} className={`cursor-pointer `}/>
                </div>
            </div>
            <div className='flex flex-col flex-1 overflow-y-scroll gap-y-[16px] mt-[32px] items-start '>
                <div className='flex w-full justify-between p-0 items-center ps-[32px] pe-[32px]'>
                    <span className='font-poppins font-normal text-[16px]'>Grand Total</span>
                    <span className='font-poppins font-normal text-[24px]'>500 /-</span>
                </div>
                <div className='flex w-full justify-between p-0 items-center ps-[32px] pe-[32px]'>
                    <span className='font-poppins font-normal text-[16px]'>Grand Total</span>
                    <span className='font-poppins font-normal text-[24px]'>500 /-</span>
                </div>
            </div>
            <div className='flex gap-x-[16px] justify-end pe-[32px] mt-[16px]'>
                <button className='text-center fontSecondaryButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
                            hover:bg-CustomBrand-200 active:shadow-none active:bg-white'
                        onClick={() => setSplitBills(false)}
                        
                >
                    Cancel 
                </button>
                <button className='text-center bg-[#3B82F6] fontButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
                            hover:ShadowPrimaryHover active:shadow-none'
                >
                    Apply
                </button>
            </div>
        </div>
    </div>
  )
}

export default SplitBills
