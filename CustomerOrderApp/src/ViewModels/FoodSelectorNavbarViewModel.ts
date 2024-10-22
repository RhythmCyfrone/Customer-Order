import { useAppSelector } from "../State/hooks"

export const useFoodSelectorNavbarViewModel = () => {
    const mealCourses = useAppSelector(state => state.master.masterData['mealCourses']?.data as any)

    return {
        mealCourses
    }

}
