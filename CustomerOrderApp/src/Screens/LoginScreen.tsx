import ZuciTitle from '../Assets/Icons/ZuciTitle.svg'
import ShowPasswordIcon from '../Assets/Icons/ShowPassword.svg'
import '../Styles/Shadows.css'
import { useState } from 'react'

const LoginScreen = () => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <div className='w-full h-full flex'>
        <div className='h-full w-[40%] bg-[#3B82F6] rounded-r-[30px] flex justify-center login-sidebar-shadow'>
            <div className='w-[60%] max-h-max flex flex-col justify-center'>
                <img src={ZuciTitle} className='w-full'/>
                <span className='font-quicksand text-center font-medium text-[25px] leading-[32px] text-white'>
                    Jubilee Hills
                </span>
            </div>
        </div>
        <div className='relative flex-1 h-full flex flex-col justify-center  p-[100px]'>
            <span className='absolute top-[15px] right-[15px] cursor-pointer'>Need Help?</span>
            <div className='flex flex-col gap-y-[8px] w-full'>
                <span className='font-quicksand text-[20px] font-medium leading-[25px]'>
                    Employer ID
                </span>
                <input 
                    className='rounded-[10px] bg-[#EBF3FE] p-[16px] outline-none w-[70%]'
                    placeholder='Enter Here'
                />
            </div>
            <div className='flex mt-[24px] flex-col gap-y-[8px] w-full'>
                <span className='font-quicksand text-[20px] font-medium leading-[25px]'>
                    Password
                </span>
                <div className='w-[70%] relative'>
                    <input 
                        type={!showPassword?'password':'text'}
                        className='rounded-[10px] bg-[#EBF3FE] p-[16px] outline-none w-full'
                        placeholder='Enter Here'
                    />
                    <img src={ShowPasswordIcon} 
                        className='absolute right-[10px] top-[10px] cursor-pointer'
                        onMouseDown={() => setShowPassword(true)}
                        onMouseUp={() => setShowPassword(false)}
                    />
                </div>
            </div>
            <button className='text-center mt-[36px] justify-self-start w-[70%] fontButtonDefault font-semibold bg-CustomBrand-300 cursor-pointer rounded-[8px] p-[16px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover active:shadow-none'
            >
                Login
            </button>
        </div>

      
    </div>
  )
}

export default LoginScreen
