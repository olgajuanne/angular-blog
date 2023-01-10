import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  photoCover:string= ""
  contentTitle:string= "Noticia exemplo"
  contentDescription:string= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci excepturi, rerum commodi reprehenderit praesentium nam consequatur quidem voluptatem iste quia consequuntur architecto quod autem! Obcaecati possimus ut totam velit omnis!"

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )  
  }

}
