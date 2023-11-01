// eslint-disable-next-line import/no-named-as-default
import AuthController from './utils/controllers/AuthController';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { ChangePasswordPage } from './pages/ChangePasswordPage/ChangePasswordPage';
import { ChangeProfilePage } from './pages/ChangeProfilePage/ChangeProfilePage';
import { ChatsPage } from './pages/ChatsPage/ChatsPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { router } from './utils/routes/Router';

import { Routes } from './utils/routes/routes';

window.addEventListener('DOMContentLoaded', async () => {
    const root = document.getElementById('app');
    if (root) {
        let isProtectedRoute = true;

        router
        .use(Routes.Main, ChatsPage)
        .use(Routes.Login, AuthPage)
        .use(Routes.Register, RegistrationPage)
        .use(Routes.Error, ErrorPage)
        .use(Routes.ProfileChangePassword, ChangePasswordPage)
        .use(Routes.Profile, ProfilePage)
        .use(Routes.ProfileEdit, ChangeProfilePage);

        switch (window.location.pathname) {
            case Routes.Login:
            case Routes.Register:
                isProtectedRoute = false;
                break;
            default:
                break;
        }

        try {
            await AuthController.fetchUser();
            router.start();
            if (!isProtectedRoute) {
                router.go(Routes.Profile);
            }
        } catch (e: unknown) {
            router.start();
            if (isProtectedRoute) {
                router.go(Routes.Login);
            }
        }
    }
});
