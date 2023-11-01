/* eslint-disable max-classes-per-file */
import { Login, Registration } from '../../types/auth';
import API, { AuthAPI } from '../api/AuthApi';
import { router } from '../routes/Router';
import { Routes } from '../routes/routes';
import { store } from '../store/Store';

export class AuthController {
    private readonly api: AuthAPI;

    public constructor() {
        this.api = API;
    }

    public async login(data: Login): Promise<void> {
        try {
            await this.api.login(data);

            await this.fetchUser();

            router.go(Routes.Main);
        } catch (e: unknown) {
            throw new Error(e as string);
        }
    }

    public async register(data: Registration): Promise<void> {
        try {
            await this.api.register(data);

            await this.fetchUser();

            router.go(Routes.Main);
        } catch (e: unknown) {
            throw new Error(e as string);
        }
    }

    public async fetchUser(): Promise<void> {
        try {
            const user = await this.api.read();
            store.set('user', user);
        } catch (e: unknown) {
            throw new Error(e as string);
        }
    }

    public async logout(): Promise<void> {
        try {
            await this.api.logout();

            router.go(Routes.Login);
        } catch (e: unknown) {
            throw new Error(e as string);
        }
    }
}

export default new AuthController();
