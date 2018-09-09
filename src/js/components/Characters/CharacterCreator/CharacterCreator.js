import React from "react";
import {Grid, Form, Button, Segment, Header, Icon, Step} from "semantic-ui-react";
import {connect} from "react-redux";
import {Switch, Link, Route} from "react-router-dom";
import {CharacterBio} from "./CharacterBio";
import {CharacterInventory} from "./CharacterInventory";
import {CharacterStats} from "./CharacterStats";

@connect((store) => {
    return {
        auth: store.auth
    };
})
export class CharacterCreator extends React.Component {
    state = {
        character: {}
    };

    componentDidMount() {
        // const {dispatch} = this.props;
        // TODO this seems silly
        //dispatch(getBlankCharacter());
    }

    handleCharacterSubmit = () => {
        // const {dispatch} = this.props;
        // dispatch(createCharacter(this.state.character));
    };


    render() {
        const {location} = this.props;
        const {character} = this.state;

        let canGoBack = location.pathname.indexOf("bio") > 1 || location.pathname === "/characters/new";
        let canGoForward = location.pathname.indexOf("inventory") === -1;

        return (
            <div>
                <Step.Group>
                    <Step active={location.pathname.indexOf("bio") > 1 || location.pathname === "/characters/new"}
                          as={Link}
                          to="/characters/new/bio">
                        <Icon name="user circle outline"/>
                        <Step.Content>
                            <Step.Title>Bio</Step.Title>
                            <Step.Description>Character Basics</Step.Description>
                        </Step.Content>
                    </Step>

                    <Step active={location.pathname.indexOf("stats") > 1} as={Link} to="/characters/new/stats">
                        <Icon name="shield"/>
                        <Step.Content>
                            <Step.Title>Stats</Step.Title>
                            <Step.Description>Statistics</Step.Description>
                        </Step.Content>
                    </Step>

                    <Step active={location.pathname.indexOf("items") > 1} as={Link} to="/characters/new/items">
                        <Icon name="bar"/>
                        <Step.Content>
                            <Step.Title>Items</Step.Title>
                            <Step.Description>Items</Step.Description>
                        </Step.Content>
                    </Step>
                </Step.Group>

                <Switch>
                    <Route path="/characters/new/stats" render={() => <CharacterStats stats={character.stats}/>}/>
                    <Route path="/characters/new/items" render={() => <CharacterInventory/>}/>
                    <Route path="/characters/new" render={() => <CharacterBio/>}/>
                </Switch>

                <Button.Group>
                    <Button primary disabled={canGoBack}><Icon name="left arrow"/> Back</Button>
                    <Button.Or/>
                    <Button primary disabled={canGoForward}>Next <Icon name="right arrow"/></Button>
                </Button.Group>

            </div>
        );
    }
}