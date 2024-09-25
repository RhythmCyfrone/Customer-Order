import '../../../Styles/Shadows.css'
import '../../../Styles/Fonts.css'
import NotificationIcon from '../NotificationIcon'
import ProfilePlaceholderIcon from '../../../Assets/Icons/ProfilePlaceholder.svg'
import BillDetails from '../BillDetails'
import TableDetails from '../TableDetails'
import ItemsList from '../ItemsSelected/ItemsList'
import { OrdersType } from '../../../api/types'
import { selectScreen } from '../../../Screens/ScreensSlice'
import TableSelectedPlaceholder from '../TableSelectedPlaceholder'
import useTableSelectedDashboardViewModel from './viewModel'

const TableSelected = () => {

  const {
    currentTable, dispatch, order, loading, note, setNote,
    discount, setDiscount, handleNotificationsClick
  } = useTableSelectedDashboardViewModel()

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
    :<div className='relative w-[420px] flex flex-col medium:pt-[60px] pt-[80px] items-center shadow-table-selected'>
        <NotificationIcon
          handleNotificationsClick={handleNotificationsClick}
        />
        <img src={ProfilePlaceholderIcon} className='absolute left-[83%] top-[21px] cursor-pointer' 
          onClick={(e) => handleNotificationsClick(e, 'Profile')}
        />
        <BillDetails 
          note={note}
          setNote={setNote}
          discount={discount}
          setDiscount={setDiscount}
          handleNotificationsClick={handleNotificationsClick}
        />
        <TableDetails 
          order={order as OrdersType[]}
        />
        <ItemsList 
          note={note}
          setNote={setNote}
          discount={discount}
          setDiscount={setDiscount}
        />
        {
          note || discount
          ?
          <div className={`mt-[20px] w-full flex justify-end gap-x-[16px] ps-[16px] pe-[16px] ${note || discount?'pb-[16px]':''}`}>
            <button className='text-center fontSecondaryButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
                        hover:bg-CustomBrand-200 active:shadow-none active:bg-white'
              onClick={() => {
                setNote(false)
                setDiscount(false)
              }}
            >
              Cancel 
            </button>
            <button className='text-center bg-[#3B82F6] fontButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
                         hover:ShadowPrimaryHover active:shadow-none'
              onClick={() => {
                setNote(false)
                setDiscount(false)
              }}
            >
              Confirm
            </button>
          </div>
        :
          <div className={`mt-[20px] w-full ps-[16px] pe-[16px] ${note || discount?'pb-[16px]':''}`}>
            <button className='text-center w-full fontSecondaryButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
                        hover:bg-CustomBrand-200 active:shadow-none active:bg-white'
              onClick={() => dispatch(selectScreen({screen: 'Items Select'}))}
            >
              Add Items
            </button>
          </div>
        }
    </div>
  )
}

export default TableSelected
