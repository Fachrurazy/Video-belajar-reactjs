import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getUsers } from "../../../services/users.service"
import Inputform from "../Elements/Input/Index"
import Inputpass from "../Elements/Input/Inputpass"
import Button from "../Elements/Button/Button"
import Buttongoogle from "../Elements/Button/Buttongoogle"
import Labelforgetpass from "../Elements/Label/Labelforgetpass"
import Divider from "../Elements/Divider/Divider"


const Formlogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState([]) 
    // const existingUserData = JSON.parse(localStorage.getItem('userData')) 
    
    useEffect(() => {
        getUsers((data) => {
            setUsers(data)
        })
    }, [])

    const user = users.find((user) => user.email === email && user.password === password)

    
    const Handlelogin = (event) => {
    event.preventDefault()
    if (!user) {
        alert('Email dan Password anda tidak sesuai')
    }
    else if (user) {
        setEmail('')
        setPassword('')
        localStorage.setItem('userData', JSON.stringify(user))
        alert('Login Berhasil')
        window.location.href = '/beranda'
    }
    // if (localStorage.length === 0) {
    // alert('Anda belum mempunyai akun')
    // }
    // else if (existingUserData.email !== email && existingUserData.password !== password) {
    // alert('Email dan Password anda tidak sesuai')
    // }
    // else if (existingUserData.email === email && existingUserData.password !== password) {
    //     alert('Email dan Password anda tidak sesuai')
    // }
    // else if (existingUserData.email !== email && existingUserData.password === password) {
    //     alert('Email dan Password anda tidak sesuai')
    // }
    // else if (existingUserData.email === email && existingUserData.password === password) {
    // setEmail('')
    // setPassword('')
    // alert('Login Berhasil')
    // window.location.href = '/beranda'
    // }

    

    
}

    return (
        <>
    <form onSubmit={Handlelogin}>
    <div className="mb-4 px-9"> 
    <Inputform 
        label="Email" 
        type="email" 
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
    />
    <Inputpass 
        label="Password" 
        type="password" 
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
    />
    <Labelforgetpass>
    Lupa Password?
    </Labelforgetpass>   
    <Button
    type="submit">
        Masuk
    </Button>
    <Link
    to={"/register"}>
    <Button 
        classname="bg-Button-(Green)/Secondary hover:bg-green-200 text-Button-(Green)">
        Daftar
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
    {/* <Modalerrorhandler text={errorText} /> */}
        </>
    )
}

export default Formlogin