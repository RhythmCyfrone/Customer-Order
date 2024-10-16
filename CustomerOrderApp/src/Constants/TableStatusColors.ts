export const statusToColors = {
    'Free': 'bg-[#6C0141]',
    'Reserved': 'bg-[#FF8800]',
    'Assigned': 'bg-[#3B82F6]',
    'Ordered': 'bg-[#FF377D]',
    'Served': 'bg-[#00D930]',
    'Billed': 'bg-[#9700DE]',
    'Paid': 'bg-[#005858]'
} as const

export const statusToTextColors = {
    'Free': 'text-[#6C0141]',
    'Reserved': 'text-[#FF8800]',
    'Assigned': 'text-[#3B82F6]',
    'Ordered': 'text-[#FF377D]',
    'Served': 'text-[#00D930]',
    'Billed': 'text-[#9700DE]',
    'Paid': 'text-[#005858]'
} as const