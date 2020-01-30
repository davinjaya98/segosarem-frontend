import React, { Fragment ,useState } from 'react';
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

const PhotosTab = () => {
    const [photoIndex, setphotoIndex] = useState(0);
        const [isOpen, setisOpen] = useState(false);
    const clickImg = () => {
        setphotoIndex(0)
        setisOpen({isOpen:true})
    }
    return (
        <Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="my-gallery card-body row gallery-with-description">
                            <figure className="col-xl-3 col-sm-6">
                                <img
                                    src={smallImages[0]}
                                    alt="Gallery"
                                    className="img-thumbnail"
                                    onClick={clickImg}
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
        </Fragment>
    );
};

export default PhotosTab;