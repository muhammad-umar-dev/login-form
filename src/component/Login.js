import React, { useState } from 'react'

const Login = (props) => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const onChangeName = (event) => { setName(event.target.value) }

    const onChangePassword = (event) => { setPassword(event.target.value) }

    const onClickSubmit = (event) => {
        event.preventDefault()
        const values = {
            name,
            password,
        }

        props.func(values);
        clearState();
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
                    placeholder='Enter Username '
                    onChange={onChangeName}
                />


                <input
                    className={`flex  lg:w-[450px] lg:h-[65px] rounded-full  font-normal text-sm my-2 px-8 py-4 justify-center items-center outline-none`}
                    type='password' required
                    value={password}
                    placeholder='Enter Password '
                    onChange={onChangePassword}
                />

                <button className='flex  lg:w-[450px] lg:h-[65px] rounded-full justify-center items-center outline-none bg-slate-800  text-white font-mono font-medium my-2 px-8 py-4 '
                    onClick={onClickSubmit}
                    type="Submit">
                    Login
                </button>

            </div>


        </form>

    )
}

export default Login



