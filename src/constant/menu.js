import {
    Home,
    Box,
    DollarSign,
    UserPlus,
    Users,
    Chrome,
    Settings,
    Airplay,
    Slack,
    FolderPlus,
    File,
    Command, Cloud, Book, FileText, Server, Image, Sliders, Map, GitPullRequest, Calendar, Edit, Mail, MessageSquare, UserCheck, Layers, HelpCircle, Database, Headphones, Mic, ShoppingBag, Search, AlertOctagon, Lock, Briefcase, BarChart
} from 'react-feather';

export const MENUITEMS = [
    {
        title: 'Dashboard', path: '/dashboard', icon: Home, type: 'link', active: false
    },
    {
        title: 'Page Setting', path: '/dashboard', icon: Home, type: 'link', active: false
    },
    {
        title: 'Without Sublink', path: '/dashboard', icon: Home, type: 'link', active: false
    },
    {
        title: 'With Sublink', icon: Home, type: 'sub', badgeType: 'primary', active: false, children: [
            { path: '/dashboard', title: 'Sublink', type: 'link' }
        ]
    },
    // {
    //     title: 'Widgets', icon: Airplay, type: 'sub', active: false, children: [
    //         { path: '/widgets/general', title: 'General', type: 'link' },
    //         { path: '/widgets/chart', title: 'Chart', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'UI-Elements', icon: Slack, type: 'sub', active: false, children: [
    //         { path: '/ui-element/avatar', title: 'Avatars', type: 'link' },
    //         { path: '/ui-element/uibreadcrumb', title: 'Breadcrumb ', type: 'link' },
    //         { path: '/ui-element/grid', title: 'Grid', type: 'link' },
    //         { path: '/ui-element/helperclass', title: 'Helper-Classes  ', type: 'link' },
    //         { path: '/ui-element/list', title: 'List', type: 'link' },
    //         { path: '/ui-element/ribbon', title: 'Ribbons', type: 'link' },
    //         { path: '/ui-element/shadow', title: 'Shadow', type: 'link' },
    //         { path: '/ui-element/spinner', title: 'Spinners', type: 'link' },
    //         { path: '/ui-element/statecolor', title: 'State-color', type: 'link' },
    //         { path: '/ui-element/steps', title: 'Steps', type: 'link' },
    //         { path: '/ui-element/tagsandpills', title: 'Tag & Pills', type: 'link' },
    //         { path: '/ui-element/typography', title: 'Typography', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Base', icon: Box, type: 'sub', active: false, children: [
    //         { path: '/base/accordion', title: 'Accordion', type: 'link' },
    //         { path: '/base/alert', title: 'Alert', type: 'link' },
    //         { path: '/base/carouselComponent', title: 'Carousel', type: 'link' },
    //         { path: '/base/collapseComponent', title: 'Collapse ', type: 'link' },
    //         { path: '/base/datepickerComponent', title: 'Datepicker ', type: 'link' },
    //         { path: '/base/dropdownComponent', title: 'Dropdown ', type: 'link' },
    //         { path: '/base/modalComponent', title: 'Modal', type: 'link' },
    //         { path: '/base/pagination', title: 'Pagination', type: 'link' },
    //         { path: '/base/popover/popoverComponent', title: 'Popover', type: 'link' },
    //         { path: '/base/progressBar', title: 'Progressbar', type: 'link' },
    //         { path: '/base/ratingComponent', title: 'Rating', type: 'link' },
    //         { path: '/base/tabs-set', title: 'Tabset', type: 'link' },
    //         { path: '/base/timepicker', title: 'Timepicker', type: 'link' },
    //         { path: '/base/tooltipsComponent', title: 'Tooltip', type: 'link' },
    //         { path: '/base/typeahead', title: 'Typeahead', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Advance', icon: FolderPlus, type: 'sub', active: false, children: [
    //         { path: '/advance/dragNDropComp', title: 'Drag and Drop ', type: 'link' },
    //         { path: '/advance/dropzone', title: 'Dropzone', type: 'link' },
    //         { path: '/advance/imageCropper', title: 'Image Cropper ', type: 'link' },
    //         { path: '/advance/toastr', title: 'Toastr', type: 'link' },
    //         { path: '/advance/carousel', title: 'Slick Slider', type: 'link' },
    //         { path: '/advance/rangeSlider', title: 'Range Slider ', type: 'link' },
    //         { path: '/advance/scrollable', title: 'Scrollable ', type: 'link' },
    //         { path: '/advance/stickyNotes', title: 'Sticky ', type: 'link' },
    //         { path: '/advance/sweetAlert', title: 'SweetAlert ', type: 'link' },
    //         { path: '/advance/tourComponent', title: 'Tour ', type: 'link' },
    //         { path: '/advance/uploadImage', title: 'Upload ', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Icons', icon: Command, type: 'sub', active: false, children: [
    //         { path: '/icons/flagIcons', title: 'Flag Icon', type: 'link' },
    //         { path: '/icons/fontAwsomeIcon', title: 'Fontawesome Icon ', type: 'link' },
    //         { path: '/icons/icoIcons', title: 'Ico Icon ', type: 'link' },
    //         { path: '/icons/themifyIcons', title: 'Themify Icon ', type: 'link' },
    //         { path: '/icons/featherIcons', title: 'Feather Icon ', type: 'link' },
    //         { path: '/icons/weatherIcons', title: 'Whether Icon ', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Buttons', icon: Cloud, type: 'sub', active: false, children: [
    //         { path: '/buttons/default-btn', title: 'Default Style ', type: 'link' },
    //         { path: '/buttons/flatBtn', title: 'Flat Style', type: 'link' },
    //         { path: '/buttons/edgeBtn', title: 'Edge Style', type: 'link' },
    //         { path: '/buttons/raisedBtn', title: 'Raised Style', type: 'link' },
    //         { path: '/buttons/groupBtn', title: 'Button Group', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Gallery', icon: Image, type: 'sub', active: false, children: [
    //         { path: '/gallery/imageGallery', title: 'Gallery Grid ', type: 'link' },
    //         { path: '/gallery/imageWithDesc', title: 'Gallery Grid With Desc ', type: 'link' },
    //         { path: '/gallery/mesonryGallery', title: 'Masonry Gallery', type: 'link' },
    //         { path: '/gallery/mesonryDesc', title: 'Masonry With Desc', type: 'link' },
    //         { path: '/gallery/imageHover', title: 'Hover Effect', type: 'link' }
    //     ]
    // },
    // {
    //     title: 'Forms', icon: FileText, type: 'sub', active: false, children: [
    //         {
    //             title: ' Form Controls ', type: 'sub', children: [
    //                 { title: 'Form Validation', type: 'link', path: '/forms/form-validation' },
    //                 { title: 'Basic Input', type: 'link', path: '/forms/baseInput' },
    //                 { title: 'Checkbox & Radio', type: 'link', path: '/forms/radio-checkbox' },
    //                 { title: 'Input Groups', type: 'link', path: '/forms/inputGroup' },
    //                 { title: 'Mega Option', type: 'link', path: '/forms/megaOptions' },

    //             ]
    //         },
    //         { path: '/forms/formDefault', title: 'Form Default', type: 'link' },
    //         { path: '/forms/FormWizard', title: 'From Wizard', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Tables', icon: Server, type: 'sub', children: [
    //         {
    //             title: ' Bootstrap Table ', type: 'sub', children: [
    //                 { title: 'Basic Table', type: 'link', path: '/table/basic' },
    //                 { title: 'Sizing Table', type: 'link', path: '/table/sizing' },
    //                 { title: 'Border Table', type: 'link', path: '/table/border' },
    //                 { title: 'Styling Table', type: 'link', path: '/table/styling' },
    //             ]
    //         },
    //         {
    //             title: 'Data Tables', path: '/table/datatable', type: 'link'
    //         }
    //     ]
    // },
    // {
    //     title: 'Cards', icon: Book, type: 'sub', active: false, children: [
    //         { path: '/cards/basicCards', title: 'Basic Card ', type: 'link' },
    //         { path: '/cards/creativeCards', title: 'Creative Card ', type: 'link' },
    //         { path: '/cards/tabCard', title: 'Tabbed Card ', type: 'link' },
    //         { path: '/cards/draggingCards', title: 'Draggable Card', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Timeline', icon: Sliders, type: 'sub', children: [
    //         { path: '/timelines/timeline', title: 'Timeline 1', type: 'link' },
    //         { path: '/timelines/timeline2', title: 'Timeline 2', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Charts', icon: BarChart, type: 'sub', active: false, children: [
    //         { path: '/charts/googleChart', type: 'link', title: 'Google Chart' },
    //         { path: '/charts/chartJs', type: 'link', title: 'Chartjs' },
    //         { path: '/charts/chartistComponent', type: 'link', title: 'Chartist' },
    //     ]
    // },
    // {
    //     title: 'Maps', icon: Map, type: 'sub', active: false, children: [
    //         { path: '/map/googleMap', type: 'link', title: 'Google Maps ' },
    //         { path: '/map/LeafletMap', type: 'link', title: 'Leaflet Maps ' }
    //     ]
    // },
    // {
    //     title: 'Editor', path: '/editor/editor1', icon: GitPullRequest, type: 'link', active: false
    // },
    // {
    //     title: 'Users', icon: Users, type: 'sub', active: false, children: [
    //         { path: '/users/userProfile', type: 'link', title: 'Users Profile ' },
    //         { path: '/users/userEdit', type: 'link', title: 'Users Edit' },
    //         { path: '/users/userCards', type: 'link', title: 'Users Cards' },
    //     ]
    // },
    // {
    //     title: 'Calender', path: '/calender/calender1', icon: Calendar, type: 'sub', active: false, bookmark: true, children: [
    //         { path: '/calender/calender1', type: 'link', title: 'Calender', },
    //         { path: '/calender/calender2', type: 'link', title: 'Draggable Calender' },
    //     ]
    // },
    // {
    //     title: 'Blog', icon: Edit, type: 'sub', active: false, children: [
    //         { path: '/blog/blogDetail', title: 'Blog Details', type: 'link' },
    //         { path: '/blog/blogSingle', title: 'Blog Single', type: 'link' },
    //         { path: '/blog/blogPost', title: 'Add Post', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Email App', icon: Mail, type: 'link', path: '/email-app/emailDefault', active: false, bookmark: true
    // },
    // {
    //     title: 'Contact', icon: UserPlus, type: 'link', path: '/contact-app/contact', active: false
    // },
    // {
    //     title: 'Chat', icon: MessageSquare, type: 'link', path: '/chat-app/chat', active: false, bookmark: true
    // },
    // {
    //     title: 'Social App', icon: Chrome, type: 'link', path: '/social/socialApp', active: false
    // },
    // {
    //     title: 'Job Search', icon: UserCheck, type: 'sub', active: false, children: [
    //         { path: '/jobSearch/cardView', title: 'Cards View', type: 'link' },
    //         { path: '/jobSearch/job-list', title: 'List View', type: 'link' },
    //         { path: '/jobSearch/job-detail', title: 'Job Details', type: 'link' },
    //         { path: '/jobSearch/job-apply', title: 'Apply', type: 'link' }
    //     ]
    // },
    // {
    //     title: 'Learning', icon: Layers, type: 'sub', active: false, children: [
    //         { path: '/learning/learning-list', title: 'Learning List', type: 'link' },
    //         { path: '/learning/learning-detail', title: 'Detail Course', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'FAQ', icon: HelpCircle, type: 'link', path: '/faq/faqComponent', active: false
    // },
    // {
    //     title: 'Knowledgebase', icon: Database, type: 'link', path: '/knowledgebase/knowledgebaseComponent', active: false
    // },
    // {
    //     title: 'Support Ticket', icon: Headphones, type: 'link', path: '/support-ticket/supportTicket', active: false
    // },
    // {
    //     title: 'To-Do', icon: Mic, type: 'link', path: '/todo-app/todo', active: false
    // },
    // {
    //     title: 'To-Do-Firebase', icon: Mic, type: 'link', path: '/todo-app/todo-firebase', active: false
    // },
    // {
    //     title: 'Ecommerce', icon: ShoppingBag, type: 'sub', active: false, children: [
    //         { path: '/ecommerce/product', title: 'Product', type: 'link' },
    //         { path: '/ecommerce/product-detail/1', title: 'Product Page', type: 'link' },
    //         { path: '/ecommerce/product-list', title: 'Product List', type: 'link' },
    //         { path: '/ecommerce/payment', title: 'Payment Detail', type: 'link' },
    //         { path: '/ecommerce/history', title: 'Order History ', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Pricing', icon: DollarSign, path: '/price/pricing', type: 'link', active: false
    // },
    // {
    //     path: '/sample/samplepage', title: 'Sample Page', icon: File, type: 'link', active: false
    // },
    // {
    //     path: '/search/searchpage', title: 'Search Pages', icon: Search, type: 'link', active: false
    // },
    // {
    //     title: 'Error Pages', icon: AlertOctagon, type: 'sub', active: false, children: [
    //         { path: '/pages/errors/error400', title: 'Error 400', type: 'link' },
    //         { path: '/pages/errors/error401', title: 'Error 401', type: 'link' },
    //         { path: '/pages/errors/error403', title: 'Error 403', type: 'link' },
    //         { path: '/pages/errors/error404', title: 'Error 404', type: 'link' },
    //         { path: '/pages/errors/error500', title: 'Error 500', type: 'link' },
    //         { path: '/pages/errors/error503', title: 'Error 503', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Authentication', icon: Lock, type: 'sub', active: false, children: [
    //         { path: '/pages/login', type: 'link', title: 'Login Simple' },
    //         { path: '/pages/loginWithBgImg', type: 'link', title: 'Login With Bg Image' },
    //         { path: '/pages/loginWithVideo', type: 'link', title: 'Login With Bg Video' },
    //         { path: '/pages/signup', type: 'link', title: 'Register Simple ' },
    //         { path: '/pages/signupWithImg', type: 'link', title: 'Register With Bg Image ' },
    //         { path: '/pages/signupWithVideo', type: 'link', title: 'Register With Bg Video ' },
    //         { path: '/pages/unlockUser', type: 'link', title: 'Unlock User' },
    //         { path: '/pages/forgetPwd', type: 'link', title: 'Forget Password ' },
    //         { path: '/pages/resetPwd', type: 'link', title: 'Reset Password ' }
    //     ]
    // },
    // {
    //     title: 'Coming Soon', type: 'sub', icon: Briefcase, active: false, children: [
    //         { path: '/pages/comingsoon', title: 'Coming Simple', type: 'link' },
    //         { path: '/pages/comingsoonImg', title: 'Coming With Bg Image', type: 'link' },
    //         { path: '/pages/comingsoonVideo', title: 'Coming With Bg Video', type: 'link' },
    //     ]
    // },
    // {
    //     title: 'Maintenance', icon: Settings, path: '/pages/maintenance', type: 'link', active: false
    // }
]
