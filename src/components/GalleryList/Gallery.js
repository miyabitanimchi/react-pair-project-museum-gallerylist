import React from "react";

// Child

class Gallery extends React.Component {
  state = {
    galleryImg: "https://via.placeholder.com/150/92c952",
  };
  showGalleryPhotos = async (e, photoData) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${photoData.id}`
      );
      console.log(photoData.id);

      if (response.status !== 200)
        throw Error(`Oops, error! Error code: ${response.status}`);

      // 50 photos
      const galleryData = await response.json();

      this.props.showGalleryPhotosList(
        photoData.id,
        photoData.title,
        galleryData
      );
    } catch (error) {
      console.log(error);
    }
  };

  // get 1 random image from 50 from the id 1, 2, ...10
  getGalleryImg = async (albumId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    );
    // 50 photos
    const photosData = await response.json();

    // get index between 0 and 49
    const randomIndex = Math.floor(Math.random() * photosData.length);
    this.setState({
      galleryImg: photosData[randomIndex].url,
    });
  };

  componentWillMount() {
    // Scroll to the top
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    // photoData.id ... 1 - 10
    this.getGalleryImg(this.props.photoData.id);
  }

  render() {
    return (
      <>
        <li className="list">
          <div className="gallery-description-wrap">
            <h2 className="gallery-title">{this.props.photoData.title}</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              ullam, quaerat veritatis accusantium dolorum soluta, blanditiis,
              facilis iste nihil magni modi. Sunt maiores quae atque ad modi
              ducimus iusto enim?
            </p>
            <button
              className="btn-link"
              onClick={(e) => this.showGalleryPhotos(e, this.props.photoData)}
            >
              view details
            </button>
          </div>
          <img
            className="top-gallery-img"
            src={this.state.galleryImg}
            alt={this.props.photoData.title}
          />
        </li>
      </>
    );
  }
}

export default Gallery;
