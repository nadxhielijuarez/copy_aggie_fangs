import React from 'react';

class Search extends React.Component{
    state = {title: " "};
    onSearchChanged = event => {
        const _title = event.target.value;
        this.setState({title: _title});
    };
    onSubmit = event => {
        event.preventDefault();
        this.props.onSearch(this.state.title);
    };
    render(){
        return(
            <>
            <form onSubmit={this.onSubmit} className="search-form">
                <div className="form-controls">
                    <label>Search</label>
                    <input
                    id="video-search"
                    type="text"
                    value={this.state.title}
                    onChange={this.onSearchChanged}
                    placeholder="Enter Search Keyword"/>
                </div>
            </form>
            </>
        )
    }
}

export default Search;