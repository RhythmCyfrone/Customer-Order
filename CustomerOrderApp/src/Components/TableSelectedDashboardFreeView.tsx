import NotificationIcon from './NotificationIconView'
import ProfilePlaceholderIcon from '../Assets/Icons/ProfilePlaceholder.svg'
import ReserveIcon from '../Assets/Icons/Reserved.svg'
import CombineIcon from '../Assets/Icons/Combine.svg'
import DropDownIcon from '../Assets/Icons/DropDown.svg'
import PersonAddIcon from '../Assets/Icons/PersonAdd.svg'
import PersonSubtractIcon from '../Assets/Icons/PersonSubtract.svg'
import { orderStatusToColors } from '../Constants/OrderStatusColors'
import useTableSelectedDashboardFreeViewModel from '../ViewModels/TableSelectedDashboardFreeViewModel'

type orderStatusType = keyof typeof orderStatusToColors

type TableSelectedDashboardFreeViewProps = {
    handleNotificationsClick: (e: React.MouseEvent<HTMLImageElement | HTMLDivElement>, initiator: string) => void
}
const TableSelectedDashboardFreeView = ({handleNotificationsClick}: TableSelectedDashboardFreeViewProps) => {
    const {
        currentTable, quickActions, setQuickActions,
        newCustomerName, newCustomerMobile, handleNewCustomerNameChange, handleNewCustomerMobileChange,
        countPersons, updateCountPersons, disableConfirmQuickActions
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
        {
            !quickActions
            ?<div className='flex w-[335px] flex-col p-[4px] gap-y-[12px] mt-[16px]'>
                <span className='flex-1 font-poppins text-[16px] leading-[24px] font-medium'>
                    Quick Actions
                </span>
                <div className='m-[8px] flex justify-center items-center fontButtonDefault bg-gradient-to-r from-[#3B82F6] to-[#0053DB] cursor-pointer rounded-[8px] p-[12px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover active:shadow-none'
                    onClick={() => setQuickActions(true)}
                >
                    <span>Assign</span>
                </div>
            </div>
            :<div className='flex w-[335px] flex-col p-[4px] mt-[16px] mb-[16px]'>
                <span className='font-poppins font-[500] text-[20px] leading-[30px] w-[335px] text-start'>No. of Persons</span>
                <div className='flex justify-center w-full items-center gap-x-[8px] mt-[16px]'>
                    <img src={PersonAddIcon} className='cursor-pointer' 
                        onClick={() => updateCountPersons(countPersons+1)}
                    />
                    <input
                        className='text-center outline-none bg-[#DDEBFF] p-[11px] w-[50px] rounded-[11px]'
                        type='text'
                        value={countPersons}
                        onChange={(e) => updateCountPersons(Math.max(parseInt(e.target.value), 0))}
                    />
                    <img src={PersonSubtractIcon} className='cursor-pointer' 
                        onClick={() => updateCountPersons(Math.max(countPersons-1, 0))}
                    />
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
            </div>
        }
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
        {
            quickActions && 
            <div className='flex w-[335px] gap-x-[12px] justify-between mt-[50px]'>
                <button className='flex-1 text-center fontSecondaryButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
                    hover:bg-CustomBrand-200 active:shadow-none active:bg-white'
                    onClick={() => setQuickActions(false)}
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

        }
    </div>
  )
}

export default TableSelectedDashboardFreeView
