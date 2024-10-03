import { orderStatusToColors } from "../../../Assets/Constants/OrderStatusColors"
import DropDownIcon from '../../../../Assets/Icons/DropDown.svg'
import { useOrderStatusDropdown, type OrderStatusDropdownProps } from "./OrderStatusDropdownViewModel"

const OrderStatusDropdown = ({orderID, currentStatus}: OrderStatusDropdownProps) => {
    const {
        dropDown, setDropDown, orderStatus, setOrderStatus, handleUpdateOrderStatus
    } = useOrderStatusDropdown({orderID, currentStatus})

  return (
    dropDown
        ?
        <div className='z-10 bg-white absolute top-0 left-0 w-full rounded-[8px] border-[1px] border-[#3B82F6] transition-height duration-200'>
            <div className='-translate-x-[1px] w-full cursor-pointer -translate-y-[1px] rounded-[8px] border-[1px] bg-[#EBF3FE] border-[#3B82F6] flex justify-center items-center box-content'
                onClick={() => setDropDown(!dropDown)}
            >
                <div className='flex w-full h-full p-[8px] rounded-[8px] gap-x-[8px] items-center'>
                    <div className={`w-[16px] h-[16px] rounded-[50%] ${orderStatusToColors[orderStatus]}`}></div>
                    <span className='flex-1 font-opensans text-[16px] font-medium'>{orderStatus}</span>
                    <img src={DropDownIcon}/>
                </div>
            </div>
            {
                Object.keys(orderStatusToColors).map((status: string, index: number) => {
                    if(status == orderStatus)
                        return <></>
                    return (
                        <div className=' max-h-[100px] opacity-1 w-full  rounded-[8px] flex justify-center items-center box-content transition-height duration-200' key={index}>
                            <div className='flex w-full h-full p-[2px] ps-[8px] pe-[8px] mt-[8px] mb-[8px]  gap-x-[8px] justify-between items-center hover:bg-[#EBF3FE] cursor-pointer'
                                onClick={() => {
                                    setTimeout(() => {
                                        setOrderStatus(status as keyof typeof orderStatusToColors)
                                        setDropDown(false)
                                        handleUpdateOrderStatus(index+1)
                                    }, 0)
                                }}
                            >
                                <div className={`w-[16px] h-[16px] rounded-[50%] ${orderStatusToColors[status as keyof typeof orderStatusToColors]}`}></div>
                                <span className='flex-1 font-opensans text-[16px] font-medium'>{status}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        :<div className='z-10 absolute top-0 left-0 w-full rounded-[8px] transition-height duration-200'>
            <div className='-translate-x-[1px] w-full cursor-pointer -translate-y-[1px] rounded-[8px] hover:bg-[#EBF3FE] flex justify-center items-center box-content'
                onClick={() => setDropDown(!dropDown)}
            >
                <div className='flex w-full h-full p-[8px] rounded-[8px] gap-x-[8px] items-center'>
                    <div className={`w-[16px] h-[16px] rounded-[50%] ${orderStatusToColors[orderStatus]}`}></div>
                    <span className='flex-1 font-opensans text-[16px] font-medium'>{orderStatus}</span>
                    <img src={DropDownIcon} />
                </div>
            </div>
            {
                Object.keys(orderStatusToColors).map((status: string, index: number) => {
                    if(status == orderStatus)
                        return <></>
                    return (
                        <div className='max-h-[0px] opacity-0 w-full  rounded-[8px] flex justify-center items-center box-content transition-height duration-200' key={index}>
                            <div className='flex w-full h-full p-[2px] ps-[8px] pe-[8px] mt-[8px] mb-[8px]  gap-x-[8px] justify-between items-center hover:bg-[#EBF3FE]'>
                                <div className={`w-[16px] h-[16px] rounded-[50%] ${orderStatusToColors[status as keyof typeof orderStatusToColors ]}`}></div>
                                <span className='flex-1 font-opensans text-[16px] font-medium'>{status as keyof typeof orderStatusToColors}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
  )
}

export default OrderStatusDropdown
