export const statusToColors = {
    'free': 'bg-[#41C5FF]',
    'Reserved': 'bg-[#FFB800]',
    'Assigned': 'bg-[#3B82F6]',
    'Ordered': 'bg-[#E64980]',
    'Served': 'bg-[#00D930]',
    'Billed': 'bg-[#A1007E]',
    'Paid': 'bg-[#40E0D0]'
} as const

export const statusToTextColors = {
    'free': 'text-[#41C5FF]',
    'Reserved': 'text-[#FFB800]',
    'Assigned': 'text-[#3B82F6]',
    'Ordered': 'text-[#E64980]',
    'Served': 'text-[#00D930]',
    'Billed': 'text-[#A1007E]',
    'Paid': 'text-[#40E0D0]'
} as const