import '../../../Styles/Shadows.css'
import '../../../Styles/Fonts.css'
import NotificationIcon from '../NotificationIcon'
import ProfilePlaceholderIcon from '../../../Assets/Icons/ProfilePlaceholder.svg'
import TableDetails from '../TableDetails'
import { useAppDispatch, useAppSelector } from '../../../State/hooks'
import ItemsList from '../ItemsSelected/ItemsList'
import { useEffect, useState } from 'react'
import { getOrdersByTable } from '../../../api/Orders'
import { OrdersType } from '../../../api/types'
import { setStartPosition } from '../../../Screens/BackdropSlice'
import { AxiosResponse } from 'axios'
import NewItemsList from '../NewItemsSelected/NewItemsList'
import FoodPlaceOrder from '../FoodPlaceOrder'
import TableSelectedPlaceholder from '../TableSelectedPlaceholder'
import useTableSelectedItemsViewModel from './viewModel'

const TableSelected = () => {
  const {
    currentFloor, currentTable, dispatch, viewAll, setViewAll, order, setOrder, loading, setLoading, handleNotificationsClick
  } = useTableSelectedItemsViewModel()

  return (
    loading
    ?
    <TableSelectedPlaceholder 
      content='Loading ...'
      handleNotificationsClick={handleNotificationsClick}
    />
    :currentTable == 'None'
    ?
    <TableSelectedPlaceholder 
      content='No table selected'
      handleNotificationsClick={handleNotificationsClick}
    />
    :order == null || order?.length == 0
    ?
    <TableSelectedPlaceholder 
      content='No Orders'
      handleNotificationsClick={handleNotificationsClick}
    />
    :<div className={`relative w-[420px] flex flex-col pt-[80px] medium:pt-[56px] items-center shadow-table-selected`}>
        <NotificationIcon
          handleNotificationsClick={handleNotificationsClick}
        />
        <img src={ProfilePlaceholderIcon} className='absolute left-[83%] top-[21px] cursor-pointer' 
          onClick={(e) => handleNotificationsClick(e, 'Profile')}
        />
        <TableDetails 
          order={order as OrdersType[]}
        />
        <ItemsList viewAll={viewAll} setViewAll = {setViewAll} />
        <NewItemsList viewAll={viewAll} setViewAll = {setViewAll} />
        <FoodPlaceOrder />
    </div>
  )
}

export default TableSelected
