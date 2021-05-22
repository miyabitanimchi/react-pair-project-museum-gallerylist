import React from "react";

class Album extends React.Component {
  showAlbumsPhotos = async (e, albumId) => {
    e.preventDefault();
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    );

    const albumsData = await response.json();
    console.log(albumsData);
    this.props.showAlbumsPhotoList(albumsData);
  };

  render() {
    return (
      <ul>
        {/* <li>ID: {this.props.id}</li> */}
        <li>
          <button
            className="btn-link"
            onClick={(e) => this.showAlbumsPhotos(e, this.props.albumData.id)}
          >
            {this.props.albumData.title}
          </button>
        </li>
      </ul>
    );
  }
}

export default Album;
