import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-schedule-visit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './shedule-visit.html',
  styleUrl: './shedule-visit.css',
})
export class ScheduleVisit implements OnInit {
  property: any;

  visitForm = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    visitors: '',
    message: '',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const stateProperty = history.state?.property;

    if (stateProperty) {
      this.property = stateProperty;
    }
  }
}
