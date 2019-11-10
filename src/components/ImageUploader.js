import React, { Component } from 'react';
import './imageUploader.css';

class ImageUploader extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <form method="post" action="#" id="#">
                        <div className="form-group files color">
                            <input type="file" className="form-control" multiple />
                            <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageUploader;