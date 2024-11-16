import { Button, Table } from 'antd'
import { useState, useEffect } from "react"
import userUserStore from "../../../Data/Users/UsersStore"
import Modal from '../Form/Index'

const Index = () => {

    const [isopen, setIsOpen] = useState(false)
    const [iduser, setIdUser] = useState('')
    const getListusers = userUserStore()
    
    
    useEffect(() => {
        getListusers.getApiUsers()
    }, [])
    
    console.log(iduser)

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
        onOk={() => getListusers.setApiUsers(iduser)} 
        onCancel={() => 
        {setIsOpen(false)
        setIdUser('')}}></Modal>
        </>
    )
}

export default Index