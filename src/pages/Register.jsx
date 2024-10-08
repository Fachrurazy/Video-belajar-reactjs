import Registerlayout from "../components/Register/Layouts/Registerlayout"
import Formregister from "../components/Register/Fragments/Formregister"
import Header from "../components/Headers/Fragments/Header"

const registerpage = () => {
    return(
        <>
        <Header />
        <Registerlayout 
        h1="Pendaftaran Akun" 
        h2="Yuk, daftaran akunmu sekarang juga!">
        <Formregister />
        </Registerlayout>
        </>
    )
}

export default registerpage