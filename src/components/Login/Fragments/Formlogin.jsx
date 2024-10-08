import Inputform from "../Elements/Input/Index"
import Inputpass from "../Elements/Input/Inputpass"
import Button from "../Elements/Button/Button"
import Buttongoogle from "../Elements/Button/Buttongoogle"
import Labelforgetpass from "../Elements/Label/Labelforgetpass"
import Divider from "../Elements/Divider/Divider"

const formlogin = () => {
  
    return (
    <form action="">
    <div className="mb-4 px-9"> 
    <Inputform 
        label="Email" 
        type="email" 
        name="email" 
    />
    <Inputpass 
        label="Password" 
        type="password" 
        name="password" 
    />
    <Labelforgetpass>
    Lupa Password?
    </Labelforgetpass>   
    <Button
    to="/beranda">
        Masuk
    </Button>
    <Button 
        classname="bg-Button-(Green)/Secondary hover:bg-green-200 text-Button-(Green)"
        to="/register">
        Daftar
    </Button>
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

export default formlogin