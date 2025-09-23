import { useState } from 'react'

function getInitialVelue() {
    console.log('obtendo o valor inicial')
    return 1 + 1
}

export default function useCounter(){
    const [count, setCount] = useState(() => getInitialVelue())

    const increment = () => {
        setCount((currentCounter) => currentCounter + 1)
        setCount((currentCounter) => currentCounter + 1)
    }

    return {count, increment}
}