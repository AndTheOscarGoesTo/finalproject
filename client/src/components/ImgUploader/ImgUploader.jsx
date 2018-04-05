import React, {Fragment, Component} from "react";
import MyStyles from "./ImgUploader.scss";
// import ImagesUploader from "react-images-uploader";
// import "./UploaderStyle.css";
import DropzoneS3Uploader from 'react-dropzone-s3-uploader'

const divStyle = {
    backgroundColor: 'blue',
    color: "white"
  };

class ImgUploader extends Component{
    constructor(props){
        super(props);

    }

    handleFinishedUpload(info) {
        console.log('File uploaded with filename', info.filename)
        console.log('Access it on s3 at', info.fileUrl)
      }

    render(){
        const uploadOptions = {
            // server: 'http://localhost:3000',
            signingUrlQueryParams: {uploadType: 'avatar'},
        }

        const s3Url = 'http://myvidyabucket.s3.us-east-2.amazonaws.com/'

        return (
            <div className={MyStyles.mainDiv}>
                <h1>Sup World</h1>

                {/* <ImagesUploader
                // className={MyStyles.imgUploader}
				url="http://localhost:9090/multiple"
                optimisticPreviews
                multiple={false}
				onLoadEnd={(err) => {
					if (err) {
						console.error(err);
					}
				}}
				label="Upload multiple images"
                /> */}
                
                <DropzoneS3Uploader
                    onFinish={this.handleFinishedUpload}
                    s3Url={s3Url}
                    maxSize={1024 * 1024 * 5}
                    // upload={uploadOptions}
                />
            </div>
        );
    }
}

export default ImgUploader;