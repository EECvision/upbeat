import { useState } from 'react';
import FormInput from './form-input/form-input.component';
import { connect } from 'react-redux';
import { signInStart } from '../../redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectError, selectSuccess } from '../../redux/user/user.selector';

const Login = ({ history, match, signInStart, error, success }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async event => {
        event.preventDefault()
        signInStart({ email, password })
    }

    const handleClick = () => {
        history.push(`${match.path}/reset-password`)
    }

    return (
        <div style={{ background: 'rgb(0,0,0,0.5)' }} className="w-full h-screen flex justify-start items-center">
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
                {
                    !!error
                        ? <div className="w-full md:max-w-lg text-left text-lg text-red-500 font-serif bg-white p-6 rounded">{error}</div>
                        : null
                }
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signInStart: user => dispatch(signInStart(user)),
})

const mapStateToProps = createStructuredSelector({
    error: selectError,
    success: selectSuccess
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
