import NotificationItemDropDownIcon from '../../../Assets/Icons/NotificationItemDropdown.svg'
import SeparatingLine from '../../../Assets/Icons/SeparatingLine.svg'

type NotificationsItemsProps = {
    read: boolean
}
const NotificationsItems = ({read}: NotificationsItemsProps) => {
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
        <div className='flex mt-[10px] justify-between'>
            <div>
                <span className='font-poppins font-normal text-[14px] leading-[21px]'>Table </span>
                <span className='font-poppins font-normal text-[14px] leading-[21px] text-[#3B82F6]'>A2</span>
            </div>
            {read && 
                <img src={NotificationItemDropDownIcon} className='cursor-pointer' />
            }
        </div>
        {!read && 
            <img src={SeparatingLine} className='absolute bottom-[8px] left-0 w-full'/>
        }
    </div>
  )
}

export default NotificationsItems
