import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/data/data.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  isLoading = false;
  customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,navSpeed: 700,
  navText: ['', ''],
  responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

  data: any;
  userData: any;

  constructor(
    private toastrService: NbToastrService,
    private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { 
  }

  ngOnInit(): void {
    this.getUserData();
   }

  clickNext(item: object, type?: string) {
    this.isLoading = true;
    if (!!type) {
      this.toastrService.success('I am interested in this profile', 'SUCCESS');
    }
    setTimeout(() => {
      this.isLoading = false;
      this.sendDataToDataService(item);
    }, 500);

  }

  sendDataToDataService(data: object) {
    this.dataService.addList(data);
    this.routerNavigate();

  }

  routerNavigate() {
    this.router.navigate(['profile']);
  }

  getUserData(): void {
    this.http.get<any>('assets/data/data.json')
      .pipe(
        debounceTime(2000))
      .subscribe((data: any) => {
        setTimeout(() => {
        }, 800);
        this.userData = data;
      });
  }
}

