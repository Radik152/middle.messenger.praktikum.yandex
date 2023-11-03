// eslint-disable-next-line import/no-cycle
import API, { UserAPI } from '../api/UserApi';
import { PasswordUpdate, User } from '../../types/user';
import { router } from '../routes/Router';
import { Routes } from '../routes/routes';
import { store } from '../store/Store';

export class UserController {
    private readonly api: UserAPI;

    public constructor() {
        this.api = API;
    }

    public async update(data: User): Promise<void> {
        try {
            const user = await this.api.update(data);

            store.set('user', user);

            router.go(Routes.Profile);
        } catch (e: unknown) {
            console.error(e);
        }
    }

    public async updatePassword(data: PasswordUpdate): Promise<void> {
        try {
            await this.api.updatePassword(data);

            router.go(Routes.Profile);
        } catch (e: unknown) {
            console.error(e);
        }
    }

    public async searchUser(data: { login: string }): Promise<User[] | null> {
        try {
            const users = await this.api.searchUser(data);

            return users;
        } catch (e: unknown) {
            console.error(e);
        }

        return null;
    }

    public async updateAvatar(data: File): Promise<void> {
        try {
            const user = await this.api.updateAvatar(data);

            store.set('user', user);
        } catch (e: unknown) {
            console.error(e);
        }
    }
}

export default new UserController();
