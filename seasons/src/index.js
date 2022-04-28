import React from 'react' ;
import  ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  
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


    //helper method

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: { this.state.errorMessage }</div>;
        }
        if(!this.state.errorMessage && this.state.lat){
            // return <div>Latitude: { this.state.lat }</div>;
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="please accept location request"/>
    }



        render(){
            return(
                <div className="border red">
                    {this.renderContent()}
                </div>
            );
        };


};

ReactDOM.render( <App />, document.querySelector('#root'))
