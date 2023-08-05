import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaadmissaoComponent } from './novaadmissao.component';

describe('NovaadmissaoComponent', () => {
  let component: NovaadmissaoComponent;
  let fixture: ComponentFixture<NovaadmissaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaadmissaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaadmissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
