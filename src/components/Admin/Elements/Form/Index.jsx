import {Modal, Input, Select} from 'antd'
import { useEffect, useState } from "react"
import Labelinput from '../Label/Index'
import userUserStore from "../../../Data/Users/UsersStore"

 const Index = (props) => {
    
    const { open, onOk, onCancel, iduser } = props
    const getListusers = userUserStore()
    const [datausers, setDataUsers] = useState({
        name: '',
        email: '',
        phonenumber: '',
        gender: ''
    })

    useEffect(() => {
        if (open && iduser) {
            const index = getListusers.listusers.find((e) => e.id === iduser);
            if (index) {
              setDataUsers({
                name: index.name || '',
                email: index.email || '',
                phonenumber: index.phonenumber|| '',
                gender: index.gender || ''
              });
            }
          }
        }, [open, iduser, getListusers.listusers])
    console.log(datausers)

    

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
        placeholder='Full Name'
        value={datausers.name}
        onChange={(e) => setDataUsers({...datausers, name: e.target.value })}/>
        <Labelinput>Email</Labelinput>
        <Input required 
        type='email' 
        style={{marginBottom: '10px', marginTop: '10px'}} 
        placeholder='Email'
        value={datausers.email}
        onChange={(e) => setDataUsers({...datausers, email: e.target.value })}/>
        <Labelinput>Phone Number</Labelinput>
        <Input required 
        type='text'
        style={{marginBottom: '10px', marginTop: '10px'}} 
        placeholder='Phone Number'
        value={datausers.phonenumber}
        onChange={(e) => setDataUsers({...datausers, phonenumber: e.target.value })}/>
        <Labelinput>Gender</Labelinput>
        <Select 
        options={option} 
        style={{marginBottom: '10px', marginTop: '10px', width: '100%'}} 
        placeholder='Pilih Gender'
        value={datausers.gender}
        onChange={(value) => setDataUsers({ ...datausers, gender: value })}/>
        </Modal>
     )
 }

 export default Index