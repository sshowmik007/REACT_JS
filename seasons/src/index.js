import React from 'react' ;
import  ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    //react says we have to use render
    //constructor()


    // constructor(props){
    //     super(props);
    //     //this is the only time we do dirct assignment to this.state
    //     this.state={lat: null, errorMessage: ''};
        
    // }
    

    state={lat: null, errorMessage: ''};  //constructing a func
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {  //callback
                // setState
                this.setState({lat: position.coords.latitude});
            },
            err => {
                this.setState({errorMessage: err.message})
            }
        );
    }

        render(){
            if(this.state.errorMessage && !this.state.lat){
                return <div>Error: { this.state.errorMessage }</div>;
            }
            if(!this.state.errorMessage && this.state.lat){
                // return <div>Latitude: { this.state.lat }</div>;
                return <SeasonDisplay lat={this.state.lat} />
            }

            return <div>Loading!</div>
        };


};

ReactDOM.render( <App />, document.querySelector('#root'))
