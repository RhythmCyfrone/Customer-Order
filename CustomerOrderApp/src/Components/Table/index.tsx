import '../../Styles/Shadows.css'
import '../../Styles/Fonts.css'
import {selectTable} from '../../State/Slices/TableSlice'
import TablePressedEclipse from '../../Assets/Icons/TablePressedEclipse.svg'
import './Table.css'
import useTableViewModel from './TableViewModel'
import { Status } from './TableViewModel'

type TableProps = {
    status: Status;
    tableNumber: string;
    floor: string;
    time: string;
    occupancy: number
}

const Table = ({status, floor, tableNumber, time, occupancy}: TableProps) => {
  const {
      selectedTable, currentFloor, dispatch, statusColorClass, statusColorText
  } = useTableViewModel(status)
  
  return (
    <div className='flex w-[156px] h-[88px] cursor-pointer'
        onClick={() => dispatch(selectTable({
            currentFloor: floor,
            selectedTable: tableNumber
        }))}
    >
        <div className={`table-status w-[8px] rounded-l-[10px] ${statusColorClass}`}>
        </div>
        {
            currentFloor == floor && selectedTable == tableNumber
            ?
            <div className='relative flex-1 bg-CustomBrand-300 p-[4px] flex flex-col gap-y-[7px] shadow-table'>
                <div className='absolute top-[4px] right-[4px] rounded-[14px] w-[14px] bg-[#FFFFFF] h-[14px] flex justify-center items-center'>
                    <span className='font-poppins font-normal text-[12px]'>{occupancy}</span>
                </div>
                <div className='flex flex-col pt-[4px]'>
                    <div className='font-poppins font-medium text-[24px] leading-[32.68px] text-white'>
                        {tableNumber}
                    </div>
                    <div className={`font-poppins font-medium text-[15px] leading-[21.79px] text-white`}>
                        {status}
                    </div>
                </div>  
                <div className='font-poppins font-normal text-[10px] leading-[16.34px] text-white'>
                    {time}
                </div>
            </div>
            :<div className='table relative flex-1 bg-[#EBF3FE] p-[4px] flex flex-col gap-y-[7px] shadow-table
                            hover:bg-[#D6E6FF] hover:ShadowTableHover active:bg-[#EBF3FE]'
            >
                <img src={TablePressedEclipse} className='hidden table-press-elipse absolute right-0 bottom-0 w-[65%]'/>
                <div className='absolute top-[4px] right-[4px] rounded-[14px] w-[14px] bg-[#FFFFFF] h-[14px] flex justify-center items-center'>
                    <span className='font-poppins font-normal text-[12px] text-CustomText-200'>{occupancy}</span>
                </div>
                <div className='flex flex-col pt-[4px]'>
                    <div className='font-poppins font-medium text-[24px] leading-[32.68px]'>
                        {tableNumber}
                    </div>
                    <div className={`font-poppins font-medium text-[15px] leading-[21.79px] ${statusColorText}`}>
                        {status}
                    </div>
                </div>  
                <div className='font-poppins font-normal text-[10px] leading-[16.34px] text-CustomText-200'>
                    {time}
                </div>
            </div>
        }
    </div>
  )
}

export default Table
