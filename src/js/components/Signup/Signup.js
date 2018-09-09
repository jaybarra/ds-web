import React from "react";
import {register} from "../../actions/AuthenticationActions";
import {connect} from "react-redux";
import {Responsive, Grid, Form, Header, Segment} from "semantic-ui-react";
import {toast} from "react-toastify";
import {Redirect} from "react-router-dom";

@connect((store) => {
    return {
        auth: store.auth
    };
})
export class Signup extends React.Component {
    state = {};

    handleSubmitRegister = () => {
        const {dispatch} = this.props;
        const {username, password1, password2, email} = this.state;

        if (password1 !== password2) {
            toast.error("Passwords do not match!");
            return;
        }

        if (password1.length < 6) {
            toast.error("Your password is too short. A minimum of 6 characters is required");
            return;
        }

        dispatch(register({
            username: username,
            email: email,
            password: password1
        }));
    };

    render() {

        const {auth} = this.props;

        if (auth.isAuthenticated) {
            return (<Redirect to={"/user/" + auth.user.username}/>);
        }

        return (
            <Grid centered stackable>
                <Grid.Column width={6}>
                    <Header as="h1"
                            content={"Register"}
                    />
                    <Segment>
                        <Form onSubmit={this.handleSubmitRegister}>
                            <Form.Input required
                                        label="Username"
                                        onChange={(e, {value}) => this.setState({username: value})}/>

                            <Form.Input required
                                        label="Email"
                                        type="email"
                                        onChange={(e, {value}) => this.setState({email: value})}/>

                            <Form.Input required
                                        min={6}
                                        error={this.state.password1 !== this.state.password2 && !!this.state.password2}
                                        label="Password"
                                        autoComplete="new-passsword"
                                        type="password"
                                        onChange={(e, {value}) => this.setState({password1: value})}/>

                            <Form.Input required
                                        min={6}
                                        error={this.state.password1 !== this.state.password2 && !!this.state.password2}
                                        label="Verify Password"
                                        autoComplete="new-password-verify"
                                        type="password"
                                        onChange={(e, {value}) => this.setState({password2: value})}/>

                            <Form.Button primary type='submit' content="Register"/>

                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}