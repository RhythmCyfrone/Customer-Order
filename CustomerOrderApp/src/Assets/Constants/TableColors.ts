export const statusToColors = {
    'Free': 'bg-TableStatus-free',
    'Reserved': 'bg-TableStatus-reserved',
    'Assigned': 'bg-TableStatus-assigned',
    'Order Confirm': 'bg-TableStatus-confirmed',
    'Preparing': 'bg-TableStatus-preparing',
    'Ready to Serve': 'bg-TableStatus-ready',
    'Served': 'bg-TableStatus-served',
    'Generate Bill': 'bg-TableStatus-bill',
    'Payment Done': 'bg-TableStatus-completed'
} as const

export const statusToTextColors = {
    'Free': 'text-TableStatus-free',
    'Reserved': 'text-TableStatus-reserved',
    'Assigned': 'text-TableStatus-assigned',
    'Order Confirm': 'text-TableStatus-confirmed',
    'Preparing': 'text-TableStatus-preparing',
    'Ready to Serve': 'text-TableStatus-ready',
    'Served': 'text-TableStatus-served',
    'Generate Bill': 'text-TableStatus-bill',
    'Payment Done': 'text-TableStatus-completed'
} as const

export const orderStatusColors = {
    'Order Confirm': 'bg-[#E64980]',
    'Served': 'bg-[#00D930]'
} as const