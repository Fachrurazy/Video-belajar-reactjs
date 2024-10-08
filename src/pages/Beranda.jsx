import Formberanda from "../components/Beranda/Fragments/Formberanda"
import Header from "../components/Headers/Fragments/Header"
import Footer from "../components/Footers/Fragment/Formfooter"
import Berandalayout from "../components/Beranda/Layouts/Berandalayout"
import Burgermenu from "../components/Headers/Elements/Menu/Burger"
const berandapage = () => {
    return (
        <>
        <Header>
            <Burgermenu />
        </Header>
        <Berandalayout>
            <Formberanda />
        </Berandalayout>
        <Footer />
        </>
       
    )
}
export default berandapage