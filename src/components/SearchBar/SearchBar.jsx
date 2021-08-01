import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onChangeInput = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitForm(this.state.term);
  };

  render() {
    return (
      <div className="ui  segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="image-search">Videos Search</label>
            <input
              type="text"
              id="image-search"
              value={this.state.term}
              onChange={this.onChangeInput}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
