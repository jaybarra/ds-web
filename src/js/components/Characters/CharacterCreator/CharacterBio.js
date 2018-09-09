import React from "react";
import {Form} from "semantic-ui-react";

export class CharacterBio extends React.Component {
    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Input required label="Character Name"/>
                    <Form.Input required label="Race"/>
                    <Form.Input label="Alignment"/>
                </Form.Group>
                <Form.Group>
                    <Form.Input label="Class"/>
                    <Form.Input label="Level"/>
                    <Form.Input label="Experience Points"/>
                </Form.Group>
            </Form>
        );
    }
}
