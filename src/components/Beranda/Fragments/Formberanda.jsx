import Bannershero from "../Elements/Banners/Bannershero"
import Labelh1 from "../Elements/Label/Labelh1"
import Labelh2 from "../Elements/Label/Labelh2"
import Berandatabmenu from "../Layouts/Berandatapmenu"
import Labeltabmenu from "../Elements/Label/Labeltabmenu"
import Card from "../Fragments/Formcard"
import Cardlayout from "../Elements/Card/Cardlayout"
import Bannerscta from "../Elements/Banners/Bannerscta"


const formberanda = () => {
    return (
        <>
        <Bannershero
        classname="bg-[url('/src/assets/hero1.jpg')]" 
        title="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
        text="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda." 
        />
        <Labelh1 text="Koleksi Video Pembelajaran Unggulan"/>
        <Labelh2 text="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"/>
        <Berandatabmenu>
        <Labeltabmenu text="Semua Kelas"/>
        <Labeltabmenu text="Pemasaran"/>
        <Labeltabmenu text="Desain"/>
        <Labeltabmenu text="Pengembangan Diri"/>
        <Labeltabmenu text="Bisnis"/>
        </Berandatabmenu>
        <Cardlayout>
        <Card/>
        </Cardlayout>
        <Bannerscta 
        classname="bg-[url('/src/assets/hero2.png')] mt-16"
        title="Mau Belajar Lebih Banyak?"
        text="Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id"
        />
        </>
    )
}

export default formberanda