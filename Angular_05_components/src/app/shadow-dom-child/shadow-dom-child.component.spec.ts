import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowDomChildComponent } from './shadow-dom-child.component';

describe('ShadowDomChildComponent', () => {
  let component: ShadowDomChildComponent;
  let fixture: ComponentFixture<ShadowDomChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowDomChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShadowDomChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
