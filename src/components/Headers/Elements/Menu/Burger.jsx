import { Link } from "react-router-dom"
import avatarheader from "../../../../assets/Avatar-Header.png"

const burger = () => {
    return(
        <>
        <label className="block cursor-pointer lg:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 15.5V17.5H22V15.5H2ZM2 10.5V12.5H22V10.5H2ZM2 5.5V7.5H22V5.5H2Z" fill="#4A505C" />
            </svg>
        </label>
        <div className="hidden w-full lg:flex lg:items-center lg:w-auto" id="menu">
            <ul className="items-center pt-4 text-xl text-center gap-x-5 md:gap-x-4 lg:text-lg lg:flex lg:pt-0">
                <li className="py-2 lg:py-0 ">
                    <Link className="font-dm-sans text-Text-(Dark)/Primary text-base" href="#">
                        Kategori
                    </Link>
                </li>
                <li className="py-2 lg:py-0 ">
                    <Link className="" href="#">
                        <img src={avatarheader} alt="Avatar-Header-Girl" />
                    </Link>
                </li>
            </ul>
        </div>
        </>
    )
}

export default burger