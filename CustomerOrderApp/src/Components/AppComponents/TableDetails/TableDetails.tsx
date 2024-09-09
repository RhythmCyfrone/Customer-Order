import { useAppDispatch, useAppSelector } from '../../../State/hooks'
import { statusToColors, orderStatusColors } from '../../../Assets/Constants/TableColors'
import DropDownIcon from '../../../Assets/Icons/DropDown.svg'
import { useState } from 'react'

const TableDetails = () => {
    const [orderStatus, setOrderStatus] = useState<keyof typeof orderStatusColors>('Order Confirm')
    const [dropDown, setDropDown] = useState(false)
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
            {
                dropDown
                ?<div className='z-10 bg-white absolute top-0 left-0 w-full rounded-[8px] border-[1px] border-[#3B82F6] transition-height duration-200'>
                    <div className='-translate-x-[1px] w-full cursor-pointer -translate-y-[1px] rounded-[8px] border-[1px] bg-[#EBF3FE] border-[#3B82F6] flex justify-center items-center box-content'
                        onClick={() => setDropDown(!dropDown)}
                    >
                        <div className='flex w-full h-full p-[8px] rounded-[8px] gap-x-[8px] items-center'>
                            <div className={`w-[16px] h-[16px] rounded-[50%] ${orderStatusColors[orderStatus]}`}></div>
                            <span className='flex-1 font-opensans text-[16px] font-medium'>{orderStatus}</span>
                            <img src={DropDownIcon}/>
                        </div>
                    </div>
                    <div className=' max-h-[100px] opacity-1 w-full  rounded-[8px] flex justify-center items-center box-content transition-height duration-200'>
                        <div className='flex w-full h-full p-[2px] ps-[8px] pe-[8px] mt-[8px] mb-[8px]  gap-x-[8px] justify-between items-center hover:bg-[#EBF3FE] cursor-pointer'
                            onClick={() => {
                                setTimeout(() => {
                                    setOrderStatus(orderStatus == 'Order Confirm'?'Served':'Order Confirm')
                                    setDropDown(false)
                                }, 0)
                            }}
                        >
                            <div className={`w-[16px] h-[16px] rounded-[50%] ${orderStatusColors[orderStatus == 'Order Confirm'?'Served':'Order Confirm']}`}></div>
                            <span className='flex-1 font-opensans text-[16px] font-medium'>{orderStatus == 'Order Confirm'?'Served':'Order Confirm'}</span>
                        </div>
                    </div>
                </div>
                :<div className='z-10 absolute top-0 left-0 w-full rounded-[8px] transition-height duration-200'>
                    <div className='-translate-x-[1px] w-full cursor-pointer -translate-y-[1px] rounded-[8px] hover:bg-[#EBF3FE] flex justify-center items-center box-content'
                        onClick={() => setDropDown(!dropDown)}
                    >
                        <div className='flex w-full h-full p-[8px] rounded-[8px] gap-x-[8px] items-center'>
                            <div className={`w-[16px] h-[16px] rounded-[50%] ${orderStatusColors[orderStatus]}`}></div>
                            <span className='flex-1 font-opensans text-[16px] font-medium'>{orderStatus}</span>
                            <img src={DropDownIcon} />
                        </div>
                    </div>
                    <div className='max-h-[0px] opacity-0 w-full  rounded-[8px] flex justify-center items-center box-content transition-height duration-200'>
                        <div className='flex w-full h-full p-[2px] ps-[8px] pe-[8px] mt-[8px] mb-[8px]  gap-x-[8px] justify-between items-center hover:bg-[#EBF3FE]'>
                            <div className={`w-[16px] h-[16px] rounded-[50%] ${orderStatusColors[orderStatus == 'Order Confirm'?'Served':'Order Confirm']}`}></div>
                            <span className='flex-1 font-opensans text-[16px] font-medium'>{orderStatus == 'Order Confirm'?'Served':'Order Confirm'}</span>
                        </div>
                    </div>
                </div>
            }
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
