import { useAppSelector } from "../State/hooks"

const useTableDetailsViewModel = () => {
    const currentTable = useAppSelector(state => state.tableSelect.selectedTable)

    return {
        currentTable
    }

}

export default useTableDetailsViewModel