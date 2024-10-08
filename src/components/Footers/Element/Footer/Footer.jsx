import { Link } from "react-router-dom"
import Labellist from "../Label/Labellist"
import Labelh2 from "../Label/Labelh2"
import Label from "../Label/Label"
import List from "../List/List"
import Linkto from "../Link/Linkto"

const footer = (props) => {
    const { children } = props
    return (
        <div className="md:flex md:justify-between">
            {children}
        </div>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
const Header = (props) => {
    const { image, title, address, call } = props
    return (
        <div className="mb-6 lg:w-1/5 md:mb-0">
              <Link to="/">
                  <img 
                  src={image} 
                  className="h-8 me-3" 
                  alt="Logo-Videobelajar"/>
              </Link>
              <p className="mt-2 font-semibold">{title}</p>
              <p className="mt-2 font-light">{address}</p>
              <p className="mt-2 font-light">{call}</p>
          </div>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
const Body = () => {
    return (
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 max-sm:grid-cols-1 max-sm:gap-0">
            <div>
                <Labelh2>Kategori</Labelh2>
                <List>
                    <Labellist to="/beranda">Digital & Teknologi</Labellist>
                    <Labellist to="/beranda">Pemasaran</Labellist>
                    <Labellist to="/beranda">Manajemen Bisnis</Labellist>
                    <Labellist to="/beranda">Pengembangan Diri</Labellist>
                    <Labellist to="/beranda">Desain</Labellist>
                </List>
            </div>
            <div>
                <Labelh2>Perusahaan</Labelh2>
                <List>
                    <Labellist to="/beranda">Tentang Kami</Labellist>
                    <Labellist to="/beranda">FAQ</Labellist>
                    <Labellist to="/beranda">Kebijakan Privasi</Labellist>
                    <Labellist to="/beranda">Ketentuan Layanan</Labellist>
                    <Labellist to="/beranda">Bantuan</Labellist>
                </List>
            </div>
            <div>
                <Labelh2>Komunitas</Labelh2>
                <List>
                    <Labellist to="/beranda">Tips Sukses</Labellist>
                    <Labellist to="/beranda">Blog</Labellist>
                </List>
            </div>
        </div>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
const Footer = () => {
    return (
        <>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <Label>@2023<Link to="/beranda"> Gerobak Sayur</Link> All Rights Reserved.</Label>
            <div className="flex gap-3 mt-4 sm:justify-center sm:mt-0">
                <Linkto 
                to="/beranda" 
                image="/src/assets/logo-linkedin.png"
                alt="logo-linkedin"
                />
                <Linkto 
                to="/beranda" 
                image="/src/assets/logo-facebook.png"
                alt="logo-facebook"
                />
                <Linkto 
                to="/beranda" 
                image="/src/assets/logo-instagram.png"
                alt="logo-instagram"
                />
                <Linkto 
                to="/beranda" 
                image="/src/assets/logo-twitter.png"
                alt="logo-twitter"
                />
            </div>
        </div>
        </>
    )
}

footer.Header = Header
footer.Body = Body
footer.Footer = Footer

export default footer