var React = require('react');
var ReactDOM = require('react-dom');

var NavBar = React.createClass({
    render: function () {
        return <nav > {
                this.props.appName
            } < ul > < li > < a href = {
                this.props.home
            } > {
                this.props.home
            } < /a></li >
            < li > < a href = {
                this.props.contact
            } > {
                this.props.contact
            } < /a></li >
            < /ul> < /nav > ;
    }

});