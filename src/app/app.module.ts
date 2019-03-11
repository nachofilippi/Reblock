import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


// Routes
import { APP_ROUTING } from './app.routes';


// Servicios
import { ProductosService } from './servicios/productos.service';


// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ObrasComponent } from './components/obras/obras.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { AsesoramientoComponent } from './components/asesoramiento/asesoramiento.component';
import { ProductoComponent } from './components/producto/producto.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { CovidoComponent } from './components/covido/covido.component';
import { RefAsesoramientoComponent } from './components/ref-asesoramiento/ref-asesoramiento.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NosotrosComponent,
    ProductosComponent,
    ObrasComponent,
    ContactoComponent,
    AsesoramientoComponent,
    ProductoComponent,
    BuscadorComponent,
    FooterComponent,
    IndexComponent,
    CovidoComponent,
    RefAsesoramientoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING

  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
