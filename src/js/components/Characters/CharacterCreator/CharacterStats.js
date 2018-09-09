import React from "react";
import {Form, Grid, Segment} from "semantic-ui-react";

export class CharacterStats extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={4}>
                    <Form>
                        <Form.Group>
                            <Form.Input type="number" label="Strength"/>
                            <Form.Input type="number" label="Modifier"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input type="number" label="Dexterity"/>
                            <Form.Input type="number" label="Modifier"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input type="number" label="Constitution"/>
                            <Form.Input type="number" label="Modifier"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input type="number" label="Intelligence"/>
                            <Form.Input type="number" label="Modifier"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input type="number" label="Wisdom"/>
                            <Form.Input type="number" label="Modifier"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Input type="number" label="Charisma"/>
                            <Form.Input type="number" label="Modifier"/>
                        </Form.Group>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}
