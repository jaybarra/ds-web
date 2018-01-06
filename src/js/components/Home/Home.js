import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Lightbox from "react-image-lightbox";
import {
    Button,
    Container,
    Dropdown,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from "semantic-ui-react";

@connect((store) => {
    return {
        auth: store.auth
    };
})
export class Home extends React.Component {
    state = {};

    render() {
        const {hideMenu, showMenu, auth} = this.props;
        let background = "assets/images/smoke_background.jpg";

        return (
            <div>

                <Visibility
                    onBottomPassed={showMenu}
                    onBottomVisible={hideMenu}
                    once={false}
                >

                    <Segment
                        inverted
                        textAlign="center"
                        style={{
                            minHeight: 700,
                            padding: "1em 0em",
                            backgroundImage: "url(" + background + ")",
                            backgroundSize: "cover"
                        }}
                        vertical
                    >

                        <Container>
                            <Menu inverted pointing secondary size="large">
                                <Menu.Item as={Link} to="/" active>Home</Menu.Item>
                                <Menu.Item as={Link} to="/campaigns">Campaigns</Menu.Item>
                                <Menu.Item as={Link} to="/characters">Characters</Menu.Item>
                                <Menu.Item position="right">
                                    {!auth.isAuthenticated ? <div>
                                            <Button as={Link} to="/login" inverted>Log in</Button>
                                            <Button as={Link}
                                                    to="/signup"
                                                    inverted
                                                    style={{marginLeft: "0.5em"}}>Sign Up</Button></div> :
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
                        </Container>

                        <Container text>
                            <Header
                                as="h1"
                                content="Draconic Systems"
                                inverted
                                style={{fontSize: "4em", fontWeight: "normal", marginBottom: 0, marginTop: "3em"}}
                            />
                            <Header
                                as="h2"
                                content="Do what you want to do when you want to do it."
                                inverted
                                style={{fontSize: "1.7em", fontWeight: "normal"}}
                            />
                            <Header
                                as="h6"
                                content="except tossing dwarves (they don't like it)"
                                inverted
                                style={{fontSize: "1.2em", fontWeight: "normal"}}
                            />
                            <Button primary
                                    size="huge"
                                    as={Link}
                                    to={auth.user ? ("/user/" + auth.user.username) : "/login"}>
                                Get Started
                                <Icon name="right arrow"/>
                            </Button>
                        </Container>
                    </Segment>
                </Visibility>


                <Segment inverted vertical style={{padding: "5em 0em"}}>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={3}>
                                    <Header inverted as="h4" content="About"/>
                                    <List link inverted>
                                        {/*<List.Item as={Link} to="/">Sitemap</List.Item>*/}
                                        {/*<List.Item as={Link} to="/">Contact Us</List.Item>*/}
                                        {/*<List.Item as={Link} to="/">Religious Ceremonies</List.Item>*/}
                                        <List.Item as={Link} to="/">Gazebo Plans</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <Header inverted as="h4" content="Services"/>
                                    <List link inverted>
                                        {/*<List.Item as={Link} to="/">Banana Pre-Order</List.Item>*/}
                                        {/*<List.Item as={Link} to="/">DNA FAQ</List.Item>*/}
                                        <List.Item as={Link} to="/">How To Access</List.Item>
                                        {/*<List.Item as={Link} to="/">Favorite X-Men</List.Item>*/}
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={7}>
                                    <p>Draconic Systems <Icon name="copyright"/> {new Date().getFullYear()}</p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </div>
        );
    }
}
