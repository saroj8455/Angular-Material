import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit{

  @Input() message: string | undefined ;

  ngOnInit() {
    console.log(this.message)
  }



}
