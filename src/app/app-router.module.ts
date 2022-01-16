import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientesComponent } from "./clientes/clientes.component";
import { CrearClienteComponent } from "./crear-cliente/crear-cliente.component";
import { CrearCuentaComponent } from "./crear-cuenta/crear-cuenta.component";
import { CrearMovimientoComponent } from "./crear-movimiento/crear-movimiento.component";
import { CuentasComponent } from "./cuentas/cuentas.component"; 
import { DeleteClienteComponent } from "./delete-cliente/delete-cliente.component";
import { DeleteCuentaComponent } from "./delete-cuenta/delete-cuenta.component";
import { DeleteMovimientoComponent } from "./delete-movimiento/delete-movimiento.component";
import { LoginComponent } from "./login/login.component";
import { MovimientosComponent } from "./movimientos/movimientos.component";
import { RegisterComponent } from "./register/register.component";

const routes:Routes=[

    {path:'', component: LoginComponent},
    {path:'clientes', component: ClientesComponent},
    {path:'crear-clientes', component: CrearClienteComponent},
    {path:'clientes/delete-cliente/:id', component: DeleteClienteComponent},

    {path:'cuentas', component: CuentasComponent},
    {path:'crear-cuentas', component: CrearCuentaComponent},
    {path:'cuentas/delete-cuenta/:id', component: DeleteCuentaComponent},

    {path:'movimientos', component: MovimientosComponent},
    {path:'crear-movimientos', component: CrearMovimientoComponent},
    {path:'movimientos/delete-movimiento/:id', component: DeleteMovimientoComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}
]

@NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}
