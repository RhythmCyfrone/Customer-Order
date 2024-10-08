import { useAppDispatch, useAppSelector } from "../State/hooks";
import { OrderType } from "../State/Slices/orderTypeSlice";

const useOrderType = (buttonType: OrderType) => {
    const orderType = useAppSelector(state => state.orderType.type)
    const dispatch = useAppDispatch()
    const isSelected = orderType === buttonType;

    return {
        orderType, dispatch, isSelected
    }

}

export default useOrderType