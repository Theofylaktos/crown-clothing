import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";
import './sign-in.styles.scss';


const initialState = {
    email: '',
    password: ''
};

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = initialState;
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {email, password} = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState(initialState);
        } catch (e) {
            console.log('Sign-in error!', e);
        }
    };

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]: value})
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                   </form>
            </div>
        )
    }
}

export default SignIn;