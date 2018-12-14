import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import {FooterComponent} from "./footer/footer.component";
import {P404Component} from "./p404/p404.component";
import { AppRoutingModule } from './app-routing.module';
import { ReloComponent } from './relo/relo.component';
import { RegisterComponent } from './register/register.component';
import {HeaderComponent} from "./header/header.component";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LoginByPhoneComponent} from "./loginByPhone/loginByPhone.component";
import { CenterComponent } from './center/center.component';
import { MineComponent } from './mine/mine.component';
import {BindingMobilePhoneComponent} from "./bindingMobilePhone/bindingMobilePhone.component";
import { ChangePhoneComponent } from './changePhone/changePhone.component';
import {MyAccountComponent} from "./my-account/my-account.component";
import {HomeComponent} from "./home/home.component";
import {MycarComponent} from "./mycar/mycar.component";
import { UsersiteComponent } from './usersite/usersite.component';
import { AddSiteComponent } from './add-site/add-site.component';
import {SureOrderComponent} from "./sure-order/sure-order.component";
import {AboutfridayComponent} from "./aboutfriday/aboutfriday.component";
import {YouxianComponent} from "./youxian/youxian.component";
import {OemptyComponent} from "./oempty/oempty.component";
import {OreceiverComponent} from "./oreceiver/oreceiver.component";
import {OresultComponent} from "./oresult/oresult.component";
import {OsuccessComponent} from "./osuccess/osuccess.component";
import {GiveService} from "./services/give.service";
import {IntegralOrderComponent} from "./integral-order/integral-order.component";
import {LineItemComponent} from "./line-item/line-item.component";
import {MyOrderComponent} from "./my-order/my-order.component";
import {MyPointsComponent} from "./my-points/my-points.component";
import {MywalletComponent} from "./mywallet/mywallet.component";
import {OrderDetailsComponent} from "./order-details/order-details.component";
import {OrderRateComponent} from "./order-rate/order-rate.component";
import {OrderService} from "./services/order.service";
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MynewsComponent } from './mynews/mynews.component';
import { MessageForDetailsComponent } from './message-for-details/message-for-details.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { RecentBrowseComponent } from './recent-browse/recent-browse.component';
import {ShowmoreComponent} from "./showmore/showmore.component";

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    HeaderComponent,
    FooterComponent,
    P404Component,
    ReloComponent,
    RegisterComponent,
    LoginComponent,
    LoginByPhoneComponent,
    CenterComponent,
    MineComponent,
    BindingMobilePhoneComponent,
    ChangePhoneComponent,
    MyAccountComponent,
    HomeComponent,
    MycarComponent,
    UsersiteComponent,
    AddSiteComponent,
    SureOrderComponent,
    AboutfridayComponent,
    YouxianComponent,
    OemptyComponent,
    OreceiverComponent,
    OresultComponent,
    OsuccessComponent,
    IntegralOrderComponent,
    LineItemComponent,
    MyOrderComponent,
    MyPointsComponent,
    MywalletComponent,
    OrderDetailsComponent,
    OrderRateComponent,
    ChangePasswordComponent,FeedbackComponent,
    MynewsComponent,
    MessageForDetailsComponent,
    MyCollectionComponent,
    RecentBrowseComponent,
    ShowmoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient,GiveService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
