import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment.development";
import { User } from '../../Features/dashboard/users/interfaces/users';


@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private userDataSubject = new BehaviorSubject<User[]>([]);
    users$ = this.userDataSubject.asObservable();

    userEdit = new BehaviorSubject<User | null>(null);
    userEdit$ = this.userEdit.asObservable();

    private currentUserRoleSubject = new BehaviorSubject<string | undefined>(undefined);
    currentUserRole$ = this.currentUserRoleSubject.asObservable();


    constructor(private http: HttpClient) {
        this.setCurrentUserRole('user');
    }

    private _users: User[] = [];

    getUsers(): User[] {
        return this._users;
    }

    setCurrentUserRole(role: string): void {
        this.currentUserRoleSubject.next(role);
    }

    getCurrentUserRole(): string | undefined {
        return this.currentUserRoleSubject.value;
    }

    setUpdateUser(id: string) {
        const user = this._users.find((user) => user.id === id);

        if (!user) {
            alert('Usuario no encontrado.');
            return
        }

        this.userEdit.next(user);
    }

    updateUser(user: User) {
        this.http.put<User>(`${environment.apiUrl}/users/${user.id}`
            , user).subscribe({
                next: (user) => {
                    this._users = this._users.map((u) => u.id === user.id ? user : u);
                    this.userDataSubject.next(this._users);
                    this.userEdit.next(null);
                },
                error: (error) => {
                    console.error('Error al actualizar los datos del Usuario: ', error);
                },
            })
    }

    getUsersObs() {
        this.userDataSubject.next(this._users);
        this.http.get<User[]>(`${environment.apiUrl}/users`).subscribe((users) => {
            this._users = users;
            this.userDataSubject.next(this._users);
        })
    }

    addUserObs(user: User) {
        this.http.post<User>(`${environment.apiUrl}/users`, user).subscribe({
            next: (user) => {
                this._users = [...this._users, user];
                this.userDataSubject.next(this._users);
            },
            error: (error) => {
                console.error('Error al agregar el Usuario: ', error);
            },
        })
    }

    deleteUser(id: string) {
        this.http.delete<User>(`${environment.apiUrl}/users/${id}`).subscribe({
            next: (user) => {
                this._users = this._users.filter((user) => user.id !== id);
                this.userDataSubject.next(this._users);
            },
            error: (error) => {
                console.error('Error al eliminar el Usuario: ', error);
            },
        })
    }
}