import React, { useState, useEffect, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import * as serviceWorker from './serviceWorker';

// ** Import custom components for redux**
import { Provider } from 'react-redux';
import store from './store/index';
import App from "./components/app";

// Import custom Components 

import Default from './components/dashboard/defaultCompo/default';
import Ecommerce from './components/dashboard/ecommerce';
import University from './components/dashboard/university';
import Crypto from './components/dashboard/crypto/crypto-component';
import ServerComponent from './components/dashboard/server/server-component';
import Project from './components/dashboard/project/project';

// widgets
import General from './components/widgets/general';
import Chart from './components/widgets/chart';

//Ui-elements
import Avatar from './components/ui-elements/avatar';
import UIBreadCrumb from './components/ui-elements/uibreadcrumb';
import Grid from './components/ui-elements/grid';
import HelperClass from './components/ui-elements/helperclass';
import List from './components/ui-elements/lists/list';
import Ribbon from './components/ui-elements/ribbon';
import Shadow from './components/ui-elements/shadow';
import Spinner from './components/ui-elements/spinner';
import Statecolor from './components/ui-elements/statecolor';
import Steps from './components/ui-elements/steps';
import TagsandPills from './components/ui-elements/tagsandpills';
import Typography from './components/ui-elements/typography';

//Base
import Accordion from './components/base/accordionComponent/accordion';
import AlertComponent from './components/base/alertComponent/alert';
import CarouselComponent from './components/base/Carousels/carouselComponent';
import CollapseComponent from './components/base/collapseComponent';
import DatepickerComponent from './components/base/datepickerComponent';
import DropdownComponent from './components/base/dropdownComponent';
import ModalComponent from './components/base/modalComponent';
import Pagination from './components/base/pagination';
import PopoverComponent from './components/base/popover/popoverComponent';
import ProgressBar from './components/base/progressBar';
import RatingComponent from './components/base/ratingComponent';
import TabsSet from './components/base/tabs-set';
import TooltipsComponent from './components/base/tooltipsComponent';
import TimePickerWrapper from './components/base/timepickerComponent/timepicker';
import TypeaheadComp from './components/base/typeaheadComponent/typeahead';

// Advance
import DragNDropComp from './components/advance/drag-n-drop/dragNDropComp';
import DropzoneComponent from './components/advance/dropzone';
import ImageCropper from './components/advance/imageCropper';
import Toastr from './components/advance/toastr';
import Carousel from './components/advance/carousel';
import RangeSlider from './components/advance/rangeSlider';
import Scrollable from './components/advance/scrollable';
import StickyNotes from './components/advance/stickyNotes';
import SweetAlert from './components/advance/sweetAlert';
import TourComponent from './components/advance/tourComponent';
import UploadImage from './components/advance/uploadImage';
import FlagIcons from './components/icons/flagIcons';
import FontAwsomeIcon from './components/icons/fontAwsomeIcon';
import IcoIcons from './components/icons/icoIcons';
import ThemifyIcons from './components/icons/themifyIcons';
import FeatherIcons from './components/icons/featherIcons';
import WeatherIcons from './components/icons/weatherIcons';
import DefaultBtn from './components/buttons/default-btn';
import FlatBtn from './components/buttons/flatBtn';
import EdgeBtn from './components/buttons/edgeBtn';
import RaisedBtn from './components/buttons/raisedBtn';
import GroupBtn from './components/buttons/groupBtn';
import ImageGallery from './components/gallery/imageGallery';
import ImageHover from './components/gallery/imageHover';
import ImageWithDesc from './components/gallery/imageWithDesc';
import MesonryGallery from './components/gallery/mesonryGallery';
import FormValidation from './components/forms/form-control/form-validation';
import BaseInput from './components/forms/form-control/baseInput';
import RadioCheckbox from './components/forms/form-control/radio-checkbox';
import InputGroupComp from './components/forms/form-control/inputGroup';
import MegaOptions from './components/forms/form-control/megaOptions';
import FormDefault from './components/forms/formDefault';
import FormWizard from './components/forms/wizard/form-wizard';
import BasicTable from './components/tables/bootstrap/basicTable';
import DataTableComponent from './components/tables/dataTableComponent';
import BasicCards from './components/cards/basicCards';
import CreativeCards from './components/cards/creativeCards';
import TabCard from './components/cards/tabCard';
import DraggingCards from './components/cards/draggingCards';
import Timeline2 from './components/timelines/timeline2';
import Timeline from './components/timelines/timeline';
import GoogleChart from './components/charts/googleChart';
import ChartJs from './components/charts/chartJs';
import ChartistComponent from './components/charts/chartistComponent';
import GoogleMap from './components/map/googleMap';
import LeafletMapComp from './components/map/leafletMap';
import Editor1 from './components/editor/editor1';
import UserProfile from './components/users/userProfile';
import UserEdit from './components/users/userEdit';
import UserCards from './components/users/user-cards';
import Calender1 from './components/calender/calender1';
import Calender2 from './components/calender/calender2';
import BlogDetail from './components/blog/blogDetail';
import BlogSingle from './components/blog/blogSingle';
import BlogPost from './components/blog/blogPost';
import SocialApp from './components/social-app/socialApp';
import CardView from './components/jobSearch/cardView';
import JobList from './components/jobSearch/job-list';
import JobDetail from './components/jobSearch/job-detail';
import JobApply from './components/jobSearch/job-apply';
import LearningList from './components/learning/learning-list';
import LearningDeatil from './components/learning/learning-deatil';
import FaqComponent from './components/faq/faqComponent';
import KnowledgebaseComponent from './components/knowledgebase/knowledgebaseComponent';
import SupportTicket from './components/support-ticket/supportTicket';
import Login from './pages/login';
import LoginWithBgImg from './pages/loginWithBgImg';
import LoginWithVideo from './pages/loginWithVideo';
import Signup from './pages/signup';
import SignupWithImg from './pages/signupWithImg';
import SignupWithVideo from './pages/signupWithVideo';
import UnlockUser from './pages/unlockUser';
import ForgetPwd from './pages/forgetPwd';
import ResetPwd from './pages/resetPwd';
import ComingSoon from './pages/comingsoon';
import ComingSoonImg from './pages/comingsoonImg';
import ComingSoonVideo from './pages/comingsoonVideo';
import Maintenance from './pages/maintenance';
import Error400 from './pages/errors/error400';
import Error401 from './pages/errors/error401';
import Error403 from './pages/errors/error403';
import Error404 from './pages/errors/error404';
import Error500 from './pages/errors/error500';
import Error503 from './pages/errors/error503';

// Import Applications Components
import Todo from './components/applications/todo-app/todo';
import EmailDefault from './components/applications/email-app/emailDefault';
import Chat from './components/applications/chat-app/chat';
import EcommerceApp from './components/applications/ecommerce-app/product';
import AddToCart from './components/applications/ecommerce-app/add-to-cart';
import WishlistComponent from './components/applications/ecommerce-app/wishlist';
import ProductDetail from './components/applications/ecommerce-app/product-detail/product-detail';
import Invoice from './components/applications/ecommerce-app/invoice';
import Checkout from './components/applications/ecommerce-app/checkout';
import Signin from './auth/signin';
import ContactApp from './components/applications/contact-app/contactApp';
import NewUser from './components/applications/contact-app/new-user';
import EditUser from './components/applications/contact-app/edit-user';
import ProductList from './components/applications/ecommerce-app/product-list';
import Payment from './components/applications/ecommerce-app/payment';
import History from './components/applications/ecommerce-app/history';

// search page
import Searchpage from './components/search/searchpage';

// sample page
import Samplepage from './components/sample/samplepage';

// Pricing
import Pricing from './components/price/pricing';
import StylingTable from './components/tables/bootstrap/stylingTable';
import BorderTable from './components/tables/bootstrap/borderTable';
import SizingTable from './components/tables/bootstrap/sizingTable';
import MesonryDesc from './components/gallery/mesonryDesc';

//Own Pages
import Dashboard from './pages/dashboard';
import PageSetting from './pages/pageSetting';

//firebase Auth
function Root() {
    const abortController = new window.AbortController();
    // Change this to actual user token
    const [currentUser, setCurrentUser] = useState(false);

    useEffect(() => {
        const themeColor = localStorage.getItem('theme-color')
        const layout = localStorage.getItem('layout_version')
        // Change this to actual user token
        // app.auth().onAuthStateChanged(setCurrentUser);
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/${themeColor}.css`);
        document.body.classList.add(layout);

        return function cleanup() {
            abortController.abort();
        }

    }, []);

    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter basename={`/`}>
                    <ScrollContext>
                        <Switch>
                            <Route path={`${process.env.PUBLIC_URL}/login`} component={Signin} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Login} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/loginWithBgImg`} component={LoginWithBgImg} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/loginWithVideo`} component={LoginWithVideo} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/signup`} component={Signup} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/signupWithImg`} component={SignupWithImg} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/signupWithVideo`} component={SignupWithVideo} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/unlockUser`} component={UnlockUser} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/forgetPwd`} component={ForgetPwd} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/resetPwd`} component={ResetPwd} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/comingsoon`} component={ComingSoon} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/comingsoonImg`} component={ComingSoonImg} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/comingsoonVideo`} component={ComingSoonVideo} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/maintenance`} component={Maintenance} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error400`} component={Error400} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error401`} component={Error401} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error403`} component={Error403} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error404`} component={Error404} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error500`} component={Error500} />
                            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error503`} component={Error503} />
                            {currentUser !== null ?
                                <Fragment>
                                    <App>
                                        {/* dashboard menu */}
                                        <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => {
                                            return (<Redirect to={`${process.env.PUBLIC_URL}/login`} />)
                                        }} />

                                        {/* Segosarem */}
                                        <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
                                        <Route path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />
                                        <Route path={`${process.env.PUBLIC_URL}/pageSetting`} component={PageSetting} />
                                    </App>
                                </Fragment>
                                :
                                <Redirect to={`${process.env.PUBLIC_URL}/login`} />
                            }
                        </Switch>
                    </ScrollContext>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();