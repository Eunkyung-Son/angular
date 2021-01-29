import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SectionModule } from './section/section.module';
// 루트가 되는 모듈 
// component를 사용해주기 위해서 모듈에 등록해줌

@NgModule({ // 이 클래스를 모듈로 만들어 주겠다. -> 독립 가능한 기능의 상자
  declarations: [ // 다른 컴포넌트가 들어옴
    AppComponent, 
  ],
  imports: [
    BrowserModule, // 모듈이 들어옴
    AppRoutingModule,
    LayoutModule, // LayoutModule에 등록된 컴포넌트 사용 가능.6
    SectionModule,
  ],
  providers: [], // 컴포넌트가 아닌 서비스 로직들이 들어옴
  bootstrap: [AppComponent] // 처음 실행할 컴포넌트를 지정해줌
})
export class AppModule { }
