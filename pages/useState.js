import { useState } from 'react'
import { Button } from 'react-bootstrap'
import MainPage from '../components/MainPage'
import styles from '../styles/Home.module.css'

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
        <MainPage>
            <h1>How to use useState()</h1>
            
            <div>
                <div>
                    <span className={styles.description}>View the code to learn</span>
                </div>
                <div>
                    {/* <button 
                        // onClick={constFunc}
                        onClick={callFunc}
                    >
                        Click me
                    </button> */}
                    <Button
                        variant='primary'
                        onClick={callFunc}
                        >
                        Click Add
                    </Button>
                    <ul>
                        {/* {names.map(({ id, name }) => { //explicit return
                            <li key={id}>{name}</li>
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