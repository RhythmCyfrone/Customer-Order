import React from 'react'
import NotificationIcon from '../../../Assets/Icons/Notification.svg'
import ProfilePlaceholderIcon from '../../../Assets/Icons/ProfilePlaceholder.svg'

type placeholderProps = {
    content: string;
    handleNotificationsClick: (e: React.MouseEvent<HTMLImageElement>, initiator: string) => void
  }
  
  const TableSelectedPlaceholder = ({content, handleNotificationsClick}: placeholderProps) => {
    return (
      <div className='relative w-[420px] flex flex-col justify-center items-center shadow-table-selected'>
          <img src={NotificationIcon} className='absolute left-[70%] top-[27px]' 
            onClick={(e) => handleNotificationsClick(e, 'Notifications')}
          />
          <img src={ProfilePlaceholderIcon} className='absolute left-[83%] top-[21px]' 
            onClick={(e) => handleNotificationsClick(e, 'Notifications')}
          />
          <span className='font-poppins text-[24px] font-semibold text-[#191919] leading-[36px] opacity-50'>
              {content}
          </span>
      </div>
    )
  }

export default TableSelectedPlaceholder
