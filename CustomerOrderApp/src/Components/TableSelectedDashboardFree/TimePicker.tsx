import { useState } from 'react';
import dayjs, {Dayjs} from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import '../../Styles/MuiComponentsCustom.css'

type TimePickerView = {
    showTimePicker: boolean;
    handleShowTimePicker: (value: Dayjs | null) => void;
}

const TimePickerView = ({
  showTimePicker, handleShowTimePicker
}: TimePickerView) => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [viewHours, setViewHours] = useState(false);
  const [am, setAm] = useState(true);

  const dayjsTime = dayjs().hour(hours).minute(minutes);

  return (
    <div className={`z-10 flex flex-col bottom-0 translate-y-[100%] bg-[#EBF3FE] absolute rounded-[28px] w-[360px] ${!showTimePicker?'hidden':''}`}>
        <div className='flex flex-col gap-y-[16px] ms-[20px] mt-[20px] mb-[4px]'>
            <span className='font-poppins font-normal text-[12px] leading-[18px]'>Select Time</span>
            <div className='flex items-center gap-x-[4px]'>
              <div className='bg-[#C3DAFF] rounded-[4px] flex justify-center items-center p-[4px] w-[90px] cursor-pointer'
                onClick={() => setViewHours(true)}
              >
                <span className={`font-poppins font-normal text-[55px] leading-[63px] ${viewHours ?'text-[#3B82F6]':''}`}>{hours == 0?'12':hours}</span>
              </div>
              <span className='font-poppins font-normal text-[32px] leading-[40px] text-[#3B82F6]'>:</span>
              <div className='bg-[#C3DAFF] rounded-[4px] flex justify-center items-center p-[4px] w-[90px] cursor-pointer'
                onClick={() => setViewHours(false)}
              >
                <span className={`font-poppins font-normal text-[55px] leading-[63px] ${!viewHours?'text-[#3B82F6]':''}`}>{minutes < 10?`0${minutes}`:minutes}</span>
              </div>
              <div className='flex flex-col ms-[8px]'>
                <div className={`${am?'bg-[#C3DAFF]':'bg-white'} p-[8px] flex justify-center items-center p-[4px] cursor-pointer`}
                  onClick={() => setAm(true)}
                >
                  <span className={`font-poppins font-normal text-[15px] leading-[20px] ${am?'text-[#3B82F6]':''}`}>AM</span>
                </div>
                <div className={`${!am?'bg-[#C3DAFF]':'bg-white'} p-[8px] flex justify-center items-center p-[4px] cursor-pointer`}
                  onClick={() => setAm(false)}
                >
                  <span className={`font-poppins font-normal text-[15px] leading-[20px] ${am?'text-[#3B82F6]':''}`}>PM</span>
                </div>
              </div>
            </div>
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {
            viewHours
            ?<TimeClock views={['hours']} value={dayjsTime} onChange={(newValue) => setHours(newValue.hour())}
              sx={{
                ".MuiClock-clock":  {
                  backgroundColor: '#C3DAFF'
                }
              }}
            />
            :<TimeClock views={['minutes']} value={dayjsTime} onChange={(newValue) => setMinutes(newValue.minute())}
              sx={{
                ".MuiClock-clock":  {
                  backgroundColor: '#C3DAFF'
                }
              }}
            />
          }
        </LocalizationProvider>  
        <div className='flex justify-end gap-x-[8px] me-[20px] mb-[20px]'>
            <span className='font-poppins font-normal text-[14px] leading-[15px] text-[#3B82F6] cursor-pointer'
                onClick={() => handleShowTimePicker(null)}
            >Cancel</span>
            <span className='font-poppins font-normal text-[14px] leading-[15px] text-[#3B82F6] cursor-pointer'
                onClick={() => {
                  if(!am) 
                    handleShowTimePicker(dayjsTime.add(12, 'hour'))
                  else
                    handleShowTimePicker(dayjsTime as Dayjs)
                }}
            >Ok</span>
        </div>
    </div>
  )
}

export default TimePickerView
