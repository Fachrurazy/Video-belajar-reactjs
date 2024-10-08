const Header = (props) => {
    const { children } = props
    return (
        <nav className="flex flex-wrap items-center px-6 py-2 bg-white shadow-md lg:px-16 lg:py-0">
            {children}
      </nav>
    )
}
export default Header;