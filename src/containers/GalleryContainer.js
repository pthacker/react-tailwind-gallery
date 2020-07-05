import React, { Component } from "react";
import ImageCard from '../components/ImageCard';
import ImageSearch from '../components/ImageSearch';
import Axios from "axios";

class GalleryContainer extends Component {
  state = {
    images: [],
    isLoading: true,
    searchTerm:''
  };

  componentDidMount() {
    Axios.get(
      `https://pixabay.com/api/?key=17344992-cb5ac885264eafd69169b632c&q=${this.state.searchTerm}&image_type=photo&pretty=true`
    )
      .then((response) => {
        this.setState({
          images: response.data.hits,
          isLoading: false,
        });
        console.log(response.data.hits)
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  }

  handleSearch = (searchText) => {
    Axios.get(
        `https://pixabay.com/api/?key=17344992-cb5ac885264eafd69169b632c&q=${searchText}&image_type=photo&pretty=true`
      )
        .then((response) => {
          this.setState({
            images: response.data.hits,
            isLoading: false,
          });
          console.log(response.data.hits)
        })
        .catch((err) => {
          console.log("error occured", err);
        });

  }

  render() {
    return (
      <div className="container mx-auto">
          <ImageSearch handleSearch={this.handleSearch}/>
            {!this.state.isLoading && this.state.images===0 && <h1 className='text-center'>LOADING...</h1>  }

          {
              this.state.isLoading ? <h1 className='text-center'>LOADING...</h1> :  <div className='grid grid-cols-3 gap-4'>
              {this.state.images.map((singleImage) => {
                    return (<ImageCard
                       key={singleImage.id} 
                       webformatURL={singleImage.webformatURL}
                       views={singleImage.views}
                       downloads={singleImage.downloads}
                       likes={singleImage.likes}
                       tags={singleImage.tags}
                       user={singleImage.user}
                        />) 
          })}</div>
          }
       
      </div>
    );
  }
}

export default GalleryContainer;
