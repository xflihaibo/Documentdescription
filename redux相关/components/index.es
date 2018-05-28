class Light extends React.Component {
    render() {
        return (
            <span className={this.props.light}></span>
        )
    }
}
Light.propTypes = {
    light: React.PropTypes.object.isRequired
}
export
default Light;