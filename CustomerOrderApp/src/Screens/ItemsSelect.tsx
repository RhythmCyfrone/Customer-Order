import BackArrowIcon from '../Assets/Icons/BackArrow.svg'
import FoodTypeNavbar from '../Components/AppComponents/FoodTypeNavbar/FoodTypeNavbar'
import SearchIcon from '../Assets/Icons/Search.svg'
import CrossIcon from '../Assets/Icons/Cross.svg'
import { useAppDispatch, useAppSelector } from '../State/hooks'
import { selectScreen } from './ScreensSlice'
import { useEffect, useState } from 'react'
import FoodSelectorNavbar from '../Components/AppComponents/FoodSelectorNavbar/FoodSelectorNavbar'
import FoodItem from '../Components/AppComponents/FoodItem/FoodItem'
import '../Styles/Scrollbars.css'

const ItemsSelect = () => {
    const [itemName, setItemName] = useState<string>('')
    const screen = useAppSelector(state => state.screen.screen)
    let screenWidth = document.body.clientWidth
    const [maxWidth, setMaxWidth] = useState<number>(screenWidth < 1350? screenWidth - 500 - 40 - 10:screenWidth-500-120-40);
    const dispatch = useAppDispatch()
    const [isVisible, setIsVisible] = useState(false);
    const [startPosition, setStartPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        if (startPosition.top !== 0 || startPosition.left !== 0) {
            setIsVisible(true);
        }
    }, [startPosition]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemName(event.target.value);
    }

    useEffect(() => {
        const updateMaxWidth = () => {
            screenWidth = document.body.clientWidth
            setMaxWidth(screenWidth < 1350? screenWidth - 500 - 40-10:screenWidth-500-120-40)
        };

        window.addEventListener('resize', updateMaxWidth);

        return () => window.removeEventListener('resize', updateMaxWidth);
    }, []);

  return (
    <div className='ItemsScreen flex-1 flex flex-col gap-y-[24px] pt-[65px] pb-[34px] ms-[80px] me-[40px] desktop-max:ms-[20px] desktop-max:me-[20px]'>
        <div
                className={`backdrop-blur-[1px] z-10 backdrop absolute bg-opacity-20 bg-black flex justify-center items-center ${isVisible?'transition-all duration-200':''}
                }`}
                style={{
                    top: isVisible ? '101px' : `${startPosition.top}px`,
                    left: isVisible ? '81px' : `${startPosition.left}px`,
                    right: isVisible ? '420px' : `${document.body.clientWidth - startPosition.left}px`,
                    bottom: isVisible ? '0px' : `${document.body.clientHeight - startPosition.top}px`,
                }}
            >
                <div className='relative w-[300px] h-[400px] bg-white rounded-[10px]'>
                    <img src={CrossIcon} className='absolute top-[8px] right-[8px]' 
                        onClick={() => setIsVisible(false)}
                    />
                </div>
            </div>
        <div className='flex gap-x-[8px] items-center'>
            <img src={BackArrowIcon} className='cursor-pointer' 
                onClick={() => dispatch(selectScreen({
                    screen: 'Dashboard'
                }))}
            />
            <span className='font-poppins font-medium text-[24px] leading-[36px]'>
                Add Items to Order
            </span>
        </div>
        <div className='flex ps-[4px] flex-wrap gap-x-[40px] gap-y-[16px] justify-between items-center'>
            <FoodTypeNavbar />
            <div className='flex bg-[#EBF3FE] rounded-[20px] p-[8px] gap-x-[8px] w-[370px] desktop-max:order-first'>
                <img src={SearchIcon} />
                <input
                    type='text'
                    value={itemName}
                    onChange={handleInputChange}
                    placeholder='Search Items'
                    className='bg-transparent font-poppins font-normal text-[16px] outline-none w-full'
                />
            </div>
        </div>
        <FoodSelectorNavbar />
        <div className='flex flex-col gap-y-[8px] overflow-y-scroll'>
            <div className={`flex flex-col gap-y-[16px]  w-full`} style={{ maxWidth: `${maxWidth}px` }}>
                <span className='font-poppins font-semibold text-[12px] leading-[18px]'>
                    Frequently Order Items
                </span>
                <div className='flex gap-x-[24px] overflow-x-scroll scrollbar-visible'>
                    <FoodItem setStartPosition={setStartPosition} />
                    <FoodItem setStartPosition={setStartPosition} />
                    <FoodItem setStartPosition={setStartPosition} />
                    <FoodItem setStartPosition={setStartPosition} />
                    <FoodItem setStartPosition={setStartPosition} />
                    <FoodItem setStartPosition={setStartPosition} />
                    <FoodItem setStartPosition={setStartPosition} />
                </div>
            </div>
            <div className={`flex flex-col gap-y-[16px]  w-full`} style={{ maxWidth: `${maxWidth}px` }}>
                <span className='font-poppins font-semibold text-[12px] leading-[18px]'>
                    Biryani
                </span>
                <div className='flex gap-x-[24px] overflow-x-scroll'>
                    <FoodItem setStartPosition={setStartPosition} />
                    <FoodItem setStartPosition={setStartPosition} />
                    <FoodItem setStartPosition={setStartPosition} />
                    <FoodItem setStartPosition={setStartPosition} />
                    <FoodItem setStartPosition={setStartPosition} />
                    <FoodItem setStartPosition={setStartPosition} />
                    <FoodItem setStartPosition={setStartPosition} />
                </div>
            </div>
            <div className={`flex flex-col gap-y-[16px]  w-full`} style={{ maxWidth: `${maxWidth}px` }}>
                <span className='font-poppins font-semibold text-[12px] leading-[18px]'>
                    Burgers
                </span>
                <div className='flex gap-x-[24px] overflow-x-scroll'>
                    <FoodItem setStartPosition={setStartPosition} />
                    <FoodItem setStartPosition={setStartPosition} />
                    <FoodItem setStartPosition={setStartPosition} />
                    <FoodItem setStartPosition={setStartPosition} />
                    <FoodItem setStartPosition={setStartPosition} />
                    <FoodItem setStartPosition={setStartPosition} />
                    <FoodItem setStartPosition={setStartPosition} />
                </div>
            </div>
        </div>
    </div>    
  )
}

export default ItemsSelect
