import Loginlayout from "../components/Login/Layouts/Loginlayout"
import Formlogin from "../components/Login/Fragments/Formlogin"
import Header from "../components/Headers/Fragments/Header"

const loginpage = () => {
    return(
        <>
        <Header />
        <Loginlayout
        h1="Masuk"
        h2="Yuk, lanjutin belajarmu di videobelajar.">
        <Formlogin />
        </Loginlayout>
        </>
    )
}

export default loginpage