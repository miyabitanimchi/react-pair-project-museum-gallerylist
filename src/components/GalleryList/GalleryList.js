import React from "react";
import Gallery from "./Gallery";
import GalleryPhotos from "./GalleryPhotos";

// Parent

class GalleryList extends React.Component {
  state = {
    galleryTitlesList: [],
    isGalleryPhotosListShown: false,
    galleryId: "",
    galleryTitle: "",
    galleryPhotosList: [],
  };

  // fetch API which will be called in componentDidMount()
  fetchAPI = async () => {
    try {
      // fetch gallery titles ... only get 10 albums with userId 1
      const responseGalleryTitle = await fetch(
        "https://jsonplaceholder.typicode.com/albums?userId=1"
      );
      if (responseGalleryTitle.status !== 200)
        throw Error(`Oops, error! Error code: ${responseGalleryTitle.status}`);

      const galleryTitlesData = await responseGalleryTitle.json();

      // set state
      this.setState({
        galleryTitlesList: galleryTitlesData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // This function is passed to Gallery.js as a props named "showGalleryPhotosList".
  // when "view details" is clicked, the onclick showGalleryPhotos is fired
  // and fetch the data of "photos".
  // Finally "showGalleryPhotosList" is called in "showGalleryPhotos", and pass the arguments
  // are passed to (galleryId, galleryTitle, galleryPhotosList) ,and set those values with setState()
  handleShowGalleryPhotos = (galleryId, galleryTitle, galleryPhotosList) => {
    this.setState({
      // these will be passed to "GalleryPhotos.js"
      galleryId: galleryId,
      galleryTitle: galleryTitle,
      galleryPhotosList: galleryPhotosList,
      isGalleryPhotosListShown: true,
    });
  };

  handleBackButton = () => {
    this.setState({
      isGalleryPhotosListShown: false,
    });
  };

  componentDidMount() {
    this.fetchAPI();
  }
  render() {
    return (
      <>
        <section>
          <div className="main-content">
            {!this.state.isGalleryPhotosListShown ? (
              <>
                <h1>Welcome to Museum of Canada</h1>
                <h2>Featured Exhibitions</h2>
                <ul>
                  {this.state.galleryTitlesList.map((photo) => (
                    <Gallery
                      key={photo.id}
                      photoData={photo}
                      // passing "handleShowGalleryPhotos" function to Album
                      // and showGalleryPhotosList will be a callback
                      showGalleryPhotosList={this.handleShowGalleryPhotos}
                    />
                  ))}
                </ul>
              </>
            ) : (
              <GalleryPhotos
                galleryId={this.state.galleryId}
                galleryTitle={this.state.galleryTitle}
                galleryPhotos={this.state.galleryPhotosList}
                backButton={this.handleBackButton}
              />
            )}
          </div>
        </section>
      </>
    );
  }
}

export default GalleryList;
