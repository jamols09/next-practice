import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'

function MainPage({children}) {

    return (
        <div className={styles.container}>
            <Head>
                <title>NextJs React Practice</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Container>
                <Row>
                    <Col>{children}</Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainPage