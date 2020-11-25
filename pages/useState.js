import { useState } from 'react'
import { Button } from 'react-bootstrap'
import MainPage from '../components/MainPage'
import Link from 'next/link'

function UseState() {
    const [names, setName] = useState([])
    
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
        <MainPage>
            {/* <a onClick={() => router.back()}>Back</a> */} {/* or you can do this */}
            <Link href={`/`}>Back</Link>                              
            <h1>Learn how to use useState()</h1>
            
            <div>
                <div>
                    <p>View code to learn</p>
                </div>
                <div>
                    {/* <button 
                        onClick={constFunc}
                    >
                        Click me
                    </button> */}
                    {/* <Button
                        variant='primary'
                        onClick={callFunc}
                    >
                        Click Add
                    </Button> */}
                    <Button 
                        variabnt='secondary'
                        onClick={() => setName([...names,{id: 1, name: "Oliver"}])}
                    >
                        Click Add
                    </Button>
                    <ul>
                        {/* {names.map(({ id, name }) => { //explicit return
                            return <li key={id}>{name}</li>
                        })} */}

                        {names.map(({ id, name }) => ( //implicit return
                            <li key={id}>{name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </MainPage>
    )
}

export default UseState