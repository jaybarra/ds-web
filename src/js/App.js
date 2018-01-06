import React, {Component} from "react";
import {Link, Route, Switch, Redirect} from "react-router-dom";
import {Container, Menu, Button, Dropdown} from "semantic-ui-react";
import {ToastContainer} from "react-toastify";
import {connect} from "react-redux";

import {Home, Characters, Campaigns, Login, Logout, Signup, Profile} from "./components";

const FixedMenu = ({hideLogin, user}) => (
    <Menu size="large">
        <Container>
            <Menu.Item as={Link} to="/" active>Home</Menu.Item>
            <Menu.Item as={Link} to="/campaigns">Campaigns</Menu.Item>
            <Menu.Item as={Link} to="/characters">Characters</Menu.Item>

            {(hideLogin || user) ? null :
                <Menu.Menu position="right">
                    <Menu.Item className="item">
                        <Button as={Link} to="/login">Log in</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button as={Link} to="/signup" primary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>
            }
            <Menu.Menu position="right">
                <Dropdown item text={user ? user.username : "Please Log in"}>
                    <Dropdown.Menu>
                        {user ? <Dropdown.Item as={Link}
                                               to={"/user/" + user.username}>My Profile</Dropdown.Item> : null}
                        <Dropdown.Item as={Link} to="/logout">Log out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>

        </Container>
    </Menu>
);

@connect((store) => {
    return {
        user: store.auth.user
    };
})
export class App extends Component {
    state = {};

    hideFixedMenu = () => this.setState({visible: false});
    showFixedMenu = () => this.setState({visible: true});

    componentDidMount() {

    }

    render() {
        const {location, user} = this.props;
        const {visible} = this.state;

        let hideMenuStates = ["/", "/login", "/signup"];

        const topMenuBar = ((visible && location.pathname === "/") || !hideMenuStates.includes(location.pathname)) ?
            <FixedMenu hideLogin={location.pathname !== "/"} user={user}/> : null;

        return (
            <div className="app-wrapper">
                {topMenuBar}

                <ToastContainer/>

                <Switch>
                    <Route exact
                           path="/"
                           render={() => <Home hideMenu={this.hideFixedMenu} showMenu={this.showFixedMenu}/>}/>

                    <Route path="/campaigns" component={Campaigns}/>
                    <Route path="/characters" component={Characters}/>

                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/logout" component={Logout}/>

                    <Route path="/user/:username" component={Profile}/>

                    {/** Catch 404s and redirect to home for now */}
                    <Redirect to="/"/>
                </Switch>

            </div>
        );
    }
}
