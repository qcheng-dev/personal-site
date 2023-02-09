(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});n(2791);var i=n(1523),s=n(1480),a=n(7892),r=n.n(a),o=n(184),c=function(t){var e=t.data;return(0,o.jsx)("div",{className:"cell-container",children:(0,o.jsxs)("article",{className:"mini-post",children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("h3",{children:(0,o.jsx)("a",{href:e.link,children:e.title})}),(0,o.jsx)("time",{className:"published",children:r()(e.date).format("MMMM, YYYY")})]}),(0,o.jsx)("a",{href:e.link,className:"image",children:(0,o.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,o.jsx)("div",{className:"description",children:(0,o.jsx)("p",{children:e.desc})})]})})},u=[{title:"LogAI: A Library for Log Analytics and Intelligence",link:"https://github.com/salesforce/logai",image:"/images/projects/logai_logo.jpg",date:"2023-01",desc:"LogAI is a one-stop open source library for log analytics and intelligence. LogAI supports various log analytics and log intelligence tasks such as log summarization, log clustering, log anomaly detection and more. "},{title:"Amazon CloudWatch Anomaly Detection",link:"https://aws.amazon.com/blogs/aws/new-amazon-cloudwatch-anomaly-detection/",image:"/images/projects/aws_cw_ad.png",date:"2019-12",desc:'Amazon CloudWatch launched in early 2009 as part of our desire to (as I said at the time) "make it even easier for you to build sophisticated, scalable, and robust web applications using AWS." '},{title:"Advancing Microsoft Azure reliability",link:"https://azure.microsoft.com/en-us/blog/advancing-microsoft-azure-reliability/",image:"/images/projects/azure_reliability.png",date:"2019-07"},{title:"Improving Azure Virtual Machine resiliency with predictive ML and live migration",link:"https://azure.microsoft.com/en-au/blog/improving-azure-virtual-machine-resiliency-with-predictive-ml-and-live-migration/",image:"/images/projects/azure_predict.png",date:"2018-11"},{title:"MoveSense App Makes Cellphone an Oxygen Saturation Monitor for Heart and Lung Patients",link:"https://cs.illinois.edu/news/movesense-app-makes-cellphone-oxygen-saturation-monitor-heart-and-lung-patients",image:"/images/projects/azure_predict.png",date:"2015-07"},{title:"Gizmos & Gadgets: GaitTrack App on Smartphone Assesses User\u2019s Health, 21st Century Tech Blog",link:"https://www.21stcentech.com/gizmos-gadgets-gaittrack-app-smartphone-assesses-users-health/",image:"/images/projects/21st_century.png",date:"2014-05"},{title:"GaitTrack Smartphone App, a Medical Device for Automatic Gait Assessment, FDANews",link:"https://www.fdanews.com/articles/164575-gaittrack-smartphone-app-a-medical-device-for-automatic-gait-assessment",image:"/images/projects/fdanews.png",date:"2014-05"},{title:"GaitTrack Smartphone App, a Medical Device for Automatic Gait Assessment, Medgadget",link:"https://www.medgadget.com/2014/05/gaittrack-smartphone-app-a-medical-device-for-automatic-gait-assessment.html",image:"/images/projects/medgadget.png",date:"2014-05"},{title:"GaitTrack app makes cellphone a medical monitor for heart and lung patients, Kurzweil",link:"https://www.kurzweilai.net/gaittrack-app-makes-cellphone-a-medical-monitor-for-heart-and-lung-patients",image:"/images/projects/kurzweil.png",date:"2014-05"},{title:"GaitTrack app makes cellphone a medical monitor for heart and lung patients, Nature World News",link:"https://www.natureworldnews.com/articles/6966/20140508/gaittrack-app-turns-cellphone-into-medical-monitor-for-heart-and-lungs.htm",image:"/images/projects/nwn.png",date:"2014-05"}],l=function(){return(0,o.jsx)(s.Z,{title:"Projects",description:"Learn about Qian Cheng's projects blog posts and related news reports.",children:(0,o.jsxs)("article",{className:"post",id:"projects",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{"data-testid":"heading",children:(0,o.jsx)(i.rU,{to:"/projects",children:"Projects"})}),(0,o.jsx)("p",{children:"A selection of blog posts and news reports about my projects"})]})}),u.map((function(t){return(0,o.jsx)(c,{data:t},t.title)}))]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",s="second",a="minute",r="hour",o="day",c="week",u="month",l="quarter",h="year",d="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},w={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+$(i,2,"0")+":"+$(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,u),a=n-s<0,r=e.clone().add(i+(a?-1:1),u);return+(-(i+(n-s)/(a?s-r:r-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:h,w:c,d:o,D:d,h:r,m:a,s:s,ms:i,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",y={};y[v]=g;var M=function(t){return t instanceof j},k=function t(e,n,i){var s;if(!e)return v;if("string"==typeof e){var a=e.toLowerCase();y[a]&&(s=a),n&&(y[a]=n,s=a);var r=e.split("-");if(!s&&r.length>1)return t(r[0])}else{var o=e.name;y[o]=e,s=o}return!i&&s&&(v=s),s||!i&&v},D=function(t,e){if(M(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new j(n)},S=w;S.l=k,S.i=M,S.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var j=function(){function g(t){this.$L=k(t.locale,null,!0),this.parse(t)}var $=g.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var s=i[2]-1||0,a=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return S},$.isValid=function(){return!(this.$d.toString()===f)},$.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return D(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<D(t)},$.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,e){var n=this,i=!!S.u(e)||e,l=S.p(t),f=function(t,e){var s=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?s:s.endOf(o)},m=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},p=this.$W,g=this.$M,$=this.$D,w="set"+(this.$u?"UTC":"");switch(l){case h:return i?f(1,0):f(31,11);case u:return i?f(1,g):f(0,g+1);case c:var v=this.$locale().weekStart||0,y=(p<v?p+7:p)-v;return f(i?$-y:$+(6-y),g);case o:case d:return m(w+"Hours",0);case r:return m(w+"Minutes",1);case a:return m(w+"Seconds",2);case s:return m(w+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(t,e){var n,c=S.p(t),l="set"+(this.$u?"UTC":""),f=(n={},n[o]=l+"Date",n[d]=l+"Date",n[u]=l+"Month",n[h]=l+"FullYear",n[r]=l+"Hours",n[a]=l+"Minutes",n[s]=l+"Seconds",n[i]=l+"Milliseconds",n)[c],m=c===o?this.$D+(e-this.$W):e;if(c===u||c===h){var p=this.clone().set(d,1);p.$d[f](m),p.init(),this.$d=p.set(d,Math.min(this.$D,p.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[S.p(t)]()},$.add=function(i,l){var d,f=this;i=Number(i);var m=S.p(l),p=function(t){var e=D(f);return S.w(e.date(e.date()+Math.round(t*i)),f)};if(m===u)return this.set(u,this.$M+i);if(m===h)return this.set(h,this.$y+i);if(m===o)return p(1);if(m===c)return p(7);var g=(d={},d[a]=e,d[r]=n,d[s]=t,d)[m]||1,$=this.$d.getTime()+i*g;return S.w($,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=S.z(this),a=this.$H,r=this.$m,o=this.$M,c=n.weekdays,u=n.months,l=function(t,n,s,a){return t&&(t[n]||t(e,i))||s[n].slice(0,a)},h=function(t){return S.s(a%12||12,t,"0")},d=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:l(n.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(a),HH:S.s(a,2,"0"),h:h(1),hh:h(2),a:d(a,r,!0),A:d(a,r,!1),m:String(r),mm:S.s(r,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:s};return i.replace(p,(function(t,e){return e||m[t]||s.replace(":","")}))},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(i,d,f){var m,p=S.p(d),g=D(i),$=(g.utcOffset()-this.utcOffset())*e,w=this-g,v=S.m(this,g);return v=(m={},m[h]=v/12,m[u]=v,m[l]=v/3,m[c]=(w-$)/6048e5,m[o]=(w-$)/864e5,m[r]=w/n,m[a]=w/e,m[s]=w/t,m)[p]||w,f?v:S.a(v)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return y[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=k(t,e,!0);return i&&(n.$L=i),n},$.clone=function(){return S.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},g}(),b=j.prototype;return D.prototype=b,[["$ms",i],["$s",s],["$m",a],["$H",r],["$W",o],["$M",u],["$y",h],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,j,D),t.$i=!0),D},D.locale=k,D.isDayjs=M,D.unix=function(t){return D(1e3*t)},D.en=y[v],D.Ls=y,D.p={},D}()}}]);
//# sourceMappingURL=161.4cdfc760.chunk.js.map