import { Chat } from '../../types/chat';
import { User } from '../../types/user';
import API, { ChatsAPI } from '../api/ChatsAPI';
import { store } from '../store/Store';
// eslint-disable-next-line import/no-cycle
import MessagesController from './MessagesController';


class ChatsController {
    private readonly api: ChatsAPI;

    public constructor() {
        this.api = API;
    }

    public async create(title: string): Promise<void> {
        try {
            await this.api.create({ title });

            this.fetchChats();
        } catch (e: unknown) {
            console.error(e);
        }
    }

    public async fetchChats(title?: string): Promise<void> {
        const data = title != null ? { title } : undefined;
        const chats = await this.api.read(data);
        chats.map(async (chat) => {
            const token = await this.getToken(chat.id);

            await MessagesController.connect(chat.id, token);
        });

        store.set('chats', chats);
    }

    public async updateAvatar(data: File, chatId: Chat['id']): Promise<Chat['avatar'] | null> {
        try {
            const formData = new FormData();
            formData.append('avatar', data);
            formData.append('chatId', chatId.toString());
            const chat = await this.api.updateAvatar(formData);

            const { chats } = store.getState();

            const updatedChats = chats.map((currentChat) => {
                if (currentChat.id === chat.id) {
                    return chat;
                }

                return currentChat;
            });

            store.set('chats', updatedChats);

            return chat.avatar;
        } catch (e: unknown) {
            console.error(e);
        }

        return null;
    }

    public async addUserToChat(id: Chat['id'], userId: User['id']): Promise<void> {
        this.api.addUsers(id, [userId]);
    }

    public async deleteUserToChat(id: Chat['id'], userId: User['id']): Promise<void> {
        this.api.deleteUsers(id, [userId]);
    }

    public async delete(id: Chat['id']): Promise<void> {
        await this.api.delete(id);

        this.fetchChats();
    }

    public async getChatUsers(id: Chat['id']): Promise<User[]> {
        const users = await this.api.getUsers(id);

        return users;
    }

    public getToken(id: Chat['id']): Promise<string> {
        return this.api.getToken(id);
    }

    public selectChat(id: Chat['id']) {
        store.set('selectedChat', id);
    }
}

export default new ChatsController();
