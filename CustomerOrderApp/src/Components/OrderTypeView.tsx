import DinnerTableIcon from '../Assets/Icons/dinner-table.svg'
import DeliveryBoxIcon from '../Assets/Icons/box.svg'
import LunchBagIcon from '../Assets/Icons/lunch-bag.svg'
import '../Styles/Shadows.css'
import '../Styles/Fonts.css'

import type { OrderType } from '../State/Slices/orderTypeSlice'
import { selectOrderType } from '../State/Slices/orderTypeSlice'
import useOrderType from '../ViewModels/OrderTypeViewModel'

type OrderTypeButtonProps = {
    buttonType:  OrderType;
    scrollToTakeaway: () => void;
    scrollToTables: () => void;
}

const OrderTypeButton = ({buttonType, scrollToTakeaway, scrollToTables}: OrderTypeButtonProps) => {
    const {
        dispatch, isSelected, handleScroll
    } = useOrderType(buttonType)
    
    return (
        isSelected
            ?<div className='flex gap-x-[8px] rounded-[3px] cursor-pointer border border-CustomBrand-300 p-[4px] justify-center items-center shadow-order-button'>
                {
                    buttonType == 'Dine-in'
                    ?<img src={DinnerTableIcon} />
                    :buttonType == 'Takeaway'
                    ?<img src={LunchBagIcon} />
                    :<img src={DeliveryBoxIcon} />
                }
                <span className='font-poppins text-nowrap font-normal text-[14px] text-CustomBrand-300'>{buttonType}</span>
                {buttonType == 'Dine-in'
                ?<div className='bg-[#FFD700] rounded-[3px] p-[2px] ps-[4px] pe-[4px] text-[12px]'>
                    12
                </div>
                :<div></div>
                }
            </div>
            :
            <div className='flex gap-x-[8px] rounded-[1px] cursor-pointer p-[4px] justify-center items-center
                            hover:text-CustomBrand-300 hover:ShadowOrderButtonHover'
                onClick={() => {
                    dispatch(selectOrderType(buttonType))
                    handleScroll(scrollToTakeaway, scrollToTables)
                }}
            >
                {
                    buttonType == 'Dine-in'
                    ?<img src={DinnerTableIcon} />
                    :buttonType == 'Takeaway'
                    ?<img src={LunchBagIcon} />
                    :<img src={DeliveryBoxIcon} />
                }
                <span className='font-poppins font-normal text-[14px]'>{buttonType}</span>
            </div> 
    )


}

type OrderTypeBarProps = {
    scrollToTakeaway: () => void;
    scrollToTables: () => void;
}

const OrderTypeBar = ({ scrollToTakeaway, scrollToTables}: OrderTypeBarProps) => {
  return (
    <div className='flex gap-x-[16px] w-full justify-center'>
        <OrderTypeButton 
            buttonType='Dine-in' 
            scrollToTakeaway={scrollToTakeaway}
            scrollToTables={scrollToTables}
        />
        <OrderTypeButton 
            buttonType='Takeaway' 
            scrollToTakeaway={scrollToTakeaway}
            scrollToTables={scrollToTables}
        />
        <OrderTypeButton 
            buttonType='Delivery' 
            scrollToTakeaway={scrollToTakeaway}
            scrollToTables={scrollToTables}
        />
    </div>
  )
}

export default OrderTypeBar
