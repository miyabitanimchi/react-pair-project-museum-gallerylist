import React from "react";

class Album extends React.Component {
  showAlbums = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=5"
    );

    const albumsData = await response.json();
    console.log("hello");
    console.log(albumsData);
    this.props.showAlbumsImgList(albumsData);
    console.log();
  };

  render() {
    return (
      <ul>
        {/* <li>ID: {this.props.id}</li> */}
        <li>Album Title: {this.props.name}</li>
        <li>
          <button onClick={this.showAlbums}>
            View {this.props.name}'s album
          </button>
        </li>
      </ul>
    );
  }
}

export default Album;
