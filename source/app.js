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

var Hello = React.createClass({
    render: function () {
        return <div > Hello {
            this.props.name
        } < /div>;
    }
})

var Footer = React.createClass({
    render: function () {
        return <footer > & copy;
        2016 {
            this.props.author
        } < /footer>;
    }
});

ReactDOM.render( < Navbar appName = "Sup"
    home = "home"
    contact = "contact" / >
    document.getElementById('navbar-container')
)