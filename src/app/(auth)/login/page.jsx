import React from 'react'

function Login() {
  return (
    <div className='flex h-screen justify-center items-center'>
        <div className='box-container bg-purple-300 py-7'>
            <div className='form flex flex-col'>
                <label htmlFor="username">Username</label>
                <input type='text' placeholder='Enter Username' />
            </div>
            <div className='form flex flex-col'>
                <label htmlFor="password">password</label>
                <input type='password' placeholder='Enter password' />
            </div>
        </div>
    </div>
  )
}

export default Login