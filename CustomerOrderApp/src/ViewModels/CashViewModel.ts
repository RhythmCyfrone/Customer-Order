import { useState } from "react"

const useCashViewModel = () => {
    const [viewCashDenomination, setViewCashDenomination] = useState(false)
    const [viewReturnCashDenomination, setViewReturnCashDenomination] = useState(false)

    const handleViewCashDenomination = () => {
        if(!viewCashDenomination) 
            setViewReturnCashDenomination(false)
        setViewCashDenomination(!viewCashDenomination)
    }

    const handleViewReturnCashDenomination = () => {
        if(!viewReturnCashDenomination) 
            setViewCashDenomination(false)
        setViewReturnCashDenomination(!viewReturnCashDenomination)
    }
    const [cashDenominations, setCashDenominations] = useState([
        { denomination: 2000, count: 0 },
        { denomination: 500, count: 0 },
        { denomination: 200, count: 0 },
        { denomination: 100, count: 0 },
        { denomination: 50, count: 0 },
        { denomination: 20, count: 0 },
        { denomination: 10, count: 0 },
    ])
    const [returnCashDenominations, setReturnCashDenominations] = useState([
        { denomination: 2000, count: 0 },
        { denomination: 500, count: 0 },
        { denomination: 200, count: 0 },
        { denomination: 100, count: 0 },
        { denomination: 50, count: 0 },
        { denomination: 20, count: 0 },
        { denomination: 10, count: 0 },
    ])

    const handleCashDenominationChange = (index: number, value: number) => {
        setCashDenominations([...cashDenominations.slice(0, index), { ...cashDenominations[index], count: value }, ...cashDenominations.slice(index + 1)])
    }

    const handleReturnCashDenominationChange = (index: number, value: number) => {
        setReturnCashDenominations([...returnCashDenominations.slice(0, index), { ...returnCashDenominations[index], count: value }, ...returnCashDenominations.slice(index + 1)])
    }

    return {
        viewCashDenomination,
        viewReturnCashDenomination,
        handleViewCashDenomination,
        handleViewReturnCashDenomination,
        cashDenominations,
        returnCashDenominations,
        handleCashDenominationChange,
        handleReturnCashDenominationChange,
    }
}

export default useCashViewModel;