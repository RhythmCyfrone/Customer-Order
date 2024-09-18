import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../State/hooks'
import { CustomersType, OrdersType } from '../../../api/types'
import { AxiosResponse } from 'axios'
import OrderStatusDropdown from './OrderStatusDropdown'
import { getCustomerByID } from '../../../api/Customers'

type TableDetailsProps = {
    order: OrdersType[]
}
const TableDetails = ({order}: TableDetailsProps) => {
    const currentTable = useAppSelector(state => state.tableSelect.selectedTable)
    const currentFloor = useAppSelector(state => state.tableSelect.currentFloor)
    const [customerName, setCustomerName] = useState<string>()
    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchCustomerByID = async () => {
            try{
                const data:AxiosResponse<CustomersType[]> = await getCustomerByID(order[0]?.CustomerID)
                if(data.status == 200)
                {
                    setCustomerName(data.data[0]?.Name)
                }
            }catch(err) {
                console.log(err)
            }
        }
        fetchCustomerByID()

    }, [])
  return (
    <div className='flex w-[335px] flex-col p-[4px]'>
        <div className='flex items-center'>
            <span className='flex-1 font-poppins text-[16px] font-medium'>Table</span>
            <span className='flex-1 ms-[8px] font-quicksand text-[12px] font-normal'>Status</span>
        </div>
        <div className='flex items-start'>
            <span className='flex-1 font-poppins text-[24px] font-medium text-[#FFB800]'>{order[0]?.TableID}</span>
            <div className='relative flex-1'>
                <OrderStatusDropdown 
                    orderID={order[0].id} 
                    currentStatus = {order[0]['Order Status']}
                />
            </div>
        </div>
        <div className='flex items-center mt-[8px]'>
            <span className='flex-1 font-poppins text-[12px] font-normal'>Order Taken By</span>
            <span className='flex-1 ms-[8px] font-quicksand text-[12px] font-normal'>Customer Name</span>
        </div>
        <div className='flex items-center mt-[8px]'>
            <span className='flex-1 font-poppins text-[16px] font-medium'>{order[0]['Order Taken By']}</span>
            <span className='flex-1 ms-[8px] font-quicksand text-[16px] font-medium'>{customerName}</span>
        </div>
        <div className='flex items-center mt-[8px]'>
            <span className='flex-1 font-poppins text-[12px] font-normal'>Order ID</span>
            <span className='flex-1 ms-[8px] font-quicksand text-[12px] font-normal'>Bill ID</span>
        </div>
        <div className='flex items-center mt-[4px]'>
            <span className='flex-1 font-poppins text-[12px] font-semibold'>{order[0]?.id}</span>
            <span className='flex-1 ms-[8px] font-quicksand text-[12px] font-semibold'>#9977</span>
        </div>
    </div>
  )
}

export default TableDetails
