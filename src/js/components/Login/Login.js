import React from "react";
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import {Grid, Header, Button, Form, Segment} from "semantic-ui-react";

import {sendLogin} from "../../actions/AuthenticationActions";

@connect((store) => {
    return {
        auth: store.auth
    };
})
export class Login extends React.Component {
    state = {
        username: null,
        password: null
    };

    handleLogin = () => {
        const {dispatch} = this.props;
        const {username, password} = this.state;

        dispatch(sendLogin({username: username, password: password}));
    };

    render() {
        const {auth} = this.props;

        if (auth.isAuthenticated) {
            return (<Redirect to={"/user/" + this.state.username}/>);
        }

        return (
            <Grid centered>
                <Grid.Column width={6}>
                    <Header as="h1"
                            content={"Login"}
                    />
                    <Form as={Segment}>
                        <Form.Input name="username"
                                    placeholder="Username"
                                    pattern={/\W+/}
                                    onChange={(e, {value}) => this.setState({username: value})}/>

                        <Form.Input name="Password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e, {value}) => this.setState({password: value})}/>

                        <Button.Group fluid>
                            <Button as={Link} to="/signup" secondary type="button">Sign Up</Button>
                            <Button primary
                                    type="button"
                                    floated="right"
                                    onClick={() => this.handleLogin()}>Login</Button>
                        </Button.Group>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}
