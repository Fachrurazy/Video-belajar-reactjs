import Tableadmin from "../Elements/Table/Index"
import Adminlayout from "../Layouts/Adminlayout"

const formadmin = () => {
    return (
        <Adminlayout h1='Users' h2='List of users'>
            <Tableadmin />
        </Adminlayout>

    )
}

export default formadmin