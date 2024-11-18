import {Modal, Input, Select, message} from 'antd'
import { useEffect, useState } from "react"
import userUserStore from "../../../Data/Users/UsersStore"
import { Form } from 'antd'

 const Index = (props) => {
    
    const { open, onOk, onCancel, iduser, title } = props
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
    // console.log(datausers)

    

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

    const handleOk = async () => {
      getListusers.setApiUsers({ id: iduser, ...datausers })
    onOk()
    message.success('Success Edit User')
  }
     return (
        <Modal 
        title={title} 
        open={open} 
        onOk={handleOk} 
        onCancel={onCancel} 
        iduser={iduser} >
        <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        style={{
          marginTop: 20
        }}
        >
        <Form.Item
        label="Full Name" 
        rules={[{ required: true, message: 'Please input your Full Name!' }]}>
        <Input 
        placeholder='Full Name'
        value={datausers.name}
        onChange={(e) => setDataUsers({...datausers, name: e.target.value })}/>
        </Form.Item>
        <Form.Item
        label="Email" 
        rules={[{ required: true, message: 'Please input your Email!' }]}>
        <Input 
        type='email'
        placeholder='Email'
        value={datausers.email}
        onChange={(e) => setDataUsers({...datausers, email: e.target.value })}/>
        </Form.Item>
        <Form.Item
        label="Phone Number" 
        rules={[{ required: true, message: 'Please input your Phone Number!' }]}>
        <Input required 
        type='text' 
        placeholder='Phone Number'
        value={datausers.phonenumber}
        onChange={(e) => setDataUsers({...datausers, phonenumber: e.target.value })}/>
        </Form.Item>
        <Form.Item
        label="Gender" 
        rules={[{ required: true, message: 'Please input your Gender!' }]}>
        <Select 
        options={option}
        placeholder='Pilih Gender'
        value={datausers.gender}
        onChange={(value) => setDataUsers({ ...datausers, gender: value })}/>
        </Form.Item>
        </Form>
        </Modal>
     )
 }

 export default Index