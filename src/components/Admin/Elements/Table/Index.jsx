import { Button, Table } from 'antd'
import { useState, useEffect } from "react"
import userUserStore from "../../../Data/Users/UsersStore"
import Modal from '../Form/Index'
// import { getUsers } from "../../../../services/users.service"
// import Labelinput from '../Label/Index'

const Index = () => {
    // const [users, setUsers] = useState([])
    const [isopen, setIsOpen] = useState(false)
    const [iduser, setIdUser] = useState('')
    const getListusers = userUserStore()
    
    // const initForm = {
    //     name: '',
    //     email: '',
    //     phone: '',
    //     gender: ''
    // // }
    // const [formuser, setFormuser] = useState([])
    
    
    // const listUser = userUserStore((state) => state.listUser)
    // console.log(iduser)
    
    useEffect(() => {
        getListusers.getApiUsers()
    }, [])
    
    // const option = [
    //     { 
    //         value: 'laki-laki', 
    //         label: 'Laki-laki' 
    //     },
    //     { 
    //         value: 'perempuan', 
    //         label: 'Perempuan' 
    //     },
    // ]
    // const getIndex = users.findIndex((e) => e.id === iduser)
    

    const datauser = getListusers.listusers.map((user) => ({
        key: user.id,
        name: user.name,
        email: user.email,
        phone: user.phonenumber,
        gender: user.gender
    }))
    
    const coloumn = [
    {
        title: 'ID',
        dataIndex: 'key',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Phone Number',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: 'Action',
        dataIndex: 'key',
        render: (res) => 
    <Button 
        onClick={() =>{
            setIsOpen(true)
            setIdUser(res)
    }} 
    >
    Edit
    </Button>
    },
]
    return (
        <>
        <Table columns={coloumn} 
        dataSource={datauser} 
        pagination={{pageSize: 3, 
        position: ['bottomCenter']}}/>
        <Modal 
        open={isopen}
        iduser={iduser}
        onOk={() => setIsOpen(false)} 
        onCancel={() => 
        {setIsOpen(false)
        setIdUser('')}}></Modal>
        </>
    )
}

export default Index