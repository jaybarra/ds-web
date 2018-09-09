import React from "react";
import {Link} from "react-router-dom";
import {Segment, Button, Header, Grid, List} from "semantic-ui-react";

export class Campaigns extends React.Component {
    render() {
        return (
            <div>
                <Grid container stackable>
                    <Grid.Column width={8}>
                        <Header as="h2"
                                content="Campaigns, Quests, and Follies"/>

                        <p>Create or continue a campaign</p>

                        <List>
                            <List.Item>Dark Sword</List.Item>
                            <List.Item>D&D</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column floated="right" width={6}>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}