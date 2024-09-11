import '../../../Styles/Shadows.css'
import '../../../Styles/Fonts.css'
import NotificationIcon from '../../../Assets/Icons/Notification.svg'
import ProfilePlaceholderIcon from '../../../Assets/Icons/ProfilePlaceholder.svg'
import BillDetails from '../BillDetails/BillDetails'
import TableDetails from '../TableDetails/TableDetails'
import { useAppDispatch, useAppSelector } from '../../../State/hooks'
import ItemsList from '../ItemsSelected/ItemsList'
import { useEffect, useState } from 'react'
import { getOrdersByTable } from '../../../api/Orders'
import { OrdersType } from '../../../api/types'
import { AxiosResponse } from 'axios'

const TableSelected = () => {
  const currentTable = useAppSelector(state => state.tableSelect.selectedTable)
  const currentFloor = useAppSelector(state => state.tableSelect.currentFloor)
  const [order, setOrder] = useState<OrdersType[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(true)
    if(currentTable == 'None') {
      setLoading(false)
      return
    }
    const fetchOrderByTableID = async () => {
      try{
        const data:AxiosResponse<OrdersType[]> = await getOrdersByTable(currentTable)
        if(data.status == 200)
        {
          console.log(data.data)
          setOrder(data.data)
          setLoading(false)
        }
      }catch(err) {
        console.log(err)
      }
    }
    fetchOrderByTableID()
  }, [currentTable, currentFloor])

  return (
    loading
    ?<span>Loading ...</span>
    :currentTable == 'None'
    ?
    <div className='relative w-[420px] flex flex-col justify-center items-center shadow-table-selected'>
        <img src={NotificationIcon} className='absolute left-[70%] top-[27px]' />
        <img src={ProfilePlaceholderIcon} className='absolute left-[83%] top-[21px]' />
        <span className='font-poppins text-[24px] font-semibold text-[#191919] leading-[36px] opacity-50'>
            No Table Selected
        </span>
    </div>
    :order == null || order?.length == 0
    ?
    <div className='relative w-[420px] flex flex-col justify-center items-center shadow-table-selected'>
        <img src={NotificationIcon} className='absolute left-[70%] top-[27px]' />
        <img src={ProfilePlaceholderIcon} className='absolute left-[83%] top-[21px]' />
        <span className='font-poppins text-[24px] font-semibold text-[#191919] leading-[36px] opacity-50'>
            No Orders
        </span>
    </div>
    :<div className='relative w-[420px] flex flex-col pt-[90px] items-center shadow-table-selected'>
        <img src={NotificationIcon} className='absolute left-[70%] top-[27px]' />
        <img src={ProfilePlaceholderIcon} className='absolute left-[83%] top-[21px]' />
        <BillDetails />
        <TableDetails 
          order={order as OrdersType[]}
        />
        <ItemsList />
        <div className='mt-[20px] w-full ps-[16px] pe-[16px]'>
          <button className='text-center w-full fontSecondaryButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
                      hover:bg-CustomBrand-200 active:shadow-none active:bg-white'
          >
            Add Items
          </button>
        </div>
    </div>
  )
}

export default TableSelected
