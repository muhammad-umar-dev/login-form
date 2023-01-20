import React from 'react'




const Login = (props) => {
    const { name, setName, password, setPassword, isUpdate, setIsUpdate, showAlert, updatedtableData } = props
    const values = { name, password }

    const onChangeName = (event) => { setName(event.target.value) }

    const onChangePassword = (event) => { setPassword(event.target.value) }

    const onClickSubmit = (event) => {

        event.preventDefault()
        // Data fields not empty
        if (values.name.length === 0 || values.password.length === 0) {
            showAlert("Enter Data", 'Danger')
        }
        // when new data is entered for the first time 
        else if (updatedtableData.length === 0) {
            props.addRows(values)
            clearState();
            setIsUpdate(false)
            isUpdate === true ? showAlert("Data is Updated", 'Success') : showAlert("Data is Added", 'Success')
        } else if (updatedtableData.findIndex(item => item.name === values.name) === -1) {
            props.addRows(values)
            clearState();
            setIsUpdate(false)
            isUpdate === true ? showAlert("Data is Updated", 'Success') : showAlert("Data is Added", 'Success')
        } else {
            showAlert("Username already exist", 'Danger')
        }
    }



    const clearState = () => {
        setName('')
        setPassword('')
    }

    return (
        <form className=' flex  flex-col justify-center items-center rounded' >

            <div className='flex flex-col justify-center items-center lg:mt-20'>
                <input
                    className={`flex  lg:w-[450px] lg:h-[65px] rounded-full  font-normal text-sm px-8 py-4 justify-center items-center outline-none `}
                    type='text/plain' required
                    value={name}
                    placeholder='Enter Username'
                    onChange={onChangeName}
                />
                <input
                    className={`flex  lg:w-[450px] lg:h-[65px] rounded-full  font-normal text-sm my-2 px-8 py-4 justify-center items-center outline-none`}
                    type='password' required
                    value={password}
                    placeholder='Enter Password'
                    onChange={onChangePassword}
                />
                <button className='flex  lg:w-[450px] lg:h-[65px] rounded-full justify-center items-center outline-none bg-slate-800  text-white font-mono font-medium my-2 px-8 py-4 '
                    onClick={onClickSubmit}
                    type="Submit">
                    {isUpdate === true ? "Update" : "Login"}
                </button>

            </div>


        </form>

    )
}

export default Login



