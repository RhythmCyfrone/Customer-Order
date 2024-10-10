import '../Styles/Shadows.css'
import '../Styles/Fonts.css'
import NotificationIcon from './NotificationIconView'
import ProfilePlaceholderIcon from '../Assets/Icons/ProfilePlaceholder.svg'
import PrintIcon from '../Assets/Icons/PrintIcon.svg'
import EditBillIcon from '../Assets/Icons/EditBillIcon.svg'
import BillDetails from './BillDetailsView'
import TableDetails from './TableDetails/TableDetailsView'
import ItemsList from './ItemsSelected/ItemsListView'
import { selectScreen } from '../State/Slices/ScreensSlice'
import TableSelectedPlaceholder from './TableSelectedPlaceholderView'
import useTableSelectedDashboardViewModel from '../ViewModels/TableSelectedDashboardViewModel'
import CombineBills from './CombileBillsView'
import SplitBills from './SplitBillsView'
import GenerateBill from './GenerateBillView'
import AddTakeAwayOrderView from './AddTakeAwayOrderView'

const TableSelected = () => {

  const {
    currentTable, dispatch, order, loading, note, setNote,
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
    ?<div className='relative w-[420px] flex flex-col medium:pt-[60px] pt-[80px] pb-[40px] items-center shadow-table-selected'>
        <NotificationIcon
          handleNotificationsClick={handleNotificationsClick}
        />
        <img src={ProfilePlaceholderIcon} className='absolute left-[83%] top-[21px] cursor-pointer' 
          onClick={(e) => handleNotificationsClick(e, 'Profile')}
        />
        <TableDetails 
          order={order}
          generateBill={true}
          takeaway={takeaway}
        />
        <GenerateBill />
        <div className='flex w-full ps-[16px] pe-[16px] justify-end mb-[8px] mt-[16px]'>
          <button className='text-center flex items-center gap-x-[8px] fontSecondaryButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[8px] pe-[16px] hover:ShadowPrimaryHover
                      hover:bg-CustomBrand-200 active:shadow-none active:bg-white'
          >
              <img src={PrintIcon} alt="My Icon" className="icon-class" />
              Print Bill
          </button>
        </div>
        <div className='flex w-full ps-[16px] pe-[16px] gap-x-[8px]'>
          <div className='p-[4px] ps-[18px] pe-[18px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer'
              onClick={() => setGenerateBill(false)}
          >
              <img src={EditBillIcon} />
              <span className='font-poppins font-normal text-[10px] text-white'>Edit</span>
          </div>
          <div className='flex-1 flex justify-center items-center fontButtonDefault bg-gradient-to-r from-[#3B82F6] to-[#0053DB] cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover active:shadow-none'
                onClick={(e) => handleNotificationsClick(e, 'Accept Payment')}
              >
                <span>Accept Payment</span>
              </div>
          </div>
      </div>
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
          generateBill={false}
          takeaway={takeaway}
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
