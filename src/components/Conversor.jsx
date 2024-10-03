import { useState } from "react"

export default function Conversor (){
    const [input1, setInput1] = useState ("")
    const [button1, setButton1] = useState("")

    const [input2, setInput2] = useState ("")
    const [button2, setButton2] = useState ("")

    function converterCelcius (ev){
        setInput1(ev.target.value)
        
    }
    function buttonConversor1 (){
        setButton1(input1 *9/5 +32).toFixed(2) 
        setInput1("")
    
    }
    
    function converterFahrenheit(ev){
        setInput2(ev.target.value)
       
    }
    function buttonConversor2 (){
        setButton2(((input2 -32) * 5/9).toFixed(2))
        setInput2("")
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
            <p>Temperatura em Fahrenheit: {button1}</p>
        </div>
         <div>
         <label>
             Converter de Fahrenheit para Celsius: 
             <input placeholder=""
             onChange={converterFahrenheit} 
             value={input2}
             type="number"/>
         </label>
         <button
         onClick={buttonConversor2}>Converter</button>
         <p>Temperatura em Celsius: {button2}</p>
     </div>
     </>
    )
}