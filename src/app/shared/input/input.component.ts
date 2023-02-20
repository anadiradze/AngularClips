import { Component, OnInit,  Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() control: FormControl = new FormControl()
  //The type attribute should have a default value if the parent component doesn't provide one by default, same in case of placeholder.
  @Input() type = 'text'
  @Input() placeholder = ''
  @Input() format = ''
}
