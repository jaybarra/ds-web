import React from "react";
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
            <Grid container>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h1"
                                content={"Login"}
                        />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Form>
                            <Form.Input placeholder="Username"/>
                            <Form.Input type="password" placeholder="Password"/>
                            <Button primary type="button" onClick={() => this.handleLogin()}>Login</Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}
