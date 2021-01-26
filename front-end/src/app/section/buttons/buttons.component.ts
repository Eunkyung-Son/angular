import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// import { EventEmitter } from 'events' // 인자가 있을 때

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {


  @Output() clickEvent = new EventEmitter();
  // 객체 생성

  constructor() { }

  // start($event:MouseEvent){
  //   // 매개변수 -> 이 이벤트가 어떤 이벤트인지 알 수 있다.
    
  //    console.log("test");
  //    console.log($event); // 마우스 이벤트에 대한 정보가 출력된다.
  // }

  executeButton(command){
    this.clickEvent.emit(command);
    //부모 객체가 이벤트를 기다리고 있다가 해당 버튼이 눌리면 데이터를 받을 수 있게끔
    // 자식 컴포넌트가 부모 컴포넌트에게 데이터를 전달해 줄 수 있는 구조로 만들어줌
  }

  ngOnInit(): void {
  }

}
