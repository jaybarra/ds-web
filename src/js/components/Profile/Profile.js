import React from "react";
import {Menu, Grid, Header, Image, Icon, Button, Segment, List, Card, Loader} from "semantic-ui-react"
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom";

import {getProfile} from "./ProfileActions";

@connect((store) => {
    return {
        isAuthenticated: store.auth.isAuthenticated,
        profile: store.profileStore.profile,
    };
})
export class Profile extends React.Component {

    componentDidMount() {
        const {dispatch, match} = this.props;
        dispatch(getProfile(match.params.username));
    }

    render() {
        const {profile} = this.props;

        // TODO handle non-authenticated differently

        if (!profile) {
            return (
                <Segment>
                    <Loader>Loading Profile</Loader>
                </Segment>
            );
        }

        return (
            <Grid>
                <Grid.Column widths="equal">
                    <Segment>
                        <Header as="h1"
                                content={profile.username}/>
                    </Segment>

                    <Segment attached>
                        <Header as="h2"
                                content="My Characters"/>

                    </Segment>

                    <Segment attached>
                        <Header as="h2"
                                content="My Campaigns"/>
                    </Segment>
                </Grid.Column>
            </Grid>
        );
    }
}