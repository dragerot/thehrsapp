import React from 'react';
import { Button } from 'react-bootstrap';

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function UserGreeting() {
    return  <div>Velkommen</div>;
}

function GuestGreeting() {
    return <div>Trykk for å logget deg på</div>;
}

function LoginButton(props) {
    return (
        <Button onClick={props.onClick}>
            Login
        </Button>
    );
}

function LogoutButton(props) {
    return (
        <Button onClick={props.onClick}>
            Logout
        </Button>
    );
}

export {
    Greeting,
    UserGreeting,
    GuestGreeting,
    LoginButton,
    LogoutButton
}