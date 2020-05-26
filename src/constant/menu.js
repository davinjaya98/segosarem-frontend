import {
    Home,
    Settings,
    FileText
} from 'react-feather';

export const MENUITEMS = [
    {
        title: 'Dashboard', path: '/dashboard', icon: Home, type: 'link', active: false
    },
    {
        title: 'Quotation', path: '/quotation', icon: FileText, type: 'link', active: false
    },
    {
        title: 'Portal Config', path: '/portalConfig', icon: Settings, type: 'link', active: false
    }
]