import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {logout} from "../../actions/AuthenticationActions";

@connect(() => {
    return {};
})
export class Logout extends React.Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(logout());
    }

    render() {
        return <Redirect to="/"/>;
    }
}