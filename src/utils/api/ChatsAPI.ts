import { Chat } from '../../types/chat';
import { User } from '../../types/user';
import { BaseAPI } from './Api';


export class ChatsAPI extends BaseAPI {
    public constructor() {
        super('/chats');
    }

    public create(data: { title: string }): Promise<Chat> {
        return this.http.post('/', { data });
    }

    public delete(identifier: Chat['id']): Promise<unknown> {
        return this.http.delete('/', { data: { chatId: identifier } });
    }

    public read(data?: { title: string }): Promise<Chat[]> {
        return this.http.get('/', { data });
    }

    public async getUsers(id: Chat['id']): Promise<User[]> {
        return this.http.get(`/${id}/users`);
    }

    public addUsers(id: Chat['id'], users: User['id'][]): Promise<unknown> {
        return this.http.put('/users', { data: { users, chatId: id } });
    }

    public deleteUsers(id: Chat['id'], users: User['id'][]): Promise<unknown> {
        return this.http.delete('/users', { data: { users, chatId: id } });
    }

    public async getToken(id: Chat['id']): Promise<string> {
        const response = await this.http.post<{ token: string }>(`/token/${id}`);

        return response.token;
    }

    public updateAvatar(data: FormData) {
        return this.http.put<Chat>('/avatar', { data });
    }

    update = undefined;
}

export default new ChatsAPI();
