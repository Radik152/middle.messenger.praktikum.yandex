import { AuthPage } from './pages/AuthPage/AuthPage';
import { ChangePasswordPage } from './pages/ChangePasswordPage/ChangePasswordPage';
import { ChangeProfilePage } from './pages/ChangeProfilePage/ChangeProfilePage';
import { ChatsPage } from './pages/ChatsPage/ChatsPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage';
import { chats } from './utils/data/chats';

const getPage = () => {
    switch (window.location.pathname) {
        case '/auth': {
            return new AuthPage();
        }
        case '/registration': {
            return new RegistrationPage();
        }
        case '/changeProfile': {
            return new ChangeProfilePage();
        }
        case '/changePassword': {
            return new ChangePasswordPage();
        }
        case '/profile': {
            return new ProfilePage();
        }
        case '/chats': {
            return new ChatsPage();
        }
        case '/500': {
            return new ErrorPage({ codeError: 500, titleError: 'Мы уже фиксим' });
        }
        default: {
            const pathname = window.location.pathname.slice(1);
            const activeChat = chats.find((person) => person?.id === pathname);
            if (activeChat) {
                return new ChatsPage();
            }

            return new ErrorPage({ codeError: 404, titleError: 'Не туда попали' });
        }
    }
};

window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app');

    if (root) {
        const component = getPage();
        root.append(component.element!);
        component.dispatchComponentDidMount();
    }
});
