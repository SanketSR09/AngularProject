import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  @Input() name: string | undefined;
  @Input() photo: string | undefined;
  @Input() description: string | undefined;
  @Output() showOnMap: EventEmitter<void> = new EventEmitter<void>();

  showProfileOnMap() {
    this.showOnMap.emit();
  }
}
