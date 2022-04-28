import React from 'react';


//class based component
class SearchBar extends React.Component {
//new method for changing


//uncontrolled
// onInputChange(event){
//   console.log(event.target.value)
// }


state = {term : ' '};

onFormSubmit = (event) => {
  // using arrow Function
  event.preventDefault(); //stopping to reload
  
  this.props.onSubmit (this.state.term);
}

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
            <div className='field'>
                <label >Image Search</label>
                {/* <input type="text" onChange={this.onInputChange}/>   */}
               
                <input type="text" 
                value={this.state.term} 
                onChange={event => this.setState({term : event.target.value})}
                />  
                
                {/* callBack    Function */}
                {/* alternative */}
                {/* <input type="text" onChange={(event) => console.log(event.target.value)}/>  */}
            </div>
        </form>
      </div>
    );
  }
}

//alternative


export default SearchBar;
