import axios from 'axios'
import Link from 'next/link'
import MainPage from '../components/MainPage'
import { useRouter } from 'next/router'

function NavLinks({ dynamicPage }) {
    const router = useRouter()

    console.log(dynamicPage)
    
    return (
        <MainPage>
            <div>
                {/* <a onClick={() => router.back()}>Back</a> */} {/* or you can do this */}
                <Link href={`/`}>Back</Link>
                <h5>You can view the code how axios fills the list</h5>
                <ul> 
                    {dynamicPage.map( ({dynamic, routes}) => (
                    <li> 
                        <Link
                            href={`/${dynamic}/${routes}`}
                            key={dynamic}
                        > 
                            <a>
                                Navigate to the {dynamic} / {routes}
                            </a>
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
        </MainPage>
    )
}

export async function getServerSideProps() {
    //axios
    try {
        const api = await axios.get('http://localhost:3000/api/routes')
        const dynamicPage = api.data
        console.log(dynamicPage)
        return { props: { dynamicPage } }
    }
    catch(error) {
        console.log(error)
        return error
    }

}

export default NavLinks