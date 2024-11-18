import Tableadmin from "../Elements/Table/Index"
import Adminlayout from "../Layouts/Adminlayout"
import Header from "../../Headers/Fragments/Header"

const formadmin = () => {
    return (
        <>
        <Header/>
        <Adminlayout h1='Users' h2='List of users'>
            <Tableadmin />
        </Adminlayout>
        </>

    )
}

export default formadmin