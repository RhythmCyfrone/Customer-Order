import { useAppSelector, useAppDispatch } from "../State/hooks"
import { getAllTablesAPI } from "../Services/HTTPServices/tables"
import { updateTablesList } from "../State/Slices/tablesSlice"

const useDashboardModel = () => {
    const dispatch = useAppDispatch()

    const getAllTables = async () => {
        try {
            const data = await getAllTablesAPI()
            if(data.status == 200) {
                dispatch(updateTablesList(data.data))
            }else {
                throw new Error('Error fetching tables list')
            }
            return null
        } catch (error) {
            console.log(error)
            return error
        }
    }

    return {
        getAllTables
    }
}

export default useDashboardModel