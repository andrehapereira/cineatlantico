import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdicoesAnterioresComponent } from './edicoes-anteriores.component';

describe('EdicoesAnterioresComponent', () => {
  let component: EdicoesAnterioresComponent;
  let fixture: ComponentFixture<EdicoesAnterioresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdicoesAnterioresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EdicoesAnterioresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
