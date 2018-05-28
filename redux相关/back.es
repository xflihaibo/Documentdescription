"use strict";
var CheckboxWithLabel = React.createClass({
    // shouldComponentUpdate: function(nextProps, nextState) {
    //     return nextProps.label !== this.props.label;
    // },
    mixins: [React.addons.PureRenderMixin],
    onChange: function() {
      console.log(this.props.label.get("id"));
        this.props.onChange(this.props.label.get("id"));
    },
    render: function() {
        return (
            <label>
                {this.props.label.get("text")}
                <input type = "checkbox" checked={this.props.label.get("checked")} onChange={this.onChange}/>
                {this.props.label.get("checked") ? this.props.label.get("on") : this.props.label.get("off")}
            </label>);
    }
});
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
     const {_count,_ndata} = props;
    //  let _stateMap = Immutable.Map({
    //     count:_count,
    //     ndata:_ndata,
    //     opacity:0,
    //     error: null,
    //     data: null,
    //     loading: true
    //  });
    //  console.log('xxx',_stateMap.get('ndata'))
     const _items = Immutable.fromJS({
        items: [
            {
                id: 0,
                text: "你喜欢吃萝卜吗？",
                on: "喜欢",
                off: "不喜欢",
                checked: false
            },
            {
                id: 1,
                text: "你喜欢吃西瓜吗？",
                on: "喜欢",
                off: "不喜欢",
                checked: false
            },
            {
                id: 2,
                text: "你喜欢吃香蕉吗？",
                on: "喜欢",
                off: "不喜欢",
                checked: false
            }
        ]
     });
     let _stateMap = {
        count:_count,
        ndata:_ndata,
        opacity:0,
        error: null,
        data: null,
        list:_items,
        loading: true
     };
     this.state = _stateMap;
     this.handleClick = this.handleClick.bind(this);
     this.onChange = this.onChange.bind(this);
     //this.shouldComponentUpdate = React.addons.PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  componentDidMount() {
    //发起请求
    reqwest({
      url: 'data',
      type: 'json'
     })
     .then((resp)=> {
        console.log(resp);
        // result.set('loading',false);
        // console.log(result);
        // this.state.set('successs',false);
        // this.state.set('data',resp);
        this.setState({
          loading:false,
          data:resp
        });
     })
     .fail((err)=> {
        console.log("出错"+err);
        this.setState({loading: false, error: err});
     });
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
    this.props.handleClick(_input.value);
  }
  componentWillReceiveProps(nextProps) {
      console.log('下一个参数是',nextProps);
      if (nextProps.ndata>20) {
        this.setState({
          ndata:2
        });
      }
  }
  onChange(labelId) {
    var newState = this.state.list.setIn(["items", labelId, "checked"], !this.state.list.getIn(["items", labelId, "checked"]));
    this.setState({
      list:newState
    });
  }
  componentWillMount(){
      console.log('将要被渲染');
  }
  render() {
    console.log(111);
    // var a = this.state.get('error');
    // console.log('aaa',a);
    // console.log('loadin',this.state.get('loading'))
    if (this.state.loading) {
      return <span>Loading...</span>;
    }
    else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    }else{
      var that = this;
        return (
            <div>
                {
                    this.state.list.get("items").map(function(label) {
                        return <div><CheckboxWithLabel label={label} onChange={that.onChange}></CheckboxWithLabel></div>
                    })
                }
            </div>);
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
// React.render(
//   <HelloMessage title="测试属性"/>,
//   document.getElementById('JS-container')
// );
export default HelloMessage;
