import { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../State/hooks";

const useItemsSelectViewModel = () => {
    const [itemName, setItemName] = useState<string>('')
    let screenWidth = document.body.clientWidth
    const [maxWidth, setMaxWidth] = useState<number>(screenWidth < 1350? screenWidth - 500 - 40 - 10:screenWidth-500-120-40);
    const [isFoodItemBackdropVisible, setIsFoodItemBackdropVisible] = useState(false);
    const [isNotificationsVisible, setIsNotificationsVisible] = useState(false);
    const startPosition = useAppSelector(state => state.backdrop)
    const dispatch = useAppDispatch()
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth + 24;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth + 24;
            scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    }

    useEffect(() => {
        if((startPosition.initiator == 'Notifications' || 
            startPosition.initiator == 'Profile' ||
            startPosition.initiator == 'Cancel Order' || 
            startPosition.initiator == 'Food Item'
          ) 
            && (startPosition.startPosition.top !== 0 || startPosition.startPosition.left !== 0)) {
          setIsNotificationsVisible(true)
       }
    }, [startPosition]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemName(event.target.value);
    }

    const modifyMaxWidth = (width: number) => {
        const newWidth = Math.floor((width-100) / 124)*124 + 100
        setMaxWidth(newWidth)
    }

    useEffect(() => {
        modifyMaxWidth(maxWidth)
        const updateMaxWidth = () => {
            screenWidth = document.body.clientWidth
            if (screenWidth < 1350) {
                modifyMaxWidth(screenWidth - 500 - 40-10)
            }else{
                modifyMaxWidth(screenWidth-500-120-40)
            }
        };

        window.addEventListener('resize', updateMaxWidth);

        return () => window.removeEventListener('resize', updateMaxWidth);
    }, []);

    return {
        itemName, setItemName, screenWidth, maxWidth, setMaxWidth, isFoodItemBackdropVisible, setIsFoodItemBackdropVisible,
        isNotificationsVisible, setIsNotificationsVisible, startPosition, dispatch, scrollContainerRef,
        handleScrollLeft, handleScrollRight, handleInputChange
    }

}

export default useItemsSelectViewModel