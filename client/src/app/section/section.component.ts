import { Component, OnInit, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() title: string;
  @Output() event: EventEmitter<string> = new EventEmitter<string>();
  @HostBinding('class.card-outline-primary') private ishovering = true;

  constructor() { }

  @HostListener('mouseover', ['$event']) onHover($event) {
    console.log($event);
    // window.alert(this.title);
  }

  ngOnInit() {
    setInterval(() => {
      this.event.emit(this.title);
    }, 1000);
  }

}
