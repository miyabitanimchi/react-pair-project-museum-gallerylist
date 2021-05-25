import React from "react";

// Child

class GalleryPhotos extends React.Component {
  state = {
    showLoadMore: true,
    numberOfImagesToLoad: 6,
    numberOfImages: 0,
  };

  loadImages = () => {
    const imagesToLoad =
      this.state.numberOfImages + this.state.numberOfImagesToLoad;
    const numberOfImages =
      this.props.galleryPhotos.length > imagesToLoad
        ? imagesToLoad
        : this.props.galleryPhotos.length;
    const showLoadMore =
      this.props.galleryPhotos.length > imagesToLoad ? true : false;

    this.setState({
      showLoadMore: showLoadMore,
      numberOfImages: numberOfImages,
    });
  };

  backButton = (e) => {
    e.preventDefault();

    this.props.backButton();
  };

  loadMoreButton = (e) => {
    e.preventDefault();

    this.loadImages();
  };

  componentDidMount() {
    // Scroll to the top
    window.scrollTo(0, 0);

    this.loadImages();
  }

  render() {
    return (
      <>
        <div className="exhibition-container">
          <h1>{this.props.galleryTitle}</h1>

          <h2>Overview</h2>
          <p>
            Donec quis metus sed nisi porta blandit. Suspendisse facilisis risus
            sed nunc molestie, in scelerisque felis mattis. Morbi dictum metus
            quis consectetur accumsan. Praesent a condimentum ligula. Aliquam
            erat volutpat. Nulla et accumsan mauris. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Nullam malesuada quam sit amet
            orci ullamcorper fringilla. Nunc non nunc nec tellus sollicitudin
            cursus. Proin nec nisl eu nulla efficitur tincidunt. Cras laoreet
            sem consequat enim vehicula, sed auctor ligula lobortis.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Cras ut imperdiet lectus, a pretium velit.
            Maecenas sodales, augue vel consectetur blandit, diam arcu tincidunt
            libero, ac rutrum ex purus non urna. Mauris imperdiet orci enim,
            eget lacinia dolor iaculis nec. Donec feugiat, est sed scelerisque
            suscipit, libero massa dignissim dui, at maximus nunc dui in enim.
            Sed velit elit, congue ut accumsan in, consequat eu dolor. Mauris
            maximus massa a massa lacinia, nec varius urna mollis. Praesent
            scelerisque libero vel ante mollis, at congue nunc rutrum. Nunc
            interdum, turpis et egestas fermentum, lectus urna convallis sem, et
            eleifend purus dolor vitae sem. Suspendisse sed lorem sed arcu
            viverra pharetra vel vel lorem.
          </p>
          <p style={{ marginBottom: "25px" }}>
            Sed eget hendrerit dui. Curabitur id hendrerit enim. Aenean luctus
            metus vel velit condimentum mollis. Nulla convallis molestie ligula
            sit amet maximus. Cras vitae porta nisi. Maecenas ut mauris turpis.
            Nullam elementum vulputate pretium. Aenean accumsan urna enim, at
            viverra justo convallis sed. Curabitur quis risus in ex volutpat
            varius vel tincidunt ligula. Sed molestie, metus ac sodales
            suscipit, tellus tellus blandit magna, at varius tellus lectus ac
            urna. Fusce in ullamcorper sapien. Nulla dolor ante, sagittis at
            elementum eu, mollis non erat. Donec quam dolor, condimentum in ante
            quis, elementum placerat ante. Nulla ut dictum augue, a dignissim
            lorem. Quisque congue dictum mollis.
          </p>

          <h2>Gallery</h2>
          <div className="exhibition-photo-container">
            {this.props.galleryPhotos
              .slice(0, this.state.numberOfImages)
              .map((photo) => (
                <div className="exhibition-photo-item" key={photo.id}>
                  <img src={photo.thumbnailUrl} alt={photo.title} />
                  <div className="description">{photo.title}</div>
                </div>
              ))}
          </div>

          {this.state.showLoadMore && (
            <button className="btn-link btn-more" onClick={this.loadImages}>
              load more
            </button>
          )}

          <button className="btn-link btn-back" onClick={this.backButton}>
            back to the main page
          </button>
        </div>
      </>
    );
  }
}

export default GalleryPhotos;
