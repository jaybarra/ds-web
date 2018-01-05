import React from "react";
import {connect} from "react-redux";
import {Link, Route} from "react-router-redux";
import {Segment, Header, Grid, List, Card, Image, Icon, Button} from "semantic-ui-react";

import {getCharacters} from "./CharactersActions";
import {Character} from "./Character";

@connect((store) => {
    return {
        isAuthenticated: store.auth.isAuthenticated,
        characters: store.charactersStore.characters,
        fetching: store.charactersStore.fetching
    };
})
export class Characters extends React.Component {
    componentDidMount() {
        const {dispatch, isAuthenticated} = this.props;
        if (isAuthenticated) {
            dispatch(getCharacters());
        }
    }

    render() {
        const {characters, fetching} = this.props;

        let myCharacterCards = characters.map(character => {
            return (
                <Card key={character.name} onClick={() => this.props.history.push("/characters/" + character._id)}>
                    <Card.Content>
                        <Header as="h3"
                                content={character.name}/>

                        <List>
                            <List.Item>Race: {character.race}</List.Item>
                            <List.Item>Sex: {character.sex}</List.Item>
                            <List.Item>Class: {character.class}</List.Item>
                            <List.Item>Level: {character.level}</List.Item>
                            <List.Item>Exp: {character.experience}</List.Item>
                        </List>
                    </Card.Content>
                </Card>);
        });

        return (
            <Segment vertical>
                <Header
                    as="h2"
                    content="Characters"
                    inverted
                    style={{fontSize: "4em", fontWeight: "normal", marginBottom: 0, marginTop: "3em"}}
                />

                <Grid centered>
                    <Grid.Row>
                        <Grid.Column>
                            <Card.Group>
                                {myCharacterCards}
                            </Card.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                {characters[0] ? <Character character={characters[0]}/> : null}

            </Segment>
        );
    }
}