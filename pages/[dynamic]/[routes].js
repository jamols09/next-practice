import {useRouter} from 'next/router' //read parameters from url

function Routes() {
    const router = useRouter() //this will pass all parameters from url
    console.log(router.query.dynamic)
    return (
        <div>
            <h1>Path Of {router.query.dynamic} / {router.query.routes}</h1>
            <p>You can type anything on url with a path of <u>http://localhost:3000/[type]/[here]</u></p>
        </div>
    )
}

export default Routes
