var g=Object.defineProperty;var b=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var f=(t,s,a)=>s in t?g(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,h=(t,s)=>{for(var a in s||(s={}))y.call(s,a)&&f(t,a,s[a]);if(b)for(var a of b(s))S.call(s,a)&&f(t,a,s[a]);return t};import{O as k}from"./bootstrap.esm.25e60e88.js";import{m as x,j as M,o as c,c as n,a as e,t as _,q as A,s as r,u as I,F as U,k as D,v as m,x as u,e as d}from"./vendor.91338f32.js";import{_ as K}from"./index.e1776c9d.js";const w={props:{id:String},mounted(){this.id==="add"?this.draft().then(t=>{this.productId=t.product.id,this.name=t.name,this.desc=t.desc,this.price=t.price,this.image=t.image,this.marketplaces=t.marketplaces,this.isAllMarketplace=this.marketplaces.size===2,this._offcanvas=new k(this.$refs.SKUItem),this._offcanvas.show(),this.$refs.SKUItem.addEventListener("hidden.bs.offcanvas",this.close)}).catch(console.error):this.get(Number(this.id)).then(t=>{this.productId=t.product.id,this.name=t.name,this.desc=t.desc,this.price=t.price,this.image=t.image,this.marketplaces=t.marketplaces,this.isAllMarketplace=this.marketplaces.size===2,this._offcanvas=new k(this.$refs.SKUItem),this._offcanvas.show(),this.$refs.SKUItem.addEventListener("hidden.bs.offcanvas",this.close)}).catch(console.error)},computed:h({},x("Products",{productList:"all"})),data(){return{_offcanvas:null,disabled:!1,isSaving:!1,isDeleting:!1,productId:"",name:"",desc:"",price:0,image:"",marketplaces:new Set,isAllMarketplace:!1}},methods:h({close(){this.$router.replace({name:"sku"})},checkAllMarketplaces(t){console.debug(t.target.id),t.target.id==="checkboxAllMarketplace"?this.isAllMarketplace?(this.marketplaces.add("shopee"),this.marketplaces.add("lazada")):(this.marketplaces.delete("shopee"),this.marketplaces.delete("lazada")):this.marketplaces.size===2?this.isAllMarketplace=!0:this.isAllMarketplace=!1},submit(){this.disabled=!0,this.isSaving=!0;const{id:t,productId:s,name:a,desc:p,price:i,image:o,marketplaces:l}=this;this.save({id:Number(t),productId:s,name:a,desc:p,price:i,image:o,marketplaces:l}).then(()=>{this.disabled=!1,this.isSaving=!1,this._offcanvas.hide()}).catch(console.error)},remove(){this.disabled=!0,this.isDeleting=!0;const{id:t}=this;this.delete(Number(t)).then(()=>{this.disabled=!1,this.isDeleting=!1,this._offcanvas.hide()}).catch(console.error)}},M("SKU",{draft:"draft",get:"get",save:"save",delete:"delete"}))},z={class:"offcanvas offcanvas-end",tabindex:"-1",ref:"SKUItem","aria-labelledby":"SKUItemLabel"},L={class:"offcanvas-header"},V={class:"offcanvas-title",id:"ProductItemLabel"},C=e("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},null,-1),N={class:"offcanvas-body"},P=["disabled"],j={class:"mb-3"},q=e("label",{for:"selectProduct",class:"form-label"},[d("Product "),e("i",{class:"bi-question-circle"})],-1),E=e("option",{value:""},"Select a current product",-1),B=["value"],J={class:"mb-3"},F=e("label",{for:"skuName",class:"form-label"},[d("SKU Name "),e("i",{class:"bi-question-circle"})],-1),O={class:"mb-3"},T=e("label",{for:"skuDescription",class:"form-label"},[d("Attributes "),e("i",{class:"bi-question-circle"})],-1),G=e("div",{class:"mb-3"},[e("label",{for:"skuImage",class:"form-label"},"Image"),e("input",{class:"form-control",type:"file",id:"skuImage"})],-1),H={class:"mb-3"},Q=e("label",{for:"originalPrice",class:"form-label"},"Price",-1),R=["disabled"],W=e("legend",{class:"form-label"},"Marketplace",-1),X={class:"form-check"},Y=e("label",{class:"form-check-label",for:"checkboxAllMarketplace"},"All",-1),Z={class:"input-group"},$={class:"form-check form-check-inline"},ee=e("label",{class:"form-check-label",for:"checkboxShopee"},"Shopee",-1),se={class:"form-check form-check-inline"},te=e("label",{class:"form-check-label",for:"checkboxLazada"},"Lazada",-1),le=e("div",{class:"form-check form-check-inline"},[e("input",{class:"form-check-input",type:"checkbox",id:"checkboxJD",value:"",disabled:""}),e("label",{class:"form-check-label",for:"checkboxJD"},"JD Central")],-1),ie=e("hr",null,null,-1),ae={key:0,class:"mb-3 text-end"},oe={key:0,type:"submit",class:"btn btn-primary"},ce=e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),ne=d(" Saving... "),re=[ce,ne],de={key:1,type:"submit",class:"btn btn-primary"},he={key:1,class:"mb-3 d-flex justify-content-between"},me={key:0,type:"button",class:"btn btn btn-outline-danger"},ue=e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),pe=d(" Deleting... "),be=[ue,pe],fe=e("i",{class:"bi-trash"},null,-1),ke=d(" Delete"),_e=[fe,ke],ve={key:2,type:"submit",class:"btn btn-primary"},ge=e("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},null,-1),ye=d(" Saving... "),Se=[ge,ye],xe={key:3,type:"submit",class:"btn btn-primary"};function Me(t,s,a,p,i,o){return c(),n("div",z,[e("div",L,[e("h5",V,_(a.id==="add"?"Add":"Edit")+" SKU Item",1),C]),e("div",N,[e("form",{onSubmit:s[11]||(s[11]=A((...l)=>o.submit&&o.submit(...l),["prevent"]))},[e("fieldset",{disabled:i.disabled},[e("div",j,[q,r(e("select",{class:"form-select",id:"selectProduct","onUpdate:modelValue":s[0]||(s[0]=l=>i.productId=l)},[E,(c(!0),n(U,null,D(t.productList,(l,v)=>(c(),n("option",{key:v,value:l.id},_(l.name),9,B))),128))],512),[[I,i.productId]])]),e("div",J,[F,r(e("input",{type:"text",class:"form-control",id:"skuName",placeholder:"Must be unique","onUpdate:modelValue":s[1]||(s[1]=l=>i.name=l)},null,512),[[m,i.name]])]),e("div",O,[T,r(e("textarea",{class:"form-control",id:"skuDescription",rows:"1",placeholder:"e.g. size, color, etc.","onUpdate:modelValue":s[2]||(s[2]=l=>i.desc=l)},null,512),[[m,i.desc]])]),G,e("div",H,[Q,r(e("input",{type:"number",min:"0",class:"form-control",id:"originalPrice",placeholder:"How much does it cost?","onUpdate:modelValue":s[3]||(s[3]=l=>i.price=l)},null,512),[[m,i.price]])])],8,P),e("fieldset",{class:"mb-3",disabled:i.disabled},[W,e("div",X,[r(e("input",{type:"checkbox",class:"form-check-input",id:"checkboxAllMarketplace","onUpdate:modelValue":s[4]||(s[4]=l=>i.isAllMarketplace=l),onChange:s[5]||(s[5]=(...l)=>o.checkAllMarketplaces&&o.checkAllMarketplaces(...l))},null,544),[[u,i.isAllMarketplace]]),Y]),e("div",Z,[e("div",$,[r(e("input",{type:"checkbox",class:"form-check-input",id:"checkboxShopee",value:"shopee","onUpdate:modelValue":s[6]||(s[6]=l=>i.marketplaces=l),onChange:s[7]||(s[7]=(...l)=>o.checkAllMarketplaces&&o.checkAllMarketplaces(...l))},null,544),[[u,i.marketplaces]]),ee]),e("div",se,[r(e("input",{type:"checkbox",class:"form-check-input",id:"checkboxLazada",value:"lazada","onUpdate:modelValue":s[8]||(s[8]=l=>i.marketplaces=l),onChange:s[9]||(s[9]=(...l)=>o.checkAllMarketplaces&&o.checkAllMarketplaces(...l))},null,544),[[u,i.marketplaces]]),te]),le]),ie,a.id==="add"?(c(),n("div",ae,[i.isSaving?(c(),n("button",oe,re)):(c(),n("button",de,"Add SKU"))])):(c(),n("div",he,[i.isDeleting?(c(),n("button",me,be)):(c(),n("button",{key:1,type:"button",class:"btn btn btn-outline-danger",onClick:s[10]||(s[10]=(...l)=>o.remove&&o.remove(...l))},_e)),i.isSaving?(c(),n("button",ve,Se)):(c(),n("button",xe,"Save Changes"))]))],8,R)],32)])],512)}var Ke=K(w,[["render",Me]]);export{Ke as default};
