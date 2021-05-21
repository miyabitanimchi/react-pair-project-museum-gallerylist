import React from "react";
import Album from "./Album";

class MusicianList extends React.Component {
  state = {
    musicianData: [],
    albumsTitleList: [],
    isAlbumsShown: false,
    albumsImgList: [],
  };

  fetchAPI = async () => {
    const response1 = await fetch(
      "https://jsonplaceholder.typicode.com/users?id=1"
    );
    const response2 = await fetch(
      "https://jsonplaceholder.typicode.com/albums?userId=1"
    );
    const userData = await response1.json();
    const albumsData = await response2.json();
    this.setState({
      musicianData: userData[0],
      albumsTitleList: albumsData,
    });
    console.log(userData[0]);
    console.log(albumsData);
  };

  handleShowAlbumImg = (albumsImgList) => {
    this.setState({
      albumsImgList: albumsImgList,
      isAlbumsShown: true,
    });
  };

  componentDidMount() {
    this.fetchAPI();
  }
  render() {
    return (
      <section>
        <h1>{this.state.musicianData.name}'s masterpieces</h1>
        <div className="list">
          {!this.state.isAlbumsShown ? (
            this.state.albumsTitleList.map((album) => (
              <Album
                key={album.id}
                // id={album.id}
                name={album.title}
                showAlbumsImgList={this.handleShowAlbumImg}
              />
            ))
          ) : (
            <div>
              {this.state.albumsImgList.map((album) => (
                <div key={album.id}>
                  <p>{album.title}</p>
                  <img src={album.thumbnailUrl} alt="album" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default MusicianList;
