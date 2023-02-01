import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { CheckLoginGuard } from './shared/guards/check-login.guard';
import { ProductoSeleccionadoComponent } from './components/producto-seleccionado/producto-seleccionado.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'noFound',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginModule),
      canActivate:[CheckLoginGuard]
  },
  {
    path: 'qr',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductosComponent,
  },
  {
    path: 'reports',
    component: ReportesComponent,
  },
  {
    path: 'qr/:id',
    component: ProductoSeleccionadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}
