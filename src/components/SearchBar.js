import React from "react";
import "./ImageList.css";
class SearchBar extends React.Component {
  state = {
    term: ""
  };

  apikey = "02d6d04173538abd66e152da377e602d8e3bad0a0278886709c3ac3714581556";

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment " style={{ marginTop: 10 }}>
        <form className="ui form bg-gradient-info" onSubmit={this.onFormSubmit}>
          <div className="ui field jumbotron bgcolor">
            <label className="font-italic text-white" htmlFor="text">
              Image Search
            </label>
            <input
              value={this.state.term}
              type="text"
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
