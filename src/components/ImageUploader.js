import React, { Component } from 'react';
import axios from 'axios';

import './imageUploader.css';

class ImageUploader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFile: null,
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onUploadClickHandler = this.onUploadClickHandler.bind(this)
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
        axios.post("http://localhost:8000/upload", data, { 
            // receive two parameter endpoint url ,form data 
        })
        .then(res => { 
            // then print response status
            console.log(res.statusText)
        })
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
                        <button type="button" className="btn btn-success btn-block" onClick={this.onUploadClickHandler}>Upload</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageUploader;