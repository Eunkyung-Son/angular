import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';



@NgModule({ 
  // declarations : 컴포넌트, 지시자(디렉티브), 파이프만 등록가능.
  declarations: [HeaderComponent,
                 FooterComponent,

              ], // 앵귤러 컴포넌트는 하나의 모듈에 무조건 등록이 되어있어야 한다. 그래야만 사용이 가능하다.
  // 하나의 컴포넌트를 두개의 모듈에 등록할 수는 없다.
  imports: [
    CommonModule
  ],

  exports: [
     // 이 앵귤러 모듈이 이 컴포넌트를 내보내서 다른 모듈이 이 컴포넌트를 사용할 수 있다.
            HeaderComponent,
            FooterComponent,
    // 이 모듈에서 테스트컴포넌트를 익스포트 하지 않으면 이 컴포넌트는 외부에서 사용될 수 없다.
  ]
})
export class LayoutModule { }
