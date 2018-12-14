import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { P404Component } from "./p404/p404.component";
import {ReloComponent} from "./relo/relo.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {LoginByPhoneComponent} from "./loginByPhone/loginByPhone.component";
import {CenterComponent} from "./center/center.component";
import {MineComponent} from "./mine/mine.component";
import {BindingMobilePhoneComponent} from "./bindingMobilePhone/bindingMobilePhone.component";
import {ChangePhoneComponent} from "./changePhone/changePhone.component";
import {MyAccountComponent} from "./my-account/my-account.component";
import {HomeComponent} from "./home/home.component";
import {MycarComponent} from "./mycar/mycar.component";
import {UsersiteComponent} from "./usersite/usersite.component";
import {AddSiteComponent} from "./add-site/add-site.component";
import {SureOrderComponent} from "./sure-order/sure-order.component";
import {OemptyComponent} from "./oempty/oempty.component";
import {OreceiverComponent} from "./oreceiver/oreceiver.component";
import {OresultComponent} from "./oresult/oresult.component";
import {OsuccessComponent} from "./osuccess/osuccess.component";
import {AboutfridayComponent} from "./aboutfriday/aboutfriday.component";
import {YouxianComponent} from "./youxian/youxian.component";
import {IntegralOrderComponent} from "./integral-order/integral-order.component";
import {LineItemComponent} from "./line-item/line-item.component";
import {MyOrderComponent} from "./my-order/my-order.component";
import {MyPointsComponent} from "./my-points/my-points.component";
import {MywalletComponent} from "./mywallet/mywallet.component";
import {OrderDetailsComponent} from "./order-details/order-details.component";
import {OrderRateComponent} from "./order-rate/order-rate.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {FeedbackComponent} from "./feedback/feedback.component";
import {MynewsComponent} from "./mynews/mynews.component";
import {MessageForDetailsComponent} from "./message-for-details/message-for-details.component";
import {MyCollectionComponent} from "./my-collection/my-collection.component";
import {RecentBrowseComponent} from "./recent-browse/recent-browse.component";
import {ShowmoreComponent} from "./showmore/showmore.component";

const routes:Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'404',component:P404Component},
  {path:"relo",component:ReloComponent,children:[
      {path:"login",component:LoginComponent},
      {path:"register",component:RegisterComponent},
      {path:"loginbyphone",component:LoginByPhoneComponent}
    ]},
  {path:"center",component:CenterComponent,children:[
      {path:"mine",component:MineComponent},
      {path:"bindingphone",component:BindingMobilePhoneComponent},
      {path:"changephone",component:ChangePhoneComponent},
      {path:"myaccount",component:MyAccountComponent},
      {path:"usersite",component:UsersiteComponent},
      {path:"addsite",component:AddSiteComponent},
      {path:"integralorder",component:IntegralOrderComponent},
      {path:"lineitem",component:LineItemComponent},
      {path:"myorder",component:MyOrderComponent},
      {path:"mypoints",component:MyPointsComponent},
      {path:"mywallet",component:MywalletComponent},
      {path:"orderdetails",component:OrderDetailsComponent},
      {path:"orderrate",component:OrderRateComponent},
      {path:"changepassword",component:ChangePasswordComponent},
      {path: 'feedback', component: FeedbackComponent},
      {path: 'mynews', component: MynewsComponent},
      {path: 'messageForDetails', component: MessageForDetailsComponent},
      {path: 'mycollection', component: MyCollectionComponent},
      {path: 'recent', component: RecentBrowseComponent}
    ]},
  {path:"home",component:HomeComponent},
  {path:"mycar",component:MycarComponent},
  {path:"sureorder",component:SureOrderComponent},
  {path:"oempty",component:OemptyComponent},
  {path:"oreceiver",component:OreceiverComponent},
  {path:"oresult",component:OresultComponent},
  {path:"osuccess",component:OsuccessComponent},
  {path:"aboutfriday",component:AboutfridayComponent},
  {path:"youxian",component:YouxianComponent},
  {path:"showmore",component:ShowmoreComponent}
];
@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
