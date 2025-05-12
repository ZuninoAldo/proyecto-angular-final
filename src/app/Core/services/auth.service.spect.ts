import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';


describe('LoginComponent', () => {
    let component: AuthService;
    let fixture: ComponentFixture<AuthService>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AuthService]
        })
            .compileComponents();

        fixture = TestBed.createComponent(AuthService);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should return the role of the user', () => {
        const user = {
            email: 'admin@admin.com',
            password: 'admin',
            role: 'admin',
        };
        component.login(user.email, user.password);
        component.getRole().subscribe(role => {
            expect(role).toEqual(user);
        });
    });

    it('should return false when the user is not found', () => {
        const user = {
            email: 'admin@admin.com',
            password: 'admin',
            role: 'admin',
        };
        component.login(user.email, user.password);
        component.getRole().subscribe(role => {
            expect(role).toBeFalsy();
        });
    });

    it('should return true when the user is found', () => {
        const user = {
            email: 'admin@admin.com',
            password: 'admin',
            role: 'admin',
        };
        component.login(user.email, user.password);
        component.getRole().subscribe(role => {
            expect(role).toBeTruthy();
        });
    });


});
