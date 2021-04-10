import nodemailer, { Transporter } from 'nodemailer';

interface SendMail {
  to: {
    name: string;
    email: string;
  };
  from: {
    name?: string;
    email?: string;
  };
  subject: string;
  html: string;
}

export default class ZohoMailService {
  host: string;

  port: number;

  auth: {
    user: string;
    pass: string;
  };

  client: Transporter;

  constructor() {
    this.host = process.env.ZOHO_HOST;
    this.port = Number(process.env.ZOHO_PORT || 465);
    this.auth = {
      user: process.env.ZOHO_USER,
      pass: process.env.ZOHO_PASS,
    };

    this.client = nodemailer.createTransport({
      host: this.host,
      port: this.port,
      auth: this.auth,
    });
  }

  async sendMail({ from, html, subject, to }: SendMail): Promise<void> {
    const email = String(process.env.FROM_EMAIL_ADDRESS);
    const name = String(process.env.FROM_NAME);

    await this.client.sendMail({
      from: {
        name: from?.name || name,
        address: from?.email || email,
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html,
    });
  }
}
