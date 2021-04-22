import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {

  constructor( private fb: FormBuilder, private toastr:ToastrService) { 
    this.form = this.fb.group({
      titular:    ['', Validators.required],
      numTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExp:   ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv:        ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
  }

  addCard(): void{
    const tarjeta: any = {
      titular: this.form.get('titular')?.value,
      numTarjeta: this.form.get('numTarjeta')?.value,
      fechaExp: this.form.get('fechaExp')?.value,
      cvv: this.form.get('cvv')?.value
    }
    this.listTarjetas.push(tarjeta);
    this.form.reset();

    this.toastr.success('Tarjeta Registrada', 'Frutifantastico',{ timeOut:1000 });
  }

  deleteCard( index:number ){
    console.log(index);
    this.listTarjetas.splice(index, 1);
    // Mustra de notificaciones
    this.toastr.error('tarjeta eliminada', 'Delete card',{ timeOut:1000 });
  }

  editCard( index:number ): void{
    this.toastr.warning('Developing method', 'Development',{ timeOut:1000 })
  }

  form: FormGroup;
  listTarjetas: any [] = [
    {
      titular: 'Braulio García',
      numTarjeta: 12345678951,
      fechaExp: '11/23',
      cvv: 123
    },
    {
      titular: 'Livier de Alba',
      numTarjeta: 32165498753,
      fechaExp: '8/25',
      cvv: 523
    },
    {
      titular: 'Uriel García',
      numTarjeta: 98765432159,
      fechaExp: '10/22',
      cvv: 574
    }
  ];

}
