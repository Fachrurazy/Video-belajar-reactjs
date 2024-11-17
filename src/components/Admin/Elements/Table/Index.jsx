import { Button, Table, message, Popconfirm, Space } from 'antd'
import { useState, useEffect } from "react"
import userUserStore from "../../../Data/Users/UsersStore"
import Modal from '../Form/Index'

const Index = () => {

    const [isopen, setIsOpen] = useState(false)
    const [iduser, setIdUser] = useState('')
    const [inittitle, setIniTitle] = useState('')
    const getListusers = userUserStore()
    
    
    useEffect(() => {
        getListusers.getApiUsers()
    }, [])
    
    

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
        <Space size="middle"> 
            <Button 
                onClick={() =>{
                    setIsOpen(true)
                    setIniTitle('Edit User')
                    if (res){
                        setIdUser(res)
                    }
                    else{
                        message.error('User ID not found')
                    }
            }}>
            Edit</Button>
            <Popconfirm
            title="Delete User"
            description="Are you sure to delete this User?"
            onConfirm={() => {
                if (res) {
                    getListusers.deleteApiUsers(res)
                    message.success('User Success Deleted')
                }
                else {
                    message.error('User Failed Deleted')
                }
            }}
            okText="Yes"
            cancelText="No">
            <Button danger>Delete</Button>
            </Popconfirm>
        </Space>
    },
]

    return (
        <>
        <Table columns={coloumn} 
        dataSource={datauser} 
        pagination={{pageSize: 3, 
        position: ['bottomCenter']}}/>
        <Modal
        title={inittitle} 
        open={isopen}
        iduser={iduser}
        onOk={() => {
            setIsOpen(false)
            setIdUser('')
        }} 
        onCancel={() => 
        {setIsOpen(false)
        setIdUser('')
        setIniTitle('')}}></Modal>
        </>
    )
}

export default Index