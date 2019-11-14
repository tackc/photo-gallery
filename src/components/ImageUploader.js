import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import axios from 'axios';

import './imageUploader.css';

class ImageUploader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedFile: null,
            loaded: 0
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onUploadClickHandler = this.onUploadClickHandler.bind(this);
        this.maxSelectFile = this.maxSelectFile.bind(this);
        this.checkMimeType = this.checkMimeType.bind(this);
        this.checkFileSize = this.checkFileSize.bind(this);
    }

    onChangeHandler(event) {
        console.log(event.target.files)
        var files = event.target.files

        if(this.maxSelectFile(event) && this.checkMimeType(event) && this.checkMimeType(event)) {
            this.setState({
                selectedFile: files,
            })
        }
    }

    onUploadClickHandler() {
        const data = new FormData()
        for (let i = 0; i < this.state.selectedFile[i]; i++) {
            data.append('file', this.state.selectedFile[i])
        }
        axios.post("http://localhost:8000/upload", data, { 
            // receive two parameters -  endpoint url & form data
            onUploadProgress: ProgressEvent => {
                this.setState({
                    loaded: (ProgressEvent.loaded / ProgressEvent.total*100)
                })
            }
        })
        .then(res => { 
            // then print response status
            console.log(res.statusText)
        })
    }

    maxSelectFile(event) {
        let files = event.target.files
        if (files.length > 3) {
            const msg = 'Only 3 images can be uploaded at a time'
            event.target.value = null
            console.log(msg)
            return false;
        }
        return true
    }

    checkMimeType(event) {
        let files = event.target.files
        let err = []
        const types = ['image/png', 'image/jpeg']

        for (let i = 0; i < files.length; i++) {
            if (types.every(type => files[i].type !== type)) {
                err += files[i].type + ' is not a supported format\n'
            }
        }

        if (err !== '') {
            event.target.value = null
            console.log(err)
            return false
        }
        return true
    }

    checkFileSize(event) {
        let files = event.target.files
        let size = 12000
        let err = ''

        for(let i = 0; i < files.length; i++) {
            if (files[i].size > size) {
                err += files[i].type + " is too large, please pick a smaller file\n"
            }
        }

        if (err !== '') {
            event.target.value = null
            console.log(err)
            return false
        }

        return true
    }


    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <div className="form-group files color">
                            <label>Upload Your File</label><br/>
                            <input type="file" name="file" className="form-control" multiple onChange={this.onChangeHandler}/>
                        </div>
                        <div className="form-group">
                            <Progress max="100" color="success" value={this.state.loaded}> {Math.round(this.state.loaded, 2)}%</Progress>
                        </div>
                        <button type="button" className="btn btn-success btn-block" onClick={this.onUploadClickHandler}>Upload</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageUploader;