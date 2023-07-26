import Router from "@/plugins/router";
import Movies from "@/pages/movies/Movies";
import SignIn from "@/pages/signIn/SignIn";
import NotFound from "@/pages/not-found/NotFound";
import SignUp from "@/pages/signup/SignUp";

const routes = [
    {
        path: '/movies',
        component: Movies
    },
    {
        path: '/sign-in',
        component: SignIn
    },
    {
        path: '*',
        component: NotFound
    },
    {
        path: '/sign-up',
        component: SignUp
    },
]



export const router = new Router(routes)