import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-ventana-error',
  standalone: true,
  template: `
    @if (mensaje()) {
    <div class="ventana-fondo" role="alertdialog" aria-modal="true">
      <div class="ventana-caja">
        <i class="bi bi-exclamation-triangle-fill" aria-hidden="true"></i>
        <p>{{ mensaje() }}</p>
        <button type="button" class="btn ventana-btn" (click)="cerrar.emit()">Entendido</button>
      </div>
    </div>
    }
  `,
  styles: [`
    .ventana-fondo {
      position: fixed;
      inset: 0;
      z-index: 2000;
      display: grid;
      place-items: center;
      background: rgba(17, 24, 39, 0.45);
    }
    .ventana-caja {
      width: min(420px, 92vw);
      padding: 1.5rem 1.3rem 1.2rem;
      border-radius: 16px;
      border-top: 6px solid #c2410c;
      background: #fff;
      text-align: center;
    }
    .ventana-caja i { color: #c2410c; font-size: 2.2rem; }
    .ventana-caja p { margin: 0.8rem 0 1rem; font-weight: 700; color: #1f1f1f; }
    .ventana-btn { background: #ffa500; border: 0; color: #1f1f1f; font-weight: 700; padding: 0.4rem 1.4rem; }
  `]
})
export class VentanaErrorComponent {
  mensaje = input('');
  cerrar = output<void>();
}
