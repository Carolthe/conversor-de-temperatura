import { useState } from "react"

export default function Conversor (){
    const [input1, setInput1] = useState ("")
    const [button1, setButton1] = useState("")

    function converterCelcius (ev){
        setInput1(ev.target.value)
    }
    function buttonConversor1 (){
        setButton1(input1)
        setInput1("")
    }

    return(
        <>
        <div>
            <h1>Conversor de temperatura</h1>
            <label>
                Converter de Celsius para Fahrenheit: 
                <input placeholder="" 
                onChange={converterCelcius}
                value={input1}
                type="number"/>
            </label>
            <button
            onClick={buttonConversor1}
            >Converter</button>
            <p>Temperatura:{button1}</p>
        </div>
         <div>
         <label>
             Converter de Fahrenheit para Celsius: 
             <input placeholder="" />
         </label>
         <button>Converter</button>
         <p>Temperatura:</p>
     </div>
     </>
    )
}