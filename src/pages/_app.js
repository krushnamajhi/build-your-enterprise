import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import AppHeader from '../apputils/components/AppHeader'
import Navbar from '../apputils/components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <AppHeader />
        <Navbar />
        <Component {...pageProps} />
    </>)
}

export default MyApp
