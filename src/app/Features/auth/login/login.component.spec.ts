import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with email and password empty values', () => 
  expect(component.loginForm.value).toEqual({
    email: '',
    password: ''
  }));

  it('should start with login button disabled', () => 
  expect(component.loginForm.controls['login'].disabled).toBeTrue());

  it('should mark email as invalid when it is empty', () => 
  expect(component.loginForm.controls['email'].valid).toBeFalse());

  it('should mark password as invalid when it is empty', () => 
  expect(component.loginForm.controls['password'].valid).toBeFalse());

  it('should mark the form as invalid when password is less than 4 characters', () => {
    component.loginForm.controls['password'].setValue('123');
    expect(component.loginForm.valid).toBeFalse();
  });

  it('should call authService.login when the form is valid', () => {
    const AuthServiceSpy = spyOn(component['AuthService'], 'login').and.returnValue(true);
    const routerSpy = spyOn(component['router'], 'navigate');
    component.loginForm.setValue({email: 'admin@admin.com', password: 'admin'});
    component.submit();
    expect(AuthServiceSpy).toHaveBeenCalledWith('admin@admin.com', 'admin');
    expect(routerSpy).toHaveBeenCalledWith(['/dashboard']);
  });
});
