import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeListComponent]
    });
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { EmployeeListComponent } from './employee-list.component';

// describe('EmployeeListComponent', () => {
//   let component: EmployeeListComponent;
//   let fixture: ComponentFixture<EmployeeListComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [EmployeeListComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(EmployeeListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
