import { useAppDispatch, useAppSelector } from "../../State/hooks"
import { selectorType } from "../../State/Slices/FoodSelectorNavbarSlice"

export const useFoodSelectorNavbarViewModel = (selectorName: selectorType) => {
    const selector = useAppSelector(state => state.foodSelector.selector)
    const dispatch = useAppDispatch()
    const padding = selectorName == 'All'?'ps-[20px] pe-[20px]':'ps-[10px] pe-[10px]'

    return {
        selector,
        dispatch,
        padding
    }

}
