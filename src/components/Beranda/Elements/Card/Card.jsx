const card = (props) => {
    const { children } = props
    return(
        <div className="container grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {children}
        </div>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
const Body = (props) => {
    // eslint-disable-next-line react/prop-types
    const { children } = props
    return(
        <div className="p-5 bg-white border rounded-lg">
            {children}
        </div>
    )
}
// eslint-disable-next-line react-refresh/only-export-components
const Header = (props) => {
    // eslint-disable-next-line react/prop-types
    const { title, description, name, role, company, avatar, image, rating, price } = props
    return(
        <div className="p-5 bg-white border rounded-lg">
        <div className="container">
            <div className="max-sm:flex">
                <img className="object-cover max-sm:w-20 max-sm:h-20 rounded-xl" 
                src={image}
                alt="card-image" />
                <div className="max-sm:flex-col max-sm:ml-2">
                    <h2 className="font-[Poppins] text-lg font-semibold lg:mt-2 text-slate-800">
                        {title}
                        </h2>
                    <p className="font-[DM Sans] text-slate-500 text-base max-sm:hidden">
                        {description}
                        </p>
                    <div className="relative mt-2 ">
                        <img className="mr-2" 
                        src={avatar}
                        alt="Avatar" />
                        <div className="absolute left-11 -bottom-1">
                            <p className="text-sm font-semibold">
                                {name}
                                </p>
                            <p className="text-sm text-slate-600">
                                {role}
                                <span className="max-sm:hidden">di
                                    <b>{company}</b></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative flex mt-3">
            <img 
            src="/src/assets/logo-rating.svg" 
            alt="Rating" />
            <div className="flex">
                <p className="ml-2 text-base underline underline-offset-2 text-slate-600">
                    {rating}
                    </p>
                <p className="absolute right-0 text-lg font-semibold text-green-500">
                    RP {price}K
                    </p>
            </div>
        </div>
        </div>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
const Footer = (props) => {
    // eslint-disable-next-line react/prop-types
    const { rating, price } = props
    return(
        <div className="relative flex mt-3">
            <img 
            src="/src/assets/logo-rating.svg" 
            alt="Rating" />
            <div className="flex">
                <p className="ml-2 text-base underline underline-offset-2 text-slate-600">
                    {rating}
                    </p>
                <p className="absolute right-0 text-lg font-semibold text-green-500">
                    RP {price}K
                    </p>
            </div>
        </div>
    )
}

card.Body = Body
card.Header = Header
card.Footer = Footer

export default card