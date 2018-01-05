import React from "react";
import {connect} from "react-redux";
import {Segment, Header, Grid, List} from "semantic-ui-react";

import axios from "axios";

@connect((store) => {
    return {
        auth: store.auth
    };
})
export class Characters extends React.Component {
    state = {
        users: []
    };

    componentDidMount() {
        const {auth} = this.props;

        if (auth.jwt) {
            axios
                .get("/api/users", {
                    headers: {
                        "jwt": auth.jwt
                    }
                })
                .then(response => {
                    this.setState({users: response.data});
                })
                .catch(err => {
                    console.error(err);
                });
        }

    }

    render() {
        const {users} = this.state;

        return (
            <Segment vertical>
                <Header
                    as="h2"
                    content="Characters"
                    inverted
                    style={{fontSize: "4em", fontWeight: "normal", marginBottom: 0, marginTop: "3em"}}
                />
                <Grid container stackable>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <p>Create or access a character</p>
                            <List>
                                <List.Item>Gru</List.Item>
                                <List.Item>Feely Oppenpopper</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column floated="right" width={6}>
                            <List>
                                {users.map(user => <List.Item key={user.username}>{user.username}</List.Item>)}
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}