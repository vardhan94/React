import React from "react";
import Main from "./components/Main";
import { BrowserRouter} from "react-router-dom";

class App extends React.Component {




  render() {
    return (
      <BrowserRouter>
      <div>
        {/* <h1>Welcome to ReactJS</h1> */}
        {/* <Home value={"Select the Link"} />
        <OrderDetail order={this.state.order} customer={this.props.customer}/> */}
           <Main/>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
