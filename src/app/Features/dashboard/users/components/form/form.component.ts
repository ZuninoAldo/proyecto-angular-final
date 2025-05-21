import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../../../../Core/services/users.service';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../interfaces/users';


@Component({
  selector: 'users-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  formGroupUser: FormGroup;
  isUserEdit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private UsersService: UsersService,
  ) {
    this.formGroupUser = this.fb.group({
      id: [''],
      name: ['', [Validators.minLength(3), Validators.required]],
      password: ['', [Validators.minLength(4), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      role: ['', [Validators.required]],
    });
    this.UsersService.userEdit$.subscribe((user) => {
      if (user) {
        this.formGroupUser.patchValue({
          id: user.id,
          name: user.name,
          password: user.password,
          email: user.email,
          role: user.role,
        });
        this.isUserEdit = true;
      }
    });
  }

  submit() {
    const isEdit = this.isUserEdit;
    const user: User = {
      id: isEdit ? this.formGroupUser.value.id : uuidv4(),
      name: this.formGroupUser.value.name,
      password: this.formGroupUser.value.password,
      email: this.formGroupUser.value.email,
      role: this.formGroupUser.value.role,
    };

    if (isEdit) {
      this.UsersService.updateUser(user);
    } else {
      this.UsersService.addUserObs(user);
    }

    this.formGroupUser.reset();
    this.isUserEdit = false;
    this.UsersService.userEdit.next(null);
  }

    get name() {
    return this.formGroupUser.get('name');
  }

  get isNameInvalid() {
    return this.name?.touched && this.name?.invalid;
  }

  get password() {
    return this.formGroupUser.get('password');
  }

  get isPasswordInvalid() {
    return this.password?.touched && this.password?.invalid;
  }

  get email() {
    return this.formGroupUser.get('email');
  }

  get isEmailInvalid() {
    return this.email?.touched && this.email?.invalid;
  }

  get role() {
    return this.formGroupUser.get('role');
  }

  get isRoleInvalid() {
    return this.role?.touched && this.role?.invalid;
  }

}
