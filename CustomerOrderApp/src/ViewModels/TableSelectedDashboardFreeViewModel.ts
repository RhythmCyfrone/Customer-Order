import { useAppSelector } from "../State/hooks";

const useTableSelectedDashboardFreeViewModel = () => {
    const currentTable = useAppSelector(state => state.tableSelect.selectedTable)

    return {
        currentTable
    }
}

export default useTableSelectedDashboardFreeViewModel;