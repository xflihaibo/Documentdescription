"use strict";
// Mounting：已插入真实 DOM
// Updating：正在被重新渲染
// Unmounting：已移出真实 DOM
// componentWillMount():将要被渲染
// componentDidMount()：已经渲染到页面
// componentWillUpdate(object nextProps, object nextState):将要被更新
// componentDidUpdate(object prevProps, object prevState):已经被更新
// componentWillUnmount():被卸载
// componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
// shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用
class HelloMessage extends React.Component {
  //代替ES5 getInitialState
  constructor(props) {
    //状态是随时改变的
     super(props);
     this.state = {
       count: props.initialCount,
       ndata:props.ndata,
       opacity:0,
       loading: true,
       error: null,
       data: null
     };
     this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    //发起请求
    reqwest({
      url: 'data',
      type: 'json'
     })
     .then((resp)=> {
        console.log(resp);
        this.setState({loading: false, data: resp});
     })
     .fail((err)=> {
        console.log("出错"+err);
        this.setState({loading: false, error: err});
     })
  }
  handleClick(event){
    const _html = event.currentTarget;
    if(_html.id == "addCount"){
        this.setState({count:this.state.count + 2});
    }else{
        this.setState({count:this.state.count + 1});
    }
    const _input = this.refs.myTextInput;
    console.log('当前文本框的值',_input.value);
    this.props.handleClick(_input.v)
  }
  componentWillReceiveProps(nextProps) {
      console.log('下一个参数是',nextProps);
      if (nextProps.ndata>20) {
            this.setState({ndata: 2});
      }
  }
  render() {
    if (this.state.loading) {
      return <span>Loading...</span>;
    }
    else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    }else{
      return(
        <form>
          <label htmlFor="myTextInput">{this.props.title}</label>
          <input id="addCount" defaultValue={this.state.ndata} placeholder="点我+2" className="test" type="number" min="1" max="100"  refs="addCount" onChange={(e)=>this.handleClick(e)}/>
          <input id="myTextInput" value={this.state.count} className="test" type="text" ref="myTextInput" />
          <input className="btn" type="button" value={this.state.data.txt} onClick={this.handleClick} />
        </form>
      );
  }
  }
}
//属性校验器
HelloMessage.propTypes={
  title: React.PropTypes.string.isRequired,
  ndata:React.PropTypes.string.isRequired
}
//设置默认属性k 代替ES5 getDefaultProps 属性一旦定义不能改变
HelloMessage.defaultProps={
  initialCount:1,
  ndata:0,
  title:"计算"
};
// ReactDOM.render(
//   <HelloMessage title="测试属性"/>,
//   document.getElementById('JS-container')
// );
export default HelloMessage;
