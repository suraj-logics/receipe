import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driven-forms',
  templateUrl: './driven-forms.component.html',
  styleUrls: ['./driven-forms.component.css']
})
export class DrivenFormsComponent implements OnInit {
  model: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }

}
