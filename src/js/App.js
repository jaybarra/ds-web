import React, {Component} from "react";
import {Link, Route, Switch, Redirect} from "react-router-dom";
import {Container, Header, Segment, Grid, Responsive, Menu, Button, Dropdown, Sidebar} from "semantic-ui-react";
import {ToastContainer} from "react-toastify";
import {connect} from "react-redux";

import {Home, Characters, Campaigns, Login, Logout, Signup, Profile} from "./components";

@connect((store) => {
    return {
        auth: store.auth,
    };
})
export class App extends Component {
    state = {
        mobileMenuVisible: false
    };

    componentWillUpdate(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.setState({mobileMenuVisible: false});
        }
    }

    render() {
        const {location, auth} = this.props;
        const {mobileMenuVisible} = this.state;

        const mobileMenu = (
            <Grid as={Segment} inverted attached>
                <Grid.Column><Header inverted as={Link} to="/">DS</Header></Grid.Column>
                <Grid.Column width={4} floated="right" textAlign="right">
                    <Button icon="bars"
                            onClick={() => this.setState({mobileMenuVisible: !mobileMenuVisible})}/>
                </Grid.Column>
            </Grid>
        );

        const fullMenu = (
            <Segment inverted>
                <Menu inverted stackable pointing secondary size="large">
                    <Menu.Item active={location.pathname === "/"} as={Link} to="/">Home</Menu.Item>

                    <Menu.Item active={location.pathname.indexOf("/campaigns") !== -1}
                               as={Link}
                               to="/campaigns">Campaigns</Menu.Item>

                    <Menu.Item active={location.pathname.indexOf("/characters") !== -1}
                               as={Link}
                               to="/characters">Characters</Menu.Item>

                    <Menu.Item position="right">
                        {!auth.isAuthenticated ? <Button.Group>
                                <Button as={Link} to="/login" inverted>Log in</Button>
                                <Button.Or/>
                                <Button as={Link}
                                        to="/signup"
                                        inverted>Sign Up</Button>
                            </Button.Group> :
                            <Dropdown item text={auth.user ? auth.user.username : "Not Logged In"}>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link}
                                                   to={"/user/" + auth.user.username}>My Profile</Dropdown.Item>
                                    <Dropdown.Divider/>
                                    <Dropdown.Item as={Link} to={"/logout"}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>}
                    </Menu.Item>
                </Menu>
            </Segment>
        );

        return (
            <div>

                <Responsive maxWidth={700}>{mobileMenu}</Responsive>
                <Responsive maxWidth={700}
                            as={Sidebar}
                            visible={mobileMenuVisible}
                            animation="overlay">
                    {fullMenu}
                </Responsive>

                <Responsive minWidth={700}>{fullMenu}</Responsive>

                <ToastContainer/>

                <Switch>
                    <Route exact path="/" component={Home}/>

                    <Route path="/campaigns" component={Campaigns}/>
                    <Route path="/characters" component={Characters}/>

                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/logout" component={Logout}/>

                    <Route path="/user/:username" component={Profile}/>

                    {/* Catch 404s and redirect to home for now */}
                    <Redirect to="/"/>
                </Switch>
            </div>
        );
    }
}
