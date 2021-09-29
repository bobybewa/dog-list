import { RouteConfig } from 'react-router-config';
import NotFound from './notFound'
const importPage = (fileName: string) => require(`./views/${fileName}`).default;

const routes: RouteConfig[] = [
    {
        path: '/',
        exact: true,
        component: importPage('doglist')
    },
    {
        path: '/sub-dog/:name',
        exact: true,
        component: importPage('subDog')
    },
    {
        path: '/dog-pictures',
        exact: true,
        component: importPage('dogPictures')
    },
    {
        path: '*',
        exact: true,
        // component: importPage('doglist')
        render: () => <NotFound/>
    }
]

export default routes