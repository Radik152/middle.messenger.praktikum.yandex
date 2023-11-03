import { PasswordUpdate, User } from '../../types/user';
import { BaseAPI } from './Api';


export class UserAPI extends BaseAPI {
    public constructor() {
        super('/user');
    }

    public update(data: User): Promise<User> {
        return this.http.put('/profile', { data });
    }

    public updatePassword(data: PasswordUpdate): Promise<User> {
        return this.http.put('/password', { data });
    }

    public updateAvatar(data: File): Promise<User> {
        return this.http.put('/profile/avatar', { data });
    }

    public searchUser(data: { login: string }): Promise<User[]> {
        return this.http.post('/search', { data });
    }

    read = undefined;

    create = undefined;

    delete = undefined;
}

export default new UserAPI();
