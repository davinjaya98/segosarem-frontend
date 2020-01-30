import React, { Component } from 'react';
import Breadcrumb from '../common/breadcrumb'
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';

const images = [
    require('../../assets/images/big-lightgallry/013.jpg'),
    require('../../assets/images/big-lightgallry/015.jpg'),
    require('../../assets/images/big-lightgallry/014.jpg'),
    require('../../assets/images/big-lightgallry/016.jpg'),
    require('../../assets/images/big-lightgallry/01.jpg'),
    require('../../assets/images/big-lightgallry/04.jpg'),
    require('../../assets/images/big-lightgallry/05.jpg'),
    require('../../assets/images/big-lightgallry/06.jpg'),
    require('../../assets/images/big-lightgallry/07.jpg'),
    require('../../assets/images/big-lightgallry/08.jpg'),
    require('../../assets/images/big-lightgallry/07.jpg'),
    require('../../assets/images/big-lightgallry/08.jpg'),
];

const smallImages = [
    require('../../assets/images/lightgallry/013.jpg'),
    require('../../assets/images/lightgallry/015.jpg'),
    require('../../assets/images/lightgallry/014.jpg'),
    require('../../assets/images/lightgallry/016.jpg'),
    require('../../assets/images/lightgallry/01.jpg'),
    require('../../assets/images/lightgallry/04.jpg'),
    require('../../assets/images/lightgallry/05.jpg'),
    require('../../assets/images/lightgallry/06.jpg'),
    require('../../assets/images/lightgallry/07.jpg'),
    require('../../assets/images/lightgallry/08.jpg'),
    require('../../assets/images/lightgallry/07.jpg'),
    require('../../assets/images/lightgallry/08.jpg'),
];


class ImageWithDesc extends Component {

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }


    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <div>
                {/*Container-fluid starts*/}
                <Breadcrumb title="Gallery grid with description" parent="Gallery" />
                {/*Container-fluid Ends*/}

                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>IMAGE GALLERY</h5>
                                </div>
                                <div className="my-gallery card-body row gallery-with-description">
                                    <figure className="col-xl-3 col-sm-6">
                                        <img
                                            src={smallImages[0]}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                this.setState({ photoIndex: 0, isOpen: true })
                                            }
                                        />
                                        <div className="caption">
                                            <h4>Portfolio Title</h4>
                                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                        </div>
                                    </figure>
                                    <figure className="col-xl-3 col-sm-6">
                                        <img
                                            src={smallImages[1]}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                this.setState({ photoIndex: 1, isOpen: true })
                                            }
                                        />
                                        <div className="caption">
                                            <h4>Portfolio Title</h4>
                                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                        </div>
                                    </figure>
                                    <figure className="col-xl-3 col-sm-6">
                                        <img
                                            src={smallImages[2]}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                this.setState({ photoIndex: 2, isOpen: true })
                                            }
                                        />
                                        <div className="caption">
                                            <h4>Portfolio Title</h4>
                                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                        </div>
                                    </figure>
                                    <figure className="col-xl-3 col-sm-6">
                                        <img
                                            src={smallImages[3]}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                this.setState({ photoIndex: 3, isOpen: true })
                                            }
                                        />
                                        <div className="caption">
                                            <h4>Portfolio Title</h4>
                                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                        </div>
                                    </figure>
                                    <figure className="col-xl-3 col-sm-6">
                                        <img
                                            src={smallImages[4]}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                this.setState({ photoIndex: 4, isOpen: true })
                                            }
                                        />
                                        <div className="caption">
                                            <h4>Portfolio Title</h4>
                                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                        </div>
                                    </figure>
                                    <figure className="col-xl-3 col-sm-6">
                                        <img
                                            src={smallImages[5]}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                this.setState({ photoIndex: 5, isOpen: true })
                                            }
                                        />
                                        <div className="caption">
                                            <h4>Portfolio Title</h4>
                                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                        </div>
                                    </figure>
                                    <figure className="col-xl-3 col-sm-6">
                                        <img
                                            src={smallImages[6]}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                this.setState({ photoIndex: 6, isOpen: true })
                                            }
                                        />
                                        <div className="caption">
                                            <h4>Portfolio Title</h4>
                                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                        </div>
                                    </figure>
                                    <figure className="col-xl-3 col-sm-6">
                                        <img
                                            src={smallImages[7]}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                this.setState({ photoIndex: 7, isOpen: true })
                                            }
                                        />
                                        <div className="caption">
                                            <h4>Portfolio Title</h4>
                                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                        </div>
                                    </figure>
                                    <figure className="col-xl-3 col-sm-6">
                                        <img
                                            src={smallImages[8]}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                this.setState({ photoIndex: 8, isOpen: true })
                                            }
                                        />
                                        <div className="caption">
                                            <h4>Portfolio Title</h4>
                                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                        </div>
                                    </figure>
                                    <figure className="col-xl-3 col-sm-6">
                                        <img
                                            src={smallImages[9]}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                this.setState({ photoIndex: 9, isOpen: true })
                                            }
                                        />
                                        <div className="caption">
                                            <h4>Portfolio Title</h4>
                                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                        </div>
                                    </figure>
                                    <figure className="col-xl-3 col-sm-6">
                                        <img
                                            src={smallImages[10]}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                this.setState({ photoIndex: 10, isOpen: true })
                                            }
                                        />
                                        <div className="caption">
                                            <h4>Portfolio Title</h4>
                                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                        </div>
                                    </figure>
                                    <figure className="col-xl-3 col-sm-6">
                                        <img
                                            src={smallImages[11]}
                                            alt="Gallery"
                                            className="img-thumbnail"
                                            onClick={() =>
                                                this.setState({ photoIndex: 11, isOpen: true })
                                            }
                                        />
                                        <div className="caption">
                                            <h4>Portfolio Title</h4>
                                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        imageTitle={photoIndex + 1 + "/" + images.length}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

export default ImageWithDesc;