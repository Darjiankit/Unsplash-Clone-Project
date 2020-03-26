import React from "react";
import unsplash from "../src/api/unsplash";
import SearchBar from "./components/SearchBar";
import Imagelist from "./components/Imagelist";

class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({
      images: response.data.results
    });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: 30 }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Imagelist images={this.state.images} />
      </div>
    );
  }
}
export default App;
