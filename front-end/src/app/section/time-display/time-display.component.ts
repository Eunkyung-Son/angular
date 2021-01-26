import { Component, OnInit, Input, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {
  
  @Input() inputData:string;

  min : number = 0;
  sec: number = 0;
  ms: number = 0;

  timeInterval;

  constructor() {
  
    // console.log(this.inputData);
  }

  timeStart() {

    this.timeInterval = setInterval(() => {
      this.ms++;
    }, 10)
  }

  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
  }

  // 변화 감지 함수
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    for(let propName in changes) {
      if(propName == 'inputData') {

        switch(changes[propName].currentValue) {
          case 'start': 
          this.timeStart();
            break;
          case 'stop':
            break;
          case 'reset':
            break;
          
        }

        this.timeStart();
      }
    }
  }
  //   setInterval(() => {
  //     this.test += 1
  //     // 1초마다 콜백함수가 실행되면서 1이 더해진다.

  //   }, 1000)
  //  }


  ngOnInit(): void { 
  }

}
