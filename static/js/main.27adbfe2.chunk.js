(window["webpackJsonpwhere-is-it-streaming"]=window["webpackJsonpwhere-is-it-streaming"]||[]).push([[0],{161:function(e,t,a){e.exports=a.p+"static/media/Arrow.6a87d030.svg"},191:function(e,t,a){e.exports=a(341)},333:function(e,t,a){},334:function(e,t,a){},335:function(e,t,a){},340:function(e,t,a){},341:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(43),o=a.n(r),s=(a(196),a(21)),l=a.n(s),c=a(35),u=a(50),m=a(51),d=a(55),p=a(52),g=a(56),v=a(353),f=a(356),h=a(359),y={display:"grid",gridTemplateColumns:"5fr 5fr 2fr",gridTemplateRows:"38px",gridGap:"15px",maxWidth:"800px",margin:"auto"},b=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={term:"",genre:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.term,a.state.genre)},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(v.a,{onSubmit:this.onFormSubmit},i.a.createElement("div",{style:y},i.a.createElement(v.a.Input,{inverted:!0,type:"text",placeholder:"Movie, Show, or Actor/Actress ",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value,genre:""})}}),i.a.createElement(f.a,{placeholder:"Crazy Sub-Genres",fluid:!0,selection:!0,options:this.props.genres,lazyLoad:!0,clearable:!0,search:!0,value:this.state.genre,onChange:function(t,a){e.setState({term:"",genre:a.value})}}),i.a.createElement(h.a,{type:"submit"},"Search")))}}]),t}(n.PureComponent),E=a(178),x=a.n(E).a.create({headers:{"content-type":"application/octet-stream","x-rapidapi-host":"unogs-unogs-v1.p.rapidapi.com","x-rapidapi-key":"0dccc9baa3msh43a7da6ec957a6ap101f0ajsn519fcd31e245"},baseURL:"https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi"}),w=a(179),L=a(44),S=(a(332),a(358)),k=(a(333),function(e){e.preventDefault();var t=e.target.closest("li"),a=document.querySelector(".carousel__slider");t.classList.add("is-open"),t.classList.contains("last-slide")&&a.classList.add("last__slide"),a.classList.add("open-now")}),D=function(e){e.preventDefault();var t=document.querySelector(".carousel__slider");e.target.closest("li").classList.remove("is-open"),t.classList.remove("open-now"),t.classList.remove("last__slide")},M=function(e){var t=e.index,a=e.image,n=e.classToAdd,r=e.callBack;return i.a.createElement(L.d,{index:t,className:n},i.a.createElement("div",{className:"slide",onMouseEnter:k,onMouseLeave:D,onClick:function(e){document.querySelector("li[selected]")&&document.querySelector("li[selected]").removeAttribute("selected"),e.target.closest("li").setAttribute("selected","true"),r()},style:{padding:"2px"}},a))},j=(a(334),function(){var e=document.querySelector(".carousel__slider-tray-wrapper"),t=document.querySelectorAll(".carousel__slider-tray-wrapper li"),a=e.clientWidth,n=window.getComputedStyle(e.querySelector("ul")),i=-1*new WebKitCSSMatrix(n.webkitTransform).m41;t.forEach((function(e){if(e.offsetLeft<i+4*a){var t=e.querySelector("img");t.src||(t.src=t.getAttribute("data-src"))}}))}),O=function(e){var t=e.movieList,n=e.selectMovie,r=e.isLoadingMovies,o=0,s=t.map((function(e){o++;var t=e.largeimage.length?e.largeimage:e.image,a=o<21?"src":"data-src",r=Object(w.a)({},a,t),s=o%7===1?"first-slide":"",l=o%7===0?"last-slide":"";return i.a.createElement(M,{key:o,image:i.a.createElement("img",Object.assign({},r,{hasMasterSpinner:"true",className:"ui small",width:"150px",alt:"Error"})),index:o,classToAdd:s+l,callBack:function(){return n(e.netflixid)}})}));if(r)for(var l=1;l<=7;l++)o++,s.push(i.a.createElement(M,{key:o,image:i.a.createElement(S.a,{inverted:!0,style:{height:200,width:150}},i.a.createElement(S.a.Image,null)),index:o,classToAdd:"",callBack:function(){}}));console.log(o);var c=o%7,u=c?7-c:0;console.log(u);for(var m=1;m<=u;m++)o++,s.push(i.a.createElement(M,{key:o,image:i.a.createElement("img",{"data-src":"",className:"ui small",width:"150px",alt:""}),index:o,classToAdd:"",callBack:function(){}}));var d=0===o?null:i.a.createElement(i.a.Fragment,null,i.a.createElement(L.a,{children:i.a.createElement("img",{src:a(161),alt:"<"})}),i.a.createElement(L.b,{onClick:j,children:i.a.createElement("img",{src:a(161),alt:">"})}));return i.a.createElement(i.a.Fragment,null,i.a.createElement(L.c,{naturalSlideWidth:1,naturalSlideHeight:1.75,totalSlides:o,visibleSlides:7,step:7,style:{width:"100%"},className:"details-closed",infinite:"true"},d,i.a.createElement(L.e,null,s)))},A=a(66),C=a.n(A),T=a(355),q=a(61),_=a(349),F=a(360),z=a(350),I=a(361),N=a(357),R=a(351),B=(a(335),function(e){return i.a.createElement("span",{style:{padding:"10px 40px 0px 0px",float:"left",color:"#828282",height:"35px"}},e.icon,"  ".concat(e.data))}),W={position:"absolute",width:"100%",bottom:"0px",color:"white",boxSizing:"content-box"},G={alignItems:"end",display:"grid",gridTemplateColumns:"repeat(7, 140px)",gridTemplateRows:"repeat(2, 25px)",gridAutoColumns:"140px",gridAutoFlow:"column",overflowX:"scroll",overflowY:"hidden",height:"70px"},H=function(e){var t=i.a.createElement(T.a.Group,{style:{height:"245px",backgroundColor:"#131313",transitionDuration:"500ms"}},i.a.createElement(T.a,null));if(Object.entries(e.movieDetails).length){var a=i.a.createElement("div",null,i.a.createElement(B,{icon:i.a.createElement(q.a,{inverted:!0,fitted:!0,color:"yellow",name:"imdb"}),data:e.movieDetails.imdbinfo.rating}),i.a.createElement(B,{icon:i.a.createElement(q.a,{inverted:!0,fitted:!0,color:"black",name:"time"}),data:e.movieDetails.imdbinfo.runtime}),i.a.createElement(B,{icon:"",data:e.movieDetails.nfinfo.released}),i.a.createElement(B,{icon:"",data:e.movieDetails.imdbinfo.genre}),i.a.createElement(B,{icon:i.a.createElement(q.a,{inverted:!0,fitted:!0,color:"blue",name:"trophy"}),data:e.movieDetails.imdbinfo.awards})),n=e.movieDetails.country.map((function(e){return i.a.createElement(_.a,{name:e.ccode,title:e.country})}));t=i.a.createElement(i.a.Fragment,null,i.a.createElement(T.a.Group,{style:{position:"relative","background-color":"rgb(20,20,20)"}},i.a.createElement(T.a,null,i.a.createElement(T.a.Image,{style:{width:"200px",minHeight:"280px"},src:e.movieDetails.nfinfo.image1}),i.a.createElement(T.a.Content,{style:{position:"relative",padding:"20px 0px",margin:"0px 20px",transition:"opacity 250ms"}},i.a.createElement(T.a.Header,{style:{color:"white",fontSize:"1.6em"}},C.a.decode(e.movieDetails.nfinfo.title)),i.a.createElement(q.a,{style:{position:"absolute",top:"15px",right:"15px"},inverted:!0,color:"grey",name:"x",size:"large",link:!0,onClick:e.closeMovie}),i.a.createElement(T.a.Meta,{style:{overflow:"hidden",marginTop:"0px"}},a),i.a.createElement(T.a.Description,{style:{color:"#828282",fontSize:"1.2em",marginTop:"15px"}},C.a.decode(e.movieDetails.nfinfo.synopsis)),i.a.createElement("div",{style:W},i.a.createElement(F.a,{style:{marginBottom:"0px"},as:"h5",inverted:!0,color:"green"},"Streaming in:"),i.a.createElement("div",{style:G},n))))),i.a.createElement(z.a,null))}return i.a.createElement("div",{className:"transitionMovie",style:{position:"relative",top:"-50px"}},i.a.createElement(I.a,{visible:e.isLoading,animation:"fade",duration:250},i.a.createElement(N.a,{active:e.isLoading,style:{backgroundColor:"rgb(20, 20, 20)"}},i.a.createElement(R.a,{size:"big"},"Loading"))),t)},J=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={movieDetails:{},isLoadingMovie:!1},a.closeMovie=function(){var e=document.querySelector(".carousel");document.querySelector("li[selected]").removeAttribute("selected"),e.classList.add("details-closed"),e.classList.remove("details-open"),a.setState({movieDetails:{}})},a.getMovie=function(){var e=Object(c.a)(l.a.mark((function e(t){var n,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({movieDetails:{},isLoadingMovie:!0}),(n=document.querySelector(".carousel")).classList.add("details-open"),n.classList.remove("details-closed"),e.next=6,x.get("",{params:{t:"loadvideo",q:t}});case 6:i=e.sent,a.setState({movieDetails:i.data.RESULT,isLoadingMovie:!1});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.movieList.length||this.props.isLoading?i.a.createElement(O,{movieList:this.props.movieList,selectMovie:function(t){return e.getMovie(t)},isLoadingMovies:this.props.isLoading}):null;console.log(this.state.movieDetails.length),console.log(this.props.movieList.length);var a=Object.entries(this.state.movieDetails).length||this.state.isLoadingMovie?i.a.createElement(H,{movieDetails:this.state.movieDetails,closeMovie:this.closeMovie,isLoading:this.state.isLoadingMovie}):null;return i.a.createElement(i.a.Fragment,null,t,a)}}]),t}(n.PureComponent),P=a(352),U=function(){var e=Object(c.a)(l.a.mark((function e(t,a){var n,i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log(a),n=(new Date).getFullYear(),i="Rating",a.length||(a="0",i="Relevance"),e.next=7,x.get("",{params:{q:"".concat(t,"-!1900,").concat(n,"-!0,5-!0,10-!").concat(a,"-!Any-!Any-!Any-!gt0-!{downloadable}"),t:"ns",cl:"all",st:"adv",ob:i,p:"1",sa:"or"}});case 7:return r=e.sent,console.log(r.data.ITEMS),e.abrupt("return",r.data.ITEMS);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Y=function(){var e=Object(c.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("",{params:{t:"genres"}});case 2:return t=e.sent,e.abrupt("return",t.data.ITEMS);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=(a(340),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={dropDown:[],movieList:[],isLoading:!1},a.getMovies=function(){var e=Object(c.a)(l.a.mark((function e(t,n){var i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log(n),e.next=4,a.setState({movieList:[],isLoading:!1});case 4:return a.setState({isLoading:!0}),e.next=7,U(t,n);case 7:i=e.sent,console.log(i),a.setState({movieList:i,isLoading:!1});case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:t=e.sent,a=t.reduce((function(e,t){var a="".concat(Object.keys(t)),n=C.a.decode(a),i=t[a].join(";");return 1===t[a].length&&e.push({key:a,value:i,text:n}),e}),[]),this.setState({dropDown:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.movieList.length||this.state.isLoading?i.a.createElement(J,{movieList:this.state.movieList,isLoading:this.state.isLoading}):null;return i.a.createElement(P.a,null,i.a.createElement(F.a,{as:"h1",color:"red",textAlign:"center",style:{margin:60}},"Where is it streaming?"),i.a.createElement(b,{genres:this.state.dropDown,onSubmit:function(t,a){e.getMovies(t,a)}}),t)}}]),t}(i.a.Component));o.a.render(i.a.createElement(K,null),document.querySelector("#root"))}},[[191,1,2]]]);
//# sourceMappingURL=main.27adbfe2.chunk.js.map