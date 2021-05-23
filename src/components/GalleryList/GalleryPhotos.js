const GalleryPhotos = (props) => {
  const backButton = (e) => {
    e.preventDefault();

    props.backButton();
  };

  return (
    <>
      <button className="btn-link" onClick={backButton}>
        back to the main page
      </button>

      <div className="gallery-container">
        <h2>Gallery: {props.galleryTitle}</h2>
        <div className="gallery-photo-container">
          {props.galleryPhotos.map((photo) => (
            <div className="gallery-photo-item" key={photo.id}>
              <img src={photo.url} alt={photo.title} />
              <div className="gallery-description">
                <p>{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryPhotos;
