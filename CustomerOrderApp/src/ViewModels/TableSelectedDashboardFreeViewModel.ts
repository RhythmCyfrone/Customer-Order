import { useAppSelector } from "../State/hooks";
import { useState } from "react";

const useTableSelectedDashboardFreeViewModel = () => {
    const currentTable = useAppSelector(state => state.tableSelect.selectedTable)
    const [quickActions, setQuickActions] = useState(false)
    const [newCustomerName, setNewCustomerName] = useState('')
    const [newCustomerMobile, setNewCustomerMobile] = useState('')
    const [countPersons, setCountPersons] = useState(0)
    const [disableConfirmQuickActions, setDisableConfirmQuickActions] = useState(true)

    const updateCountPersons = (count: number) => {
        setCountPersons(count)
    }

    const handleNewCustomerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCustomerName(e.target.value)
        if (e.target.value !== '') {
            setDisableConfirmQuickActions(false)
        }
    }

    const handleNewCustomerMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCustomerMobile(e.target.value)
    }

    return {
        currentTable, quickActions, setQuickActions,
        newCustomerName, newCustomerMobile, handleNewCustomerNameChange, handleNewCustomerMobileChange,
        countPersons, updateCountPersons, disableConfirmQuickActions
    }
}

export default useTableSelectedDashboardFreeViewModel;