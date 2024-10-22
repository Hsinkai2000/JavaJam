import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceupdateComponent } from './priceupdate.component';

describe('PriceupdateComponent', () => {
  let component: PriceupdateComponent;
  let fixture: ComponentFixture<PriceupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceupdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
