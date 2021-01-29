import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { interval } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  timeString : string;

  constructor(
    private router: Router
  ) {

    // setInterval(() => {

    // }, 1000)

    interval(1000)
      .pipe(map(()=>{
        return moment().format('YYYY-MM-DD HH:mm:ss')
    }))
    .subscribe(data => {
      this.timeString = data;
    })
   }

   goStopwatch() {
     this.router.navigateByUrl('stopwatch');
   }

   // 1초마다 setInterval 함수를 진행시킨다.
   // 1초마다 파이프를 꽂아서 맵 함수를 실행하여
   // 그 함수는 모먼트 라이브러리로 부터 현재 시간을 가져와서 리턴하는 파이프를 만들고
   // 거기로 부터 1초마다 날라오는 데이터를 구독하여 변화가 발생하면
   // timeString에 매핑을 해줘라.



   
  // 메소드로 템플릿 바인딩 되면 컴포넌트 내부의 변화가 있거나
  // 로직의 움직임이 있을 때 바로바로 로딩이 된다.

  // 메서드로 바인딩 하는 방법은 좋은 방법이 아니다
  // 콜이 계속 불려지기 때문에 전반적으로 애플리케이션 성능에 영향을 준다.

  // -> rxjs 사용
  // getCurrenttime() {
  //   let result = moment().format('YYYY-MM-DD HH:mm:ss')
  //   return result;
  // }

  ngOnInit(): void {
  }

}
