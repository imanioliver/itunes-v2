import React, { Component } from 'react';


export default class SearchForm extends Component{
constructor(props){
    super(props);
    this.state={
        searchInput: ''

    };
    handleSearchChange(event) {
        this.setState({
         searchInput: event.target.value
        })
    };

    searchApi = (event) =>  {
        event.preventDefault();
        this.setState

    }

}
    render(){
        return(
            <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group row">
                    <label htmlFor="lgFormGroupInput" className="col-sm-2 col-form-label col-form-label-sm">User Name: </label>
                    <div className="col-sm-10">
                      <input type="text"  onChange={this.handleSearchChange} className="form-control form-control-lg" id="smFormGroupInput" placeholder="ex. Imani"/>
                    </div>
            </div>

            </form>
        )
    }
}
