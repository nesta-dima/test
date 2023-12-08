import { Component } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  isMenuOpen = false;
  constructor(private menuService: MenuService, private http: HttpClient) {
    this.menuService.menuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
    });
  }

  orderForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    instagram: new FormControl(''),
    site: new FormControl(''),
    info: new FormControl('')
  });

  isSend = false
  submit() {
    if(this.orderForm.valid){
      this.sendTelegramMessage();
    }
  }

  private token = '6745784236:AAGsrcPxbZ9fVotAE_MTcFiXVB4obyVuxmM';
  private chatId = '-908098511';
  sendTelegramMessage() {
    this.http
      .get(`https://api.telegram.org/bot${this.token}/getUpdates`)
      .subscribe((response: any) => {
        this.http
          .post(`https://api.telegram.org/bot${this.token}/sendMessage`, {
            chat_id: this.chatId,
            text: `
            Заявка: ${JSON.stringify(this.orderForm.value)}
            Выбранные сервисы: ${this.works.filter(work => this.category.includes(work.value)).map(work => work.name).join(', ')}:
            `,
          })
          .subscribe((response: any) => {
            if (response.ok) {
              this.isSend = true;
              this.orderForm.reset();
            }
          });
      });
  }


  works=[
    {name : "Web design & development", title : "order.form.services.s1", value: '1', checked : false},
    {name : "Social media strategy and management", title : "order.form.services.s2",value: '2', checked : false},
    {name : "Print collateral", value: '3', title : "order.form.services.s3",checked : false},
    {name : "Brand consulting", value: '4', title : "order.form.services.s4",checked : false},
    {name : "Packaging design", value: '5', title : "order.form.services.s5",checked : false},
    {name : "Branding (logo & brand id)", title : "order.form.services.s6", value: '6', checked : false},
    {name : "haven't decided yet, need to discuss", title : "order.form.services.s7",value: '7', checked : false}
  ];

  checkChange(i: string) {
    if (this.category.includes(i)) {
      this.category.splice(this.category.indexOf(i), 1);
    }else{
      this.category.push(i);
    }
  }
  category: string[] = []

}
