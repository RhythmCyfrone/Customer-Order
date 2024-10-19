import { OrderDTO } from '../../Models/HTTPServices/ResponseDTO'
import useTableDetailsViewModel from '../../ViewModels/TableDetailsViewModel';
import OrderStatusDropdown from './OrderStatusDropdownView'

type TableDetailsProps = {
    order: OrderDTO;
}
const TableDetails = ({order}: TableDetailsProps) => {
    const {
        currentTable
    } = useTableDetailsViewModel()
  return (
    <div className='flex w-[335px] flex-col p-[4px]'>
        <div className='flex items-center'>
            <span className='flex-1 font-poppins text-[16px] font-medium'>
                Table
            </span>
            <span className='flex-1 ms-[8px] font-quicksand text-[12px] font-normal'>Status</span>
        </div>
        <div className='flex items-start'>
            <span className='flex-1 font-poppins text-[24px] font-medium text-[#FFB800]'>{currentTable}</span>
            <div className='relative flex-1'>
                <OrderStatusDropdown 
                    orderID={order.orderId} 
                    currentStatus = {order.orderStatusId}
                />
            </div>
        </div>
        {!(currentTable == 'AddTakeaway') &&
            <>
                <div className='flex items-center mt-[8px]'>
                    <span className='flex-1 font-poppins text-[12px] font-normal'>Order Taken By</span>
                    <span className='flex-1 ms-[8px] font-quicksand text-[12px] font-normal'>Customer Name</span>
                </div>
                <div className='flex items-center mt-[8px]'>
                    <span className='flex-1 font-poppins text-[16px] font-medium'>{order.orderTakerName}</span>
                    <span className='flex-1 ms-[8px] font-quicksand text-[16px] font-medium'>{order.customerName}</span>
                </div>
                <div className='flex items-center mt-[8px]'>
                    <span className='flex-1 font-poppins text-[12px] font-normal'>Order ID</span>
                    <span className='flex-1 ms-[8px] font-quicksand text-[12px] font-normal'>Bill ID</span>
                </div>
                <div className='flex items-center mt-[4px]'>
                    <span className='flex-1 font-poppins text-[12px] font-semibold'>{order.orderId}</span>
                    <span className='flex-1 ms-[8px] font-quicksand text-[12px] font-semibold'>#{order.billId}</span>
                </div>
            </>
        }
        
    </div>
  )
}

export default TableDetails
