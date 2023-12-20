import {useState} from 'react'

const useCharLimit = (value) => {
    const [charValue, setCharValue] = useState(value)    
    return [charValue, setCharValue];
}

export default useCharLimit;