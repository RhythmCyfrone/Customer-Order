import {  useAppDispatch, useAppSelector } from "../State/hooks";
import { selectScreen } from "../State/Slices/ScreensSlice";
import { toggle } from "../State/Slices/sidebarSlice";

export type SearchNavbarProps = {
    tableName: string;
    setTableName: React.Dispatch<React.SetStateAction<string>>;
}

const useSearchNavbarViewModel = ({tableName, setTableName}: SearchNavbarProps) => {
    const screen = useAppSelector(state => state.screen.screen)
    const dispatch = useAppDispatch();
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTableName(event.target.value);
    }

    const handleScreenChange = () => {
        dispatch(selectScreen({screen: 'Table Management'}));
        dispatch(toggle());
    }

    return {
        screen, handleInputChange, handleScreenChange
    }
}

export default useSearchNavbarViewModel