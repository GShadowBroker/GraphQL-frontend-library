import { useState } from 'react'

export const useField = (type) => {
    const [value, setValue] = useState('')

    const onChange = (e) => setValue(e.target.value)

    const clear = () => setValue('')

    const set = (newValue) => setValue(newValue)
    
    return {
        value,
        clear,
        set,
        form: {
            type,
            value,
            onChange
        }
    }
}