import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCareersComponent } from './table-careers.component';

describe('TableCareersComponent', () => {
  let component: TableCareersComponent;
  let fixture: ComponentFixture<TableCareersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCareersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
