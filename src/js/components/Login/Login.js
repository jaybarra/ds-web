import React from "react";
import {Link} from "react-router-dom";
import {Grid, Header, Button, Form} from "semantic-ui-react";

export class Login extends React.Component {

    handleLogin = () => {
        //const {dispatch} = this.props;
        //const {credentials} = this.state;

        //console.log("Logging in ");

        // dispatch(login(credentials));
    };

    render() {
        return (
            <Grid centered>
                <Grid.Column width={4}>
                    <Header as="h1"
                            content={"Login"}
                    />
                    <Form>
                        <Form.Input name="username" placeholder="Username"/>
                        <Form.Input name="password" type="password" placeholder="Password"/>
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
