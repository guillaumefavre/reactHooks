import React, {useState} from 'react'

const useStateExample = () => {

    const [inputText, setInputText] = useState("")
    const [historyInputs, setHistoryInputs] = useState([])

    return  <div>
                <input placeholder="Enter some text"
                        onChange={(e) => {
                            setInputText(e.target.value)
                            setHistoryInputs([...historyInputs, e.target.value])
                        }} />
                <br />
                {inputText}
                <br />
                <ul>
                    {historyInputs.map((record) => {
                        return <li>{record}</li>
                    })}
                </ul>
            </div>
}

export default useStateExample