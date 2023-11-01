import { LastMessage } from './messages';


export interface Chat {
    id: number;
    title: string;
    avatar: string;
    unreadCount: number;
    createdBy: number;
    lastMessage: LastMessage | null;
}
