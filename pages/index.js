// import { HomePage } from '../components/homePage' if homePage.js is declared as export HomePage
import axios from 'axios'
import HomePage from '../components/HomePage'

function Index({urlPages}) {
    console.log(urlPages)
    return (
        <HomePage urlPages={urlPages}>Next Js Practice Web</HomePage>
    )
}

export async function getServerSideProps() {
    //axios
    try {
        const api = await axios.get('http://localhost:3000/api/links')
        const urlPages = api.data
        return { props: { urlPages } }
    }
    catch(error) {
        console.log(error)
        return error
    }
}

export default Index