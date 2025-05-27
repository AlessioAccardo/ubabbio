import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  telefono = '+393665023348';

  chiamaNumero() {
    window.location.href = `tel:${this.telefono}`;
    console.log(`Tentativo di chiamata a ${this.telefono}`);
  }
}
