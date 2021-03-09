import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCityzenComponent } from './create-cityzen.component';

describe('CreateCityzenComponent', () => {
  let component: CreateAgencyComponent;
  let fixture: ComponentFixture<CreateAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
