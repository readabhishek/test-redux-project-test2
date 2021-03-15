
import React from 'react';
import {connect} from "react-redux";

class MoviesComponentLevel1 extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        /*const { store } = this.props;
        store.subscribe(() => {
            this.render();
            //this.forceUpdate()
        })*/
        console.log("All Props", this.props);

        this.props.dispatch({
            type: 'UPDATE_ACCOUNT',
            payload: "3745334512341237"
        });


    }

    render() {
        const { movies, account } = this.props;
        //let movieName = store.getState();
        return (
            <div>
                <h2>1st Movie Name: {movies[0]}</h2>
                <h2>Account: {account}</h2>
            </div>
        );

    }
}

function mapStateToProps(state, ownProps) {
    console.log("Own Props ", ownProps);

    return {
        movies: state.movies,
        account: state.account,
    };
}
const connectedComponent = connect(mapStateToProps)(MoviesComponentLevel1);
export {connectedComponent as MoviesComponentLevel1};