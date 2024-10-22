import NotificationIcon from '../NotificationIconView'
import ProfilePlaceholderIcon from '../../Assets/Icons/ProfilePlaceholder.svg'
import ReserveIcon from '../../Assets/Icons/Reserved.svg'
import CombineIcon from '../../Assets/Icons/Combine.svg'
import { orderStatusToColors } from '../../Constants/OrderStatusColors'
import useTableSelectedDashboardFreeViewModel from '../../ViewModels/TableSelectedDashboardFreeViewModel'
import QuickActionsView from './QuickActionsView'
import ReserveView from './ReserveView'

type orderStatusType = keyof typeof orderStatusToColors

type TableSelectedDashboardFreeViewProps = {
    handleNotificationsClick: (e: React.MouseEvent<HTMLImageElement | HTMLDivElement>, initiator: string) => void
}
const TableSelectedDashboardFreeView = ({handleNotificationsClick}: TableSelectedDashboardFreeViewProps) => {
    const {
        currentTable, view, handleViews, newCustomerMail, handleNewCustomerMailChange,
        newCustomerName, newCustomerMobile, handleNewCustomerNameChange, handleNewCustomerMobileChange,
        countPersons, updateCountPersons, disableConfirmQuickActions, dateInput, handleDateInputChange,
        timeInput, handleTimeInputChange, showCalender, handleShowCalender, showTimePicker, handleShowTimePicker
    } = useTableSelectedDashboardFreeViewModel()

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
                        <span className='flex-1 font-opensans text-[16px] font-medium'>Free</span>
                    </div>
                </div>
            </div>
        </div>
        {
            view === 'Default'
            ?<QuickActionsView
                newCustomerName={newCustomerName}
                newCustomerMobile={newCustomerMobile}
                countPersons={countPersons}
                updateCountPersons={updateCountPersons}
                handleNewCustomerNameChange={handleNewCustomerNameChange}
                handleNewCustomerMobileChange={handleNewCustomerMobileChange}
            />
            :view === 'Reserve'
            ?<ReserveView
                newCustomerName={newCustomerName}
                newCustomerMobile={newCustomerMobile}
                newCustomerMail={newCustomerMail}
                dateInput={dateInput}
                timeInput={timeInput}
                countPersons={countPersons}
                updateCountPersons={updateCountPersons}
                handleNewCustomerNameChange={handleNewCustomerNameChange}
                handleNewCustomerMobileChange={handleNewCustomerMobileChange}
                handleNewCustomerMailChange={handleNewCustomerMailChange}
                handleDateInputChange={handleDateInputChange}
                handleTimeInputChange={handleTimeInputChange}
                showCalender={showCalender}
                handleShowCalender={handleShowCalender}
                showTimePicker={showTimePicker}
                handleShowTimePicker={handleShowTimePicker}
            />
            :<></>
        }
        {
            view === 'Default' &&
            <div className='flex w-[335px] flex-col mt-[12px]'>
                <span className='font-poppins font-[500] text-[20px] leading-[30px] w-[335px] text-start'>Quick Actions</span>
                <div className='flex justify-between w-[335px] mt-[12px] mb-[36px]'>
                    <div className='w-[64px] p-[5.5px] ps-[14px] pe-[14px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer'
                        onClick={() => handleViews('Reserve')}
                    >
                        <img src={ReserveIcon} />
                        <span className='font-poppins font-[300] text-[9px] leading-[10px] text-white'>Reserve</span>
                    </div>
                    <div className='w-[64px] p-[5.5px] ps-[14px] pe-[14px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer'
                        onClick={() => handleViews('Split')}
                    >
                        <img src={ReserveIcon} />
                        <span className='font-poppins font-[300] text-[9px] leading-[10px] text-white'>Split</span>
                    </div>
                    <div className='w-[64px] p-[5.5px] ps-[14px] pe-[14px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer'
                        onClick={() => handleViews('Combine')}
                    >
                        <img src={CombineIcon} />
                        <span className='font-poppins font-[300] text-[9px] leading-[10px] text-white'>Combine</span>
                    </div>
                </div>
            </div>
        }
        <div className='flex w-[335px] gap-x-[12px] justify-between '>
            <button className='flex-1 text-center fontSecondaryButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
                hover:bg-CustomBrand-200 active:shadow-none active:bg-white'
                onClick={() => handleViews('Default')}
            >
                Cancel
            </button>
            <button className='flex-1 text-center bg-[#3B82F6] fontButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
                hover:ShadowPrimaryHover active:shadow-none disabled:cursor-default disabled:bg-[#292929] disabled:bg-opacity-20 disabled:text-[#292929] disabled:opacity-80 disabled:border-[0px] disabled:shadow-none'
                disabled={disableConfirmQuickActions}
            >
                Confirm
            </button>
        </div>
    </div>
  )
}

export default TableSelectedDashboardFreeView
