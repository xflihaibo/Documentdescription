import * as LightActions from '../actions/index.es';
import Light from '../components/index.es';

class App extends React.Component {
    _bind(...methods) {
        methods.forEach((method) => this[method] = this[method].bind(this));
    }
    constructor(props) {
        super(props);
        this._bind('handleClick');
    }
    handleClick(e) {
        // 用点击模拟红路灯
        let _cname = e.target.className;
        if (_cname == "red") {
            _cname = "green";
        } else {
            _cname = "yellow";
        }
        const {
            actions
        } = this.props;
        actions["change" + _cname]();
        console.log(this.props);
    }
    render() {
        console.log(this.props);
        // 通过connect 注入 redux 的 dispatch 方法
        const {
            isLoading, color, text
        } = this.props.data.light;
        return (
            <div id="traffic" onClick={this.handleClick}>
                {!isLoading ? <h1>loading...</h1> : <h2>{text.success}</h2>}
                <Light light={color}/>
            </div>
        )
    }
}
// 声明 connect 连接
// 将 redux 中的 state传给 App
function mapStateToProps(state) {
    return {
        data: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: Redux.bindActionCreators(LightActions, dispatch)
    }
}

// 声明 connect 连接
App = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);
export default App;