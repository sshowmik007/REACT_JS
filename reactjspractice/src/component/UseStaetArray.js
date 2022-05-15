import React,{useState} from 'react'

const UseStaetArray = () => {
    const myBioData = [
        {
            id:0, myName:"Sadman", age:26
        }, {
            id:1, myName:"Emran", age:27
        }, {
            id:2, myName:"Mitul", age:27
        }
    ]

    const [myArray, setmyArray] = useState(myBioData);

    const clearArray = () => {
        setmyArray([]);
    }

    const removeElem = (id) => {
        // alert(id);\
        const myNewArray = myArray.filter((curElem) => {
            return curElem.id !== id;
        })

        setmyArray(myNewArray);
    }

    return (
        <>
            {
                // ARRAY 
                myArray.map((curElm) => {

                    return (
                    
                        <h1 className="h1style" key={curElm.id}>Name:
                            {curElm.myName} & Age: {curElm.age}
                            <button className="btnInner" onClick={ () => removeElem(curElm.id)}> remove </button>    
                        </h1>
                    );
                } )
            }
            <button className="btn" onClick={clearArray}>Clear</button>
        </>
    )
}

export default UseStaetArray