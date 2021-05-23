import React from "react";
import Gallery from "./Gallery";

// Parent

class GalleryList extends React.Component {
  state = {
    galleryTitlesList: [],
    isGalleryImgShown: false,
  };

  // create method which will be called in componentDidMount()
  fetchAPI = async () => {
    try {
      // fetch gallery titles
      const responseAlbum = await fetch(
        "https://jsonplaceholder.typicode.com/albums?userId=1"
      );
      if (responseAlbum.status !== 200)
        throw Error(`Oops, error! Error code: ${responseAlbum.status}`);

      // convert data to json
      const galleryTitlesData = await responseAlbum.json();

      console.log(galleryTitlesData);

      // set state
      this.setState({
        galleryTitlesList: galleryTitlesData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleShowAlbumPhoto = (galleryPhotosList) => {
    this.setState({
      galleryPhotosList: galleryPhotosList,
      isGalleryImgShown: true,
    });
  };

  componentDidMount() {
    this.fetchAPI();
  }
  render() {
    return (
      <section>
        <h1>Our Galleries</h1>
        {!this.state.isGalleryImgShown ? (
          <ul>
            {this.state.galleryTitlesList.map((photo) => (
              <Gallery
                key={photo.id}
                photoData={photo}
                // passing "handleShowAlbumPhoto" function to Album
                // and showgalleryPhotosList will be a callback
                showgalleryPhotosList={this.handleShowAlbumPhoto}
              />
            ))}
          </ul>
        ) : (
          <div>
            {this.state.galleryPhotosList.map((album) => (
              <div key={album.id}>
                <p>{album.title}</p>
                <img src={album.thumbnailUrl} alt="album" />
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default GalleryList;
