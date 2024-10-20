import { useAppSelector } from "../State/hooks";
import { useState } from "react";
import { Dayjs } from 'dayjs'


type views = 'Default' | 'Quick Actions' | 'Reserve' | 'Split' | 'Combine'
const useTableSelectedDashboardFreeViewModel = () => {
    const currentTable = useAppSelector(state => state.tableSelect.selectedTable)
    const [view, setView] = useState<views>('Default')
    const [newCustomerName, setNewCustomerName] = useState('')
    const [newCustomerMobile, setNewCustomerMobile] = useState('')
    const [newCustomerMail, setNewCustomerMail] = useState('')
    const [dateInput, setDateInput] = useState('')
    const [timeInput, setTimeInput] = useState('')
    const [countPersons, setCountPersons] = useState(0)
    const [showCalender, setShowCalender] = useState(false)
    const [showTimePicker, setShowTimePicker] = useState(false)
    const [disableConfirmQuickActions, setDisableConfirmQuickActions] = useState(true)

    const formatDataInput = (): string => {
        let value = dateInput.replace(/\D/g, ""); // Remove non-digit characters
        let formattedDate = "__/__/__";

        if(value.length > 6 || value.length === 0) {
            return '';
        }

        if (value.length >= 1) {
            formattedDate = value.substring(0, 2) + "/__/__";
        }
        if (value.length >= 3) {
            formattedDate = value.substring(0, 2) + "/" + value.substring(2, 4) + "/__";
        }
        if (value.length >= 5) {
            formattedDate = value.substring(0, 2) + "/" + value.substring(2, 4) + "/" + value.substring(4, 6);
        }
        return formattedDate;
    }

    const handleShowCalender = (value: Dayjs | null) => {
        if (showCalender && value !== null) {
            setDateInput(value.format('DD/MM/YY'))
        }
        setShowCalender(!showCalender)
    }

    const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDateInput(e.target.value)
    }

    const handleTimeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTimeInput(e.target.value)
    }

    const handleViews = (currentView: views) => {
        setView(currentView)
    }

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

    const handleNewCustomerMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCustomerMail(e.target.value)
    }

    return {
        currentTable, view, handleViews, newCustomerMail, handleNewCustomerMailChange,
        newCustomerName, newCustomerMobile, handleNewCustomerNameChange, handleNewCustomerMobileChange,
        countPersons, updateCountPersons, disableConfirmQuickActions, dateInput, handleDateInputChange, 
        formatDataInput, timeInput, handleTimeInputChange, showCalender, handleShowCalender
    }
}

export default useTableSelectedDashboardFreeViewModel;