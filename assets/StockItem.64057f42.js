var p=Object.defineProperty;var _=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var h=(o,s,e)=>s in o?p(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,m=(o,s)=>{for(var e in s||(s={}))b.call(s,e)&&h(o,e,s[e]);if(_)for(var e of _(s))v.call(s,e)&&h(o,e,s[e]);return o};import{O as k}from"./bootstrap.esm.25e60e88.js";import{m as y,j as S,o as n,c as i,a as t,t as c,s as f,v as g,u as D,b as r,F as x,k as A}from"./vendor.91338f32.js";import{_ as L}from"./index.e1776c9d.js";const I={props:{id:String},mounted(){this.id==="add"||this.get(Number(this.id)).then(o=>{console.debug(o),this.date=this.formatDate(o.date),this.marketplace=o.marketplace,this.items=o.items,this._offcanvas=new k(this.$refs.StockItem),this.disabled=!0,this._offcanvas.show(),this.$refs.StockItem.addEventListener("hidden.bs.offcanvas",this.close)}).catch(console.error)},computed:m({},y("Stock",{stockList:"all"})),data(){return{_offcanvas:null,disabled:!1,isSaving:!1,isDeleting:!1,date:new Date,marketplace:"",items:[]}},methods:m({close(){this.$router.replace({name:"stock"})},formatDate(o){let s=new Date(o),e=""+(s.getMonth()+1),d=""+s.getDate(),a=s.getFullYear();return e.length<2&&(e="0"+e),d.length<2&&(d="0"+d),[a,e,d].join("-")}},S("Stock",{draft:"draft",get:"get",save:"save",delete:"delete"}))},w={class:"offcanvas offcanvas-end",tabindex:"-1",ref:"StockItem","aria-labelledby":"StockItemLabel"},j={class:"offcanvas-header"},N={class:"offcanvas-title",id:"ProductItemLabel"},O=t("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},null,-1),C={class:"offcanvas-body"},F=["disabled"],M={class:"mb-3"},P=t("label",{for:"dateToAction",class:"form-label"},"Date to Action",-1),U={class:"mb-3"},V=t("label",{for:"marketplace",class:"form-label"},"Marketplace",-1),B=t("option",{value:""},"Open this to select marketplace",-1),T=t("option",{value:"shopee"},"Shopee",-1),z=t("option",{value:"lazada"},"Lazada",-1),E=[B,T,z],K={class:"mb-3"},Y=t("label",{class:"form-label"},"Line Items",-1),G={class:"responsive-table"},q={class:"table table-sm table-striped text-center"},H=t("th",null,"#",-1),J=t("th",null,"SKU",-1),Q=t("th",null,"Price",-1),R=t("th",null,"Amount",-1),W={key:0},X={key:0},Z=t("button",{type:"button",class:"btn-close","aria-label":"Close"},null,-1),$=[Z],tt={key:0},et=t("tr",null,[t("td",{colspan:"2"},[t("input",{class:"form-control form-control-sm",list:"datalistOptions",id:"exampleDataList",placeholder:"SKU"}),t("datalist",{id:"datalistOptions"},[t("option",{value:"San Francisco"}),t("option",{value:"New York"}),t("option",{value:"Seattle"}),t("option",{value:"Los Angeles"}),t("option",{value:"Chicago"})])]),t("td",null,[t("input",{type:"number",class:"form-control form-control-sm",id:"price",placeholder:"Price"})]),t("td",null,[t("input",{type:"number",class:"form-control form-control-sm",id:"amount",placeholder:"Amount"})]),t("td",null,[t("button",{class:"btn btn-sm btn-outline-secondary"},[t("i",{class:"bi-plus-circle"})])])],-1),st=[et],ot=t("hr",null,null,-1),at={key:0,class:"mb-3 text-end"},lt=t("button",{type:"submit",class:"btn btn-primary"},"Add Product",-1),nt=[lt];function it(o,s,e,d,a,dt){return n(),i("div",w,[t("div",j,[t("h5",N,c(e.id==="add"?"Add":"")+" Stock Item",1),O]),t("div",C,[t("form",null,[t("fieldset",{disabled:a.disabled},[t("div",M,[P,f(t("input",{type:"date",class:"form-control",id:"dateToAction",placeholder:"Name","onUpdate:modelValue":s[0]||(s[0]=l=>a.date=l)},null,512),[[g,a.date]])]),t("div",U,[V,f(t("select",{class:"form-select",id:"marketplace","onUpdate:modelValue":s[1]||(s[1]=l=>a.marketplace=l)},E,512),[[D,a.marketplace]])]),t("div",K,[Y,t("div",G,[t("table",q,[t("thead",null,[t("tr",null,[H,J,Q,R,e.id==="add"?(n(),i("th",W)):r("",!0)])]),t("tbody",null,[(n(!0),i(x,null,A(a.items,(l,u)=>(n(),i("tr",{key:u},[t("td",null,c(u+1),1),t("td",null,c(l.sku.name),1),t("td",null,c(l.price),1),t("td",null,c(l.amount),1),e.id==="add"?(n(),i("td",X,$)):r("",!0)]))),128))]),e.id==="add"?(n(),i("tfoot",tt,st)):r("",!0)])])]),ot,e.id==="add"?(n(),i("div",at,nt)):r("",!0)],8,F)])])],512)}var _t=L(I,[["render",it]]);export{_t as default};
