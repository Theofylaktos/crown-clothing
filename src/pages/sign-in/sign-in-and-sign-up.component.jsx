import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SighUp from "../../components/sign-up/sign-up.component";

import './sign-in-and-sign-up.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SighUp/>
    </div>
);

export default SignInAndSignUpPage;