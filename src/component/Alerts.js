import React from 'react'

const Alerts = (props) => {
    console.log(props.alert)
    return (
        <>
            {/* <Alert className='flex justify-center items-center w-full h-16 text-white text-2xl bg-slate-700'> Hello</Alert> */}
            <div className='w-full h-12'>
                {props.alert && <div className={`flex justify-center items-center w-full h-12 text-white text-2xl  ${props.alert.type === 'Success' ? "bg-green-300" : props.alert.type === 'Danger' ? 'bg-red-300' : ''} alert-dismissible fade show`} role="alert">
                    {props.alert.message}
                </div>}
            </div>
        </>

    )
}

export default Alerts