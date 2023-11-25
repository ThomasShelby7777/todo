(function(){"use strict";var t={772:function(t,e,n){n(752),n(3964),n(429),n(6409);var o=n(9242),i=n(3396),a=n.p+"img/edit.7d7bed7c.svg",s={class:"wrapper"},l=(0,i._)("img",{src:a,alt:""},null,-1),r=[l];function c(t,e,n,a,l,c){var u=(0,i.up)("Navbar"),d=(0,i.up)("Notes"),h=(0,i.up)("Modal");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i.Wm)(u,{onSetSearch:e[0]||(e[0]=function(t){return l.serachValue=t})}),(0,i.Wm)(d,{notes:c.filterNotes,onDelNote:c.delNote,onChange:c.change},null,8,["notes","onDelNote","onChange"]),(0,i.wy)((0,i.Wm)(h,{onClose:e[1]||(e[1]=function(t){return l.isModalOpen=!1}),onAddNote:c.addNote,edit:l.edit,editeNote:l.editeNote,onChangedNote:c.changedNote},null,8,["onAddNote","edit","editeNote","onChangedNote"]),[[o.F8,l.isModalOpen]]),(0,i._)("button",{class:"add__note",onClick:e[2]||(e[2]=function(t){return l.isModalOpen=!0,l.edit=!1})},r)])}n(560),n(9358),n(9772),n(2506),n(5728),n(228),n(7522),n(8077),n(6801),n(3843),n(8324),n(4043),n(7872);var u=n(7139),d=n.p+"img/icon.2c9e71ed.svg",h=n.p+"img/back.014b4ff1.svg",f=n.p+"img/clear.1d4d165f.svg",_={class:"header"},p={key:0,class:"header__nav"},g={class:"header_nav-title"},v=(0,i._)("img",{src:d,alt:""},null,-1),m=[v],b={key:1,class:"header__search"},w=(0,i._)("img",{src:h,alt:""},null,-1),N=[w],y=["placeholder"],k=(0,i._)("img",{src:f,alt:""},null,-1),C=[k];function x(t,e,n,a,s,l){return(0,i.wg)(),(0,i.iD)("header",_,[s.header?((0,i.wg)(),(0,i.iD)("nav",p,[(0,i._)("button",{class:"header__nav-lang",onClick:e[0]||(e[0]=function(){return l.switchLang&&l.switchLang.apply(l,arguments)})},(0,u.zw)(t.$i18n.locale),1),(0,i._)("h1",g,(0,u.zw)(t.$t("notes")),1),(0,i._)("button",{class:"header__nav-search",onClick:e[1]||(e[1]=function(t){return s.header=!1})},m)])):((0,i.wg)(),(0,i.iD)("nav",b,[(0,i._)("button",{class:"header__search-back",onClick:e[2]||(e[2]=function(t){return s.header=!0,s.search=""})},N),(0,i.wy)((0,i._)("input",{type:"text",placeholder:t.$t("search"),class:"header__search-input","onUpdate:modelValue":e[3]||(e[3]=function(t){return s.search=t})},null,8,y),[[o.nr,s.search]]),(0,i._)("button",{class:"header__search-clear",onClick:e[4]||(e[4]=function(t){return s.search=""})},C)]))])}var O={data:function(){return{header:!0,search:""}},methods:{switchLang:function(){"ru"==this.$i18n.locale?this.$i18n.locale="uz":this.$i18n.locale="ru",localStorage.lang=this.$i18n.locale}},watch:{search:function(t){this.$emit("setSearch",t)}}},$=n(89);const D=(0,$.Z)(O,[["render",x]]);var M=D,S=n.p+"img/list.4ed3d4be.svg",j=n.p+"img/grid.dbae4039.svg",z={class:"notes"},L={class:"container"},V={class:"notes__top"},E={class:"notes__top-title"},Z={src:S,alt:""},F={src:j,alt:""};function J(t,e,n,a,s,l){var r=(0,i.up)("NotesItem");return(0,i.wg)(),(0,i.iD)("div",z,[(0,i._)("div",L,[(0,i._)("div",V,[(0,i._)("h2",E,(0,u.zw)(n.notes.length>0?t.$t("status"):t.$t("statusNone")),1),(0,i._)("button",{class:"notes__top-btn",onClick:e[0]||(e[0]=function(t){return s.view=!s.view})},[(0,i.wy)((0,i._)("img",Z,null,512),[[o.F8,s.view]]),(0,i.wy)((0,i._)("img",F,null,512),[[o.F8,0==s.view]]),(0,i._)("span",null,(0,u.zw)(s.view?t.$t("list"):t.$t("grid")),1)])]),(0,i._)("div",{class:(0,u.C_)(["notes__list",{active:!s.view}])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.notes,(function(e){return(0,i.wg)(),(0,i.j4)(r,{key:e.id,note:e,view:s.view,onDelNote:function(n){return t.$emit("delNote",e.id)},onChange:function(n){return t.$emit("change",e.id)}},null,8,["note","view","onDelNote","onChange"])})),128))],2)])])}var T=n.p+"img/del.f04c87ff.svg",A={class:"notes__item"},B={class:"notes__space-title"},I={class:"notes__space-date"},U={class:"notes__item-text"},W={class:"notes__btns"},q=(0,i._)("img",{src:a,alt:""},null,-1),P=(0,i._)("span",null,"РЕДАКТИРОВАТЬ",-1),H=[q,P],K=(0,i._)("img",{src:T,alt:""},null,-1),Q=(0,i._)("span",null,"Удалить",-1),R=[K,Q];function Y(t,e,n,o,a,s){return(0,i.wg)(),(0,i.iD)("div",A,[(0,i._)("div",{class:(0,u.C_)(["notes__space",{between:!n.view}])},[(0,i._)("h2",B,(0,u.zw)(n.note.title),1),(0,i._)("p",I,(0,u.zw)(n.note.date),1)],2),(0,i._)("p",U,(0,u.zw)(n.note.text),1),(0,i._)("div",W,[(0,i._)("button",{class:"notes__btns-btn edit",onClick:e[0]||(e[0]=function(e){return t.$emit("change",n.note.id)})},H),(0,i._)("button",{class:"notes__btns-btn del",onClick:e[1]||(e[1]=function(e){return t.$emit("delNote",n.note.id)})},R)])])}var G={props:{note:{typeof:Object},view:{typeof:Boolean}}};const X=(0,$.Z)(G,[["render",Y]]);var tt=X,et={props:{notes:{typeof:Array}},components:{NotesItem:tt},data:function(){return{view:!0}}};const nt=(0,$.Z)(et,[["render",J]]);var ot=nt,it={class:"modal__block-title"},at={class:"modal__block-inputs"},st={for:"inp"},lt=(0,i._)("span",null,"Title",-1),rt={for:"area"},ct=(0,i._)("span",null,"Content",-1),ut={class:"modal__block-btns"};function dt(t,e,n,a,s,l){return(0,i.wg)(),(0,i.j4)(o.uT,{name:"modal"},{default:(0,i.w5)((function(){return[(0,i._)("div",{class:"modal",onClick:e[6]||(e[6]=function(){return l.closeModal&&l.closeModal.apply(l,arguments)})},[(0,i._)("div",{class:"modal__block",onClick:e[5]||(e[5]=(0,o.iM)((function(){}),["stop"]))},[(0,i._)("h2",it,(0,u.zw)(n.edit?t.$t("edit"):t.$t("title")),1),(0,i._)("div",at,[(0,i._)("label",st,[lt,(0,i.wy)((0,i._)("input",{id:"inp",type:"text","onUpdate:modelValue":e[0]||(e[0]=function(t){return s.title=t})},null,512),[[o.nr,s.title]])]),(0,i._)("label",rt,[ct,(0,i.wy)((0,i._)("textarea",{id:"area","onUpdate:modelValue":e[1]||(e[1]=function(t){return s.text=t})},null,512),[[o.nr,s.text]])])]),(0,i._)("div",ut,[(0,i._)("button",{class:"modal__block-btns-btn del",onClick:e[2]||(e[2]=function(){return l.closeModal&&l.closeModal.apply(l,arguments)})}," Отмена "),n.edit?((0,i.wg)(),(0,i.iD)("button",{key:1,class:"modal__block-btns-btn edit",onClick:e[4]||(e[4]=function(){return l.changeNote&&l.changeNote.apply(l,arguments)})}," Изменить ")):((0,i.wg)(),(0,i.iD)("button",{key:0,class:"modal__block-btns-btn edit",onClick:e[3]||(e[3]=function(){return l.addNote&&l.addNote.apply(l,arguments)})}," Добавить "))])])])]})),_:1})}var ht=n(3029),ft={props:{edit:{typeof:Boolean},editeNote:{typeof:Object}},data:function(){return{text:"",title:""}},methods:{closeModal:function(){this.$emit("close"),this.text=this.title=""},addNote:function(){if(""!=this.text&&""!=this.title){var t={id:(0,ht.Z)(),title:this.title,text:this.text,date:(new Date).toLocaleDateString()};this.$emit("addNote",t),this.closeModal()}},changeNote:function(){if(""!=this.text&&""!=this.title){var t={id:this.editeNote.id,title:this.title,text:this.text,date:(new Date).toLocaleDateString()};this.$emit("changedNote",t),this.closeModal()}}}};const _t=(0,$.Z)(ft,[["render",dt]]);var pt=_t,gt={components:{Navbar:M,Notes:ot,Modal:pt},data:function(){return{notes:[],isModalOpen:!1,edit:!1,editeNote:null,serachValue:""}},methods:{addNote:function(t){this.notes.push(t)},getNotes:function(){var t=localStorage.notes;t&&(this.notes=JSON.parse(t))},delNote:function(t){var e=this.notes.findIndex((function(e){return e.id==t}));this.notes.splice(e,1)},change:function(t){this.isModalOpen=this.edit=!0;var e=this.notes.find((function(e){return e.id==t}));this.editeNote=e},changedNote:function(t){this.notes.forEach((function(e){e.id==t.id&&(e.title=t.title,e.text=t.text,e.date=t.date)}))}},computed:{filterNotes:function(){var t=this;return this.serachValue?this.notes.filter((function(e){return e.title.toLowerCase().includes(t.serachValue.toLowerCase())})):this.notes}},created:function(){this.getNotes()},watch:{notes:{handler:function(){localStorage.notes=JSON.stringify(this.notes)},deep:!0}}};const vt=(0,$.Z)(gt,[["render",c]]);var mt=vt,bt=n(556),wt=JSON.parse('{"notes":"Eslatmalar","search":"Qidirish...","status":"Barcha eslatmalar","statusNone":"Eslatmalar yoq","list":"Roʻyxat","grid":"Setka","title":"Eslatma qo’shish","edit":"Elsatmani tahrirlash"}'),Nt=JSON.parse('{"notes":"Заметки","search":"Поиск","status":"Все заметки","statusNone":"Нет заметок","list":"Список","grid":"Сетка","title":"Добавить заметку","edit":"Изменить заметку"}'),yt={uz:wt,ru:Nt},kt=localStorage.lang,Ct=(0,bt.o)({legacy:!0,locale:kt||"ru",messages:yt});(0,o.ri)(mt).use(Ct).mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,a){if(!o){var s=1/0;for(u=0;u<t.length;u++){o=t[u][0],i=t[u][1],a=t[u][2];for(var l=!0,r=0;r<o.length;r++)(!1&a||s>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[r])}))?o.splice(r--,1):(l=!1,a<s&&(s=a));if(l){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/todo/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,a,s=o[0],l=o[1],r=o[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(r)var u=r(n)}for(e&&e(o);c<s.length;c++)a=s[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},o=self["webpackChunktodo"]=self["webpackChunktodo"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(772)}));o=n.O(o)})();
//# sourceMappingURL=app-legacy.970a014b.js.map