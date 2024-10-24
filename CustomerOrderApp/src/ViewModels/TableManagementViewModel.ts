import { useEffect, useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../State/hooks";
import { updateTablesList } from "../State/Slices/tablesSlice";
import { getAllTables } from "../Services/HTTPServices/tables";
import { updateTableStatistics } from "../State/Slices/tableStatisticsSlice";

const useTableManagementViewModel = () => {
    const [isNotificationsVisible, setIsNotificationsVisible] = useState(false);
    const startPosition = useAppSelector(state => state.backdrop)
    const [loadingTable, setLoadingTable] = useState(true)
    const dispatch = useAppDispatch()
    const tablesList = useAppSelector(state => state.tablesList)
    const tableStastics = useAppSelector(state => state.tableStastics)
    const [displayTables, setDisplayTables] = useState(tablesList)
    const [tableName, setTableName] = useState<string>('')
    const [statusFlter, setStatusFilter] = useState<string>('All')
    const [takeAway, setTakeAway] = useState(false)
    const takeawayRef = useRef<HTMLDivElement>(null);
    const tablesRef = useRef<HTMLDivElement>(null);
    const screenWidth = document.body.clientWidth;

    const scrollToTakeaway = () => {
        if (takeawayRef.current) {
        takeawayRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const scrollToTables = () => {
        if (tablesRef.current) {
            tablesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }



    useEffect(() => {
        let tempList = []
        if(tableName === '') {
            tempList = [...tablesList].sort((a, b) => Number(a.tableName.slice(1)) - Number(b.tableName.slice(1)))
        }else {
            tempList = [...tablesList].filter(table => table.tableName.toLowerCase().includes(tableName.toLowerCase()))
        }

        if(statusFlter === 'All') {
            setDisplayTables(tempList.sort((a, b) => Number(a.tableName.slice(1)) - Number(b.tableName.slice(1))))
        }else if(statusFlter === 'Occupied') {
            setDisplayTables(tempList.filter(table => {
                return ['Assigned','Ordered', 'Served', 'Billed', 'Paid'].includes(table.tableStatusName)
            }))
        }else if(statusFlter !== '') {
            setDisplayTables(tempList.filter(table => {
                return table.tableStatusName == statusFlter
            }))
        }
    }, [tableName, tablesList, statusFlter])
    
    useEffect(() => {
        const updateTablesListData = async () => {
            try {
                const data = await getAllTables()
                if(data.status == 200 && data.data !== null) {
                    dispatch(updateTablesList(data.data.servingTableDetails))
                    dispatch(updateTableStatistics({
                        countOfActualCapacity: data.data.countOfActualCapacity,
                        avgTableOccupancy: data.data.avgTableOccupancy,
                        avgTableTurnOverTime: data.data.avgTableTurnOverTime
                    }))
                }else {
                    throw new Error('Error fetching tables list')
                }
            } catch (error) {
                console.error(error)
            } finally {
                setLoadingTable(false)
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
        loadingTable, setLoadingTable, tablesList, displayTables, 
        tableName, setTableName, statusFlter, setStatusFilter, takeAway, setTakeAway, takeawayRef, scrollToTakeaway,
        tablesRef, scrollToTables, tableStastics, screenWidth
    }
}

export default useTableManagementViewModel