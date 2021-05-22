import React from "react";
import Album from "./Album";

// Parent

class MusicianList extends React.Component {
  state = {
    musicianData: [],
    albumsTitleList: [],
    isAlbumsShown: false,
    albumsPhotoList: [],
  };

  // create method which will be called in componentDidMount()
  fetchAPI = async () => {
    try {
      // fetch one of users
      const responseUser = await fetch(
        "https://jsonplaceholder.typicode.com/users?id=1"
      );
      // fetch albums
      const responseAlbum = await fetch(
        "https://jsonplaceholder.typicode.com/albums?userId=1"
      );
      if (responseUser.status !== 200)
        throw Error(`Oops, error! Error code: ${responseUser.status}`);
      if (responseAlbum.status !== 200)
        throw Error(`Oops, error! Error code: ${responseAlbum.status}`);

      const userData = await responseUser.json();
      const albumsData = await responseAlbum.json();
      // set state
      this.setState({
        musicianData: userData[0],
        albumsTitleList: albumsData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleShowAlbumPhoto = (albumsPhotoList) => {
    this.setState({
      albumsPhotoList: albumsPhotoList,
      isAlbumsShown: true,
    });
  };

  componentDidMount() {
    this.fetchAPI();
  }
  render() {
    return (
      <>
        <h1>{this.state.musicianData.name}'s masterpieces</h1>
        <section>
          <div className="list">
            {!this.state.isAlbumsShown ? (
              this.state.albumsTitleList.map((album) => (
                <Album
                  key={album.id}
                  albumData={album}
                  // passing "handleShowAlbumPhoto" function to Album
                  // and showAlbumsPhotoList will be a callback
                  showAlbumsPhotoList={this.handleShowAlbumPhoto}
                />
              ))
            ) : (
              <div>
                {this.state.albumsPhotoList.map((album) => (
                  <div key={album.id}>
                    <p>{album.title}</p>
                    <img src={album.thumbnailUrl} alt="album" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
        <footer>
          <span>&copy; 2021 Carlos & Miyabi</span>
        </footer>
      </>
    );
  }
}

export default MusicianList;
