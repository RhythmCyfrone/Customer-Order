import { useAppSelector } from "../State/hooks";

export type SearchNavbarProps = {
    tableName: string;
    setTableName: React.Dispatch<React.SetStateAction<string>>;
}

const useSearchNavbarViewModel = ({tableName, setTableName}: SearchNavbarProps) => {
    const screen = useAppSelector(state => state.screen.screen)
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTableName(event.target.value);
    }

    return {
        screen, handleInputChange
    }
}

export default useSearchNavbarViewModel