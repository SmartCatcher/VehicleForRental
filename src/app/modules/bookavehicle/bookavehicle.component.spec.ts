import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookavehicleComponent } from './bookavehicle.component';

describe('BookavehicleComponent', () => {
  let component: BookavehicleComponent;
  let fixture: ComponentFixture<BookavehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookavehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookavehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
