import React, {Component} from "react";
import {Link} from "react-router-dom";
import Lightbox from "react-image-lightbox";
import {
    Button,
    Container,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from "semantic-ui-react";

export class Home extends Component {
    state = {};

    render() {
        const {hideMenu, showMenu} = this.props;
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
                                    <Button as={Link} to="/" inverted>Log in</Button>
                                    <Button as={Link} to="/" inverted style={{marginLeft: "0.5em"}}>Sign Up</Button>
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
                            <Button primary size="huge">
                                Get Started
                                <Icon name="right arrow"/>
                            </Button>
                        </Container>
                    </Segment>
                </Visibility>

                <Segment style={{padding: "8em 0em"}} vertical>
                    <Grid container stackable verticalAlign="middle">
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as="h3" style={{fontSize: "2em"}}>We Help Adventurers and Companions</Header>
                                <p style={{fontSize: "1.33em"}}>
                                    We can give your party superpowers to do things that they never thought possible. Let us delight
                                    your patrons and empower your needs... through pure chicanery and bluster.
                                </p>
                                <Header as="h3" style={{fontSize: "2em"}}>We Make Bananas That Can Dance</Header>
                                <p style={{fontSize: "1.33em"}}>
                                    Yes that{"'"}s right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                                </p>
                                <p style={{fontSize: "0.9em"}}>Our wizards are very good with fruit magic</p>
                            </Grid.Column>
                            <Grid.Column floated="right" width={6}>
                                {this.state.noWizard ?
                                    <Lightbox mainSrc="/assets/images/WeAreNotTakingTheWizard.jpg"
                                              imageTitle={"We are NOT taking the wizard"}
                                              imageCaption={<a target="_blank"
                                                               rel="noopener noreferrer"
                                                               href="https://www.artstation.com/mattrhodes">by Matt Rhodes</a>}
                                              onCloseRequest={() => this.setState({noWizard: false})}/>
                                    :
                                    <Image
                                        onClick={() => this.setState({noWizard: true})}
                                        bordered
                                        rounded
                                        size="large"
                                        src="/assets/images/WeAreNotTakingTheWizard.jpg"
                                    />}
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign="center">
                                <Button size="huge">Check Them Out</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{padding: "0em"}} vertical>
                    <Grid celled="internally" columns="equal" stackable>
                        <Grid.Row textAlign="center">
                            <Grid.Column style={{paddingBottom: "5em", paddingTop: "5em"}}>
                                <Header as="h3" style={{fontSize: "2em"}}>{"What a Company"}</Header>
                                <p style={{fontSize: "1.33em"}}>That is what they all say about us</p>
                            </Grid.Column>
                            <Grid.Column style={{paddingBottom: "5em", paddingTop: "5em"}}>
                                <Header as="h3"
                                        style={{fontSize: "2em"}}>{"I shouldn't have gone with their competitor."}</Header>
                                <p style={{fontSize: "1.33em"}}>
                                    {this.state.yingletFight ?
                                        <Lightbox mainSrc="/assets/images/yinglet_fight.jpg"
                                                  imageTitle={"Traditional Yinglet dispute settling"}
                                                  imageCaption={<a target="_blank"
                                                                   rel="noopener noreferrer"
                                                                   href="http://www.valsalia.com/comic/out-of-placers/oops-24/">by Out-of-Placers</a>}
                                                  onCloseRequest={() => this.setState({yingletFight: false})}/>
                                        :
                                        <Image
                                            centered
                                            onClick={() => this.setState({yingletFight: true})}
                                            bordered
                                            rounded
                                            size="medium"
                                            src="/assets/images/yinglet_fight.jpg"
                                        />}

                                    <b>Vizlet</b> Yinglet Matron
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{padding: "8em 0em"}} vertical>
                    <Container text>
                        <Header as="h3" style={{fontSize: "2em"}}>Breaking The Grid, Grabs Your Attention</Header>
                        <p style={{fontSize: "1.33em"}}>
                            Instead of focusing on content creation and hard work, we have learned how to master the art of doing
                            nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
                            and worth your attention.
                        </p>
                        <Button as={Link} to="/" size="large">Read More</Button>
                    </Container>
                </Segment>

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
