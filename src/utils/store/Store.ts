import { Chat } from '../../types/chat';
import { Message } from '../../types/messages';
import { User } from '../../types/user';
import { EventBus } from '../EventBus';
import { set } from '../Helpers';

export enum StoreEvents {
    Updated = 'updated',
}

export interface State {
    user: User | null;
    chats: Chat[];
    selectedChat: Chat['id'] | null;
    messages: Record<Chat['id'], Message[]>;
}

export class Store extends EventBus {
    private state: State = {
        user: null,
        chats: [],
        selectedChat: null,
        messages: {},
    } as State;

    public set(keypath: string, data: unknown): void {
        set(this.state, keypath, data);

        this.emit(StoreEvents.Updated, this.getState());
    }

    public getState(): State {
        return this.state;
    }

    public selectUserId(): User['id'] | null {
        return this.state.user?.id ?? null;
    }
}

export const store = new Store();
