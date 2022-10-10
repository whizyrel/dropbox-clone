import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public footerContents: {
    header: string;
    links: { title: string; link?: string; }[];
  }[] = [
      {
        header: 'Dropbox',
        links: [
          { title: 'Desktop app' },
          { title: 'Mobile app' },
          { title: 'Integrations' },
          { title: 'Featiures' },
          { title: 'Solutions' },
          { title: 'Do more than store' },
          { title: 'Security' },
          { title: 'Advance access' },
        ],
      },
      {
        header: 'Products',
        links: [
          { title: 'Plus' },
          { title: 'Professional' },
          { title: 'Business' },
          { title: 'Enterprise' },
          { title: 'HelloSign' },
          { title: 'DocSend' },
          { title: 'Plans' },
          { title: 'Product updates' },
        ]
      },
      {
        header: 'Support',
        links: [
          { title: 'Help Center' },
          { title: 'Contact us' },
          { title: 'Privacy & terms' },
          { title: 'Cookie policy' },
          { title: 'Cookie & CCPA preferences' },
          { title: 'Cookie & CCPA preferences' },
        ],
      },
      {
        header: 'Community',
        links: [
          { title: 'Blog' },
          { title: 'Developers' },
          { title: 'Community Forums' },
          { title: 'Referrals' },
        ],
      },
      {
        header: 'Company',
        links: [
          { title: 'About us' },
          { title: 'Jobs' },
          { title: 'Investor relation' },
          { title: 'ESG' },
          { title: 'Partners' },
        ]
      },
    ];

  constructor() { }

  ngOnInit(): void { }
}
