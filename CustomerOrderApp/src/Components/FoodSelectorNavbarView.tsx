import { MealCourseDTO } from '../Models/HTTPServices/ResponseDTO';
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

    const padding = selectorName == 'All'?'ps-[20px] pe-[20px]':'ps-[10px] pe-[10px]'
    
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

    const {
        mealCourses
    } = useFoodSelectorNavbarViewModel()
  
  return (
    <div className='flex gap-x-[8px] ps-[80px] desktop-max:ps-[20px]'>
        <SelectorButton 
            selectorName='All' 
            selectorId = {0}
            courseSelector = {courseSelector}
            setCourseSelector = {setCourseSelector}
        />
        {
            mealCourses?.map((course: MealCourseDTO, index: number) => {
                return (
                    <SelectorButton 
                        key={index}
                        selectorName={course.mealCourseName} 
                        selectorId = {course.mealCourseId}
                        courseSelector = {courseSelector}
                        setCourseSelector = {setCourseSelector}
                    />
                )
            })
        }
    </div>
    
  )
}

export default FoodSelectorNavbar
