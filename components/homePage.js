import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavItem from './NavItem'

function HomePage({ children, urlPages }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs React Practice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          { children }
        </div>
        <div>
          <span className={styles.description}>
            Choose a page to learn
          </span>
          <ul>
            { urlPages.map( ({ href, label}) => (
              <li key={href}>
                <NavItem href={href} label={label}/>
              </li>
            ))}
            {/* <li >
                <NavItem href="/useState" label="TEST useState"/>
              </li>
              <li >
                <NavItem href="/navItems" label="TEST1 navItems"/>
              </li> */}
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default HomePage