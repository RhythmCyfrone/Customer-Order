import NotificationItemDropDownIcon from '../../../Assets/Icons/NotificationItemDropdown.svg'
import NotificationItemDropUpIcon from '../../../Assets/Icons/NotificationItemDropUp.svg'
import SeparatingLine from '../../../Assets/Icons/SeparatingLine.svg'
import useNotificationsItem from '../../../ViewModels/NotificationsItemsViewModel'

type NotificationsItemsProps = {
    read: boolean
}
const NotificationsItems = ({read}: NotificationsItemsProps) => {
    const {dropDown, setDropDown} = useNotificationsItem()
  return (
    <div className={`relative ${read?'bg-[#EBF3FE]':''} w-full flex flex-col pt-[8px] pe-[16px] pb-[8px] ps-[16px] rounded-[15px]`}>
        <div className='flex gap-x-[16px]'>
            <span className='text-wrap font-poppins font-normal text-[14px] leading-[21px] '>New order placed: Order #789. Total: $120.00. Please prepare for delivery.</span>
            <div className='flex gap-x-[4px]'>
                <span className='text-nowrap font-poppins font-normal text-[14px] leading-[21px]'>5 min</span>
                {read && 
                    <div className='w-[6px] h-[6px] rounded-[50%] bg-[#3B82F6] translate-y-[8px]'>
                    </div>
                }
            </div>
        </div>
        <div className='flex mt-[16px] justify-between items-center'>
            <div>
                <span className='font-poppins font-normal text-[14px] leading-[21px]'>Table </span>
                <span className='font-poppins font-normal text-[14px] leading-[21px] text-[#3B82F6]'>A2</span>
            </div>
            {
                read && dropDown
                ?<div className='flex gap-x-[8px] items-center'>
                    <span className='font-poppins font-normal text-[12px] leading-[15px] text-[#3B82F6] cursor-pointer'
                    >Mark as Read</span>
                    <button className='text-center bg-[#3B82F6] fontButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[16px] pe-[16px] hover:ShadowPrimaryHover
                                hover:ShadowPrimaryHover active:shadow-none'
                    >
                        Generate Bill
                    </button>
                </div> 
                :read && !dropDown
                ?<div>
                    <img src={NotificationItemDropDownIcon} className='cursor-pointer' 
                        onClick={() => setDropDown(true)}
                    />
                </div>
                :<></>
            }
        </div>
        {read && dropDown && 
            <div className='flex justify-end mt-[10px]'>
                <img src={NotificationItemDropUpIcon} className='cursor-pointer' 
                    onClick={() => setDropDown(false)}
                />
            </div>
        }
        {!read && 
            <img src={SeparatingLine} className='absolute bottom-[8px] left-0 w-full'/>
        }
    </div>
  )
}

export default NotificationsItems
