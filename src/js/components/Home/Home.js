import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    List,
    Segment
} from "semantic-ui-react";
import {Payments} from "../Payments";

@connect((store) => {
    return {
        auth: store.auth
    };
})
export class Home extends React.Component {
    state = {};

    render() {
        const {auth} = this.props;

        let background = "assets/images/smoke_background.jpg";

        return (
            <div>
                <Segment
                    inverted
                    attached
                    textAlign="center"
                    style={{
                        minHeight: "700px",
                        backgroundImage: "url(" + background + ")",
                        backgroundSize: "cover"
                    }}
                    >

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
                        <Button color="green"
                                size="huge"
                                as={Link}
                                to={auth.user ? ("/user/" + auth.user.username) : "/login"}>
                            Get Started
                            <Icon name="right arrow"/>
                        </Button>
                    </Container>
                </Segment>
                <Segment>
                    <Payments/>
                </Segment>

                <Segment inverted vertical>
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
