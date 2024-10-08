export type TableSelectorNavbarProps = {
    statusFlter: string;
    setStatusFilter: React.Dispatch<React.SetStateAction<string>>;
}

const useTableSelectorNavbarViewModel = ({statusFlter, setStatusFilter}: TableSelectorNavbarProps) => {

    const updateStatusSelector = (selectorName: string) => {
        setStatusFilter(selectorName)
    }
    
    return {
        updateStatusSelector
    }
}  

export default useTableSelectorNavbarViewModel