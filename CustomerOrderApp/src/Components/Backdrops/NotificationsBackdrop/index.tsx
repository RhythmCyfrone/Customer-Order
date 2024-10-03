import NotificationsTickIcon from '../../../Assets/Icons/NotificationsTick.svg'
import NotificationsCancel from '../../../Assets/Icons/NotificationsCancel.svg'
import { resetStartPosition, initialState } from '../../../State/Slices/BackdropSlice';
import '../../../Styles/Shadows.css'
import { useState, useEffect } from 'react'
import NotificationsItems from '../NotificationsItems';
import useNotificationsBackdropViewModel from './NotificationsBackdropViewModel';

type BackdropProps = {
    isNotificationsVisible: boolean;
    setIsNotificationsVisible: React.Dispatch<React.SetStateAction<boolean>>
}
const NotificationsBackdrop = ({isNotificationsVisible, setIsNotificationsVisible}: BackdropProps) => {
    const {startPosition, dispatch, maxHeight, setMaxHeight, updateMaxHeight} = useNotificationsBackdropViewModel()

    useEffect(() => {

        window.addEventListener('resize', updateMaxHeight);

        return () => window.removeEventListener('resize', updateMaxHeight);
    }, []);

  return (
    <div
            className={`backdrop-blur-[1px] z-20 backdrop absolute bg-opacity-20 bg-black ${isNotificationsVisible?'transition-all duration-100':''}
            }`}
            style={{
                top: isNotificationsVisible ? '85px' : `${startPosition.startPosition.top}px`,
                left: isNotificationsVisible ? '81px' : `${startPosition.startPosition.left}px`,
                right: isNotificationsVisible ? '0' : `${document.body.clientWidth - startPosition.startPosition.left}px`,
                bottom: isNotificationsVisible ? '0px' : `${document.body.clientHeight - startPosition.startPosition.top}px`,
            }}
        >
            <div className={`flex flex-col notifications-shadow absolute top-0 right-[40px] rounded-[20px] bg-white`}
                style={{maxHeight: `${maxHeight}`}}
            >
                <div className='w-full bg-[#3B82F6] rounded-t-[20px] flex gap-x-[8px] items-center pt-[19px] pe-[22px] pb-[19px] ps-[22px]'>
                    <span className='font-quicksand font-medium text-white text-[20px] leading-[25px]'>Notifications</span>
                    <div className='w-[26px] h-[26px] rounded-[50%] bg-white text-center'>
                        <span className='text-[#3B82F6]'>2</span>
                    </div>
                    <div className='flex-1'></div>
                    <img src={NotificationsTickIcon} className='justify-self-end'/>
                    <img src={NotificationsCancel} className='ms-[8px] justify-self-end cursor-pointer'
                        onClick={() => {
                            dispatch(resetStartPosition(initialState))
                            setIsNotificationsVisible(false)
                        }}
                    />
                </div>
                <div className='flex-1 overflow-y-scroll p-[16px] flex flex-col gap-y-[8px] max-w-[420px]'>
                    <NotificationsItems 
                        read={true}
                    />
                    <NotificationsItems 
                        read={true}
                    />
                    <NotificationsItems 
                        read={false}
                    />
                    <NotificationsItems 
                        read={false}
                    />
                    <NotificationsItems 
                        read={false}
                    />
                    <NotificationsItems 
                        read={false}
                    />
                    
                </div>

            </div>
            
            
        </div>
  )
}

export default NotificationsBackdrop
