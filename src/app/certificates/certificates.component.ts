import { Component } from '@angular/core';
import * as database from '../database/data.json'

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {
  constructor() { }

  certificates: Array<any> = database.certificates;

  focusedCertificate;
  focusedCertificateStyle: String = "display: none";
  certificateListStyle;

  showCertificateDetails(event) {
    this.focusedCertificate = this.certificates.find(el => el.name === event.target.children[0].textContent);
    this.focusedCertificateStyle = "display: flex";
  }

  hideCertificateDetails(event) {
    this.focusedCertificateStyle = "display: none"
  }
}
