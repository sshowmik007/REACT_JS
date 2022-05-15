import React,{useState} from 'react'

const ShortCircuitEval = () => {
    const [demo, setDemo] = useState("HEllo Thei");

  return (
    <div> 
        <h1 className="h1style">
            {
                demo || <>
                <h1> {setDemo("HEllo")} </h1>
                <p>How are you??</p>
                </>
            }
        </h1>

        <h1 className="h1style">
            { demo && "Sadman" }
        </h1>
    
     </div>
  )
}

export default ShortCircuitEval