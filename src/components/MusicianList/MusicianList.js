import React from "react";
import Album from "./Album";

class MusicianList extends React.Component {
  state = {
    musiciansList: [],
    isAlbumsShown: false,
    albumsList: [],
  };

  fetchAPI = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const musiciansData = await response.json();
    this.setState({
      musiciansList: musiciansData,
    });
    console.log(musiciansData);
  };

  handleShowAlbums = (albumsList) => {
    this.setState({
      albumsList: albumsList,
      isAlbumsShown: true,
    });
  };

  componentDidMount() {
    this.fetchAPI();
  }
  render() {
    return (
      <section>
        <h1>Musicians in Vancouver</h1>
        <div className="list">
          {!this.state.isAlbumsShown ? (
            this.state.musiciansList.map((musician) => (
              <Album
                key={musician.id}
                // id={musician.id}
                name={musician.name}
                showAlbumsList={this.handleShowAlbums}
              />
            ))
          ) : (
            <div>
              {this.state.albumsList.map((album) => (
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
