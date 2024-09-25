import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../State/hooks";

const useDashboardViewModel = () => {
    const [isNotificationsVisible, setIsNotificationsVisible] = useState(false);
    const startPosition = useAppSelector(state => state.backdrop)
    const dispatch = useAppDispatch()

    useEffect(() => {
    if((startPosition.initiator == 'Notifications' || 
            startPosition.initiator == 'Profile' ||
            startPosition.initiator == 'Cancel Order'
        ) 
            && (startPosition.startPosition.top !== 0 || startPosition.startPosition.left !== 0)) {
        setIsNotificationsVisible(true)
    }
    }, [startPosition]);

    return {
        isNotificationsVisible, setIsNotificationsVisible, startPosition, dispatch
    }
}

export default useDashboardViewModel