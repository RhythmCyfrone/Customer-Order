import NotificationIcon from '../../Assets/Icons/Notification.svg'
import NotificationFilledIcon from '../../Assets/Icons/NotificationFilled.svg'
import { useAppSelector } from '../../State/hooks'


type NotificationIconProps = {
    handleNotificationsClick: (e: React.MouseEvent<HTMLImageElement | HTMLDivElement>, initiator: string) => void
}
const NotificationsIcon = ({handleNotificationsClick}: NotificationIconProps) => {
  const startPosition = useAppSelector(state => state.backdrop)
  return (
    startPosition.initiator !== 'Notifications'
    ?<div className='absolute left-[70%] top-[27px] cursor-pointer'>
      <img src={NotificationIcon} className='' 
              onClick={(e) => handleNotificationsClick(e, 'Notifications')}
      />
      <div className='absolute top-0 right-0 flex justify-center items-center rounded-[50%] w-[10px] h-[10px] bg-[#3B82F6]'>
        <span className='font-poppins text-[8px] text-white'>2</span>
      </div>
    </div>
    :
    <div className='absolute left-[70%] top-[27px] cursor-pointer'>
      <img src={NotificationFilledIcon} className='text-black' 
      />
    </div>
  )
}

export default NotificationsIcon
