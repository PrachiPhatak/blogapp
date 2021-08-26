import Home from "./views/Home.js";
import PostIndex, {PostEvent} from "./views/PostIndex.js";
import About from "./views/About.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";
import Register, {RegisterEvent} from "./views/Register.js";
import User from "./views/User.js";
import BlogDetails, {CreatePost} from "./views/BlogDetails.js";

/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: Home,
            state: {},
            uri: '/',
            title: 'Home',
        },
        '/login': {
            returnView: Login,
            state: {},
            uri: '/login',
            title: "Login",
            viewEvent: LoginEvent
        },
        '/posts': {
            returnView: PostIndex,
            state: {
                posts: '/api/posts'
            },
            uri: '/posts',
            title: 'All Posts',
            viewEvent: PostEvent
        },
        '/details': {
            returnView: BlogDetails,
            state: {
                categories:'/api/categories'
            },
            uri: '/details',
            title: 'Post Details',
            viewEvent: CreatePost
        },
        '/register': {
            returnView: Register,
            state: {},
            uri:'/register',
            title:'Register',
            viewEvent: RegisterEvent
        },
        '/user': {
            returnView: User,
            state: {
                users: '/api/users'
            },
            uri:'/user',
            title:'Profile',
            //viewEvent: RegisterEvent
        },
        '/about': {
            returnView: About,
            state: {},
            uri: '/about',
            title: 'About',
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR',
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        }
    };

    return routes[URI];
}

