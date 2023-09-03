import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramaDetailsComponent } from './programa-details.component';

describe('ProgramaDetailsComponent', () => {
  let component: ProgramaDetailsComponent;
  let fixture: ComponentFixture<ProgramaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramaDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
