import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../State/hooks";
import { updateTablesList } from "../../State/Slices/tablesSlice";
import { getAllTablesAPI } from "../../Services/HTTPServices/tables";

const useDashboardViewModel = () => {
    const [isNotificationsVisible, setIsNotificationsVisible] = useState(false);
    const startPosition = useAppSelector(state => state.backdrop)
    const [loading, setLoading] = useState(true)
    const dispatch = useAppDispatch()
    const tablesList = useAppSelector(state => state.tablesList)
    const [displayTables, setDisplayTables] = useState(tablesList)
    const [tableName, setTableName] = useState<string>('')
    const [statusFlter, setStatusFilter] = useState<string>('All')

    useEffect(() => {
        let tempList = []
        if(tableName === '') {
            tempList = [...tablesList].sort((a, b) => Number(a.id.slice(1)) - Number(b.id.slice(1)))
        }else {
            tempList = [...tablesList].filter(table => table.id.toLowerCase().includes(tableName.toLowerCase()))
        }

        console.log(tempList)

        if(statusFlter === 'All') {
            setDisplayTables(tempList.sort((a, b) => Number(a.id.slice(1)) - Number(b.id.slice(1))))
        }else if(statusFlter === 'Occupied') {
            setDisplayTables(tempList.filter(table => {
                return ['Occupied', 'Served', 'Billed'].includes(table.curr_status)
            }))
        }else if(statusFlter === 'Assigned') {
            setDisplayTables(tempList.filter(table => {
                return ['Reserved', 'Assigned'].includes(table.curr_status)
            }))
        }
    }, [tableName, tablesList, statusFlter])
    
    useEffect(() => {
        const updateTablesListData = async () => {
            try {
                const data = await getAllTablesAPI()
                if(data.status == 200) {
                    dispatch(updateTablesList(data.data))
                }else {
                    throw new Error('Error fetching tables list')
                }
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        updateTablesListData()
    }, [])

    useEffect(() => {
    if((startPosition.initiator == 'Notifications' || 
            startPosition.initiator == 'Profile' ||
            startPosition.initiator == 'Cancel Order' || 
            startPosition.initiator == 'Accept Payment'
        ) 
            && (startPosition.startPosition.top !== 0 || startPosition.startPosition.left !== 0)) {
        setIsNotificationsVisible(true)
    }
    }, [startPosition]);

    return {
        isNotificationsVisible, setIsNotificationsVisible, startPosition, dispatch,
        loading, setLoading, tablesList,displayTables, tableName, setTableName,
        statusFlter, setStatusFilter
    }
}

export default useDashboardViewModel