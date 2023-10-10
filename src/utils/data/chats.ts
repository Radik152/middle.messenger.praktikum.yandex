export type Chat = {
    name: string;
    avatar: string | null;
    id: string | number;
    messanges: {
        author: string;
        message: string;
        date: string;
    }[];
} | null;

export const chats: Chat[] = [
    {
        name: 'Елена',
        avatar: null,
        id: '1',
        messanges: [
            {
                author: 'Вы',
                message: 'Привет',
                date: '2023-06-10T12:00:00.000Z',
            },
            {
                author: 'Алена',
                message: 'hello',
                date: '2023-06-10T12:01:00.000Z',
            },
            {
                author: 'Вы',
                message: 'Как дела?',
                date: '2023-06-10T12:01:00.012Z',
            },
            {
                author: 'Вы',
                message: 'Прекрасная погода, не правда ли?',
                date: '2023-06-10T12:01:00.123Z',
            },
            {
                author: 'Вы',
                message: 'Я в восторге с самого утра, мне нужно скорее тебе рассказать, давай встретимся?',
                date: '2023-06-17T12:01:00.000Z',
            },
        ],
    },
    {
        name: 'Алена',
        id: '2',
        avatar: null,
        messanges: [
            {
                author: 'Вы',
                message: 'Привет',
                date: '2023-06-10T12:00:00.000Z',
            },
            {
                author: 'Алена',
                message: 'Привееет',
                date: '2023-06-10T12:01:00.000Z',
            },
            {
                author: 'Вы',
                message: 'Как дела?',
                date: '2023-06-10T12:01:00.012Z',
            },
            {
                author: 'Вы',
                message: 'Прекрасная погода, не правда ли?',
                date: '2023-06-10T12:01:00.123Z',
            },
            {
                author: 'Алена',
                message: 'Я в восторге с самого утра, мне нужно скорее тебе рассказать, давай встретимся?',
                date: '2023-06-10T12:01:00.000Z',
            },
        ],
    },
];
