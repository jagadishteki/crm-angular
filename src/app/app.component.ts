import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataServiceService } from '../../api/data-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-node-mysql';
  http = inject(HttpClient);

  constructor( private dataService: DataServiceService){
  }
  
  ngOnInit(): void{
    this.dataService.getStudents().subscribe({
      next: (res)=>{
        console.log(res);
      }
    })
  }
}
