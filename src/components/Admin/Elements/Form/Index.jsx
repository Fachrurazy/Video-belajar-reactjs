import {Modal, Input, Select} from 'antd'
import { useEffect, useState } from "react"
import Labelinput from '../Label/Index'
import userUserStore from "../../../Data/Users/UsersStore"

 const Index = (props) => {
    
    const { open, onOk, onCancel, iduser } = props
    const getListusers = userUserStore()
    const [datausers, setDataUsers] = useState('')

    useEffect(() => {
        if(open === true){
        getListusers.getIDusers(iduser)
        setDataUsers(getListusers.listusers[getIndex])
        }
        
    },[])

    const getIndex = getListusers.listusers.findIndex((e) => e.id === iduser)
    console.log("data Users", datausers)

    const option = [
        { 
            value: 'laki-laki', 
            label: 'Laki-laki' 
        },
        { 
            value: 'perempuan', 
            label: 'Perempuan' 
        },
    ]
     return (
        <Modal title="Edit User" 
        open={open} 
        onOk={onOk} 
        onCancel={onCancel} 
        iduser={iduser} >
        <Labelinput>Full Name</Labelinput>
        <Input required 
        style={{marginBottom: '10px', marginTop: '10px'}} 
        placeholder='Full Name'/>
        <Labelinput>Email</Labelinput>
        <Input required 
        type='email' 
        style={{marginBottom: '10px', marginTop: '10px'}} 
        placeholder='Email'/>
        <Labelinput>Phone Number</Labelinput>
        <Input required 
        type='number' 
        style={{marginBottom: '10px', marginTop: '10px'}} 
        placeholder='Phone Number'/>
        <Labelinput>Gender</Labelinput>
        <Select 
        options={option} 
        style={{marginBottom: '10px', marginTop: '10px', width: '100%'}} 
        placeholder='Pilih Gender'/>
        </Modal>
     )
 }

 export default Index