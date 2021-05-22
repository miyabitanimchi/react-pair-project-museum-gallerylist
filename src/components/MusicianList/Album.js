import React from "react";

// Child

class Album extends React.Component {
  showAlbumsPhotos = async (e, albumId) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
      );

      if (response.status !== 200)
        throw Error(`Oops, error! Error code: ${response.status}`);

      const albumsData = await response.json();
      //
      this.props.showAlbumsPhotoList(albumsData);
    } catch (error) {
      console.log(error);
    }
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
