import Input from "../Input/Input"
import Button from "../Button/Button"

const bannerscta = (props) => {
    const {text, title, classname} = props
    return(
        <div className={`rounded-md shadow-xl ${classname} bg-no-repeat bg-cover bg-slate-700 bg-blend-multiply`}>
            <div className="flex flex-col p-16 text-center">
                <div className="text-white">
                    <p className="mb-3 text-3xl font-semibold font-poppins xl:text-4xl xl:px-60">{title}</p>
                    <p className="text-base font-dm-sans xl:text-lg ">{text}</p>
                </div>
                <form action="">
                    <div className="relative">
                        <Input 
                        type="email"
                        placeholder="Masukan Emailmu"
                        name="email" />
                    <div className="lg:absolute lg:right-72 lg:-top-5 lg:py-2">
                        <Button classname="w-auto text-white bg-yellow-500 rounded-xl max-sm:w-full hover:bg-yellow-600 font-dm-sans">
                        Subcribe
                        </Button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default bannerscta