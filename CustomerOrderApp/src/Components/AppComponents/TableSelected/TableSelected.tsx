import '../../../Styles/Shadows.css'
import '../../../Styles/Fonts.css'
import NotificationIcon from '../../../Assets/Icons/Notification.svg'
import ProfilePlaceholderIcon from '../../../Assets/Icons/ProfilePlaceholder.svg'
import BillDetails from '../BillDetails/BillDetails'

const TableSelected = () => {
  return (
    <div className='relative w-[420px] flex justify-center items-center shadow-table-selected'>
        <img src={NotificationIcon} className='absolute left-[70%] top-[27px]' />
        <img src={ProfilePlaceholderIcon} className='absolute left-[83%] top-[21px]' />
        <BillDetails />
        <span className='font-poppins text-[24px] font-semibold text-[#191919] leading-[36px] opacity-50'>
            No Table Selected
        </span>
    </div>
  )
}

export default TableSelected
