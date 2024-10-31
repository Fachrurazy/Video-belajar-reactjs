import Loginlayout from "../components/Login/Layouts/Loginlayout"
import Formlogin from "../components/Login/Fragments/Formlogin"
import Header from "../components/Headers/Fragments/Header"
import Modalerrorhandler from "../components/Modal/Errorhandle/Modal"

const loginpage = () => {
    return(
        <>
        <Header />
        <Modalerrorhandler text="Anda belum mempunyai akun"/>
        <Loginlayout
        h1="Masuk"
        h2="Yuk, lanjutin belajarmu di videobelajar.">
        <Formlogin />
        </Loginlayout>
        </>
    )
}

export default loginpage