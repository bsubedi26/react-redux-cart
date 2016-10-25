import React from 'react';
import { Link } from 'react-router';
class FirstPage extends React.Component {
  render() {
    return (

      <div>
      
        <div className="" id="index-banner">
          <div className="container card-panel blue-grey lighten-4">
            <br /><br />
            <h1 className="header center">Main Header</h1>
            <div className="row center">
              <h5 className="header col s12 light">Click below to learn about features and more!</h5>
            </div>
            <div className="row center">
              <Link to="/signup" className="btn-large waves-effect waves-light blue-grey lighten-1">Get Started</Link>
            </div>
            <br /><br />
          </div>
        </div>
        <div className="container">
          <div className="section">
            {/*   Icon Section   */}
            <div className="row">
              
              <div className="col s12 m4">

              <div className="card-panel">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="mdi-image-flash-on" /></h2>
                  <h5 className="center">Lorem Ipsum</h5>
                  <p className="light">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                  </p>
                </div>
              </div>
              </div>

              <div className="col s12 m4">

              <div className="card-panel">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="mdi-social-group" /></h2>
                  <h5 className="center">User Experience Focused</h5>
                  <p className="light">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                  </p>
                </div>
              </div>
              </div>

              <div className="col s12 m4">

              <div className="card-panel">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="mdi-action-settings" /></h2>
                  <h5 className="center">Easy to work with</h5>
                  <p className="light">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
          <br /><br />
          <div className="section">
          </div>
        </div>
      </div>
    );
  }
};

export default FirstPage;