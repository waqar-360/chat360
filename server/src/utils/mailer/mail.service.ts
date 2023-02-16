import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}
  /**
   * Send Password Recovery Email To User on Forgot Password
   * @param email
   * @param token
   */
  async sendForgotPasswordMail(email: string, token: string) {
    const url = process.env.APP_URL;
    const subRoute = 'changepassword';
    await this.mailerService.sendMail({
      to: email,
      from: '"Support Team" <support@chat360.com>', // override default from
      subject: 'Binance+ ! Forgot Password',
      html: `
      <div style="background: #EAF0F6;
    text-align: center;
    font-family: Arial;
    padding: 3rem 0.5rem">
    <div style="margin: 0 auto;
    word-wrap: break-word;
    width: 100%;
    max-width: 425px;">

        <h2 style="font-style: normal;
        font-weight: normal;
        font-size: 1.688rem;
        line-height: 1.938rem;">
            Change Password
        </h2>

        <div style="background: #1F1F20;  
        max-width: 100%;
        width: auto;
        padding: 2rem 0;
        ">
            <img src='https://cdn.discordapp.com/attachments/939134175997472768/948876373550837780/logo.png' style="
                margin: 0 auto;
               max-width: 248px;
               width: 100%;
               height: auto;" />
        </div>
        <div style=" background: #F8F8FF;
        max-height: 100%;
        height: auto;
        text-align: left;
        padding: 10%;">
            <h4 style=" font-style: normal;
            font-weight: normal;
            font-size: 1rem;
            line-height: 1.125rem;
            text-align: left;
            color: #000000;
            margin-bottom: 2rem;">
                Your request for changing password
            </h4>

            <p style="font-style: normal;
            font-weight: normal;
            font-size: 0.688rem;
            line-height: 0.813rem;
            color: #000000;
            margin-bottom: 2rem;">
                Click on the button below to change your password
            </p>
            <a href="${url}${subRoute}?token=${token}" target="_blank" and rel="noopener noreferrer" style="  background: #F2B80E;
                color: #fff;
                text-decoration: none;
                border-radius: 0.375rem;
                padding: 3% 5%;
                font-weight: bolder;
                border-width: 0rem;">
                Change Password
            </a>
        </div>
        <div style="  background: #1F1F20;
            text-align: center;
            max-width: 100%;
            width: auto;">
            <img src='https://cdn.discordapp.com/attachments/939134175997472768/948876373550837780/logo.png' style="   max-width: 132px;
                width: 100%;
                height: 100%;
                max-height: 40px;
                margin: 1rem;" />
            <p style="font-style: normal;
            font-weight: normal;
            font-size: 0.688rem;
            line-height: 0.813rem;
            color: #fff;
            margin-bottom: 2rem;">
                Copyright©2022 chat360, All rights reserved
            </p>
            <a target="_blank" href="https://www.instagram.com/accounts/login/" style="text-decoration:none;">
                <img style=" height: 0.81rem;
            width: 0.81rem;
            border-radius: 0rem;
            margin:0 0 1.756rem 0.5rem;"
                    src='https://cdn.discordapp.com/attachments/939134175997472768/947784304740671528/youtube.png'
                    alt="youtube" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/login" style="text-decoration:none;">
                <img style=" height: 0.81rem;
            width: 0.81rem;
            border-radius: 0rem;
            margin:0 0 1.756rem 0.5rem;"
                    src='https://cdn.discordapp.com/attachments/939134175997472768/947784304996519966/insta.png'
                    alt="insta" />
            </a>
            <a target="_blank" href="https://www.facebook.com/login/" style="text-decoration:none;">
                <img style=" height: 0.81rem;
            width: 0.81rem;
            border-radius: 0rem;
            margin:0 0 1.756rem 0.5rem;"
                    src='https://cdn.discordapp.com/attachments/939133756474785824/947785497151938610/Vector8.png'
                    alt="facebook" />
        </div>
    </div>
</div>`,
    });
  }
}
