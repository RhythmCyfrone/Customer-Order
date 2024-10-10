import { useState } from "react";
import { selectScreen } from "../State/Slices/ScreensSlice";
import { useAppDispatch } from "../State/hooks";

const useAddTakeAwayOrderViewModel = () => {
    const [disableAddItem, setDisableAddItem] = useState(true); 
    const [newCustomerName, setNewCustomerName] = useState('');
    const [newCustomerMobile, setNewCustomerMobile] = useState('');
    const dispatch = useAppDispatch()

    const handleNewCustomerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCustomerName(e.target.value);
        if(e.target.value === '') {
            setDisableAddItem(true);
        } else {
            setDisableAddItem(false);
        }
    }
    const handleNewCustomerMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCustomerMobile(e.target.value);
    }

    const handleAddItems = () => {
        dispatch(selectScreen({screen: 'Items Select'}))
    }

    return {
        disableAddItem, newCustomerMobile, newCustomerName,
        handleNewCustomerMobileChange, handleNewCustomerNameChange, handleAddItems
    }
}

export default useAddTakeAwayOrderViewModel