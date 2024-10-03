import useCombineBillsViewModel from "./CombineBillsViewModel"
import CombineBillIcon from '../../Assets/Icons/CombineBill.svg'
import SeparatingLine from '../../Assets/Icons/SeparatingLine.svg'
import DropDownIcon from '../../Assets/Icons/DropDown.svg'
import SearchIcon from '../../Assets/Icons/Search.svg'
import TableNameSeparatingLine from '../../Assets/Icons/TableNameSeparatingLine.svg'

type CombineBillsProps = {
    note: boolean;
    setNote: React.Dispatch<React.SetStateAction<boolean>> ;
    discount: boolean;
    setDiscount: React.Dispatch<React.SetStateAction<boolean>> ;
    handleNotificationsClick: (e: React.MouseEvent<HTMLImageElement | HTMLDivElement> , initiator: string) => void;
    setCombineBills: React.Dispatch<React.SetStateAction<boolean>> ;
}

const CombineBills = ({note, setNote, discount, setDiscount, handleNotificationsClick, setCombineBills}: CombineBillsProps) => {
    const {
        dropDown, setDropDown, tableName, setTableName, handleInputChange,
        choosenTable, setChoosenTable
    } = useCombineBillsViewModel()

  return (
    <div className={`absolute bottom-[0px] z-10`}>
        <div className={`relative w-[420px] h-[500px] bg-[#DDEBFF] rounded-t-[32px] flex flex-col pt-[24px] pb-[40px]`}>
            <div className={`absolute left-[50%] top-[0px] -translate-x-[50%] -translate-y-[60%] transform-all duration-500 w-[147px] min-h-[60px] bg-[#DDEBFF] rounded-t-[16px]
                                flex flex-col items-center p-[8px]`}
                >
                {note}
            </div>
            <div className="ps-[32px] pe-[32px] flex gap-x-[17px]">
                <img src={CombineBillIcon} />
                <span className="font-poppins font-medium text-[20px] leading-[30px]">Combine Bills</span>
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
            <div className='flex flex-1 overflow-y-scroll justify-between mt-[32px] items-start ps-[32px] pe-[32px]'>
                <span className='font-poppins flex-1 font-normal text-[20px] leading-[30px]'>Select Table</span>
                <div className='z-10 flex flex-col bg-white w-[140px] max-h-full overflow-y-scroll relative rounded-[8px] transition-height duration-200'>
                    <div className={`relative cursor-pointer rounded-[10px] p-[4px] flex justify-center items-center box-content
                                     ${dropDown?'select-table-shadow':''}`}
                        onClick={() => setDropDown(!dropDown)}
                    >
                        <div className='flex w-full h-full p-[8px] rounded-[8px] gap-x-[8px] items-center'>
                            <span className='flex-1 font-opensans text-[16px] font-medium text-center'>
                                {choosenTable == ''
                                    ?'Select Table'
                                    :choosenTable
                                }
                            </span>
                            <img src={DropDownIcon}/>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 overflow-y-scroll">
                        <div className={`${!dropDown?'max-h-[0px] p-[0px] overflow-hidden':'max-h-[100px] p-[8px]'} flex w-full flex justify-center items-center transition-height duration-200 box-border`}
                        >
                            <div className='flex bg-[#EBF3FE] max-w-full rounded-[20px] p-[4px] gap-x-[8px]'>
                                <img src={SearchIcon} className="w-[18px]"/>
                                <input
                                    type='text'
                                    value={tableName}
                                    onChange={handleInputChange}
                                    placeholder='Search Table'
                                    className='bg-transparent font-poppins font-normal text-[12px] outline-none w-full'
                                />
                            </div>
                        </div>
                        <div className={`${!dropDown?'max-h-[0px] p-[0px] overflow-hidden':'max-h-[100px] p-[8px]'} flex w-full h-full pt-[0px] flex flex-col gap-y-[8px] justify-center items-center transition-height duration-100
                                        hover:bg-[#EBF3FE] cursor-pointer`}
                                onClick={() => {
                                    setChoosenTable('A2')
                                    setDropDown(false)
                                }}
                            >
                            <img src={TableNameSeparatingLine} />
                            <span className='flex-1 font-opensans text-[12px] font-medium'>A2</span>
                        </div>
                        <div className={`${!dropDown?'max-h-[0px] p-[0px] overflow-hidden':'max-h-[100px] p-[8px]'} flex w-full h-full pt-[0px] flex flex-col gap-y-[8px] justify-center items-center transition-height duration-100
                                        hover:bg-[#EBF3FE] cursor-pointer`}
                                onClick={() => {
                                    setChoosenTable('A2')
                                    setDropDown(false)
                                }}
                            >
                            <img src={TableNameSeparatingLine} />
                            <span className='flex-1 font-opensans text-[12px] font-medium'>A3</span>
                        </div>
                        <div className={`${!dropDown?'max-h-[0px] p-[0px] overflow-hidden':'max-h-[100px] p-[8px]'} flex w-full h-full pt-[0px] flex flex-col gap-y-[8px] justify-center items-center transition-height duration-100
                                        hover:bg-[#EBF3FE] cursor-pointer`}
                                onClick={() => {
                                    setChoosenTable('A2')
                                    setDropDown(false)
                                }}
                            >
                            <img src={TableNameSeparatingLine} />
                            <span className='flex-1 font-opensans text-[12px] font-medium'>A4</span>
                        </div>
                        <div className={`${!dropDown?'max-h-[0px] p-[0px] overflow-hidden':'max-h-[100px] p-[8px]'} flex w-full h-full pt-[0px] flex flex-col gap-y-[8px] justify-center items-center transition-height duration-100
                                        hover:bg-[#EBF3FE] cursor-pointer`}
                                onClick={() => {
                                    setChoosenTable('A2')
                                    setDropDown(false)
                                }}
                            >
                            <img src={TableNameSeparatingLine} />
                            <span className='flex-1 font-opensans text-[12px] font-medium'>A4</span>
                        </div>
                        <div className={`${!dropDown?'max-h-[0px] p-[0px] overflow-hidden':'max-h-[100px] p-[8px]'} flex w-full h-full pt-[0px] flex flex-col gap-y-[8px] justify-center items-center transition-height duration-100
                                        hover:bg-[#EBF3FE] cursor-pointer`}
                                onClick={() => {
                                    setChoosenTable('A2')
                                    setDropDown(false)
                                }}
                            >
                            <img src={TableNameSeparatingLine} />
                            <span className='flex-1 font-opensans text-[12px] font-medium'>A4</span>
                        </div>
                        <div className={`${!dropDown?'max-h-[0px] p-[0px] overflow-hidden':'max-h-[100px] p-[8px]'} flex w-full h-full pt-[0px] flex flex-col gap-y-[8px] justify-center items-center transition-height duration-100
                                        hover:bg-[#EBF3FE] cursor-pointer`}
                                onClick={() => {
                                    setChoosenTable('A2')
                                    setDropDown(false)
                                }}
                            >
                            <img src={TableNameSeparatingLine} />
                            <span className='flex-1 font-opensans text-[12px] font-medium'>A4</span>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className='flex gap-x-[16px] justify-end pe-[32px] mt-[16px]'>
                <button className='text-center fontSecondaryButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
                            hover:bg-CustomBrand-200 active:shadow-none active:bg-white'
                        onClick={() => setCombineBills(false)}
                        
                >
                    Cancel 
                </button>
                <button className='text-center bg-[#3B82F6] fontButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
                            hover:ShadowPrimaryHover active:shadow-none'
                >
                    Confirm
                </button>
            </div>
        </div>
    </div>
  )
}

export default CombineBills
