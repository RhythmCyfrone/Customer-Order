import { useState, useEffect } from "react"

export type ItemsListProps = {
    viewAll?: boolean | null;
    setViewAll?: React.Dispatch<React.SetStateAction<boolean>> | null;
    note?: boolean;
    setNote?: React.Dispatch<React.SetStateAction<boolean>> | null;
    discount?: boolean;
    setDiscount?: React.Dispatch<React.SetStateAction<boolean>> | null;
}

type useItemsListViewModelProps = {
    viewAll?: boolean | null;
    setViewAll?: React.Dispatch<React.SetStateAction<boolean>> | null;
    note: boolean;
    discount: boolean;
}

const useItemsListViewModel = ({viewAll = null, setViewAll, note, discount}: useItemsListViewModelProps) => {
    const [screenHeight, setScreenHeight] = useState(document.body.clientHeight)
    const [checkedAll, setCheckedAll] = useState<boolean>(true)
    const specialFeature = note || discount

    const handleViewAll = () => {
        if (setViewAll) {
            setViewAll(!viewAll);
        }
    };

    useEffect(() => {
        if((note || discount) == true)
            setCheckedAll(true)
    }, [note, discount])

    useEffect(() => {
        const updateMaxHeight = () => {
            setScreenHeight(document.body.clientHeight)
        };

        window.addEventListener('resize', updateMaxHeight);

        return () => window.removeEventListener('resize', updateMaxHeight);
    }, []);

    return {
        screenHeight, setScreenHeight, checkedAll, setCheckedAll, specialFeature, handleViewAll
    }

}

export default useItemsListViewModel