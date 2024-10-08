import Button from "../Elements/Button/Button"
import Inputform from "../Elements/Input/Index"
import Inputpass from "../Elements/Input/Inputpass"
import Inputnohp from "../Elements/Input/Inputnohp"
import Labelforgetpass from "../Elements/Label/Labelforgetpass"
import Divider from "../Elements/Divider/Divider"
import Buttongoogle from "../Elements/Button/Buttongoogle"
import Dropdowngender from "../Elements/Dropdown/Dropdowngender"
const formregister = () => {
  
    return (
    <form action="">
    <div className="mb-4 px-9">
      <Inputform 
      label="Nama Lengkap" 
      type="text" 
      name="nama lengkap" 
      />
      <Inputform 
      label="Email" 
      type="email" 
      name="email" 
      />
      <Dropdowngender
      label="Jenis Kelamin"
      name="jenis kelamin"
      />
      <Inputnohp 
      label="No Hp." 
      type="number" 
      name="no hp" 
      />
      <Inputpass 
      label="Kata Sandi" 
      type="password" 
      name="kata sandi" 
      />
      <Inputpass 
      label="Konfirmasi Kata Sandi" 
      type="password" 
      name="konfirmasi kata sandi" 
      />
      <Labelforgetpass>
        Lupa Password?
        </Labelforgetpass>
      <Button>
        Daftar
        </Button>
      <Button 
      classname="bg-Button-(Green)/Secondary hover:bg-green-200 text-Button-(Green)"
      to="/login">
        Masuk
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

export default formregister