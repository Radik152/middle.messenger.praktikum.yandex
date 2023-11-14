/* eslint-disable import/extensions */
import { DATE_OPTIONS } from './Contants.ts';

export type PlainObject<T = unknown> = {
    [k in string]: T;
};

type Indexed<T = any> = {
    [key in string]: T;
};

function isPlainObject(value: unknown): value is PlainObject {
    return (
        typeof value === 'object'
        && value !== null
        && value.constructor === Object
        && Object.prototype.toString.call(value) === '[object Object]'
    );
}

function isArrayOrObject(value: unknown): value is PlainObject {
    return isPlainObject(value) || Array.isArray(value);
}

function getKey(key: string, parentKey?: string): string {
    return parentKey ? `${parentKey}[${key}]` : key;
}

function getParams(data: PlainObject | [], parentKey?: string): [string, string][] {
    const result: [string, string][] = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(data)) {
        if (isArrayOrObject(value)) {
            result.push(...getParams(value, getKey(key, parentKey)));
        } else {
            result.push([getKey(key, parentKey), encodeURIComponent(String(value))]);
        }
    }

    return result;
    }

    export function queryString(data: unknown): string {
    if (!isPlainObject(data)) {
        throw new Error('input must be an object');
    }

    return getParams(data)
        .map((arr) => arr.join('='))
        .join('&');
    }

    export function isEqual(lhs: PlainObject, rhs: PlainObject): boolean {
    if (Object.keys(lhs).length !== Object.keys(rhs).length) {
        return false;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(lhs)) {
        const rightValue = rhs[key];
        if (isArrayOrObject(value) && isArrayOrObject(rightValue)) {
            if (isEqual(value, rightValue)) {
                // eslint-disable-next-line no-continue
                continue;
            }

            return false;
        }

        if (value !== rightValue) {
            return false;
        }
    }

    return true;
}

function merge(lhs: Indexed, rhs: Indexed): Indexed {
  // eslint-disable-next-line no-restricted-syntax
    for (const p in rhs) {
        if (!(p in rhs)) {
            // eslint-disable-next-line no-continue
            continue;
        }

        try {
            if (rhs[p].constructor === Object) {
                // eslint-disable-next-line no-param-reassign
                rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
            } else {
                // eslint-disable-next-line no-param-reassign
                lhs[p] = rhs[p];
            }
        } catch (e) {
            // eslint-disable-next-line no-param-reassign
            lhs[p] = rhs[p];
        }
    }

    return lhs;
}

export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
    if (typeof object !== 'object' || object === null) {
        return object;
    }

    if (typeof path !== 'string') {
        throw new Error('path must be string');
    }

    const result = path.split('.').reduceRight<Indexed>(
        (acc, key) => ({
            [key]: acc,
        }),
        value as any,
    );

    return merge(object as Indexed, result);
}


export const converChatsListsDate = (date: Date): string => {
    const currentDate = new Date();
    const rusFormattedDate = date.toLocaleString('ru', DATE_OPTIONS).split(' ');
    if (currentDate.getDate() === date.getDate()) return 'сегодня';
    if (currentDate.getDate() - 1 === date.getDate()) return 'вчера';
    if (currentDate.getFullYear() === date.getFullYear()) {
        return `${rusFormattedDate[1]} ${rusFormattedDate[2].slice(0, 3)}`;
    }

    return `${rusFormattedDate[1]} ${rusFormattedDate[2].slice(0, 3)} ${rusFormattedDate[3]}`;
};

export const converChatDate = (date: Date): string => {
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    if (minutes < 10) {
        return `${hours}:0${minutes}`;
    }

    return `${hours}:${minutes}`;
};
