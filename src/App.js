import React from 'react';
import {MoviesComponentLevel1} from './components/MoviesComponentLevel1'
import {connect} from 'react-redux';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.props.dispatch({
      type: 'ADD_MOVIES',
      payload: "Superman"
    });

    /*this.store.subscribe(() => {
      this.forceUpdate(); // Just used for simplicity, shouldn't be used in ideal situation.
    })*/

  }

  handleClick(e) {
    console.log("Clicked");
    this.props.dispatch({
      type: 'CHANGE_MOVIES',
      payload: ["Thor", "Justice League", "WonderWoman", "SuperGirl", "Flash"]
    })
    //console.log("State: ", this.store.getState())
  }

  render() {
    return (
        <div>
          <MoviesComponentLevel1 testProps={"TestProps"}/>
          <button id='btn' onClick={(e) => this.handleClick(e)}>Click Me</button>
        </div>
    );
  }
}



function mapStateToProps(state) {
  return state;
}
const connectedComponent = connect(mapStateToProps)(App);
export {connectedComponent as App};


