import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { PageToggleService } from 'src/app/share/page-toggle.service';


@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
  providers: [
              PageToggleService,
            ]
})
export class TimeDisplayComponent implements OnInit {
  
  @Input() inputData:string;

  min : number = 0;
  sec: number = 0;
  ms: number = 0;

  timeInterval;

  // 여기서 시계로 이동 페이지를 눌렀다가
  // 스탑워치로 다시 돌아오면 스탑워치의 값들이 초기화가 되어있다
  // 이것을 유지시켜주기 위해서 우리는 생명주기를 사용한다.

  constructor(
    public pageToggleService: PageToggleService
  ) {
  
    // console.log(this.inputData);
  }

  // timeStart() {
  //   this.timeStop();
  //   this.timeInterval = setInterval(() => {
  //     this.ms++;
  //   }, 10)
  // }

  timeStart() {
    // this.pageToggleService.plusCount();

      this.timeStop();
      this.timeInterval = setInterval(() => {

      if(this.ms >= 100) {
        this.ms = 0;
        this.sec++;
      }
      if(this.sec >= 60) {
        this.sec = 0;
        this.min++;
      }
      this.ms++;
    }, 10)
  }

  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
    this.sec = 0;
    this.min = 0;
  }



  //       switch(changes[propName].currentValue ) {
  //         case 'start': 
  //           this.timeStart();
  //           break;
  //         case 'stop':
  //           this.timeStop();
  //           break;
  //         case 'reset':
  //           this.timeReset();
  //           break;
          
  //       }

  //     }
  //   }
  // }
  //   setInterval(() => {
  //     this.test += 1
  //     // 1초마다 콜백함수가 실행되면서 1이 더해진다.

  //   }, 1000)
  //  }


  // 변화 감지 함수 -> 가장 먼저 실행 돼서 변화에 대해서 감지한다.
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    for(let propName in changes) {
        console.log(changes);
      
    }
  }

  ngOnInit() { // constructor 다음으로 컴포넌트가 생성될 때 가장 처음에 실행되는 메소드
    // 한 번 불려지고 그 다음에는 불려지지 않음
    // 컴포넌트가 생성될 때 준비할 값. 다시 불릴 필요가 없는 것들을 여기에 배치
    console.log("ng on init");
  }

  ngDoCheck() {
    // check는 컴포넌트 내에서 움직임이 있으면 감지해서 로직을 실행함.
    // 여러번 불릴 수 있음.
    // 만약 리셋이라는 버튼을 누르면 값이 변화되니까
    // 그 때 이 메서드가 실행됨
    console.log("ng do check");
  }


  ngAfterContentInit() {
    // 
    console.log('ng after content init');
  }

  ngAfterContentChecked() {
    console.log('ng after content checked');
  }

  // 컴포넌트가 렌더링 다 되는 마지막 단계에 실행된다.
  ngAfterViewInit() {
    console.log('ng after view init');
  }

  // 컴포넌트가 렌더링 다 되는 마지막 단계에 실행된다.
  ngAfterViewChecked() {
    console.log('ng after view checked');
  }

  ngOnDestroy() { // 컴포넌트가 사라질 때 작동
    console.log('destroy');
  }


}
