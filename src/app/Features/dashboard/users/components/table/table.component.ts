import { Component, OnInit } from '@angular/core';
import { User } from '../../../../auth/interfaces/User';
import { UsersService } from '../../../../../Core/services/users.service';

@Component({
  selector: 'users-table',
  standalone: false,
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
displayedColumns: string[] = [
  'id',
  'name',
  'password',
  'email',
  'role',
  'actions',
];

userDataSource: User[] = [];
currentUserRole: string;

constructor(
  private UsersService: UsersService,
) { 
  this.currentUserRole = 'admin';
}

ngOnInit(): void {
  this.UsersService.getUsersObs();
  this.UsersService.users$.subscribe((data) => {
    this.userDataSource = data;
  });
}

deleteUser(id: string) {
  this.UsersService.deleteUser(id);
}

editUser(id: string) {
  this.UsersService.setUpdateUser(id);
}

}
