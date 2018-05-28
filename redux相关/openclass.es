"use strict";
import HelloMessage from 'pform.es';
const openClass = {
    init(params) {
      "use strict";
      class HelloReact extends React.Component {
        constructor(props) {
           super(props);
           this.state = {
             ndata:20
           };
           this.handleClick = this.handleClick.bind(this);
        }
        handleClick(data){
          this.setState({
            ndata:10
          })
        }
        componentDidMount() {
          //发起请求
          this.setState({
            ndata:25
          });
        }
        render() {
          return(
            <div>
                <h1>{this.state.ndata}</h1>
                <HelloMessage ndata={this.state.ndata} handleClick={this.handleClick}></HelloMessage>
            </div>
          );
        }
      }
      React.render(
        <HelloReact/>,
        document.getElementById('JS-container')
      );
    }
};
export default openClass;
