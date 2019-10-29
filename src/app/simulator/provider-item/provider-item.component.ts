import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-provider-item',
  templateUrl: './provider-item.component.html',
  styleUrls: ['./provider-item.component.css']
})
export class ProviderItemComponent implements OnInit {
  country: string;
  @ViewChild('providerImg') provider_img: ElementRef;
  @ViewChild('providerName') provider_name: ElementRef;
  constructor() {}

  ngOnInit() {}
  setProvider(provider: string) {
    this.country = provider;
    console.log('The Provider Selected is: ' + provider);

    if (provider == 'Western Union') {
      this.provider_img.nativeElement.src = 'assets/simulator/providers/wu.png';
    } else if (provider == 'Money Gram') {
      this.provider_img.nativeElement.src = 'assets/simulator/providers/mg.png';
    }
    this.provider_name.nativeElement.innerHTML = provider;
  }
}
