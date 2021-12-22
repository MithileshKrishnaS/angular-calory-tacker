import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-food-list',
  templateUrl: './app-food-list.component.html',
  styleUrls: ['./app-food-list.component.css']
})
export class AppFoodListComponent implements OnInit {
  i=0;
  public foods=[
    {
      name : 'apple',
      image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcRfIW5tggAic_wBYqqZstYQzyvi407PIDA&usqp=CAU',
      calories :81,
      qty:1,
    },
    {
      name : 'mango',
      image : 'https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg',
      calories :60,
      qty:1,
    },
    {
      name : 'grapes',
      image : 'https://images.indianexpress.com/2021/02/grapes-1200.jpg?w=389',
      calories :67,
      qty:1,
    },
    {
      name : 'egg',
      image : 'https://i.guim.co.uk/img/media/db9a96e1251a41a215ada849407983cedadc2fbb/0_252_2574_1545/master/2574.jpg?width=620&quality=85&auto=format&fit=max&s=a8bfe336f62de9f3d69f11caccdc475f',
      calories :155,
      qty:1,
    },
  ]
  isClicked=false;
  public food1=[
    {
      name : '',
      image : '',
      calories : 45,
      qty:1,
    },
  ]
  name='';
  calories:number=0;
  image='';
  searchstr:string='';
  total=0;
  qaty:number=1;
  constructor() { }

  ngOnInit(): void {
  }

  addfood()
  {
    console.log(this.qaty);
    this.foods.push({name :this.name, image: this.image, calories: this.calories, qty:this.qaty});
  }

  addl=false;
  addlist(n:any,val:any)
  {
    this.isClicked=true;
    n.qty=val;
    console.log(val);
    this.total=this.total+(n.calories*n.qty);
    // this.food1.qty=this.qaty;
    this.food1.push(n)
  }

}
