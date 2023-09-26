import { AuthPage } from "./pages/AuthPage/AuthPage";
import { ChangePasswordPage } from "./pages/ChangePasswordPage/ChangePasswordPage";
import { ChangeProfilePage } from "./pages/ChangeProfilePage/ChangeProfilePage";
import { ChatsPage } from "./pages/ChatsPage/ChatsPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";


const ROUTES: Record<string, string> = {
    '/auth': AuthPage(),
    '/registration': RegistrationPage(),
    '/chats': ChatsPage(),
    '/profile': ProfilePage(),
    '/changeProfile': ChangeProfilePage(),
    '/changePassword': ChangePasswordPage(),
    '/500': ErrorPage({codeError: 500, titleError: 'Мы уже фиксим'})
}

window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app');

    if (root) {
        const component = ROUTES[window.location.pathname] || ErrorPage({codeError: 404, titleError: 'Не туда попали'});
        root.innerHTML = component;
    }

})