// import { HomePage } from '../components/homePage' if homePage.js is declared as export HomePage
import axios from 'axios'
import HomePage from '../components/HomePage'

function Index({urlPages}) {
    console.log(urlPages)
    return (
        <HomePage urlPages={urlPages}>Next Js Practice Web</HomePage>
    )
}

/**
 * https://www.reddit.com/r/reactjs/comments/frfihl/how_should_nextjs_getstaticprops_and/
 * 
 * getStaticProps is great for evergreen content and base pages that aren't updated often. 
 * getServerSideProps is good for constantly changing content like a COVID-19 updates page
 */

export async function getStaticProps() {
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