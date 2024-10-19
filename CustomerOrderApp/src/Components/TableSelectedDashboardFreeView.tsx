import NotificationIcon from './NotificationIconView'
import ProfilePlaceholderIcon from '../Assets/Icons/ProfilePlaceholder.svg'
import ReserveIcon from '../Assets/Icons/Reserved.svg'
import CombineIcon from '../Assets/Icons/Combine.svg'
import { orderStatusToColors } from '../Constants/OrderStatusColors'
import useTableSelectedDashboardFreeViewModel from '../ViewModels/TableSelectedDashboardFreeViewModel'

type orderStatusType = keyof typeof orderStatusToColors

type TableSelectedDashboardFreeViewProps = {
    handleNotificationsClick: (e: React.MouseEvent<HTMLImageElement | HTMLDivElement>, initiator: string) => void
}
const TableSelectedDashboardFreeView = ({handleNotificationsClick}: TableSelectedDashboardFreeViewProps) => {
    const {
        currentTable
    } = useTableSelectedDashboardFreeViewModel()
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
                <span className='flex-1 font-poppins text-[24px] font-medium text-[#FFB800]'>{currentTable}</span>
                <div className='relative flex-1'>
                    <div className='flex w-full h-full p-[8px] rounded-[8px] gap-x-[8px] items-center hover:bg-[#EBF3FE]'>
                        <div className={`w-[16px] h-[16px] rounded-[50%] ${orderStatusToColors['Ordered' as orderStatusType]}`}></div>
                        <span className='flex-1 font-opensans text-[16px] font-medium'>Free</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex w-[335px] flex-col p-[4px] gap-y-[12px] mt-[16px]'>
            <span className='flex-1 font-poppins text-[16px] leading-[24px] font-medium'>
                Quick Actions
            </span>
            <div className='m-[8px] flex justify-center items-center fontButtonDefault bg-gradient-to-r from-[#3B82F6] to-[#0053DB] cursor-pointer rounded-[8px] p-[12px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover active:shadow-none'
              >
                <span>Assign</span>
            </div>
        </div>
        <div className='flex justify-between w-[335px] mt-[24px]'>
            <div className='w-[64px] p-[5.5px] ps-[14px] pe-[14px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer'
            >
                <img src={ReserveIcon} />
                <span className='font-poppins font-[300] text-[9px] leading-[10px] text-white'>Reserve</span>
            </div>
            <div className='w-[64px] p-[5.5px] ps-[14px] pe-[14px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer'
            >
                <img src={ReserveIcon} />
                <span className='font-poppins font-[300] text-[9px] leading-[10px] text-white'>Split</span>
            </div>
            <div className='w-[64px] p-[5.5px] ps-[14px] pe-[14px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer'
            >
                <img src={CombineIcon} />
                <span className='font-poppins font-[300] text-[9px] leading-[10px] text-white'>Combine</span>
            </div>
        </div>
    </div>
  )
}

export default TableSelectedDashboardFreeView
