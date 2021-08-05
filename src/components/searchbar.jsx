import React from 'react';

class SearchBar extends React.Component{
    state={term:""}
    onChangeHandler = (event)=>{
        this.setState({term:event.target.value});  
    }
    onFromSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term); 
    }
    render(){
        return(
            <div className='search-bar ui segment'>
                <form onSubmit={this.onFromSubmit} className='ui form'>
                    <div className="field">
                        <label>Search Video</label>
                        <input type="text" value={this.state.term} onChange={this.onChangeHandler}></input>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar