import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link, Route} from "react-router-dom";
import {Container, Menu, Button} from "semantic-ui-react";

import {Home, Characters, Campaigns, Login} from "./components";

const FixedMenu = ({hideLogin}) => (
    <Menu fixed="top" size="large">
        <Container>
            <Menu.Item as={Link} to="/" active>Home</Menu.Item>
            <Menu.Item as={Link} to="/campaigns">Campaigns</Menu.Item>
            <Menu.Item as={Link} to="/characters">Characters</Menu.Item>

            {hideLogin ? null :
                <Menu.Menu position="right">
                    <Menu.Item className="item">
                        <Button as={Link} to="/login">Log in</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button as={Link} to="/signup" primary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>
            }
        </Container>
    </Menu>
);

FixedMenu.PropTypes = {
    hideLogin: PropTypes.boolean
};

export class App extends Component {
    state = {};

    hideFixedMenu = () => this.setState({visible: false});
    showFixedMenu = () => this.setState({visible: true});

    render() {
        const {location} = this.props;
        const {visible} = this.state;

        return (
            <div className="app-wrapper">
                {(visible && location.pathname === "/") || location.pathname !== "/" ?
                    <FixedMenu hideLogin={location.pathname !== "/"}/> : null}

                <Route exact
                       path="/"
                       render={() => <Home hideMenu={this.hideFixedMenu} showMenu={this.showFixedMenu}/>}/>

                <Route path="/campaigns" component={Campaigns}/>
                <Route path="/characters" component={Characters}/>
                <Route path="/login" component={Login}/>

            </div>
        );
    }
}
