import Layoutheader from "../Layouts/Layoutheader"
import Headerlogo from "../Elements/Header/Headerlogo"

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