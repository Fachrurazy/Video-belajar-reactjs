import Footer from "../Element/Footer/Footer"
import Footerlayout from "../Layouts/Footerlayout"

const formfooter = () => {
    return (
        <Footerlayout>
        <Footer>
            <Footer.Header 
            image="/src/assets/logo-videobelajar.png"
            title="Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!"
            address="Jl. Usman Effendi No. 50 Lowokwaru, Malang"
            call="+62-877-7123-1234" 
            />
            <Footer.Body/>
        </Footer>
            <Footer.Footer/>
        </Footerlayout>
    )
}

export default formfooter