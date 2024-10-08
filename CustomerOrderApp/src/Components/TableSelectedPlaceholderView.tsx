import React from 'react'
import NotificationIcon from './NotificationIconView'
import ProfilePlaceholderIcon from '../Assets/Icons/ProfilePlaceholder.svg'

type placeholderProps = {
    content: string;
    handleNotificationsClick: (e: React.MouseEvent<HTMLImageElement | HTMLDivElement>, initiator: string) => void
  }
  
  const TableSelectedPlaceholder = ({content, handleNotificationsClick}: placeholderProps) => {
    return (
      <div className='relative w-[420px] flex flex-col justify-center items-center shadow-table-selected'>
          <NotificationIcon
            handleNotificationsClick={handleNotificationsClick}
          />
          <img src={ProfilePlaceholderIcon} className='absolute left-[83%] top-[21px] cursor-pointer' 
            onClick={(e) => handleNotificationsClick(e, 'Profile')}
          />
          <span className='font-poppins text-[24px] font-semibold text-[#191919] leading-[36px] opacity-50'>
              {content}
          </span>
      </div>
    )
  }

export default TableSelectedPlaceholder
