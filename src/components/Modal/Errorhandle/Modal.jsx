const modalhandler = (props) => {
    const { text } = props
    return (
        <>
        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button> */}
        <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
            <p className="py-4">{text}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button >close</button>
        </form>
        </dialog>
        </>
    )
    }

export default modalhandler