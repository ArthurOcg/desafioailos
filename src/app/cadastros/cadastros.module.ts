import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrosRoutingModule } from './cadastros-routing.module';
import { CadastrosComponent } from './cadastros.component';
import { NovaadmissaoComponent } from './novaadmissao/novaadmissao.component';


@NgModule({
  declarations: [
    CadastrosComponent,
    NovaadmissaoComponent
  ],
  imports: [
    CommonModule,
    CadastrosRoutingModule
  ]
})
export class CadastrosModule { }
