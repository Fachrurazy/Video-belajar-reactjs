import Button from "../Button/Button";

const bannershero = (props) => {
    const {text, title, classname} = props
    return(
        <div className={`rounded-md shadow-xl ${classname} bg-no-repeat bg-cover bg-slate-700 bg-blend-multiply`}>
            <div className="flex flex-col p-16 text-center">
                <div className="text-white">
                    <p className="mb-3 text-3xl font-semibold font-poppins xl:text-4xl xl:px-60">{title}</p>
                    <p className="text-base font-dm-sans xl:text-lg ">{text}</p>
                </div>
                <form action="">
                    <div>
                        <Button classname="w-auto bg-Button-(Green) hover:bg-green-500 text-white px-6 py-3 rounded-md mt-6 font-dm-sans">
                        Temukan Video Course untuk Dipelajari!
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default bannershero