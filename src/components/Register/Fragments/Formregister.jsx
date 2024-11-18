import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import userUserStore from "../../Data/Users/UsersStore"
import Button from "../Elements/Button/Button"
import Inputform from "../Elements/Input/Index"
import Inputpass from "../Elements/Input/Inputpass"
import Inputnohp from "../Elements/Input/Inputnohp"
import Labelforgetpass from "../Elements/Label/Labelforgetpass"
import Divider from "../Elements/Divider/Divider"
import Buttongoogle from "../Elements/Button/Buttongoogle"
import Dropdowngender from "../Elements/Dropdown/Dropdowngender"
import { message } from "antd"
const Formregister = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  const allUsers = userUserStore((state) => state.listusers)
  const getApi = userUserStore((state) => state.getApiUsers)
  const postAPI = userUserStore((state) => state.createApiUsers)
  const userData = {
    name,
    email,
    gender,
    phonenumber,
    password
  }

  useEffect(() => {
   if(allUsers.length === 0) {
    getApi()
   }
}, [allUsers, getApi])
console.log(userData)

const handleUsers = allUsers.find((user) => user.email === email)

const HandleRegister = (event) => {
    event.preventDefault()
    if (confirmpassword !== password) {
        message.error('Pastikan Password dan Konfirmasi Password anda sudah sama')
      }
    else if (handleUsers) {
        message.error('Email sudah terdaftar, silahkan gunakan email lain')
      }
    else {
        postAPI(userData)
        message.success('Registrasi Berhasil')
        setName('')
        setEmail('')
        setGender('')
        setPhonenumber('')
        setPassword('')
        setConfirmpassword('')
      }
    // const existingUserData = JSON.parse(localStorage.getItem('userData'))
    // if (confirmpassword !== password) {
    //   alert('Pastikan Password dan Konfirmasi Password anda sudah sama')
    // } 
    // else if (existingUserData && existingUserData.email === email) {
    //   alert('Email sudah terdaftar, silahkan gunakan email lain')
    // }
    // else {
    // localStorage.setItem('userData', JSON.stringify(userData))
    // alert('Registrasi Berhasil')
    // setFullname('')
    // setEmail('')
    // setGender('')
    // setPhone('')
    // setPassword('')
    // setConfirmpassword('')
    // }
    
       
}

    return (
    <form onSubmit={HandleRegister}>
    <div className="mb-4 px-9">
      <Inputform 
      label="Nama Lengkap" 
      type="text" 
      name="nama lengkap"
      value={name}
      onChange={(e) => setName(e.target.value)} 
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
      value={phonenumber}
      onChange={(e) => setPhonenumber(e.target.value)} 
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