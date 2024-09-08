import React from 'react'
import '../../../Styles/Fonts.css'
import '../../../Styles/Shadows.css'

type PrimaryNoIconProps = {
    content: string
}
const PrimaryNoIcon = ({content}: PrimaryNoIconProps) => {
  return (
    <button className='text-center fontButtonDefault bg-CustomBrand-300 cursor-pointer rounded-[8px] p-[8px] ps-[24px] pe-[24px] hover:ShadowPrimaryHover active:shadow-none'
    >
        {content}
    </button>
  )
}

export default PrimaryNoIcon
