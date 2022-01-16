import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'; 
import { ClienteService } from './cliente.service';
import { CuentaService } from './cuenta.service';
import { MovimientoService } from './movimiento.service';
import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { CrearMovimientoComponent } from './crear-movimiento/crear-movimiento.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { ActualizarCuentaComponent } from './actualizar-cuenta/actualizar-cuenta.component';
import { ActualizarMovimientoComponent } from './actualizar-movimiento/actualizar-movimiento.component';
import { DeleteMovimientoComponent } from './delete-movimiento/delete-movimiento.component';
import { DeleteClienteComponent } from './delete-cliente/delete-cliente.component';
import { DeleteCuentaComponent } from './delete-cuenta/delete-cuenta.component'
import {MatListModule} from '@angular/material/list';
import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    CuentasComponent,
    MovimientosComponent,
    HeaderComponent,
    FooterComponent,
    MovimientosComponent,
    CrearClienteComponent,
    CrearCuentaComponent,
    CrearMovimientoComponent,
    ActualizarClienteComponent,
    ActualizarCuentaComponent,
    ActualizarMovimientoComponent,
    DeleteMovimientoComponent,
    DeleteClienteComponent,
    DeleteCuentaComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatListModule,
    FormsModule
  ],
  entryComponents:[ActualizarClienteComponent, ActualizarCuentaComponent, ActualizarMovimientoComponent],
  providers: [
    ClienteService,
    CuentaService,
    MovimientoService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
