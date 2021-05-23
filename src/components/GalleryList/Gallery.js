import React from "react";

// Child

class Gallery extends React.Component {
  state = {
    galleryImg: "https://via.placeholder.com/150/92c952",
  };
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
      this.props.showgalleryPhotosList(albumsData);
    } catch (error) {
      console.log(error);
    }
  };

  getGalleryImg = async (albumId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    );
    const photosData = await response.json();
    const randomIndex = Math.floor(Math.random() * photosData.length);
    this.setState({
      galleryImg: photosData[randomIndex].url,
    });
  };

  componentDidMount() {
    this.getGalleryImg(this.props.photoData.id);
  }

  render() {
    return (
      <>
        {/* <li>ID: {this.props.id}</li> */}
        <li className="list">
          <div className="galleryDescriptionWrap">
            <h2 className="galleryTitle">{this.props.photoData.title}</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              ullam, quaerat veritatis accusantium dolorum soluta, blanditiis,
              facilis iste nihil magni modi. Sunt maiores quae atque ad modi
              ducimus iusto enim?
            </p>
            <button
              className="btn-link"
              onClick={(e) => this.showAlbumsPhotos(e, this.props.photoData.id)}
            >
              View This Gallary
            </button>
          </div>
          {/* <div className="imgWrap"> */}
          <img className="topGalleryImg" src={this.state.galleryImg} alt="" />
          {/* </div> */}
        </li>
      </>
    );
  }
}

export default Gallery;
