import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RateUsHerePage } from './rate-us-here.page';

describe('RateUsHerePage', () => {
  let component: RateUsHerePage;
  let fixture: ComponentFixture<RateUsHerePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateUsHerePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RateUsHerePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
