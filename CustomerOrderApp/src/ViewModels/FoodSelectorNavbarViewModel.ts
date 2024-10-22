export const useFoodSelectorNavbarViewModel = (selectorName: string) => {
    const padding = selectorName == 'All'?'ps-[20px] pe-[20px]':'ps-[10px] pe-[10px]'

    return {
        padding
    }

}
