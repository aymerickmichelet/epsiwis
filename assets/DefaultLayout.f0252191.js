import{o as x,e as p,t as w,f as $,g as y,w as v,u as T,h as N,i as r,j as e,n as h,c as V,k as M,l as P,F as S,r as _,m as g,p as A}from"./vendor.d121aa1e.js";import{T as C}from"./TwIcon.5b113f66.js";import{u as D}from"./index.c3c05765.js";import{_ as f}from"./index.80f6b431.js";import{D as B}from"./TwDropdown.78122b1f.js";const H={name:"TheSidebarMenuHeader",props:{text:{type:String,required:!0}}},I={class:"px-5 text-sm text-purple-500 font-medium my-2"};function j(i,n,o,t,u,c){return x(),p("div",I,w(o.text),1)}var z=f(H,[["render",j]]);const R={name:"TheSidebarMenuItem",props:{text:{type:String,required:!0},icon:{type:String,required:!0},iconClass:{type:[String,Array,Object],default:""},route:{type:Object,default:()=>{}},active:{type:Boolean}},emits:["update:active"],setup(i,{emit:n,slots:o}){const t=$(()=>!!o["sub-menu"]),u=y(!1),c=y(!1);v(()=>i.active,m=>{c.value=m,t&&(u.value=m)},{immediate:!0}),v(c,m=>n("update:active",m));const l=T();v(l,m=>{var b,k;m.name==((b=i.route)==null?void 0:b.name)||m.path==((k=i.route)==null?void 0:k.path)?c.value=!0:c.value=!1},{immediate:!0});const d=N();return{subMenuExists:t,activeMenu:c,showSubMenu:u,onClick:()=>{t.value?u.value=!u.value:i.route?d.push(i.route):console.log("No action found!")},setActiveMenu:m=>{c.value=m}}}},q={class:"pl-4 flex-grow flex items-center justify-between"};function E(i,n,o,t,u,c){const l=C;return x(),p(S,null,[r("div",{class:h(["px-5 flex items-center py-3 cursor-default",{"bg-purple-50":t.activeMenu,"group hover:bg-gray-50":!t.activeMenu}]),onClick:n[0]||(n[0]=(...d)=>t.onClick&&t.onClick(...d))},[e(l,{name:o.icon,class:h(["icon w-5 h-5 text-gray-400 group-hover:text-gray-500",[o.iconClass,{"text-purple-500":t.activeMenu}]])},null,8,["name","class"]),r("div",q,[r("div",{class:h(["text text-sm text-gray-400 font-medium group-hover:text-gray-500",{"text-purple-500":t.activeMenu}])},w(o.text),3),t.subMenuExists?(x(),V(l,{key:0,name:"heroicons-solid:chevron-down",class:h(["w-5 h-5 text-gray-400 transform transition duration-100",{"rotate-180":t.showSubMenu}])},null,8,["class"])):M("",!0)])],2),t.subMenuExists?(x(),p("div",{key:0,class:h(["pl-9 h-0 overflow-hidden",{"h-auto":t.showSubMenu}])},[P(i.$slots,"sub-menu")],2)):M("",!0)],64)}var F=f(R,[["render",E]]);const L={name:"SidebarSubMenuHeader",props:{text:{type:String,required:!0}}},O={class:"px-5 text-xs text-gray-300 my-2"};function W(i,n,o,t,u,c){return x(),p("div",O,w(o.text),1)}var G=f(L,[["render",W]]);const J={name:"TheSidebarSubMenuItem",props:{text:{type:String,required:!0},route:{type:Object,default:()=>{}}},data(){return{activeSubMenu:!1}},watch:{$route:{immediate:!0,handler(i){var n,o;i.name==((n=this.route)==null?void 0:n.name)||i.path==((o=this.route)==null?void 0:o.path)?(this.$parent.setActiveMenu(!0),this.activeSubMenu=!0):this.activeSubMenu=!1}}},methods:{onClick(){this.route?this.$router.push(this.route):console.log("No action found!")}}};function U(i,n,o,t,u,c){return x(),p("div",{class:h(["sub-menu px-5 py-1.5 text-sm text-gray-400 font-medium cursor-default hover:text-gray-500",{"text-gray-500":u.activeSubMenu}]),onClick:n[0]||(n[0]=(...l)=>c.onClick&&c.onClick(...l))},w(o.text),3)}var K=f(J,[["render",U]]),Q="/epsi-wis.fr/assets/logo.17e50649.svg";const X={name:"TheSidebar",components:{MenuHeader:z,MenuItem:F,SubMenuHeader:G,SubMenuItem:K},emits:["visibility-change"],setup(i,{emit:n}){const o=y(!1),t=()=>o.value=!o.value;v(o,a=>{n("visibility-change",a)});const u=T();v(u,()=>o.value=!1);const c=1024,{width:l}=D();v(l,a=>{a<c&&(o.value=!1)});const d=$(()=>l.value<c);return{showSidebar:o,toggleSidebar:t,allowSidebarHide:d}}},Y=A('<header class="flex items-center pt-10 px-5" data-v-0f1cfe8d><img src="'+Q+'" alt="Logo" class="w-10" data-v-0f1cfe8d><div class="ml-2 flex flex-col" data-v-0f1cfe8d><h1 class="text-sm text-gray-700 font-medium" data-v-0f1cfe8d>Admin Panel</h1><p class="text-gray-400 text-xs" data-v-0f1cfe8d>VueJS + Vite + Tailwind</p></div></header>',1),Z={class:"mt-14"};function ee(i,n,o,t,u,c){const l=C,d=_("menu-header"),a=_("menu-item"),s=_("sub-menu-item"),m=_("sub-menu-header");return x(),p(S,null,[r("button",{class:"fixed z-50 bottom-4 right-4 w-16 h-16 rounded-full bg-gray-900 lg:hidden",onClick:n[0]||(n[0]=(...b)=>t.toggleSidebar&&t.toggleSidebar(...b))},[e(l,{name:"heroicons-solid:menu-alt-4",class:h(["btn-toggle w-6 h-6 text-white",{"opacity-0":t.showSidebar}])},null,8,["class"]),e(l,{name:"heroicons-solid:x",class:h(["btn-toggle w-6 h-6 text-white",{"opacity-0":!t.showSidebar}])},null,8,["class"])]),r("div",{class:h(["fixed inset-0 bg-black bg-opacity-25 z-30 lg:hidden",{hidden:!t.showSidebar}]),onClick:n[1]||(n[1]=b=>t.showSidebar=!1)},null,2),r("div",{class:h(["fixed z-40 left-0 top-0 right-24 lg:right-auto lg:w-64 h-screen border-r border-gray-200 overflow-y-auto bg-white",{hidden:t.allowSidebarHide&&!t.showSidebar}])},[Y,r("div",Z,[e(d,{text:"Development"}),e(a,{icon:"heroicons-outline:lightning-bolt",text:"Getting Started",route:{name:"dev-getting-started"}}),e(a,{icon:"heroicons-outline:cube",text:"Components"},{"sub-menu":g(()=>[e(s,{text:"Icon",route:{name:"dev-components-icon"}}),e(s,{text:"Button",route:{name:"dev-components-button"}}),e(s,{text:"Dropdown",route:{name:"dev-components-dropdown"}}),e(s,{text:"Card"}),e(s,{text:"Table",route:{name:"dev-components-tables"}}),e(s,{text:"Tooltip",route:{name:"dev-components-tooltip"}}),e(s,{text:"Modal"}),e(m,{text:"Form"}),e(s,{text:"Input"}),e(s,{text:"Textarea"}),e(s,{text:"Select"}),e(s,{text:"Checkbox"}),e(s,{text:"Radio"}),e(s,{text:"Switch"}),e(s,{text:"Date Picker"}),e(s,{text:"Time Picker"}),e(m,{text:"Notice"}),e(s,{text:"Alert"}),e(s,{text:"Notification"}),e(s,{text:"Confirmation Dialog"})]),_:1}),e(d,{class:"mt-10",text:"Menu"}),e(a,{icon:"heroicons-outline:home",text:"Home",route:{path:"/"}}),e(a,{icon:"heroicons-outline:view-grid",text:"Accounts"},{"sub-menu":g(()=>[e(s,{text:"PayPal"}),e(s,{text:"ShopeePay"})]),_:1}),e(a,{icon:"heroicons-outline:credit-card",text:"Cards"}),e(a,{icon:"heroicons-outline:users",text:"Contacts"}),e(a,{icon:"heroicons-outline:calculator",text:"Loan Calculator"}),e(a,{icon:"heroicons-outline:cog",text:"Settings"},{"sub-menu":g(()=>[e(s,{text:"Profile"}),e(s,{text:"Security"})]),_:1}),e(d,{class:"mt-10",text:"Scheduled Payments"}),e(a,{icon:"heroicons-outline:check-circle","icon-class":"text-blue-400",text:"Monthly Rent"}),e(a,{icon:"heroicons-outline:check-circle","icon-class":"text-red-400",text:"Food Payment"}),e(a,{icon:"heroicons-outline:check-circle","icon-class":"text-green-400",text:"Utility Bills"})])],2)],64)}var te=f(X,[["render",ee],["__scopeId","data-v-0f1cfe8d"]]),oe="/epsi-wis.fr/assets/avatar.a0026fbd.png";const ne={name:"TheNavbar",setup(){return{viewSource:()=>{window.open("https://github.com/ngekoding/admin-panel","_blank")}}}},se={class:"fixed z-20 top-0 left-0 lg:left-64 right-0 h-14 bg-white border-b border-gray-200 flex flex-row items-center justify-between px-5"},ie=r("h3",{class:"text-sm font-medium text-gray-600"},"Welcome, Nur",-1),re={class:"flex items-center"},ae=r("span",{class:"text-sm text-gray-600 group-hover:text-gray-800"},"GitHub",-1),ce={class:"relative flex justify-center items-center w-6 h-6 rounded-full bg-gray-200"},le=r("div",{class:"absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-blue-400 rounded-full"},null,-1),ue=r("img",{src:oe,alt:"Avatar",class:"w-6 h-6 rounded-full"},null,-1),de=r("ul",null,[r("li",{class:"px-4 py-2 cursor-pointer hover:bg-purple-50 hover:text-purple-500"}," Profile "),r("li",{class:"px-4 py-2 cursor-pointer hover:bg-purple-50 hover:text-purple-500"}," Account settings "),r("li",{class:"px-4 py-2 cursor-pointer hover:bg-purple-50 hover:text-purple-500"}," Sign out ")],-1);function me(i,n,o,t,u,c){const l=C,d=B;return x(),p("div",se,[ie,r("div",re,[r("div",{class:"group flex items-center mr-3 cursor-pointer",onClick:n[0]||(n[0]=a=>t.viewSource())},[ae,e(l,{name:"heroicons-outline:external-link",class:"ml-1 w-4 h-4 text-gray-600 group-hover:text-gray-800"})]),r("div",ce,[e(l,{name:"heroicons-solid:bell",class:"w-3.5 h-3.5 text-gray-600"}),le]),e(d,{class:"ml-3",origin:"right","body-class":"top-8"},{body:g(()=>[de]),default:g(()=>[ue]),_:1})])])}var he=f(ne,[["render",me]]);const xe={name:"DefaultLayout",components:{Sidebar:te,Navbar:he},setup(){const i=y(!1);return{visibleResponsiveSidebar:i,onSidebarVisibilityChanged:o=>{i.value=o}}}},pe={class:"lg:ml-64 pt-14 px-5"},_e={class:"container mx-auto my-5"};function fe(i,n,o,t,u,c){const l=_("sidebar"),d=_("navbar"),a=_("router-view");return x(),p(S,null,[e(l,{onVisibilityChange:t.onSidebarVisibilityChanged},null,8,["onVisibilityChange"]),r("div",{class:h(["min-h-screen",{"overflow-hidden max-h-screen fixed":t.visibleResponsiveSidebar}])},[e(d),r("div",pe,[r("div",_e,[e(a)])])],2)],64)}var Se=f(xe,[["render",fe]]);export{Se as default};
