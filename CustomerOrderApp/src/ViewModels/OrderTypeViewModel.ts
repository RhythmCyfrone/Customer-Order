import { useAppDispatch, useAppSelector } from "../State/hooks";
import { OrderType } from "../State/Slices/orderTypeSlice";


const useOrderType = (buttonType: OrderType) => {
    const orderType = useAppSelector(state => state.orderType.type)
    const dispatch = useAppDispatch()
    const isSelected = orderType === buttonType;

    type ScrollFunc = () => void

    const handleScroll = (scrollToTakeaway: ScrollFunc, scrollToTables: ScrollFunc) => {
        if (buttonType === 'Takeaway') {
            scrollToTakeaway()
        }else if(buttonType === 'Dine-in') {
            scrollToTables()
        }
    }

    return {
        orderType, dispatch, isSelected, handleScroll
    }

}

export default useOrderType