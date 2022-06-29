import { Component, OnInit } from '@angular/core';
import TrmApi, { TrmApiQuote } from 'trm-api';

@Component({
  selector: 'app-trm',
  templateUrl: './trm.component.html',
  styleUrls: ['./trm.component.css']
})
export class TrmComponent implements OnInit
{
  readonly trmApi = new TrmApi();
  public listTrm: TrmApiQuote[];

  constructor() { }


  ngOnInit(): void
  {
    this.getTrm();

    console.log(this.getTrm());
  }

  getTrm()
  {
    this.trmApi.history({ limit: 30, order: 'DESC' }).then((data) => this.listTrm= data);
  }
}
