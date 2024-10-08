import logorating from "../../../../assets/logo-rating.svg"

const cardfix = (props) => {
    const { title, description, name, role, company, avatar, image, rating, price } = props
    return(
        <div className="p-5 bg-white border rounded-lg">
        <div className="container">
            <div className="max-sm:flex">
                <img className="object-cover max-sm:w-20 max-sm:h-20 rounded-xl"
                src={image}
                alt="card-image" />
                <div className="max-sm:flex-col max-sm:ml-2">
                    <h2 className="text-lg font-semibold font-poppins lg:mt-2 text-slate-800">
                        {title}
                        </h2>
                    <p className="text-base font-dm-sans text-slate-500 max-sm:hidden">
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
                                <span className="max-sm:hidden"> di <b>{company}</b></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative flex mt-3">
            <img 
            src={logorating} 
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

export default cardfix