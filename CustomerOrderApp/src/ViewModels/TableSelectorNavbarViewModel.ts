import { useAppSelector } from "../State/hooks";

export type TableSelectorNavbarProps = {
    statusFlter: string;
    setStatusFilter: React.Dispatch<React.SetStateAction<string>>;
}

const useTableSelectorNavbarViewModel = ({statusFlter, setStatusFilter}: TableSelectorNavbarProps) => {
    const screen = useAppSelector(state => state.screen.screen)
    const screenWidth = document.body.clientWidth
    const updateStatusSelector = (selectorName: string) => {
        setStatusFilter(selectorName)
    }
    
    return {
        screen, screenWidth, updateStatusSelector
    }
}  

export default useTableSelectorNavbarViewModel