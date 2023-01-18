import React from 'react'
import Login from './Login';

const Table = (props) => {
    const { tableData, setTableData, } = props
    console.log(tableData)
    const onHandleUpdate = (info) => {
        console.log("Update", info)
    }
    const onHandleDelete = (info) => {
        console.log("Delete", info)
    }

    const tableRows = tableData.map((info) => {
        return (
            <tr className={`flex w-full justify-around items-center text-black font-mono font-medium h-14 ${info.id % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'} `}>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.password}</td>
                <td><button onClick={onHandleUpdate(info)} className='bg-slate-900 text-white font-mono p-2 rounded'>Update</button> <button onClick={onHandleDelete} className='bg-slate-900 text-white font-mono p-2 rounded'>Update</button></td>
            </tr>

        );
    });



    const addRows = (data) => {
        const totalRecord = tableData.length;
        data.id = totalRecord + 1;
        const updatedtableData = [...tableData];
        updatedtableData.push(data);
        setTableData(updatedtableData);
    };

    return (
        <div className='flex flex-col w-full h-screen justify-center items-center  bg-slate-200'>
            <label className='font-mono py-4 font-normal text-5xl text-center'>Create a new user</label>
            <div className='w-full flex flex-col lg:flex-row  justify-center items-center '>
                <div className='w-full lg:w-1/2'>
                    <Login func={addRows} />
                </div>
                <div className='flex justify-center items-center w-full  lg:w-1/2'>
                    <table table className="w-[80%] table justify-center items-center bg-white rounded" >
                        <thead>
                            <tr className='flex w-full justify-around items-center text-white font-mono font-medium h-14 bg-slate-800'>
                                <th scope='col' className=''>Sr.NO</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Password</th>
                                <th scope='col'>Action</th>
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