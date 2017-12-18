import React from "react";
import {Segment, Header, Grid, List} from "semantic-ui-react";

export class Characters extends React.Component {
    render() {
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
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}