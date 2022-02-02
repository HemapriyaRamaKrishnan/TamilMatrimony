import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  userData: any;
  isLoading = false;
  constructor(
    private dataService: DataService
  )
  {};

  ngOnInit(): void {
    this.dataService.data.subscribe((data: any) => {
      this.userData = data;
    }) 
  }

}
