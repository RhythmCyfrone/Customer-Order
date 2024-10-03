import BackArrowIcon from '../../Assets/Icons/BackArrow.svg'
import FoodTypeNavbar from '../../Components/FoodTypeNavbar'
import SearchIcon from '../../Assets/Icons/Search.svg'
import CrossIcon from '../../Assets/Icons/Cross.svg'
import SeparatingLine from '../../Assets/Icons/SeparatingLine.svg'
import { selectScreen } from '../../State/Slices/ScreensSlice'
import { initialState, resetStartPosition } from '../../State/Slices/BackdropSlice'
import FoodSelectorNavbar from '../../Components/FoodSelectorNavbar'
import FoodItem from '../../Components/FoodItem'
import '../../Styles/Scrollbars.css'
import BackdropHandler from '../../Components/Backdrops/BackdropHandler'
import useItemsSelectViewModel from './ItemsSelectViewModel'

const ItemsSelect = () => {
    const {
        itemName, maxWidth,  isFoodItemBackdropVisible, setIsFoodItemBackdropVisible,
        isNotificationsVisible, setIsNotificationsVisible, startPosition, dispatch, scrollContainerRef,
        handleScrollLeft, handleScrollRight, handleInputChange
    } = useItemsSelectViewModel()

  return (
    <div className='ItemsScreen flex-1 flex flex-col gap-y-[24px] pt-[55px] pb-[34px] pe-[40px]  desktop-max:pe-[20px]'>
        <div
                className={`backdrop-blur-[1px] z-10 backdrop absolute bg-opacity-20 bg-black flex justify-center items-center ${isFoodItemBackdropVisible?'transition-all duration-200':''}
                }`}
                style={{
                    top: isFoodItemBackdropVisible ? '101px' : `${startPosition.startPosition.top}px`,
                    left: isFoodItemBackdropVisible ? '81px' : `${startPosition.startPosition.left}px`,
                    right: isFoodItemBackdropVisible ? '420px' : `${document.body.clientWidth - startPosition.startPosition.left}px`,
                    bottom: isFoodItemBackdropVisible ? '0px' : `${document.body.clientHeight - startPosition.startPosition.top}px`,
                }}
            >
                <div className='relative w-[300px] h-[400px] bg-white rounded-[10px]'>
                    <img src={CrossIcon} className='absolute top-[8px] right-[8px]' 
                        onClick={() => {
                            dispatch(resetStartPosition(initialState))
                            setIsFoodItemBackdropVisible(false)
                        }}
                    />
                </div>
            </div>
        <BackdropHandler 
            isNotificationsVisible={isNotificationsVisible}
            setIsNotificationsVisible={setIsNotificationsVisible}
        />
        <div className='flex gap-x-[8px] items-center ps-[80px] desktop-max:ps-[20px]'>
            <img src={BackArrowIcon} className='cursor-pointer' 
                onClick={() => dispatch(selectScreen({
                    screen: 'Dashboard'
                }))}
            />
            <span className='font-poppins font-medium text-[24px] leading-[36px]'>
                Add Items to Order
            </span>
        </div>
        <div className='flex ps-[84px] desktop-max:ps-[24px] flex-wrap gap-x-[40px] gap-y-[16px] justify-between items-center'>
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
        <div className=' flex flex-col gap-y-[8px] overflow-y-scroll ps-[80px] desktop-max:ps-[20px]'>
            <div className={`relative flex flex-col gap-y-[16px]  w-full overflow-visible`} style={{ maxWidth: `${maxWidth}px` }}>
                <span className='font-poppins font-semibold text-[12px] leading-[18px]'>
                    Frequently Order Items
                </span>
                <div className='flex gap-x-[24px] overflow-x-scroll scrollbar-visible' ref={scrollContainerRef}>
                    <div className='cursor-pointer backdrop-blur-[1px] flex justify-center  border-[#989898] absolute w-[26px] h-[26px] bg-[#EEEEEE] bg-opacity-20 z-[15] 
                                    scroll-icons-shadow-left rounded-[50%] top-[50%] left-0 -translate-y-[50%] -translate-x-[50%]'
                            onClick={() => handleScrollLeft()}            
                        >
                        <img src={BackArrowIcon}  className='w-[12px]'/>
                    </div>
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <div className='cursor-pointer backdrop-blur-[1px] flex justify-center  border-[#989898] absolute w-[26px] h-[26px] bg-[#EEEEEE] bg-opacity-20 z-[15] 
                                    scroll-icons-shadow-right rounded-[50%] top-[50%] right-0 -translate-y-[50%] translate-x-[50%]'
                            onClick={() => handleScrollRight()}            
                        >
                        <img src={BackArrowIcon}  className='w-[12px] rotate-180'/>
                    </div>
                </div>
                <img src={SeparatingLine} className=''/>
            </div>
            <div className={`flex flex-col gap-y-[16px]  w-full`} style={{ maxWidth: `${maxWidth}px` }}>
                <span className='font-poppins font-semibold text-[12px] leading-[18px]'>
                    Biryani
                </span>
                <div className='flex gap-x-[24px] flex-wrap gap-y-[16px]'>
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                </div>
            </div>
            <div className={`flex flex-col gap-y-[16px]  w-full`} style={{ maxWidth: `${maxWidth}px` }}>
                <span className='font-poppins font-semibold text-[12px] leading-[18px]'>
                    Burgers
                </span>
                <div className='flex gap-x-[24px] flex-wrap gap-y-[16px]'>
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                    <FoodItem />
                </div>
            </div>
        </div>
    </div>    
  )
}

export default ItemsSelect
