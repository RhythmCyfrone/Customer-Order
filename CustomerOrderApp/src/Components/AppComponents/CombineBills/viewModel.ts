import { useState } from "react"

const useCombineBillsViewModel = () => {
    const [dropDown, setDropDown] = useState(true)
    const [tableName, setTableName] = useState('')
    const [choosenTable, setChoosenTable] = useState('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTableName(event.target.value);
    }

    return {
        dropDown, setDropDown, tableName, setTableName, handleInputChange, choosenTable, setChoosenTable
    }

}

export default useCombineBillsViewModel