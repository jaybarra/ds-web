import React from "react";
import {Link} from "react-router-dom";
import {Segment, Button, Header, Grid, List} from "semantic-ui-react";

export class Campaigns extends React.Component {
    render() {
        return (
            <Segment vertical>
                <Header
                    as="h2"
                    content="Campaigns, Quests, and Follies"
                    inverted
                    style={{fontSize: "4em", fontWeight: "normal", marginBottom: 0, marginTop: "3em"}}
                />
                <Grid container stackable>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <p>Create or continue a campaign</p>
                            <List>
                                <List.Item>Dark Sword</List.Item>
                                <List.Item>D&D</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column floated="right" width={6}>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}