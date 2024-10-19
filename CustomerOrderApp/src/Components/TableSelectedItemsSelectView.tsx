import NotificationIcon from './NotificationIconView'
import ProfilePlaceholderIcon from '../Assets/Icons/ProfilePlaceholder.svg'
import TableDetails from './TableDetails/TableDetailsView'
import ItemsList from './ItemsSelected/ItemsListView'
import NewItemsList from './NewItemsSelected/NewItemsListView'
import FoodPlaceOrder from './FoodPlaceOrderView'
import TableSelectedPlaceholder from './TableSelectedPlaceholderView'
import useTableSelectedItemsViewModel from '../ViewModels/TableSelectedItemsSelectViewModel'

const TableSelected = () => {
  const {
    currentTable, dispatch, viewAll, setViewAll, order, setOrder, loading, setLoading,
    handleNotificationsClick, takeaway
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
    :order == null
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
          order={order}
        />
        <ItemsList viewAll={viewAll} setViewAll = {setViewAll} />
        <NewItemsList viewAll={viewAll} setViewAll = {setViewAll} />
        <FoodPlaceOrder />
    </div>
  )
}

export default TableSelected
