
import React from "react";

function AddPost (props) {

        return (
            <div>
                <button onClick={props.addPostHandler}> Add Post</button>
            </div>
        )
}
export default AddPost