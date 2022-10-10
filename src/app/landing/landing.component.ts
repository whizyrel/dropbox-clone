import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public benefits: { title: string, description: string, img?: string[]; }[] = [{ title: 'Get 2 GB of cloud storage for free with Dropbox Basic', description: 'Save and access your files from any device, and share them with anyone. Discover what Dropbox can do for you—get a free account, no strings attached!' }, {
    title: 'Dropbox Plus has room for all your content with space to spare',
    description: 'Safeguard your photos, personal docs, work files, and much more. Save everything with 2,000 GB of space—and get some handy tools to help you stay organized.',
  }, { title: 'Dropbox Family is a place for everyone with space for everything', description: 'Share 2,000 GB of storage between 6 people. Each family plan member gets their own private Dropbox account for less than the price of two Plus plans.' }, {
    title: 'Make life easier for you and your clients with Dropbox Professional',
    description: 'Get our full suite of premium productivity and sharing tools—plus 3,000 GB of space. Dropbox Professional makes it easier for you to work with colleagues and clients.',
  },
  {
    title: 'Streamline your document workflow with HelloSign',
    description: `Save yourself time and hassle with HelloSign. You can sign legally-binding agreements with a few clicks. And it's just as easy to request a signature from someone else.`
  },
  {
    title: 'Centralize, secure, and easily access your work with Dropbox Standard',
    description: `Safeguard sensitive and confidential info. Automate time-consuming processes with powerful admin and collaboration tools. And easily recover your work if something ever goes wrong. Minimum 3 users per plan.`
  },
  {
    title: 'DocSend lets you track, analyze, and optimize your content',
    description: `Safely share business-critical documents and get real-time performance insights. DocSend helps you manage and optimize your company’s most important content.`
  },
  {
    title: 'Proactively detect threats to your team’s content with Dropbox Advanced',
    description: `Always-on security monitoring and alerts. Extended 1-year version history and file recovery. Plus all the storage space you need. Dropbox Advanced is a secure collaboration solution for your entire team. Minimum 3 users per plan.`,
  }
  ];
  // TODO add image switching later
  public selectedImage: any;
  public selectedBenefit!: number;

  public integratedTools: { name: string, description: string, image: string; }[] = [
    {
      name: 'Zoom', description: 'Enhance remote collaboration with Zoom instant meetings and video recordings.', image: 'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_1@2x.png.transform/80q/img.png' },
    { name: 'Slack', description: 'Bring Slack conversations and Dropbox content together to keep teams in sync', image: 'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_2@2x.png.transform/80q/img.png' },
    { name: 'Adobe Creative Cloud', description: 'Easily and securely send files to clients and vendors from within Adobe Photoshop.', image: 'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_3@2x.png.transform/80q/img.png' },
    { name: 'Microsoft Office', description: 'Easily access, edit, and share Office docs online in Dropbox.', image: 'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_4@2x.png.transform/80q/img.png' },
    { name: 'Google Workspace', description: 'Create, edit, and share Google Docs, Sheets, and Slides in Dropbox.', image: 'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_5@2x.png.transform/80q/img.png' },
    { name: 'Trello', description: 'Collaborate on team projects in Trello with Dropbox content.', image: 'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_6@2x.png.transform/80q/img.png' },
    { name: 'Canvas', description: 'Upload course files or assignments straight from Dropbox to Canvas.', image: 'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_7@2x.png.transform/80q/img.png' },
    { name: 'Asana', description: 'Track all of your team’s work with Asana while keeping Dropbox content alongside.', image: 'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_8@2x.png.transform/80q/img.png' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
