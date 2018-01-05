import React from "react";
import {register} from "../../actions/AuthenticationActions";
import {connect} from "react-redux";
import {Grid, Form, Button, Header, Icon, Divider, Segment, Message} from "semantic-ui-react";
import {toast} from "react-toastify";

@connect((store) => {
    return {};
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
        return (
            <Grid centered>
                <Grid.Column width={6}>
                    <Header as="h1"
                            content={"Register"}
                    />
                    <Form onSubmit={this.handleSubmitRegister}>
                        <Form.Input required
                                    pattern={"^\\S]+"}
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
                                    type="password"
                                    onChange={(e, {value}) => this.setState({password1: value})}/>

                        <Form.Input required
                                    min={6}
                                    error={this.state.password1 !== this.state.password2 && !!this.state.password2}
                                    label="Verify Password"
                                    type="password"
                                    onChange={(e, {value}) => this.setState({password2: value})}/>

                        <Form.Button primary type='submit' content="Register"/>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}