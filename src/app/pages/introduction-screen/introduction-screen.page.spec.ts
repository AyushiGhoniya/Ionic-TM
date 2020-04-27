import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntroductionScreenPage } from './introduction-screen.page';

describe('IntroductionScreenPage', () => {
  let component: IntroductionScreenPage;
  let fixture: ComponentFixture<IntroductionScreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroductionScreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntroductionScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
