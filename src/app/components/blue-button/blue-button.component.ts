import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'totalfit-blue-button',
  templateUrl: './blue-button.component.html',
  styleUrls: ['./blue-button.component.scss']
})
export class BlueButtonComponent implements OnInit {

  @Input() useStyleForText: false;
  @Input() useCommonStyle: boolean;
  @Input() mainText: string;
  @Input() showSvg: boolean;
  @Input() submitType: string;
  constructor() {
  }

  ngOnInit(): void {
  }

}
