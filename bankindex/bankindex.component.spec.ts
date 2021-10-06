import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankindexComponent } from './bankindex.component';

describe('BankindexComponent', () => {
  let component: BankindexComponent;
  let fixture: ComponentFixture<BankindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
