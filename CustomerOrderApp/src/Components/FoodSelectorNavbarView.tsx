import { useFoodSelectorNavbarViewModel } from '../ViewModels/FoodSelectorNavbarViewModel'

type SelectorButtonProps = {
    selectorName: string;
    selectorId: number;
    courseSelector: number;
    setCourseSelector: React.Dispatch<React.SetStateAction<number>>;
}
const SelectorButton = ({
    selectorName,
    selectorId,
    courseSelector,
    setCourseSelector
}: SelectorButtonProps) => {
    const {
        padding
    } = useFoodSelectorNavbarViewModel(selectorName)
    
    return (
        selectorId == courseSelector
        ?<div className={`p-[4px] cursor-pointer ${padding} rounded-[20px] bg-[#C3DAFF] border-[1px] border-[#3B82F6]`}>
            <span className='font-quicksand font-normal text-[11.68px]'>
                {selectorName}
            </span>
        </div>
        :<div className= {`p-[4px] cursor-pointer ${padding} rounded-[20px] bg-[#EBF3FE] hover:bg-[#C3DAFF]`}
            onClick={() => setCourseSelector(selectorId)}
        >
            <span className='font-quicksand font-normal text-[11.68px]'>
                {selectorName}
            </span>
        </div>
    )
}

type FoodSelectorNavbarProps = {
    courseSelector: number;
    setCourseSelector: React.Dispatch<React.SetStateAction<number>>;
}

const FoodSelectorNavbar = ({
    courseSelector, setCourseSelector
}: FoodSelectorNavbarProps) => {
  return (
    <div className='flex gap-x-[8px] ps-[80px] desktop-max:ps-[20px]'>
        <SelectorButton 
            selectorName='All' 
            selectorId = {0}
            courseSelector = {courseSelector}
            setCourseSelector = {setCourseSelector}
        />
        <SelectorButton 
            selectorName='Starters' 
            selectorId = {1}
            courseSelector = {courseSelector}
            setCourseSelector = {setCourseSelector}
        />
        <SelectorButton 
            selectorName='Main Course' 
            selectorId = {3}
            courseSelector = {courseSelector}
            setCourseSelector = {setCourseSelector}
        />
        <SelectorButton 
            selectorName='Snacks' 
            selectorId = {4}
            courseSelector = {courseSelector}
            setCourseSelector = {setCourseSelector}
        />
        <SelectorButton 
            selectorName='Desserts' 
            selectorId = {5}
            courseSelector = {courseSelector}
            setCourseSelector = {setCourseSelector}
        />
    </div>
    
  )
}

export default FoodSelectorNavbar
