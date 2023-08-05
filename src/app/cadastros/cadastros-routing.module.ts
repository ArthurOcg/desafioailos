import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrosComponent } from './cadastros.component';
import { NovaadmissaoComponent } from './novaadmissao/novaadmissao.component';

const routes: Routes = [{
  path: '', component: CadastrosComponent, 
  children: [
    {
      path: '', component: NovaadmissaoComponent, 
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastrosRoutingModule { }
