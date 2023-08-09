import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadItemsComponent } from './read-items.component';

describe('ReadItemsComponent', () => {
  let component: ReadItemsComponent;
  let fixture: ComponentFixture<ReadItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadItemsComponent]
    });
    fixture = TestBed.createComponent(ReadItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
