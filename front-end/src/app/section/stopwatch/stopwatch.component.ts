import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  providers: [
    PageToggleService // 2. 컴포넌트 데코레이터 안에서 정의하기
  ],
})
export class StopwatchComponent implements OnInit {
  
  present = 'welcome';

  commandText;

  constructor(
    private router: Router, // 여기서는 타입을 명시해야 한다.
    public pageToggleService: PageToggleService,
    
    ) { }

  startTime($event) {
    this.present = $event;
  }

  // 1.
  ngAfterContentInit() {
    console.log('ng after content init');
  }

  // 2. -> 3. 자식 컴포넌트인 time-display 컴포넌트의 ng on change부터 전부 실행 
  ngAfterContentChecked() {
    console.log('ng after content checked');
  }

  // 4. 
  ngAfterViewInit() {
    console.log('ng after view init');
  }

  // 5.
  ngAfterViewChecked() {
    console.log('ng after view checked');
  }

  goClock() {
    // this.router.navigateByUrl('/clock');
    // router 라는 서비스를 통하여
    // url로 네비게이팅 시키겠다.
    // 라우터를 직접 조작해서 url을 바꾸겠다.

    this.pageToggleService.goPage('/clock');
  }


  ngOnInit(): void {
  }

}
