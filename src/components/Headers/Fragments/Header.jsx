import Layoutheader from "../Layouts/Layoutheader"
import Headerlogo from "../Elements/Header/Headerlogo"
import Burgermenu from "../Elements/Menu/Burger"

const Header = (props) => {
    const { children } = props
    return (
        <Layoutheader>
            <Headerlogo>
                {children}
            </Headerlogo>
        </Layoutheader>
    )
}

export default Header