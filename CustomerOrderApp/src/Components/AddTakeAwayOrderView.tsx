import NotificationIcon from './NotificationIconView'
import ProfilePlaceholderIcon from '../Assets/Icons/ProfilePlaceholder.svg'
import { OrderDTO } from '../Models/HTTPServices/ResponseDTO'
import { orderStatusToColors } from '../Constants/OrderStatusColors'
import DropDownIcon from '../Assets/Icons/DropDown.svg'
import useAddTakeAwayOrderViewModel from '../ViewModels/AddTakeAwayOrderViewModel'

type orderStatusType = keyof typeof orderStatusToColors
type AddTakeAwayOrderViewProps = {
  order: OrderDTO;
  handleNotificationsClick: (e: React.MouseEvent<HTMLImageElement | HTMLDivElement>, initiator: string) => void
}

const AddTakeAwayOrderView = ({order, handleNotificationsClick}: AddTakeAwayOrderViewProps) => {
  const {
    disableAddItem, newCustomerMobile, newCustomerName,
    handleNewCustomerMobileChange, handleNewCustomerNameChange, handleAddItems
  } = useAddTakeAwayOrderViewModel()
  return (
    <div className='relative w-[420px] flex flex-col medium:pt-[60px] pt-[80px] pb-[40px] items-center shadow-table-selected'>
        <NotificationIcon
          handleNotificationsClick={handleNotificationsClick}
        />
        <img src={ProfilePlaceholderIcon} className='absolute left-[83%] top-[21px] cursor-pointer' 
          onClick={(e) => handleNotificationsClick(e, 'Profile')}
        />
        <div className='flex w-[335px] flex-col p-[4px]'>
            <div className='flex items-center'>
                <span className='flex-1 font-poppins text-[16px] font-medium'>
                    Table
                </span>
                <span className='flex-1 ms-[8px] font-quicksand text-[12px] font-normal'>Status</span>
            </div>
            <div className='flex items-start'>
                <span className='flex-1 font-poppins text-[24px] font-medium text-[#FFB800]'>TW</span>
                <div className='relative flex-1'>
                    <div className='flex w-full h-full p-[8px] rounded-[8px] gap-x-[8px] items-center hover:bg-[#EBF3FE]'>
                        <div className={`w-[16px] h-[16px] rounded-[50%] ${orderStatusToColors['Ordered' as orderStatusType]}`}></div>
                        <span className='flex-1 font-opensans text-[16px] font-medium'>Free</span>
                    </div>
                </div>
            </div>
        </div>
        <span className='font-poppins font-[600] text-[12px] leading-[18px] w-[335px] text-start'>Customer Name</span>
        <input
              className='outline-none bg-[#DDEBFF] p-[11px] w-[335px] mt-[8px] rounded-[11px]'
              type='text'
              value={newCustomerName}
              onChange={(e) => handleNewCustomerNameChange(e)}
        />
        <span className='font-poppins font-[600] mt-[12px] text-[12px] leading-[18px] w-[335px] text-start'>
          Mobile Number
          <span className='font-poppins font-[400] text-[12px] leading-[18px] text-[#6B7280]'> (Optional)</span>
        </span>
        <div className='flex gap-x-[16px] w-[335px] mt-[8px]'>
          <div className=' bg-[#DDEBFF] rounded-[11px] flex justify-center items-center gap-x-[8px] p-[8px]'>
            <img src={DropDownIcon} />
            <span className='font-quicksand font-[500] text-[16px] leading-[20px]'>91</span>
          </div>
          <input className='outline-none bg-[#DDEBFF] p-[11px] flex-1 rounded-[11px]'
                type='text'
                value={newCustomerMobile}
                onChange={(e) => handleNewCustomerMobileChange(e)}
          />
        </div>
        <div className='flex w-[335px] justify-between mt-[36px]'>
            <button className='text-center fontSecondaryButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
                hover:bg-CustomBrand-200 active:shadow-none active:bg-white'
            >
                Cancel
            </button>
            <button className='text-center bg-[#3B82F6] fontButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
                hover:ShadowPrimaryHover active:shadow-none disabled:cursor-default disabled:bg-[#292929] disabled:bg-opacity-20 disabled:text-[#292929] disabled:opacity-80 disabled:border-[0px] disabled:shadow-none'
                disabled={disableAddItem}
                onClick={() => handleAddItems()}
            >
                Add Item to Order
            </button>
        </div>
        
    </div>
  )
}

export default AddTakeAwayOrderView
