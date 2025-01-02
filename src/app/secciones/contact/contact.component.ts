import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  enviarFormulario(form: any): void {
    if (form.valid) {
      const url = 'https://api.web3forms.com/submit';
      const formData = {
        access_key: '8f4ef6e0-3eb4-435a-a6c2-5317492bf385',
        nombre: form.value.nombre,
        email: form.value.email,
        mensaje: form.value.mensaje
      };

      this.http.post(url, formData).subscribe({
        next: () => {
          this.snackBar.open('Mensaje enviado correctamente', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
          });
          form.reset();
        },
        error: (error) => {
          console.error('Error enviando el formulario:', error);
          this.snackBar.open('Error al enviar el mensaje. Intenta nuevamente.', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
          });
        }
      });
    }
  }
}
