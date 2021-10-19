"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[778],{778:(b,Z,i)=>{i.r(Z),i.d(Z,{OrderModule:()=>y});var s=i(8583),g=i(4466),d=i(15),t=i(3018),a=i(2340),u=i(1841);let p=(()=>{class r{constructor(e){this.http=e}getAllOrders(){return this.http.get(a.N.apiUrl+"order")}getOrderById(e){return this.http.get(a.N.apiUrl+"order/"+e)}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(u.eN))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function T(r,o){if(1&r){const e=t.EpF();t.TgZ(0,"tr",8),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw(2).details(l)}),t.TgZ(1,"td",9),t.TgZ(2,"strong"),t._uU(3),t.qZA(),t.qZA(),t.TgZ(4,"td",9),t._uU(5),t.qZA(),t.TgZ(6,"td",9),t._uU(7),t.qZA(),t.TgZ(8,"td",10),t.TgZ(9,"strong"),t._uU(10),t.ALo(11,"currency"),t.qZA(),t.qZA(),t.TgZ(12,"td",9),t._uU(13),t.qZA(),t.qZA()}if(2&r){const e=o.$implicit;t.xp6(3),t.hij("#",e.id,""),t.xp6(2),t.Oqu(e.orderDate),t.xp6(2),t.Oqu(e.deliveryMethod),t.xp6(3),t.Oqu(t.lcZ(11,5,e.total)),t.xp6(3),t.Oqu(e.status)}}function m(r,o){if(1&r&&(t.ynx(0),t.TgZ(1,"div",2),t.TgZ(2,"table",3),t.TgZ(3,"thead"),t.TgZ(4,"tr"),t.TgZ(5,"th",4),t.TgZ(6,"div",5),t._uU(7,"Id"),t.qZA(),t.qZA(),t.TgZ(8,"th",4),t.TgZ(9,"div",5),t._uU(10,"OrderDate"),t.qZA(),t.qZA(),t.TgZ(11,"th",4),t.TgZ(12,"div",5),t._uU(13,"Delivery"),t.qZA(),t.qZA(),t.TgZ(14,"th",4),t.TgZ(15,"div",6),t._uU(16,"Total"),t.qZA(),t.qZA(),t.TgZ(17,"th",4),t.TgZ(18,"div",6),t._uU(19,"Status"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"tbody"),t.YNc(21,T,14,7,"tr",7),t.qZA(),t.qZA(),t.qZA(),t.BQk()),2&r){const e=t.oxw();t.xp6(21),t.Q6J("ngForOf",e.orders)}}function A(r,o){1&r&&(t.ynx(0),t.TgZ(1,"h4",11),t._uU(2,"You have no order to show"),t.qZA(),t.BQk())}let q=(()=>{class r{constructor(e){this.router=e}ngOnInit(){}details(e){this.router.navigate(["order/details"],{state:e})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(d.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-order-totals"]],inputs:{orders:"orders"},decls:3,vars:2,consts:[[1,"container","mt-4"],[4,"ngIf"],[1,"table-responsive"],[1,"table"],["scope","col",1,"border-0","bg-light"],[1,"p-2","px-3","text-center","text-uppercase"],[1,"p-2","text-center","px-3","text-uppercase"],["style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[2,"cursor","pointer",3,"click"],[1,"align-middle","text-center"],[1,"align-middle","text-right"],[1,"text-danger"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,m,22,1,"ng-container",1),t.YNc(2,A,3,0,"ng-container",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",n.orders),t.xp6(1),t.Q6J("ngIf",!n.orders))},directives:[s.O5,s.sg],pipes:[s.H9],styles:["tr[_ngcontent-%COMP%]:hover{background-color:#bebdbd}"]}),r})(),h=(()=>{class r{constructor(e){this.orderService=e}ngOnInit(){this.orderService.getAllOrders().subscribe(e=>{this.orders=e},e=>console.log(e))}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(p))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-order"]],decls:1,vars:1,consts:[[3,"orders"]],template:function(e,n){1&e&&t._UZ(0,"app-order-totals",0),2&e&&t.Q6J("orders",n.orders)},directives:[q],styles:[""]}),r})();var O=i(7285);function v(r,o){if(1&r&&(t.TgZ(0,"tr"),t.TgZ(1,"th",15),t.TgZ(2,"div",16),t._UZ(3,"img",17),t.TgZ(4,"div",18),t.TgZ(5,"h5",19),t.TgZ(6,"a",20),t._uU(7),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"td",21),t.TgZ(9,"strong"),t._uU(10),t.ALo(11,"currency"),t.qZA(),t.qZA(),t.TgZ(12,"td",21),t.TgZ(13,"div",22),t.TgZ(14,"span",23),t._uU(15),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"td",21),t.TgZ(17,"strong"),t._uU(18),t.ALo(19,"currency"),t.qZA(),t.qZA(),t.qZA()),2&r){const e=o.$implicit;t.xp6(3),t.s9C("src",e.pictureUrl,t.LSH),t.s9C("alt",e.productName),t.xp6(3),t.MGl("routerLink","/shop/",e.productId,""),t.xp6(1),t.Oqu(e.productName),t.xp6(3),t.Oqu(t.lcZ(11,7,e.price)),t.xp6(5),t.Oqu(e.quantity),t.xp6(3),t.Oqu(t.lcZ(19,9,e.price*e.quantity))}}const f=[{path:"",component:h},{path:"details",component:(()=>{class r{constructor(e,n){this.router=e,this.bcService=n,this.bcService.set("@details","");const c=this.router.getCurrentNavigation(),l=c&&c.extras&&c.extras.state;l&&(this.order=l,console.log(this.order))}ngOnInit(){this.bcService.set("@details",`Order #${this.order.id} - ${this.order.status}`)}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(d.F0),t.Y36(O.pm))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-order-details"]],decls:46,vars:10,consts:[[1,"container","mt-4"],[1,"row"],[1,"col-8"],[1,"table-responsive"],[1,"table"],["scope","col",1,"border-0","bg-light"],[1,"p-2","px-3","text-uppercase"],[4,"ngFor","ngForOf"],[1,"col-4"],[1,"bg-light","px-4","py-3","text-uppercase","font-weight-bold"],[1,"p-4"],[1,"font-italic","mb-4"],[1,"list-unstyled","mb-4"],[1,"d-flex","justify-content-between","py-3","border-bottom"],[1,"text-muted"],["scope","row"],[1,"p-2"],[1,"image-fluid",2,"max-height","50px",3,"src","alt"],[1,"ml-3","d-inline-block","align-middle"],[1,"mb-0"],[1,"text-dark",3,"routerLink"],[1,"align-middle"],[1,"d-flex","align-items-center"],[1,"font-weight-bold","mx-2",2,"font-size","1em"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"table",4),t.TgZ(5,"thead"),t.TgZ(6,"tr"),t.TgZ(7,"th",5),t.TgZ(8,"div",6),t._uU(9,"Product"),t.qZA(),t.qZA(),t.TgZ(10,"th",5),t.TgZ(11,"div",6),t._uU(12,"Price"),t.qZA(),t.qZA(),t.TgZ(13,"th",5),t.TgZ(14,"div",6),t._uU(15,"Quantity"),t.qZA(),t.qZA(),t.TgZ(16,"th",5),t.TgZ(17,"div",6),t._uU(18,"Total"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"tbody"),t.YNc(20,v,20,11,"tr",7),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",8),t.TgZ(22,"div",9),t._uU(23," Order Summary "),t.qZA(),t.TgZ(24,"div",10),t.TgZ(25,"p",11),t._uU(26,"Shipping costs will be added depending on choices made during checkout"),t.qZA(),t.TgZ(27,"ul",12),t.TgZ(28,"li",13),t.TgZ(29,"strong",14),t._uU(30,"Order Subtotal"),t.qZA(),t.TgZ(31,"strong"),t._uU(32),t.ALo(33,"currency"),t.qZA(),t.qZA(),t.TgZ(34,"li",13),t.TgZ(35,"strong",14),t._uU(36,"Shipping Fee"),t.qZA(),t.TgZ(37,"strong"),t._uU(38),t.ALo(39,"currency"),t.qZA(),t.qZA(),t.TgZ(40,"li",13),t.TgZ(41,"strong",14),t._uU(42,"Total"),t.qZA(),t.TgZ(43,"strong"),t._uU(44),t.ALo(45,"currency"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(20),t.Q6J("ngForOf",n.order.orderItemDto),t.xp6(12),t.Oqu(t.lcZ(33,4,n.order.subTotal)),t.xp6(6),t.Oqu(t.lcZ(39,6,n.order.shippingPrice)),t.xp6(6),t.Oqu(t.lcZ(45,8,n.order.total)))},directives:[s.sg,d.yS],pipes:[s.H9],styles:[""]}),r})(),data:{breadcrumb:{alias:"details"}}}];let x=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[s.ez,d.Bz.forChild(f)],d.Bz]}),r})(),y=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[s.ez,g.m,x]]}),r})()}}]);