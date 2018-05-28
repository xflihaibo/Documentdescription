var Form = React.createClass({
    componentDidMount: function () {
          this.setState({
            username:"admin",
            password:25
          });
    },
    getInitialState: function () {
        return {data: {
          username:"admin",
          password:25
        }};
    },
    render: function () {
        return (
            <form>
                <Input type="text" placeholder="Username" value={this.state.password} ref="username"/>
                <Input type="text" placeholder="Age" value={this.state.username} ref="age"/>
                <button type="submit">submit</button>
            </form>
        );
    }
});


var Input = React.createClass({
    getInitialState: function () {
        return {value: ''};
    },
    componentWillReceiveProps: function (nextProps) {
        console.log('下一个数据',nextProps);
        this.setState({value: nextProps.value});
    },
    render: function () {
        return <input {...this.props} value={this.state.value} onChange={this.handleChange}/>;
    }
});


ReactDOM.render(<Form />, document.body);
