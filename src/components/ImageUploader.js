import React, { Component } from 'react';
import './imageUploader.css';

class ImageUploader extends Component {
    onChangeHandler(event) {
        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
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
                        <button type="button" className="btn btn-secondary">Upload</button>
                    </div>
                </div>
            </div>

            // <div className="container">
            //     <div className="row">
            //         <div className="col-md-6">
            //         <form method="post" action="#" id="#">
            //             <div className="form-group files color">
            //                 <input type="file" name="file" multiple="" onChange={this.onChangeHandler}/>
            //                 <button type="button" className="btn btn-success btn-block" onClick={this.onUploadClickHandler}>Upload</button>
            //             </div>
            //         </form>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default ImageUploader;