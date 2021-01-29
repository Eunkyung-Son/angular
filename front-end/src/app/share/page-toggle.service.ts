import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StopwatchComponent } from '../section/stopwatch/stopwatch.component';
import { StopwatchModule } from '../section/stopwatch/stopwatch.module';

@Injectable( // 앵귤러에서 서비스로 사용할 수 있다.
  // 3. 인젝터블 데코레이터의 프로퍼티인 providedIn에서 정해주기
  // 주입하는 곳에서 정해주는게 아니라 Injectable한 
  // 객체가 어디에 들어갈 지 여기에다가 명시해줌
  //{providedIn: StopwatchComponent}
)

export class PageToggleService {

  public routingCount = 0;

  constructor(
    private router  : Router
  ) { }

  plusCount(){
    this.routingCount++;

  }

  goPage(target) {
    this.routingCount++;
    this.router.navigateByUrl(target);
  }
}
