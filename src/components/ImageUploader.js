import React, { Component } from 'react';
import './imageUploader.css';

class ImageUploader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFile: null,
        }
    }

    onChangeHandler(event) {
        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    onUploadClickHandler() {
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
    }


    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <div className="form-group files color">
                            <label>Upload Your File</label>
                            <input type="file" name="file" className="form-control" multiple="" onChange={this.onChangeHandler}/>
                        </div>
                        <button type="button" className="btn btn-success btn-block">Upload</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageUploader;