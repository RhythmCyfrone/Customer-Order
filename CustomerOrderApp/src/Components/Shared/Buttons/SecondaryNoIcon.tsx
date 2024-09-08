import React from 'react'
import '../../../Styles/Fonts.css'
import '../../../Styles/Shadows.css'

type SecondaryNoIconProps = {
    content: string
}
const SecondaryNoIcon = ({content}: SecondaryNoIconProps) => {
  return (
    <button className='text-center fontSecondaryButtonDefault border-[1px] border-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover
                    hover:bg-CustomBrand-200 active:shadow-none active:bg-white'
    >
        {content}
    </button>
  )
}

export default SecondaryNoIcon
