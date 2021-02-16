import React,{ Component } from "react";

class Feed extends Component {
    render() {
        return (
            <div className="content">
            <div className="page">
              <img className="content_image"/>
              <div className="comment"></div>
              <div className="leaveComment"></div>
            </div>
          </div>
        )
    }
}

export default Feed;