import ReserveIcon from '../../Assets/Icons/Reserved.svg'
import PersonAddIcon from '../../Assets/Icons/PersonAdd.svg'
import PersonSubtractIcon from '../../Assets/Icons/PersonSubtract.svg'
import DropDownIcon from '../../Assets/Icons/DropDown.svg'
import CalenderIcon from '../../Assets/Icons/Calendar.svg'
import SearchIcon from '../../Assets/Icons/MobileSearch.svg'
import TimerIcon from '../../Assets/Icons/Timer.svg'
import CalenderView from './Calender'
import { Dayjs } from 'dayjs'
import TimePickerView from './TimePicker'


type ReserveViewProps = {
  newCustomerName: string;
  newCustomerMobile: string;
  newCustomerMail: string;
  dateInput: string;
  timeInput: string;
  countPersons: number;
  updateCountPersons: (count: number) => void;
  handleNewCustomerNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNewCustomerMobileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNewCustomerMailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleTimeInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showCalender: boolean;
  handleShowCalender: (value: Dayjs | null) => void;
  showTimePicker: boolean;
  handleShowTimePicker: (value: Dayjs | null) => void;
}

const ReserveView = ({
  newCustomerName, newCustomerMobile, newCustomerMail, countPersons, updateCountPersons,
  handleNewCustomerNameChange, handleNewCustomerMobileChange, handleNewCustomerMailChange,
  dateInput, handleDateInputChange, timeInput, handleTimeInputChange,showCalender, 
  handleShowCalender, showTimePicker, handleShowTimePicker
}: ReserveViewProps) => {

  return (
    <div className='flex w-[335px] flex-col p-[4px] mt-[16px] mb-[36px]'>
      <div className='flex gap-x-[8px]'>
        <img src={ReserveIcon} />
        <span className='font-poppins font-[500] text-[20px] leading-[30px]'>Reserve Table</span>
      </div>
      <span className='font-poppins font-[500] text-[18px] leading-[30px] w-[335px] text-center mt-[8px]'>No. of Persons</span>
      <div className='relative flex justify-center w-full items-center gap-x-[16px] mt-[16px]'>
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
          <CalenderView 
              showCalender={showCalender}
              handleShowCalender={handleShowCalender}
          />
          <TimePickerView
              showTimePicker={showTimePicker}
              handleShowTimePicker={handleShowTimePicker}
          />
      </div>
      <span className='font-poppins font-[600] text-[12px] leading-[18px] w-[335px] text-start'>Customer Name</span>
      <input
          className='outline-none bg-[#DDEBFF] p-[11px] w-[335px] mt-[4px] rounded-[11px]'
          type='text'
          value={newCustomerName}
          onChange={(e) => handleNewCustomerNameChange(e)}
      />
      <span className='font-poppins font-[600] text-[12px] mt-[8px] leading-[18px] w-[335px] text-start'>Date and Time</span>
      <div className='flex justify-between w-[335px] mt-[4px] items-center'>
        <div className='flex gap-x-[4px]'>
          <input className='text-center outline-none w-[150px] bg-[#DDEBFF] pt-[11px] pb-[11px] rounded-[11px]'
              type='text'
              placeholder='dd/mm/yy'
              value={dateInput}
              onChange={(e) => handleDateInputChange(e)}
          />
          <img src={CalenderIcon} 
              onClick={() => handleShowCalender(null)}
          />
        </div>
        <div className='flex gap-x-[4px]'>
          <input className='text-center outline-none bg-[#DDEBFF] w-[110px] pt-[11px] pb-[11px] rounded-[11px]'
              type='text'
              placeholder='hh:mm'
              value={timeInput}
              onChange={(e) => handleTimeInputChange(e)}
          />
          <img src={TimerIcon} 
              onClick={() => handleShowTimePicker(null)}
          />
        </div>
      </div>
      <span className='font-poppins font-[600] mt-[12px] text-[12px] leading-[18px] w-[335px] text-start'>Mobile Number</span>
      <div className='flex gap-x-[16px] w-[335px] mt-[8px]'>
          <div className=' bg-[#DDEBFF] rounded-[11px] flex justify-center items-center gap-x-[8px] p-[8px]'>
              <img src={DropDownIcon} />
              <span className='font-quicksand font-[500] text-[16px] leading-[20px]'>91</span>
          </div>
          <div className='flex flex-1'>
              <input className='outline-none bg-[#DDEBFF] p-[11px] flex-1 rounded-l-[11px]'
                      type='text'
                      value={newCustomerMobile}
                      onChange={(e) => handleNewCustomerMobileChange(e)}
              />
              <div className='rounded-r-[11px] bg-[#3B82F6] p-[11px] flex justify-center items-center'>
                  <img src={SearchIcon}/>
              </div>
          </div>
      </div>
      <span className='font-poppins font-[600] text-[12px] mt-[8px] leading-[18px] w-[335px] text-start'>Mail Id</span>
      <input
          className='text-right outline-none bg-[#DDEBFF] p-[11px] w-[335px] mt-[4px] rounded-[11px]'
          placeholder='@gmail.com'
          type='text'
          value={newCustomerMail}
          onChange={(e) => handleNewCustomerMailChange(e)}
      />
    </div>
  )
}

export default ReserveView
