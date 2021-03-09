import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCityzenComponent } from './update-cityzen.component';

describe('UpdateCityzenComponent', () => {
  let component: UpdateCityzenComponent;
  let fixture: ComponentFixture<UpdateCityzenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCityzenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCityzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
