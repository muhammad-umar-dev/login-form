import React, { useState } from 'react'
import Alerts from './Alerts';
import Login from './Login';
import DeleteIcon from '../assets/deleteIcon.svg'
import EditIcon from '../assets/editIcon.svg'

const Table = (props) => {
    const { tableData, setTableData, } = props
    const updatedtableData = [...tableData];
    const [id, setID] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [isUpdate, setIsUpdate] = useState(false)
    const [alert, setAlert] = useState(false);

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type,
        })
        setTimeout(() => {
            setAlert('null');
        }, 2000);
    }

    const addRows = (data) => {
        const totalRecord = tableData.length;
        data.id = totalRecord + 1;
        updatedtableData.push(data);
        setTableData(updatedtableData);
    };
    // console.log(addRows.length)

    const onHandleUpdate = (info) => {
        updatedtableData.pop(info);
        setTableData(updatedtableData)
        setID(info.id);
        setName(info.name);
        setPassword(info.password);
        setIsUpdate(true)
    }
    const onHandleDelete = (info) => {
        showAlert("Data is deleted", 'Success');
        updatedtableData.pop(info)
        setTableData(updatedtableData)
    }
    const tableRows = tableData.map((info, index) => {
        return (
            <tr className={`flex w-full justify-around items-center text-black font-mono font-medium h-14 ${info.id % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'} `} key={index}>
                <td className='w-1/4 justify-center items-center flex'>{info.id}</td>
                <td className='w-1/4 justify-center items-center flex'>{info.name}</td>
                <td className='w-1/4 justify-center items-center flex'>{info.password}</td>
                <td className='w-1/4 justify-evenly items-center flex'><button onClick={() => onHandleUpdate(info)} className=' bg-slate-900 text-white font-mono p-2 rounded'><img src={EditIcon} alt="" /></button> <button onClick={() => onHandleDelete(info)} className='bg-slate-900 text-white font-mono p-2 rounded'><img src={DeleteIcon} alt="" /></button></td>
            </tr>

        );
    });





    return (
        <div className='flex flex-col w-full h-screen justify-center items-center  bg-slate-200'>
            {alert && <Alerts className='w-full' alert={alert} />}
            <label className='font-mono py-4 font-normal text-5xl text-center'>Create a new user</label>
            <div className='w-full flex flex-col lg:flex-row  justify-center items-center '>
                <div className='w-full lg:w-1/2'>
                    <Login addRows={addRows} name={name} setName={setName} password={password} setPassword={setPassword} isUpdate={isUpdate} setIsUpdate={setIsUpdate} alert={alert} setAlert={setAlert} showAlert={showAlert} />
                </div>
                <div className='flex justify-center items-center w-full  lg:w-1/2'>
                    <table table className="w-[80%] table justify-center items-center bg-white rounded" >
                        <thead>
                            <tr className='flex w-full justify-around items-center text-white font-mono font-medium h-14 bg-slate-800'>
                                <th scope='col' className='w-1/4 justify-center items-center flex'>Sr.NO</th>
                                <th scope='col' className='w-1/4 justify-center items-center flex'>Name</th>
                                <th scope='col' className='w-1/4 justify-center items-center flex'>Password</th>
                                <th scope='col' className='w-1/4 justify-center items-center flex'>Action</th>
                            </tr>
                        </thead>
                        <tbody>{tableRows}</tbody>
                    </table>
                </div>
            </div >
        </div>
    )
}

export default Table