import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl:'./fruta.component.html'
})
export class FrutaComponent{
  public nombre_componente = 'Componente de fruta';
  public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

  public nombre = 'Williams León';
  public edad = 45;
  public mayorDeEdad = true;
  public trabajos: Array['Carpintero', 'Albañil', 'Fontanero'];
}
