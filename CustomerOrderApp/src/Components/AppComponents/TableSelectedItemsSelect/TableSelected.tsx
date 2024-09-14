import '../../../Styles/Shadows.css'
import '../../../Styles/Fonts.css'
import NotificationIcon from '../../../Assets/Icons/Notification.svg'
import ProfilePlaceholderIcon from '../../../Assets/Icons/ProfilePlaceholder.svg'
import TableDetails from '../TableDetails/TableDetails'
import { useAppDispatch, useAppSelector } from '../../../State/hooks'
import ItemsList from '../ItemsSelected/ItemsList'
import { useEffect, useState } from 'react'
import { getOrdersByTable } from '../../../api/Orders'
import { OrdersType } from '../../../api/types'
import { selectScreen } from '../../../Screens/ScreensSlice'
import { AxiosResponse } from 'axios'
import NewItemsList from '../NewItemsSelected/NewItemsList'

const TableSelected = () => {
  const currentTable = useAppSelector(state => state.tableSelect.selectedTable)
  const currentFloor = useAppSelector(state => state.tableSelect.currentFloor)
  const [viewAll, setViewAll] = useState(false)
  const dispatch = useAppDispatch()

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
    ?
    <div className='relative w-[420px] flex flex-col justify-center items-center shadow-table-selected'>
        <img src={NotificationIcon} className='absolute left-[70%] top-[27px]' />
        <img src={ProfilePlaceholderIcon} className='absolute left-[83%] top-[21px]' />
        <span className='font-poppins text-[24px] font-semibold text-[#191919] leading-[36px] opacity-50'>
            Loading ...
        </span>
    </div>
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
    :<div className={`relative w-[420px] flex flex-col pt-[90px] medium:pt-[56px] items-center shadow-table-selected`}>
        <img src={NotificationIcon} className='absolute left-[70%] top-[27px]' />
        <img src={ProfilePlaceholderIcon} className='absolute left-[83%] top-[21px]' />
        <TableDetails 
          order={order as OrdersType[]}
        />
        <ItemsList viewAll={viewAll} setViewAll = {setViewAll} />
        <NewItemsList viewAll={viewAll} setViewAll = {setViewAll} />
    </div>
  )
}

export default TableSelected
