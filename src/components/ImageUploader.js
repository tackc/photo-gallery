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
                            <label>Upload Your File </label>
                            <input type="file" className="form-control" multiple />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageUploader;