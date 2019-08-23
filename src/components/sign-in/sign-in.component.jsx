import React, {Component} from 'react';
import './sign-in.style.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    };

    handelChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    };

    render() {
        return (
            <div className='sign-in'>

                <h2 className='title'>Já tenho conta</h2>
                <span>Entre com seu login e senha</span>


                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name='email' label='email' value={this.state.email}
                               handleChange={this.handelChange} required/>

                    <FormInput type="password" name='password' label='senha' value={this.state.password}
                               handleChange={this.handelChange}
                               required/>


                    <CustomButton type="submit">LOGAR</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>LOGAR COM GOOGLE</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;