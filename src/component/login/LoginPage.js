import React from 'react';
import {LoginButton,LogoutButton,Greeting} from './Greetings';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from './loginActions'

class LoginPage extends React.Component {
        constructor(props) {
        super(props);
            // this.state = {
            //     isLoggedIn : false
            //     };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
     }

    handleLoginClick() {
        console.log("handleLoginClick");
        this.props.actions.changeLoginState(true)

    }

    handleLogoutClick() {
        console.log("handleLogoutClick");
        this.props.actions.changeLoginState(false);

    }

    render() {
        let button = null;
        const { isLoggedIn, actions } = this.props;
        if (isLoggedIn) {
            console.log("Login");
           button = <LogoutButton className="btn btn-primary btn-lg" onClick={this.handleLogoutClick} />;
        } else {
            console.log("logout handling");
           button = <LoginButton className="btn btn-primary btn-lg" onClick={this.handleLoginClick} />;
        }

        return (
            <div className="container">
                <h1>Login</h1>
                <div className="well">
                <Greeting isLoggedIn={this.props.isLoggedIn} />
                </div>
                {button}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        isLoggedIn : state.isLoggedIn
    };
}

/**
 * http://redux.js.org/docs/basics/Actions.html
 * @param dispatch
 * @returns {{actions: (ActionCreator<any> | ActionCreatorsMapObject)}}
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)

};
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
