import { useState, useEffect } from "react";

export type NewItemsListProps = {
    viewAll?: boolean | null;
    setViewAll?: React.Dispatch<React.SetStateAction<boolean>> | null
}
const useNewItemsSelected = ({viewAll = null, setViewAll}: NewItemsListProps) => {
    const [screenHeight, setScreenHeight] = useState(document.body.clientHeight)

    const handleViewAll = () => {
        if (setViewAll) {
            setViewAll(!viewAll);
        }
    };

    useEffect(() => {
        const updateMaxHeight = () => {
            setScreenHeight(document.body.clientHeight)
        };

        window.addEventListener('resize', updateMaxHeight);

        return () => window.removeEventListener('resize', updateMaxHeight);
    }, []);

    return {
        screenHeight, setScreenHeight, handleViewAll
    }

}
export default useNewItemsSelected