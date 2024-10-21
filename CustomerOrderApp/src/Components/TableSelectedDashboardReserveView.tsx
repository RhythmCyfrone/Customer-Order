import NotificationIcon from './NotificationIconView'
import ProfilePlaceholderIcon from '../Assets/Icons/ProfilePlaceholder.svg'
import EditIcon from '../Assets/Icons/Edit.svg'
import CalenderBlackIcon from '../Assets/Icons/CalendarBlack.svg'
import PhoneBlackIcon from '../Assets/Icons/PhoneBlack.png'
import MailBlackIcon from '../Assets/Icons/MailBlack.svg'
import { orderStatusToColors } from '../Constants/OrderStatusColors'

type orderStatusType = keyof typeof orderStatusToColors

type TableSelectedDashboardReserveViewProps = {
  currentTable: string
  handleNotificationsClick: (e: any, type: string) => void
}

const TableSelectedDashboardReserveView = ({
  currentTable, handleNotificationsClick
}: TableSelectedDashboardReserveViewProps) => {
  return (
    <div className='relative w-[420px] flex flex-col medium:pt-[60px] pt-[80px] pb-[40px] items-center shadow-table-selected overflow-y-scroll'>
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
                <span className='flex-1 font-poppins text-[24px] font-medium text-[#FFB800]'>{currentTable}</span>
                <div className='relative flex-1'>
                    <div className='flex w-full h-full p-[8px] rounded-[8px] gap-x-[8px] items-center hover:bg-[#EBF3FE]'>
                        <div className={`w-[16px] h-[16px] rounded-[50%] ${orderStatusToColors['Ordered' as orderStatusType]}`}></div>
                        <span className='flex-1 font-opensans text-[16px] font-medium'>Reserved</span>
                    </div>
                </div>
            </div>
        </div>
        <span className='w-[335px] font-poppins font-normal text-[12px] leading-[18px]'>Customer Name</span>
        <div className='flex w-[335px] justify-between mt-[8px]'>
          <span className='w-[335px] font-poppins font-medium text-[16px] leading-[24px]'>Rajesh Kumar</span>
          <img src={EditIcon} className='cursor-pointer' />
        </div>
        <div className='flex flex-col w-[335px] gap-y-[16px] mt-[24px]'>
            <div className='flex gap-x-[8px]'>
              <img src={CalenderBlackIcon} />
              <span className='font-poppins font-medium text-[16px] leading-[24px]'>17/08/2024 7:00 PM</span>
            </div>
            <div className='flex gap-x-[8px]'>
              <img src={PhoneBlackIcon} />
              <span className='font-poppins font-medium text-[16px] leading-[24px]'>+91 9652 803 383</span>
            </div>
            <div className='flex gap-x-[8px]'>
              <img src={MailBlackIcon} />
              <span className='font-poppins font-medium text-[16px] leading-[24px]'>rajeshkumar55@gmail.com</span>
            </div>
        </div>
        <div className='m-[8px] w-[335px] mt-[24px] flex justify-center items-center fontButtonDefault bg-gradient-to-r from-[#3B82F6] to-[#0053DB] cursor-pointer rounded-[8px] p-[12px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover active:shadow-none'
        >
            <span>Assign</span>
        </div>
        <button className='w-[335px] mt-[4px] text-center fontSecondaryButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
            hover:bg-CustomBrand-200 active:shadow-none active:bg-white'
        >
            Cancel
        </button>
      </div>
  )
}

export default TableSelectedDashboardReserveView
