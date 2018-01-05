import React from "react";
import {Grid, Icon, Segment, Image, Button, Header, List, Table} from "semantic-ui-react";

export class Character extends React.Component {
    render() {
        const {character} = this.props;
        return (
            <Grid centered celled widths="equal">
                <Grid.Column>
                    <Header as="h4"
                            content="Stats"/>
                    <List>
                        <List.Item>Strength: {character.stats.strength.value}</List.Item>
                    </List>
                </Grid.Column>


            </Grid>
        )
    }
}