import '../Styles/Shadows.css'
import '../Styles/Fonts.css'
import NotificationIcon from './NotificationIconView'
import ProfilePlaceholderIcon from '../Assets/Icons/ProfilePlaceholder.svg'
import BillDetails from './BillDetailsView'
import TableDetails from './TableDetails/TableDetailsView'
import ItemsList from './ItemsSelected/ItemsListView'
import { selectScreen } from '../State/Slices/ScreensSlice'
import TableSelectedPlaceholder from './TableSelectedPlaceholderView'
import useTableSelectedDashboardViewModel from '../ViewModels/TableSelectedDashboardViewModel'
import CombineBills from './CombileBillsView'
import SplitBills from './SplitBillsView'
import AddTakeAwayOrderView from './AddTakeAwayOrderView'
import TableSelectedDashboardFreeView from './TableSelectedDashboardFreeView'
import TableSelectedDashboardGenerateBillView from './TableSelectedDashboardGenerateBillView'

const TableSelected = () => {

  const {
    currentTable, currentTableStatus, dispatch, order, loading, note, setNote,
    discount, setDiscount, handleNotificationsClick, combineBills, setCombineBills,
    splitBills, setSplitBills, generateBill, setGenerateBill, takeaway
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
    :currentTableStatus == 'Free'
    ?<TableSelectedDashboardFreeView
      handleNotificationsClick={handleNotificationsClick}
    />
    :order == null
    ?
    <TableSelectedPlaceholder 
      content='No Orders'
      handleNotificationsClick={handleNotificationsClick}
    />
    :currentTable == 'AddTakeaway'
    ?<AddTakeAwayOrderView
      order={order}
      handleNotificationsClick={handleNotificationsClick}
    />
    :generateBill
    ?<TableSelectedDashboardGenerateBillView
      currentTable={currentTable}
      handleNotificationsClick={handleNotificationsClick}
      setGenerateBill={setGenerateBill}
    />
    :<div className='relative w-[420px] flex flex-col medium:pt-[60px] pt-[80px] items-center shadow-table-selected'>
        <NotificationIcon
          handleNotificationsClick={handleNotificationsClick}
        />
        <img src={ProfilePlaceholderIcon} className='absolute left-[83%] top-[21px] cursor-pointer' 
          onClick={(e) => handleNotificationsClick(e, 'Profile')}
        />
        {combineBills == false && splitBills == false
          ?
          <BillDetails 
            note={note}
            setNote={setNote}
            discount={discount}
            setDiscount={setDiscount}
            handleNotificationsClick={handleNotificationsClick}
            setCombineBills = {setCombineBills}
            splitBills={splitBills}
            setSplitBills={setSplitBills}
            generateBill={generateBill}
            setGenerateBill={setGenerateBill}
            takeaway={takeaway}
          />
          :combineBills
          ?<CombineBills 
            note={note}
            setNote={setNote}
            discount={discount}
            setDiscount={setDiscount}
            handleNotificationsClick={handleNotificationsClick}
            setCombineBills={setCombineBills}
          />
          :<SplitBills
            setSplitBills={setSplitBills}
          />
        }
        
        <TableDetails 
          order={order}
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
