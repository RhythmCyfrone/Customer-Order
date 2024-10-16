import { useState } from "react";
import { selectScreen } from "../State/Slices/ScreensSlice";
import { createTakeAwayOrder } from "../Services/HTTPServices/takeaways";
import { useAppDispatch, useAppSelector } from "../State/hooks";
import { selectTable } from "../State/Slices/TableSlice";

const useAddTakeAwayOrderViewModel = () => {
    const currentTable = useAppSelector(state => state.tableSelect.selectedTable)
    const takeaway = useAppSelector(state => state.tableSelect.takeaway)
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

    const handleAddItems = async () => {
        try {
            const data = await createTakeAwayOrder({customerName: newCustomerName, customerPhone: newCustomerMobile})
            console.log(data)
            if(data.status == 200) {
                dispatch(selectTable({selectedTable: data.data.orderId, takeaway: true, selectedTableId: 0}))
                dispatch(selectScreen({screen: 'Items Select'}))
            }else {
                throw new Error('Error fetching tables list')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return {
        disableAddItem, newCustomerMobile, newCustomerName,
        handleNewCustomerMobileChange, handleNewCustomerNameChange, handleAddItems
    }
}

export default useAddTakeAwayOrderViewModel