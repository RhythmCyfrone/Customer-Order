export const statusToColors = {
    'Free': 'bg-TableStatus-free',
    'Reserved': 'bg-TableStatus-reserved',
    'Assigned': 'bg-TableStatus-assigned',
    'Ordered': 'bg-TableStatus-confirmed',
    'Served': 'bg-TableStatus-served',
    'Billed': 'bg-TableStatus-bill',
    'Paid': 'bg-TableStatus-completed'
} as const

export const statusToTextColors = {
    'Free': 'text-TableStatus-free',
    'Reserved': 'text-TableStatus-reserved',
    'Assigned': 'text-TableStatus-assigned',
    'Ordered': 'text-TableStatus-confirmed',
    'Served': 'text-TableStatus-served',
    'Billed': 'text-TableStatus-bill',
    'Paid': 'text-TableStatus-completed'
} as const