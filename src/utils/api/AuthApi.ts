import { Login, Registration } from '../../types/auth';
import { User } from '../../types/user';
import { BaseAPI } from './Api';

export class AuthAPI extends BaseAPI {
    public constructor() {
        super('/auth');
    }

    public register(data: Registration): Promise<Pick<User, 'id'>> {
        return this.http.post('/signup', { data });
    }

    public login(data: Login): Promise<void> {
        return this.http.post('/signin', { data });
    }

    public async read(): Promise<User> {
        return this.http.get('/user');
    }

    public logout(): Promise<void> {
        return this.http.post('/logout');
    }

    create = undefined;

    update = undefined;

    delete = undefined;
}

export default new AuthAPI();
