import { useState } from "react"

function UseState() {
    const [names, setName] = useState([]);
    
    const constFunc = function () { //const function; declared as anonymous function, will not show a name when debugging
        setName([
            ...names,
            {
                id: 1,
                name: "Oliver"
            }
        ])
    }
    
    function callFunc () { //ordinary func; this will show a function name when debugging
        setName([
            ...names,
            {
                id: 1,
                name: "Oliver"
            }
        ])
    }

    return (
       <div>
           <main>
                <h1>How to use useState()</h1>
                <button 
                // onClick={constFunc}
                onClick={callFunc}
                >
                    Click me
                </button>
                
                <ul>

                    {/* {names.map(({ id, name }) => { //explicit return
                        <li key={id}>{name}</li>
                    })} */}

                    {names.map(({ id, name }) => ( //implicit return
                        <li key={id}>{name}</li>
                    ))}

                </ul>
           </main>
       </div>
    )
}

export default UseState