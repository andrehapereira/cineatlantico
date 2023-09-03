import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AMostraComponent } from './a-mostra.component';

describe('AMostraComponent', () => {
  let component: AMostraComponent;
  let fixture: ComponentFixture<AMostraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AMostraComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AMostraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
