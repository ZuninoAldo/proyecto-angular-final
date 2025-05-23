export interface User {
    id: string;
    name: string;
    password: string;
    email: string;
    role: 'admin' | 'user';
}