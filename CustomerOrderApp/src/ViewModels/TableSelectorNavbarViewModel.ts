import { useAppSelector } from "../State/hooks";

export type TableSelectorNavbarProps = {
    statusFlter: string;
    setStatusFilter: React.Dispatch<React.SetStateAction<string>>;
}

const useTableSelectorNavbarViewModel = ({statusFlter, setStatusFilter}: TableSelectorNavbarProps) => {
    const screen = useAppSelector(state => state.screen.screen)
    const updateStatusSelector = (selectorName: string) => {
        setStatusFilter(selectorName)
    }
    
    return {
        screen, updateStatusSelector
    }
}  

export default useTableSelectorNavbarViewModel