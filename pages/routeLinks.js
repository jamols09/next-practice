import axios from 'axios'
import Link from 'next/link'
import HomePage from '../components/homePage'

function RouteLinks({ dynamicPage }) {
    return (
        <div>
            <h5>You can view the code how axios fills the list</h5>
            <ul>
                {dynamicPage.map( ({dynamic, routes}) => (
                <Link
                    href="/[dynamic]/[routes]"
                    key={dynamic}
                >
                    <li>
                        <a>
                            Navigate to the {dynamic} / {routes}
                        </a>
                    </li>
                </Link>
                ))}
            </ul>
        </div>
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

export default RouteLinks