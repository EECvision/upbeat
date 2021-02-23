import { useState } from 'react';
import { auth } from '../../firebase/firebase.utils';
import FormInput from './form-input/form-input.component';

const ResetPassword =({history})=>{
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState(false)

    const handleResetPassword = async event =>{
        event.preventDefault()
        try {
            await auth.sendPasswordResetEmail(email)
            setEmail('')
            setMessage(true)
        }   catch (error) {
            console.log(error.message)
        }
    }
    return(
        <div style={{background: 'rgb(0,0,0,0.5)'}} className="w-full h-screen flex items-start">
            {
                !message 
                ?
                <>
                    <form 
                        onSubmit={(event)=>handleResetPassword(event)}
                        className="w-full h-full max-w-lg flex flex-col justify-start border-2 bg-purple-100 border-gray-300 shadow-lg rounded p-6"
                    >
                        <div className="w-full text-left text-xl text-gray-700 font-serif mb-12">Reset password</div>
                        <FormInput 
                            type="email"
                            name="email"
                            value={email}
                            handleChange={(e)=>setEmail(e.target.value)}
                            required
                            label="email"
                        />
                        <button 
                            type="submit"
                            className="w-full bg-pink-600 text-white px-6 py-4 rounded-lg mr-4 mt-4 focus:outline-none"
                        >
                            Reset password
                        </button>
                    </form>
                </>    
                :
                <div className="w-full h-screen bg-purple-100 max-w-lg flex flex-col items-start justify-start border-2 border-gray-300 rounded p-6">
                    <div className="w-full text-left text-xl text-gray-700 font-serif mb-12">Check your email</div>
                    <div className="w-full text-left mb-6 text-gray-500 font-sans">
                        A verification message was sent whitch contains a link
                        to reset your account 
                        Check your spanm folder if you haven't received an
                        email wihtin 3 minutes
                    </div>
                    <button 
                        onClick={()=>history.goBack()}
                        className="focus:outline-none rounded shadow border-gray-300 text-pink-600 border-2 border-pink-600 font-medium px-6 py-2"
                    >
                        Sign In
                    </button>
                </div>        
            }
        </div>
    )    
}

export default ResetPassword
