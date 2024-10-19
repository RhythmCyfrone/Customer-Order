import NotificationIcon from './NotificationIconView'
import ProfilePlaceholderIcon from '../Assets/Icons/ProfilePlaceholder.svg'
import PrintIcon from '../Assets/Icons/PrintIcon.svg'
import EditBillIcon from '../Assets/Icons/EditBillIcon.svg'
import { orderStatusToColors } from '../Constants/OrderStatusColors'
import GenerateBill from './GenerateBillView'

type TableSelectedDashboardGenerateBillViewProps = {
    currentTable: string;
    handleNotificationsClick: (e: React.MouseEvent<HTMLImageElement | HTMLDivElement>, initiator: string) => void;
    setGenerateBill: React.Dispatch<React.SetStateAction<boolean>>
}

type orderStatusType = keyof typeof orderStatusToColors

const TableSelectedDashboardGenerateBillView = ({currentTable, handleNotificationsClick, setGenerateBill}: TableSelectedDashboardGenerateBillViewProps) => {
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
                        <div className={`w-[16px] h-[16px] rounded-[50%] ${orderStatusToColors['Billed' as orderStatusType]}`}></div>
                        <span className='flex-1 font-opensans text-[16px] font-medium'>Billed</span>
                    </div>
                </div>
            </div>
        </div>

        <GenerateBill />
        <div className='flex w-full ps-[16px] pe-[16px] justify-end mb-[8px] mt-[16px]'>
          <button className='text-center flex items-center gap-x-[8px] fontSecondaryButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[8px] pe-[16px] hover:ShadowPrimaryHover
                      hover:bg-CustomBrand-200 active:shadow-none active:bg-white'
          >
              <img src={PrintIcon} alt="My Icon" className="icon-class" />
              Print Bill
          </button>
        </div>
        <div className='flex w-full ps-[16px] pe-[16px] gap-x-[8px]'>
          <div className='p-[4px] ps-[18px] pe-[18px] bg-[#4E659F] rounded-[5px] text-center flex flex-col items-center justify-center gap-y-[4px] cursor-pointer'
              onClick={() => setGenerateBill(false)}
          >
              <img src={EditBillIcon} />
              <span className='font-poppins font-normal text-[10px] text-white'>Edit</span>
          </div>
          <div className='flex-1 flex justify-center items-center fontButtonDefault bg-gradient-to-r from-[#3B82F6] to-[#0053DB] cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover active:shadow-none'
                onClick={(e) => handleNotificationsClick(e, 'Accept Payment')}
              >
                <span>Accept Payment</span>
              </div>
          </div>
      </div>
  )
}

export default TableSelectedDashboardGenerateBillView
