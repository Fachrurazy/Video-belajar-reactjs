import { Link } from "react-router-dom";

const Header = (props) => {
  const { children } = props
    return (
        <div className="flex items-center justify-between flex-1">
          <Link to="/login" className="flex text-lg font-semibold">
            <img className="my-5" src="/src/assets/logo-videobelajar.png" alt="Logo-Videobelajar" />
          </Link>
          {children}
        </div>
    )
}
export default Header;