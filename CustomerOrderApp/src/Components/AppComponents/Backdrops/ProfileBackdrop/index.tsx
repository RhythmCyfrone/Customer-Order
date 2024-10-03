import CrossIcon from '../../../../Assets/Icons/Cross.svg'
import ProfilePlaceholderIcon from '../../../../Assets/Icons/ProfilePlaceholderIcon.svg'
import ProfileImage from '../../../../Assets/Icons/ProfilePlaceholder.svg'
import EditIcon from '../../../../Assets/Icons/Edit.svg'
import LogoutIcon from '../../../../Assets/Icons/Logout.svg'
import { resetStartPosition, initialState } from '../../../../State/Slices/BackdropSlice';
import useProfileBackdropViewModel from './ProfileBackdropViewModel'

type BackdropProps = {
    isNotificationsVisible: boolean;
    setIsNotificationsVisible: React.Dispatch<React.SetStateAction<boolean>>
}
const ProfileBackdrop = ({isNotificationsVisible, setIsNotificationsVisible}: BackdropProps) => {
   const {startPosition, dispatch, logout, setLogout} = useProfileBackdropViewModel()
  return (
    <div
            className={`backdrop-blur-[1px] z-20 backdrop absolute bg-opacity-20 bg-black flex justify-center items-center ${isNotificationsVisible?'transition-all duration-150':''}
            }`}
            style={{
                top: isNotificationsVisible ? '85px' : `${startPosition.startPosition.top}px`,
                left: isNotificationsVisible ? '81px' : `${startPosition.startPosition.left}px`,
                right: isNotificationsVisible ? '0' : `${document.body.clientWidth - startPosition.startPosition.left}px`,
                bottom: isNotificationsVisible ? '0px' : `${document.body.clientHeight - startPosition.startPosition.top}px`,
            }}
        >
            {
                !logout
                ?
                <div className={` ${isNotificationsVisible?'w-[400px]':'hidden'} bg-white p-[8px] rounded-[20px]`}>
                    <div className='w-full flex justify-between'>
                        <div className='flex gap-x-[4px]'>
                            <img src={ProfilePlaceholderIcon} />
                            <span className='font-poppins font-normal text-[16px] leading-[24px]'>Profile</span>
                        </div>
                        <img src={CrossIcon} className='' 
                            onClick={() => {
                                dispatch(resetStartPosition(initialState))
                                setIsNotificationsVisible(false)
                            }}
                        />
                    </div>
                    <div className='flex mt-[16px] flex-col items-center'>
                        <div className='relative'>
                            <img src={ProfileImage} className='w-[60px]'/>
                            <img src={EditIcon} className='absolute bottom-0 -right-2 cursor-pointer'/>
                        </div>
                        <span className='font-quicksand mt-[16px] font-medium text-[16px] leading-[20px]'>Babu</span>
                        <span className='font-quicksand font-normal mt-[8px] text-[9px] leading-[12px]'>Chief</span>
                        <span className='font-quicksand  mt-[20px] font-normal text-[14px] leading-[17px] text-[#3B82F6]'>ID ZUII8</span>
                        <div className='flex gap-x-[4px] mt-[20px]'>
                            <img src={LogoutIcon} className='cursor-pointer'
                                onClick={() => setLogout(true)}
                            />
                            <span className='font-poppins  font-normal text-[14px] leading-[17.5px]'>Logout</span>
                        </div>
                    </div>
                </div>
                :<div className={` ${isNotificationsVisible?'w-[400px]':'hidden'} flex flex-col items-center gap-y-[40px] bg-white p-[20px] rounded-[20px]`}>
                    <div className='flex gap-x-[4px] '>
                        <img src={LogoutIcon} className='cursor-pointer'
                        />
                        <span className='font-poppins  font-normal text-[14px] leading-[17.5px]'>Logout</span>
                    </div>
                    <span className='font-quicksand font-medium text-[16px] leading-[20px]'>Do you really want to Logout</span>

                    <div className='flex gap-x-[16px] '>
                        <button className='text-center fontSecondaryButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
                                    hover:bg-CustomBrand-200 active:shadow-none active:bg-white'
                                onClick={() => setLogout(false)}
                                
                        >
                            Cancel 
                        </button>
                        <button className='text-center bg-[#3B82F6] fontButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
                                    hover:ShadowPrimaryHover active:shadow-none'
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            }
            
        </div>
  )
}
export default ProfileBackdrop
