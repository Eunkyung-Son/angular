import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'stopwatch',
    pathMatch: 'full' 
    // prefix : 앞에 있는 아이들만 적용이 되면 경로 이동을 시키는 것
    // https://domain.com/index -> path 값이 아무것도 없는 스트링이면 전부 걸리게 된다.
    // path가 123이면 https://domain.com/123
    // -> 123이라는 prefix가 걸리면 무조건 redirect 시키겠다.

    // full : path 값이 무조건 123 이라고 정확하게 맞아 떨어져야 redirect가 된다.

    // full 이라고 지정을 해야 아무것도 안왔을 때 redirect 시키게 된다.

    // 라우터가 적용이 되려면 router-outlet이 html 파일에 사용이 되어야 한다.
  },
  // {
  //   path: 'index',
  //   component: AppComponent, // path 값이 index 일 때 AppComponent를 보여준다.
  //   // router-outlet을 쓰기에 적당한 구조는 section이다.
  //   // header나 footer는 그대로 있고 section 안의 내용을 바꾸고 싶을 때 사용한다.
  

  // }

  // 라우터가 이동하기 위해서는 두가지 방법이 있다.
  // 1. a 태그 안에 property 값을 넣는다.

  // router link 안에 슬래시가 없으면 에러가 난다.

  // 2. 라우터 프로바이더
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes) // 라우터 모듈이 가장 기본이 되는 루트 모듈에 등록이 된다.
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
