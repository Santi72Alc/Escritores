import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEscritoresComponent } from './components/lista-escritores/lista-escritores.component';
import { DetalleComponent } from './components/detalle/detalle.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'escritores' },
  { path: 'escritores', component: ListaEscritoresComponent },
  { path: 'escritores/:escritorId', component: DetalleComponent },
  { path: '**', redirectTo: 'escritores' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
