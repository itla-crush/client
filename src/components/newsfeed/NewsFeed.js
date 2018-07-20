import React, { Component } from 'react';

// Components
import Post from '../../components/post/Post';

// Assets
import './newsfeed.css';

class Newsfeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: null
        }
    }

    render() {
      // this.setState({
        var data = {
          fromUsername: "@username",
          toUsername: "@anonimo",
          photoUrl: null,
          date: null,
          time: null,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend sem a dui rutrum mattis. Nullam vitae massa ullamcorper, sollicitudin mauris quis, scelerisque purus. Curabitur a efficitur nisl, nec porta elit. Nullam a tellus quis nunc porta vulputate. Quisque suscipit, quam sed dapibus pharetra, orci tortor hendrerit lacus, sed blandit quam arcu ut tortor. Mauris nibh justo, molestie ac erat porttitor, volutpat sodales metus.",
          imageUrl: "https://capitol.texas.gov/images/backgrounds/capitolc_1024.jpg",
          displayName: null,
          image: null,
          likes: "1,234",
          comments: [
            {
              uid: '@Username1',
              username: '@Username1',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend sem a dui rutrum mattis.'
            },
            {
              uid: '@Username1',
              username: '@Username2',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend sem a dui rutrum mattis. Nullam vitae massa ullamcorper, sollicitudin mauris quis, scelerisque purus. Curabitur a efficitur nisl, nec porta elit. Nullam a tellus quis nunc porta vulputate.'
            }
          ]
        };
        var datas = [data, data, data];
      // });
      return (
        <div className="NewsFeed">
          <div className="div-content-center">
            {/* {this.state.datas ? (
              this.state.datas.map(post => <Post data={post} />)
            ) : (
              <h1>Cargando publicaciones...</h1>
            )} */}
            {datas.map(data => <Post data={data} />)}
          </div>
        </div>
      );
    }
  }
  
  export default Newsfeed;