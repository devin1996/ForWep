import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorldspaceserviceService } from '../worldspaceservice.service';
import { Worldspace } from '../worldspace';
import { ActivatedRoute } from '@angular/router';
import { Mouse } from '../mouse';
import { MouseService } from '../mouse.service';

@Component({
  selector: 'app-worldspaceservice',
  templateUrl: './worldspaceservice.component.html',
  styleUrls: ['./worldspaceservice.component.css']
})
export class WorldspaceserviceComponent implements OnInit {

  worldspace: Worldspace;
  worldspace2: Worldspace;
  velocity: number;
  mouse: Mouse;

  constructor(private route: ActivatedRoute, private Worldspaceservice: WorldspaceserviceService, private mouseservice: MouseService, private router: Router) { }

  ngOnInit(): void {
    this.velocity = this.route.snapshot.params['velocity'];

    this.worldspace = new Worldspace();
    this.worldspace2 = new Worldspace();
    this.Worldspaceservice.getEntity().subscribe(data => {
      this.worldspace = data;
      //console.log(this.worldspace.velocity);
    });



  }

  enableworldspace() {

    this.mousepoosition();

  }

  addEntity() {
    this.draw();

    this.draw2();

  }

  mousepoosition() {

    let canvas = document.getElementById("canvas") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");
    let velocity = this.worldspace.velocity;

    let l = this.worldspace.length;
    let w = this.worldspace.length;

    let xy = this.worldspace.length;
    let yx = this.worldspace.length;
    routee: Router;

    this.mouse = new Mouse();

    canvas.addEventListener("click", function (ev: MouseEvent) {

      var mousePos = getMousePos(canvas, ev);
      getvalues(mousePos.x, mousePos.y);

      ctx?.beginPath();
      ctx?.arc(mousePos.x, mousePos.y, 3, 0, 2 * Math.PI);
      ctx?.stroke();
      ctx!.fillStyle = "black";
      ctx?.fill();



      // ctx?.beginPath();
      // ctx?.moveTo(100, 100);
      // ctx?.lineTo(100, 300);
      // ctx?.lineTo(300, 300);
      // ctx?.closePath();
      // ctx!.lineWidth = 1;
      // ctx?.stroke();

      // console.log(velocity);


    });


    function getMousePos(canvas: HTMLCanvasElement, evt: MouseEvent) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };

    }


    const getvalues = (x: number, y: number) => {
      this.mouse = new Mouse();
      this.mouse.mousex = x;
      this.mouse.mousey = y;

      this.drawingshapes(this.mouse.mousex, this.mouse.mousey);

      this.mouseservice.sendmousedetails(this.mouse).subscribe(data => {
        console.log(data);
      },
        error => console.log(error));

    }



  }

  drawingshapes(x: number, y: number) {


    this.Worldspaceservice.getEntity2().subscribe(data => {
      this.worldspace2 = data;
    });

    let l = this.worldspace2.length;
    let w = this.worldspace2.width;
    let xaxis = this.worldspace2.xaxis;
    let yaxis = this.worldspace2.yaxis;
    let choice = this.worldspace2.choice;

    let canvas = document.getElementById("canvas") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");
    if (choice == 1) {
      ctx?.beginPath();
      ctx?.arc(x + l * 200, y + l * 200, l * 200, 0, 30 * Math.PI);
      ctx?.stroke();
    }
    else if (choice == 2) {
      ctx?.beginPath();
      ctx?.rect(x, y, w * 200, l * 130);
      ctx?.stroke();
    } else {
      ctx?.beginPath();
      ctx?.moveTo(100, 100);
      ctx?.lineTo(100, 300);
      ctx?.lineTo(300, 300);
      ctx?.closePath();
      ctx!.lineWidth = 1;
      ctx?.stroke();
    }

  }

  draw() {
    let canvas = document.getElementById("canvas") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");
    // Draw Filled Shape 1 (center triangle of logo) 
    let l = this.worldspace.length;
    let w = this.worldspace.length;
    let xy = this.worldspace.length;
    let yx = this.worldspace.length;

    let guessX = 0; //stores user's click on canvas
    let guessY = 0; //stores user's click on canvas

    // canvas.addEventListener("click", function (ev: MouseEvent) {
    //   var mousePos = getMousePos(canvas, ev);
    //   alert(mousePos.x + ',' + mousePos.y);
    // });

    // function getMousePos(canvas: HTMLCanvasElement, evt: MouseEvent) {
    //   var rect = canvas.getBoundingClientRect();
    //   return {
    //     x: evt.clientX - rect.left,
    //     y: evt.clientY - rect.top
    //   };
    // }

    ctx?.beginPath();
    ctx?.arc(xy, yx, w, 0, 2 * Math.PI);
    ctx?.stroke();


    ctx?.beginPath();
    ctx?.rect(l, w, xy, yx);
    ctx?.stroke();

    ctx?.beginPath();
    ctx?.moveTo(100, 100);
    ctx?.lineTo(100, 300);
    ctx?.lineTo(300, 300);
    ctx?.closePath();
    ctx!.lineWidth = 1;
    ctx?.stroke();
  }

  draw2() {

    var canvas = document.getElementById('canvas123') as HTMLCanvasElement;
    var ctx = canvas.getContext('2d');

    function calc(myVal: number) {
      for (let i = 0; i <= 5; i++) {
        var radius = 452;
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        ctx?.beginPath();
        ctx?.arc(140, 140, 125, myVal * Math.PI, 0, true);
        ctx!.lineWidth = 2;
        ctx?.stroke();
      }
    };

    var count = 0;
    var parsedCount;
    function go() {
      if (count <= 200) {
        parsedCount = count * .01;
        //console.log(parsedCount)
        calc(parsedCount);
        count++;
      }
    }
    setInterval(go, Number(this.worldspace.velocity));
    //console.log(this.worldspace.velocity);

  }

  dragAndDrop() {

  }



  home(): void {
    this.router.navigate(['weapons']);
  }

  createweapon() {
    this.router.navigate(['create-weapon']);
  }

  newfeature() {
    this.router.navigate(['world-space']);

  }
  logout() {
    this.router.navigate(['admin-login']);
  }


}
