import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-float',
  templateUrl: './button-float.component.html',
  styleUrls: ['./button-float.component.scss']
})
export class ButtonFloatComponent implements OnInit {

  @Output() emmit = new EventEmitter<boolean>();

  constructor(private router: Router) { }
  _url : string='';

  executeEvent() { 
    this.emmit.emit(true);
  }

  ngOnInit(): void {
  }

  

}
