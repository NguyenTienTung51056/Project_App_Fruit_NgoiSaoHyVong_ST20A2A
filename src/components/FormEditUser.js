import validator from 'validator';
import { useState } from 'react';
export default function FormEditUser(props){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [errMessage, setErrMessage] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onChangeAddress = (e) => {
        setAddress(e.target.value);
    }
    const validatorAll = () => {
        const err = {};
        if(validator.isEmpty(email)){
            err.email = "Email is required";
        } else if (!validator.isEmail(email)) {
            err.email = 'Email không hợp lệ';
        }
        if(validator.isEmpty(password)){
            err.password = "Password is required";
        } else if (password.length < 6) {
            err.password = 'Mật khẩu phải có ít nhất 6 ký tự';
        }
        if(validator.isEmpty(address)){
            err.address = "Address is required";
        }
        setErrMessage(err);
        if(Object.keys(err).length > 0){
            return false;
        }
        return true;
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (validatorAll()) {
            console.log('ok');
        }
    }
    return (
        <div className="form-edit">
            <form method="post" className='form-user'>
                {/* button close */}
                <div>
                    <button onClick={props.action.change} type="button" className="btn-close" aria-label="Close"></button>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1"
                    onChange={onChangeEmail} 
                    aria-describedby="emailHelp"
                    placeholder={props.user.email}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    <p className="text-red-400 text-xs italic">{errMessage.email}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    id="exampleInputPassword1"
                    onChange={onChangePassword} 
                    placeholder={props.user.username}/>
                    <p className="text-red-400 text-xs italic">{errMessage.password}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputAddress1">Address</label>
                    <input 
                    type="address" 
                    className="form-control" 
                    id="exampleInputAddress1"
                    onChange={onChangeAddress} 
                    placeholder={props.user.address.street}/>
                    <p className="text-red-400 text-xs italic">{errMessage.address}</p>
                </div>
                <div className='form-group'>
                    <button 
                    type="button"
                    onClick={onSubmit} 
                    className="btn btn-primary btnSubmit">Submit</button>
                </div>
                
            </form>
        </div>
    )
}
