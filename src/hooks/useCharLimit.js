import {useState} from 'react'

const useCharLimit = (value) => {
    const [charValue, setCharValue] = useState(value)    
    const validateCharacterLimit = (value) => {
        if (value.length <= 5) {
            setCharValue(value)
        }
    }
    return [charValue, validateCharacterLimit];
}

export default useCharLimit;