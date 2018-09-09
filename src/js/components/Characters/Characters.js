import React from "react";
import {Link} from "react-router-dom";
import {Header, Button, List} from "semantic-ui-react";
import {Switch, Route} from "react-router-dom";

import {Character} from "./Character";
import {CharacterCreator} from "./CharacterCreator/CharacterCreator";

const CharacterList = () => (
    <List>
        <List.Header>Characters</List.Header>
        <List.Item>TODO Feely Oppenpopper</List.Item>
        <List.Item>TODO Gru</List.Item>
        <List.Item>TODO</List.Item>
        <List.Item>TODO</List.Item>
    </List>
);

export class Characters extends React.Component {
    render() {
        const {location} = this.props;
        return (
            <div>
                <Header as="h2"
                        content="Characters and NPCs"/>

                {location.pathname === "/characters" ?
                    <Button fluid color="green" as={Link} to="/characters/new">Create Character</Button> : null}

                <Route exact path="/characters" render={() => <CharacterList/>}/>

                <Switch>
                    <Route path="/characters/new" component={CharacterCreator}/>
                    <Route exact path="/characters/:id" component={Character}/>
                </Switch>
            </div>
        );
    }
}