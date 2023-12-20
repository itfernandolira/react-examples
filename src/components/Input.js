import useCharLimit from "../hooks/useCharLimit";

const Input = () => {
    const [inputValue, setInputValue] = useCharLimit("");

    return (
        <div>
        <input 
           type="text" 
           value={inputValue}
           onChange={(e)=>{
               setInputValue(e.target.value)
           }}
         />
       </div>
    )
}

export default Input;