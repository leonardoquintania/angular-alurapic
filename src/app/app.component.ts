import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {

    }

    ngOnInit(): void {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd)) //-- Filtra apenas as rotas que são do tipo END
        .pipe(map(() => this.activatedRoute)) //-- Altera nome activatedRoute para route
        .pipe(map(route => { //-- Como o route é um Observable, preciso me inscrever nele
          while(route.firstChild) route = route.firstChild; //-- Pego cada filho na arvore
          return route;
        }))
        .pipe(switchMap(route => route.data))
        .subscribe(event => this.titleService.setTitle(event.title));

    }
      

}
