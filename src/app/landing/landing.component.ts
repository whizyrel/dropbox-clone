import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  public benefits: { title: string; description: string; img?: string[] }[] = [
    {
      title: 'Get 2 GB of cloud storage for free with Dropbox Basic',
      description:
        'Save and access your files from any device, and share them with anyone. Discover what Dropbox can do for you—get a free account, no strings attached!',
    },
    {
      title: 'Dropbox Plus has room for all your content with space to spare',
      description:
        'Safeguard your photos, personal docs, work files, and much more. Save everything with 2,000 GB of space—and get some handy tools to help you stay organized.',
    },
    {
      title: 'Dropbox Family is a place for everyone with space for everything',
      description:
        'Share 2,000 GB of storage between 6 people. Each family plan member gets their own private Dropbox account for less than the price of two Plus plans.',
    },
    {
      title:
        'Make life easier for you and your clients with Dropbox Professional',
      description:
        'Get our full suite of premium productivity and sharing tools—plus 3,000 GB of space. Dropbox Professional makes it easier for you to work with colleagues and clients.',
    },
    {
      title: 'Streamline your document workflow with HelloSign',
      description: `Save yourself time and hassle with HelloSign. You can sign legally-binding agreements with a few clicks. And it's just as easy to request a signature from someone else.`,
    },
    {
      title:
        'Centralize, secure, and easily access your work with Dropbox Standard',
      description: `Safeguard sensitive and confidential info. Automate time-consuming processes with powerful admin and collaboration tools. And easily recover your work if something ever goes wrong. Minimum 3 users per plan.`,
    },
    {
      title: 'DocSend lets you track, analyze, and optimize your content',
      description: `Safely share business-critical documents and get real-time performance insights. DocSend helps you manage and optimize your company’s most important content.`,
    },
    {
      title:
        'Proactively detect threats to your team’s content with Dropbox Advanced',
      description: `Always-on security monitoring and alerts. Extended 1-year version history and file recovery. Plus all the storage space you need. Dropbox Advanced is a secure collaboration solution for your entire team. Minimum 3 users per plan.`,
    },
  ];
  // TODO add image switching later
  public selectedImage: any;
  public selectedBenefit!: number;

  public integratedTools: {
    name: string;
    description: string;
    image: string;
  }[] = [
    {
      name: 'Zoom',
      description:
        'Enhance remote collaboration with Zoom instant meetings and video recordings.',
      image:
        'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_1@2x.png.transform/80q/img.png',
    },
    {
      name: 'Slack',
      description:
        'Bring Slack conversations and Dropbox content together to keep teams in sync',
      image:
        'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_2@2x.png.transform/80q/img.png',
    },
    {
      name: 'Adobe Creative Cloud',
      description:
        'Easily and securely send files to clients and vendors from within Adobe Photoshop.',
      image:
        'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_3@2x.png.transform/80q/img.png',
    },
    {
      name: 'Microsoft Office',
      description:
        'Easily access, edit, and share Office docs online in Dropbox.',
      image:
        'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_4@2x.png.transform/80q/img.png',
    },
    {
      name: 'Google Workspace',
      description:
        'Create, edit, and share Google Docs, Sheets, and Slides in Dropbox.',
      image:
        'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_5@2x.png.transform/80q/img.png',
    },
    {
      name: 'Trello',
      description:
        'Collaborate on team projects in Trello with Dropbox content.',
      image:
        'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_6@2x.png.transform/80q/img.png',
    },
    {
      name: 'Canvas',
      description:
        'Upload course files or assignments straight from Dropbox to Canvas.',
      image:
        'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_7@2x.png.transform/80q/img.png',
    },
    {
      name: 'Asana',
      description:
        'Track all of your team’s work with Asana while keeping Dropbox content alongside.',
      image:
        'https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/Integrations_8@2x.png.transform/80q/img.png',
    },
  ];
  public showTestimonialsLargeControlButtons = false;
  public testimonials: {
    image: string;
    content: string;
    person: string;
    color: string;
    fontColor: string;
  }[] = [
    {
      image:
        'https://aem.dropbox.com/cms/content/dam/dropbox/dmep/assets/articles/DigitalNomads2_1440x960.jpg.transform/80q/img.jpg',
      content:
        'Dropbox has been tremendously helpful for social media. I can hop on anytime and pull whatever photo is inspiring me to post.',
      person: 'Mary Ashley Krogh (MAK), Illustrator and Graphic Designer',
      color: '#9b0032',
      fontColor: '#fff',
    },
    {
      image:
        'https://aem.dropbox.com/cms/content/dam/dropbox/dmep/assets/customer-success-stories/sundance/sundance_editor.png.transform/80q/img.jpg',
      content:
        'Dropbox increased our team’s collaboration while working from home, which has increased our flexibility and could revolutionize our office culture.',
      person:
        'Adam Montgomery, Senior Manager of Programming, Sundance Film Festival',
      color: '#fa551e',
      fontColor: '#000',
    },
    {
      image:
        'https://aem.dropbox.com/cms/content/dam/dropbox/dmep/en-us/assets/articles/customer-success-stories/creativity-explored/1-ce-c03-hero@2x.jpg.transform/1920w/80q/img.jpg',
      content:
        "We're a grass-roots nonprofit. When we use a tool that the rest of the design world uses, it helps professionalize our organization.",
      person: 'Ann Kappes, Director of Art Partnerships at Creativity Explored',
      color: '#007891',
      fontColor: '#fff',
    },
    {
      image:
        'https://aem.dropbox.com/cms/content/dam/dropbox/dmep/assets/customer-success-stories/semi-permanent/semipermanent1_hero_b.png.transform/1920w/80q/img.jpg',
      content:
        'Dropbox easily allows me to transfer what’s in my mind to another person.',
      person:
        'Murray Bell, Founder and Executive Creative Director of Semi Permanent',
      color: '#b4dc19',
      fontColor: '#000',
    },
    {
      image:
        'https://aem.dropbox.com/cms/content/dam/dropbox/experience/en-us/drop-in-video-series/SOPHIA_Still005.png.transform/80q/img.jpg',
      content:
        "Our team is working remotely—everyone's in a different time zone. Dropbox is a great hub for us to all work at once and seamlessly share files.",
      person: 'Sophia Chang, Illustrator and Designer',
      color: '#78286e',
      fontColor: '#fff',
    },
    {
      image:
        'https://aem.dropbox.com/cms/content/dam/dropbox/experience/en-us/drop-in-video-series/KingChildren_1920x1280.png.transform/1920w/80q/img.jpg',
      content:
        "Dropbox version control is very important. You may want to go back to an earlier version because there's an idea in there that you really like.",
      person: 'Sahir Zaveri, CEO of King Children',
      color: '#ffafa5',
      fontColor: '#000',
    },
    {
      image:
        'https://aem.dropbox.com/cms/content/dam/dropbox/dmep/assets/customer-success-stories/hope-gallery/hope_quote.png.transform/80q/img.jpg',
      content:
        'Creative growth happens when you don’t have to worry about managing storage.',
      person: 'Andi Scull, Founder and Creative Director, HOPE Organization',
      color: '#fad24b',
      fontColor: '#000',
    },
  ];
  public selectedTestimonial!: number;

  constructor() {}

  ngOnInit(): void {
    this.selectedTestimonial = 0;
  }

  public selectPreviousTestimonial() {
    if (this.selectedTestimonial === 0) {
      this.selectedTestimonial = this.testimonials.length - 1;

      return;
    }

    this.selectedTestimonial--;
  }

  public selectNextTestimonial() {
    if (this.selectedTestimonial > this.testimonials.length - 1) {
      this.selectedTestimonial = 0;

      return;
    }

    this.selectedTestimonial++;
  }
}
