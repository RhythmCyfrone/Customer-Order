import { useAppDispatch, useAppSelector } from '../../../State/hooks'
import OrderStatusDropdown from './OrderStatusDropdown'

const TableDetails = () => {
    const currentTable = useAppSelector(state => state.tableSelect.selectedTable)
    const currentFloor = useAppSelector(state => state.tableSelect.currentFloor)
    const dispatch = useAppDispatch()
  return (
    <div className='flex w-[335px] flex-col p-[4px]'>
        <div className='flex items-center'>
            <span className='flex-1 font-poppins text-[16px] font-medium'>Table</span>
            <span className='flex-1 ms-[8px] font-quicksand text-[12px] font-normal'>Status</span>
        </div>
        <div className='flex items-start'>
            <span className='flex-1 font-poppins text-[24px] font-medium text-[#FFB800]'>{currentTable}</span>
            <div className='relative flex-1'>
                <OrderStatusDropdown />
            </div>
        </div>
        <div className='flex items-center mt-[8px]'>
            <span className='flex-1 font-poppins text-[12px] font-normal'>Order Taken By</span>
            <span className='flex-1 ms-[8px] font-quicksand text-[12px] font-normal'>Customer Name</span>
        </div>
        <div className='flex items-center mt-[8px]'>
            <span className='flex-1 font-poppins text-[16px] font-medium'>Rhythm</span>
            <span className='flex-1 ms-[8px] font-quicksand text-[16px] font-medium'>Tabish</span>
        </div>
        <div className='flex items-center mt-[8px]'>
            <span className='flex-1 font-poppins text-[12px] font-normal'>Order ID</span>
            <span className='flex-1 ms-[8px] font-quicksand text-[12px] font-normal'>Bill ID</span>
        </div>
        <div className='flex items-center mt-[4px]'>
            <span className='flex-1 font-poppins text-[12px] font-semibold'>#12213</span>
            <span className='flex-1 ms-[8px] font-quicksand text-[12px] font-semibold'>#9977</span>
        </div>
    </div>
  )
}

export default TableDetails
