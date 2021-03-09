import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCityzenComponent } from './list-cityzen.component';

describe('ListCityzenComponent', () => {
  let component: ListCityzenComponent;
  let fixture: ComponentFixture<ListCityzenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCityzenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCityzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
