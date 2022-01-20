
import React, {Component} from "react";

export default class AddPost extends Component {
    render () {
        return (
            <div>
                <button onClick={this.props.addPostHandler}> Add Post</button>
            </div>
        )
    }
}