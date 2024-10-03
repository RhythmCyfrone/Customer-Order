import { useAppSelector } from "../../../State/hooks"
import { useState, useEffect } from "react"

export type ItemsListItemProps = {
    itemName: string;
    itemCount: number;
    note: boolean;
    setNote: React.Dispatch<React.SetStateAction<boolean>> | null;
    discount: boolean;
    setDiscount: React.Dispatch<React.SetStateAction<boolean>> ;
    checkedAll?: boolean
}
type useItemsListItemViewModelProps = {
    note: boolean;
    discount: boolean;
    checkedAll?: boolean
}
const useItemsListItemViewModel = ({note, discount, checkedAll = false}: useItemsListItemViewModelProps) => {
    const screen = useAppSelector(state => state.screen.screen)
    const displayCheckbox = note || discount
    const displayCounters = screen == 'Items Select' || !displayCheckbox
    const [checked, setChecked] = useState(true)

    useEffect(() => {
        setChecked(checkedAll)
    }, [checkedAll])

    return {
        screen, displayCheckbox, displayCounters, checked, setChecked
    }
}

export default useItemsListItemViewModel