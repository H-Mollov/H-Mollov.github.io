import { Component, OnInit } from '@angular/core';
import * as database from '../database/data.json'

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  certificates: Array<any> = database.certificates;

}
