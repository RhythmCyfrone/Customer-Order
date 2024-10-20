import { useState } from 'react';
import dayjs, {Dayjs} from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import SeparatingLineIcon from '../../Assets/Icons/SeparatingLine.svg'

dayjs.extend(localizedFormat);
type CalenderViewProps = {
    showCalender: boolean;
    handleShowCalender: (value: Dayjs | null) => void;
}

const CalenderView = ({
    showCalender, handleShowCalender
}: CalenderViewProps) => {
    const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()));
  return (
    <div className={`z-10 flex flex-col bottom-0 translate-y-[100%] bg-[#EBF3FE] absolute rounded-[28px] w-[360px] ${!showCalender?'hidden':''}`}>
        <div className='flex flex-col gap-y-[16px] ms-[20px] mt-[20px] mb-[4px]'>
            <span className='font-poppins font-normal text-[14px] leading-[20px]'>Select Date</span>
            <span className='font-poppins font-normal text-[32px] leading-[40px]'>
                {value ? value.format('ddd, MMM D') : ''}
            </span>
        </div>
        <img src={SeparatingLineIcon} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
        </LocalizationProvider>
        <div className='flex justify-end gap-x-[8px] me-[20px] mb-[20px]'>
            <span className='font-poppins font-normal text-[14px] leading-[15px] text-[#3B82F6] cursor-pointer'
                onClick={() => handleShowCalender(null)}
            >Cancel</span>
            <span className='font-poppins font-normal text-[14px] leading-[15px] text-[#3B82F6] cursor-pointer'
                onClick={() => handleShowCalender(value as Dayjs)}
            >Ok</span>
        </div>
    </div>
  )
}

export default CalenderView
