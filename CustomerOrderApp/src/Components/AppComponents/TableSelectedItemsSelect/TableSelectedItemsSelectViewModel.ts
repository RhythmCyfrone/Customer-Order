import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../State/hooks"
import { OrdersType } from "../../../api/types"
import { setStartPosition } from "../../../State/Slices/BackdropSlice"
import { AxiosResponse } from "axios"
import { getOrdersByTable } from "../../../api/Orders"

const useTableSelectedItemsViewModel = () => {
    const currentTable = useAppSelector(state => state.tableSelect.selectedTable)
    const currentFloor = useAppSelector(state => state.tableSelect.currentFloor)
    const [viewAll, setViewAll] = useState(false)
    const dispatch = useAppDispatch()
  
    const [order, setOrder] = useState<OrdersType[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
  
    const handleNotificationsClick = (e: React.MouseEvent<HTMLImageElement | HTMLDivElement>, initiator: string) => {
      const clickX = e.clientX;
      const clickY = e.clientY;
  
      dispatch(setStartPosition({ top: clickY, left: clickX, initiator: initiator }));
  
  };
  
    useEffect(() => {
      setLoading(true)
      if(currentTable == 'None') {
        setLoading(false)
        return
      }
      const fetchOrderByTableID = async () => {
        try{
          const data:AxiosResponse<OrdersType[]> = await getOrdersByTable(currentTable)
          if(data.status == 200)
          {
            setOrder(data.data)
            setLoading(false)
          }
        }catch(err) {
          console.log(err)
        }
      }
      fetchOrderByTableID()
    }, [currentTable, currentFloor])

    return {
        currentFloor, currentTable, dispatch, viewAll, setViewAll, order, setOrder, loading, setLoading, handleNotificationsClick
    }
}

export default useTableSelectedItemsViewModel