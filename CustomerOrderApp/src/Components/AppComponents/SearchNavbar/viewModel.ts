import { useState } from "react";
const useSearchNavbarViewModel = () => {
    const [tableName, setTableName] = useState<string>('')
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTableName(event.target.value);
    }

    return {
        tableName, setTableName, handleInputChange
    }
}

export default useSearchNavbarViewModel