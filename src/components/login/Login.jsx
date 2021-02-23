import { useState } from 'react';
import FormInput from './form-input/form-input.component';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions';

const Login = ({history, match, setCurrentUser}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            const { user } = await auth.signInWithEmailAndPassword(email, password)
            setCurrentUser(user);
            history.push('/admin');
        } catch (error) {
            console.log('unable to sign in: ', error.message);
        }
    }

    const handleClick = () => {
        history.push(`${match.path}/reset-password`)
    }

    return (
        <div style={{background: 'rgb(0,0,0,0.5)'}} className="w-full h-screen flex flex-col items-start justify-center">
            {
                false
                ? <div className="w-full md:max-w-lg text-left text-lg text-orange-500 font-serif">Please provide a valid email and password</div>
                : null
            }
            <form onSubmit={(event) => handleSubmit(event)} className="w-full h-full md:max-w-lg flex flex-col items-start justify-start bg-purple-100 border-2 border-gray-300 shadow-lg rounded p-6">
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    handleChange={(e) => setEmail(e.target.value)}
                    required
                    label="email"
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    handleChange={(e) => setPassword(e.target.value)}
                    required
                    label="password"
                />
                <div className="w-full flex flex-col md:flex-row items-center justify-start my-6">
                    <button type="submit" className="w-full md:w-auto bg-pink-600 text-white px-16 py-4 rounded-lg md:mr-4 mb-4 focus:outline-none">Login</button>
                </div>
                <button onClick={handleClick} className="w-full md:w-auto border-2 border-pink-600 text-pink-600 px-16 py-4 rounded-lg md:mr-4 mb-4 focus:outline-none">Forgot password?</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(Login)
