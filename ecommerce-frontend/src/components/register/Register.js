import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Register.css'
import authService from '../../api/AuthService';

const Register = () => {
    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredMobileNumber, setEnteredMobileNumber] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const firstNameChangeHandler = (event) => {
        setEnteredFirstName(event.target.value);
    }
    const lastNameChangeHandler = (event) => {
        setEnteredLastName(event.target.value);
    };
    const mobileNumberChangeHandler = (event) => {
        setEnteredMobileNumber(event.target.value);
    };
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };
    const confirmPasswordChangeHandler = (event) => {
        setEnteredConfirmPassword(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();

        setErrorMessage('');

        const userRegistrationData = {
            firstname: enteredFirstName,
            lastname: enteredLastName,
            email: enteredEmail,
            password: enteredPassword,
        };

        authService.register(userRegistrationData).then(() => {
            console.log(userRegistrationData)

            setEnteredFirstName('');
            setEnteredLastName('');
            setEnteredMobileNumber('');
            setEnteredEmail('');
            setEnteredPassword('');
            setEnteredConfirmPassword('');

            navigate('/login');
        }).catch((reason) => {
            setErrorMessage(reason);
            console.log(reason)
        })
    };
    return (
        <div className="new-expense">
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>First Name</label>
                        <input type="text" value={enteredFirstName} onChange={firstNameChangeHandler} required />
                    </div>
                    <div className="new-expense__control">
                        <label>Last Name</label>
                        <input type="text" value={enteredLastName} onChange={lastNameChangeHandler} required />
                    </div>
                    <div className="new-expense__control">
                        <label>Email Adress</label>
                        <input type="email" value={enteredEmail} onChange={emailChangeHandler} required />
                    </div>
                    <div className="new-expense__control">
                        <label>Mobile Number</label>
                        <input type="number" value={enteredMobileNumber} min="10" onChange={mobileNumberChangeHandler} required />
                    </div>
                    <div className="new-expense__control">
                        <label>Password</label>
                        <input type="text" value={enteredPassword} onChange={passwordChangeHandler} required />
                    </div>
                    <div className="new-expense__control">
                        <label>Confirm Password</label>
                        <input type="text" value={enteredConfirmPassword} onChange={confirmPasswordChangeHandler} required />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}
export default Register;