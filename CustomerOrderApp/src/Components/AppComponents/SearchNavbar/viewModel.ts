export type SearchNavbarProps = {
    tableName: string;
    setTableName: React.Dispatch<React.SetStateAction<string>>;
}

const useSearchNavbarViewModel = ({tableName, setTableName}: SearchNavbarProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTableName(event.target.value);
    }

    return {
         handleInputChange
    }
}

export default useSearchNavbarViewModel