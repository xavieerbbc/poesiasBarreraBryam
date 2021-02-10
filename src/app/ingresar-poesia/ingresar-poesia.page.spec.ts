import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngresarPoesiaPage } from './ingresar-poesia.page';

describe('IngresarPoesiaPage', () => {
  let component: IngresarPoesiaPage;
  let fixture: ComponentFixture<IngresarPoesiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarPoesiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresarPoesiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
