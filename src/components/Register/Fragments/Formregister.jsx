import { useState } from "react"
import { Link } from "react-router-dom"
import Button from "../Elements/Button/Button"
import Inputform from "../Elements/Input/Index"
import Inputpass from "../Elements/Input/Inputpass"
import Inputnohp from "../Elements/Input/Inputnohp"
import Labelforgetpass from "../Elements/Label/Labelforgetpass"
import Divider from "../Elements/Divider/Divider"
import Buttongoogle from "../Elements/Button/Buttongoogle"
import Dropdowngender from "../Elements/Dropdown/Dropdowngender"
const Formregister = () => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  const userData = {
    fullname,
    email,
    gender,
    phone,
    password,
    confirmpassword
  }
   const HandleRegister = (event) => {
    event.preventDefault()
    const existingUserData = JSON.parse(localStorage.getItem('userData'))
    if (confirmpassword !== password) {
      alert('Pastikan Password dan Konfirmasi Password anda sudah sama')
    } 
    else if (existingUserData && existingUserData.email === email) {
      alert('Email sudah terdaftar, silahkan gunakan email lain')
    }
    else {
    localStorage.setItem('userData', JSON.stringify(userData))
    alert('Registrasi Berhasil')
    setFullname('')
    setEmail('')
    setGender('')
    setPhone('')
    setPassword('')
    setConfirmpassword('')
    }
       
}

    return (
    <form onSubmit={HandleRegister}>
    <div className="mb-4 px-9">
      <Inputform 
      label="Nama Lengkap" 
      type="text" 
      name="nama lengkap"
      value={fullname}
      onChange={(e) => setFullname(e.target.value)} 
      />
      <Inputform 
      label="Email" 
      type="email" 
      name="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)} 
      />
      <Dropdowngender
      label="Jenis Kelamin"
      name="jenis kelamin"
      value={gender}
      onChange={(e) => setGender(e.target.value)}
      />
      <Inputnohp 
      label="No Hp." 
      type="number" 
      name="no hp"
      value={phone}
      onChange={(e) => setPhone(e.target.value)} 
      />
      <Inputpass 
      label="Kata Sandi" 
      type="password" 
      name="kata sandi"
      value={password}
      onChange={(e) => setPassword(e.target.value)} 
      />
      <Inputpass 
      label="Konfirmasi Kata Sandi" 
      type="password" 
      name="konfirmasi kata sandi"
      value={confirmpassword}
      onChange={(e) => setConfirmpassword(e.target.value)} 
      />
      <Labelforgetpass>
        Lupa Password?
        </Labelforgetpass>
      <Button
      type="submit">
        Daftar
        </Button>
      <Link
      to={'/login'}>
      <Button 
      classname="bg-Button-(Green)/Secondary hover:bg-green-200 text-Button-(Green)">
        Masuk
        </Button>
      </Link>
      <Divider>
        atau
        </Divider>
      <Buttongoogle 
      classname="bg-white border text-Text-label(Dark) hover:bg-slate-100">
        Masuk dengan Google
        </Buttongoogle>
    </div>
    </form>
    )
}

export default Formregister