import DinnerTableIcon from '../Assets/Icons/dinner-table.svg'
import DeliveryBoxIcon from '../Assets/Icons/box.svg'
import LunchBagIcon from '../Assets/Icons/lunch-bag.svg'
import '../Styles/Shadows.css'
import '../Styles/Fonts.css'

import type { OrderType } from '../State/Slices/orderTypeSlice'
import { selectOrderType } from '../State/Slices/orderTypeSlice'
import useOrderType from '../ViewModels/OrderTypeViewModel'

const OrderTypeButton = ({buttonType}: {buttonType:  OrderType}) => {
    const {
        orderType, dispatch, isSelected
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
                onClick={() => dispatch(selectOrderType(buttonType))}
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

const OrderTypeBar = () => {
  return (
    <div className='flex gap-x-[16px] w-full justify-center'>
        <OrderTypeButton buttonType='Dine-in' />
        <OrderTypeButton buttonType='Takeaway' />
        <OrderTypeButton buttonType='Delivery' />
    </div>
  )
}

export default OrderTypeBar
