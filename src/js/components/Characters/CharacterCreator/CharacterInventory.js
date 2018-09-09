import React from "react";
import {Form, Button} from "semantic-ui-react";

export class CharacterInventory extends React.Component {
    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Input type="number" label="Platinum"/>
                    <Form.Input type="number" label="Gold"/>
                    <Form.Input type="number" label="Electrum"/>
                    <Form.Input type="number" label="Silver"/>
                    <Form.Input type="number" label="Copper"/>
                </Form.Group>

                <Form.Group>
                    <Form.Input label="Items"/>
                </Form.Group>
            </Form>
        );
    }
}
