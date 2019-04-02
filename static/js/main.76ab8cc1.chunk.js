(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(59)},30:function(e,t,a){},42:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),o=a.n(r),m=a(5),i=a(7),l=(a(30),function(){return c.a.createElement("div",{className:"rmdb-header"},c.a.createElement("div",{className:"rmdb-header-content"},c.a.createElement(m.b,{to:"/"},c.a.createElement("img",{src:"./images/reactMovie_logo.png",alt:"rmdb_logo",className:"rmdb-logo"})),c.a.createElement("img",{src:"./images/tmdb_logo.png",alt:"tmdb-logo",className:"rmdb-tmdb-logo"})))}),s=a(14),u=a(18),d=a(8),v=a(9),h=a(11),g=a(10),p=a(12),E="http://image.tmdb.org/t/p/",b=(a(42),function(e){return c.a.createElement("div",{className:"rmdb-heroimage",style:{background:"linear-gradient(to bottom,rgba(0,0,0,0) 39%,rgba(0,0,0,0) 41%, rgba(0,0,0,0.65) 100%),url(".concat(e.image,"),#1c1c1c")}},c.a.createElement("div",{className:"rmdb-heroimage-content"},c.a.createElement("div",{className:"rmdb-heroimage-text"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.text))))}),f=a(15),_=a(6),N=a.n(_),S=(a(47),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},a.timeout="",a.doSearch=function(e){e.preventDefault(),a.setState(Object(f.a)({},e.target.name,e.target.value)),clearTimeout(a.timeout),a.timeout=setTimeout(function(){a.props.callback(a.state.value)},500)},a}return Object(p.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"rmdb-searchbar"},c.a.createElement("div",{className:"rmdb-searchbar-content"},c.a.createElement(N.a,{className:"rmdb-fa-search",name:"search",size:"2x"}),c.a.createElement("input",{type:"text",className:"rmdb-searchbar-input",placeholder:"Search...",onChange:this.doSearch,value:this.state.value,name:"value"})))}}]),t}(n.Component)),y=(a(48),function(e){return c.a.createElement("div",{className:"rmdb-grid"},e.header&&!e.loading&&c.a.createElement("h1",null,e.header),c.a.createElement("div",{className:"rmdb-grid-content"},e.children.map(function(e,t){return c.a.createElement("div",{key:t,className:"rmdb-grid-element"},e)})))}),k=(a(49),function(e){var t=e.image,a=e.movieId,n=e.movieName,r=e.clickable;return c.a.createElement("div",{className:"rmdb-moviethumb"},r?c.a.createElement(m.b,{to:{pathname:"/".concat(a),movieName:"".concat(n)}},c.a.createElement("img",{src:t,alt:"moviethumb"})):c.a.createElement("img",{src:t,alt:"moviethumb"}))}),O=(a(50),function(){return c.a.createElement("div",{className:"loader"})}),P=(a(51),function(e){return c.a.createElement("div",{className:"rmdb-loadmorebtn",onClick:e.onClick},c.a.createElement("p",null,e.text))}),I=(a(52),Object({NODE_ENV:"production",PUBLIC_URL:"/react-movie-finder",REACT_APP_MOVIE_KEY:"6cc7269f178c5910d8288d9f32230cd8",REACT_APP_BASE_URL:"https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/",REACT_APP_PUBLIC_URL:"https://supremesalvatore.github.io/react-movie-finder"})),j=I.REACT_APP_MOVIE_KEY,A=I.REACT_APP_BASE_URL,M=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).state={movies:[],heroImage:"",loading:!1,currentPage:0,totalPages:0,searchTerm:""},a.searchMovies=function(e){var t="";a.setState({movies:[],loading:!0,searchTerm:e}),t=""===e?"".concat(A,"movie/popular?api_key=").concat(j,"&language=en-US&page=1"):"".concat(A,"search/movie?api_key=").concat(j,"&language=en-US&query=").concat(e),a.fetchMovies(t)},a.loadMoreItems=function(){var e=a.state,t=e.searchTerm,n=e.currentPage,c="";a.setState({loading:!0}),c=""===t?"".concat(A,"movie/popular?api_key=").concat(j,"&language=en-US&page=").concat(n+1):"".concat(A,"search/movie?api_key=").concat(j,"&language=en-US&query=").concat(t,"&page=").concat(n),a.fetchMovies(c)},a.fetchMovies=function(e){var t=a.state.movies;fetch(e).then(function(e){return e.json()}).then(function(e){console.log(e.results),a.setState({movies:[].concat(Object(u.a)(t),Object(u.a)(e.results)),heroImage:a.state.heroImage||e.results[0],loading:!1,currentPage:e.page,totalPages:e.total_pages},function(){""===a.state.searchTerm&&localStorage.setItem("HomeState",JSON.stringify(a.state))})})},a}return Object(p.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){if(localStorage.getItem("HomeState")){var e=JSON.parse(localStorage.getItem("HomeState"));this.setState(Object(s.a)({},e))}else{this.setState({loading:!0});var t="".concat(A,"movie/popular?api_key=").concat(j,"&language=en-US&page=1");this.fetchMovies(t)}}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.heroImage,n=e.loading,r=e.currentPage,o=e.totalPages,m=e.searchTerm;return c.a.createElement("div",{className:"rmdb-home"},a&&c.a.createElement("div",null,c.a.createElement(b,{image:"".concat(E).concat("w1280").concat(a.backdrop_path),title:a.original_title,text:a.overview}),c.a.createElement(S,{callback:this.searchMovies})),c.a.createElement("div",{className:"rmdb-home-grid"},c.a.createElement(y,{header:m?"Search Result":"Popular Movies",loading:n},t.map(function(e,t){return c.a.createElement(k,{key:t,clickable:!0,image:e.poster_path?"".concat(E).concat("w500").concat(e.poster_path):"./images/no_image.jpg",movieId:e.id,movieName:e.original_title})})),n&&c.a.createElement(O,null),r<=o&&!n&&c.a.createElement(P,{text:"Load More",onClick:this.loadMoreItems})))}}]),t}(n.Component),R=(a(53),function(e){return c.a.createElement("div",{className:"rmdb-navigation"},c.a.createElement("div",{className:"rmdb-navigation-content"},c.a.createElement(m.b,{to:"/"},c.a.createElement("p",null,"Home")),c.a.createElement("p",null,"/"),c.a.createElement("p",null,e.movie)))}),w=(a(54),function(e){return c.a.createElement("div",{className:"rmdb-movieinfo",style:{background:e.movie.backdrop_path?"url(".concat(E).concat("w1280").concat(e.movie.backdrop_path,")"):"#000"}},c.a.createElement("div",{className:"rmdb-movieinfo-content"},c.a.createElement("div",{className:"rmdb-movieinfo-thumb"},c.a.createElement(k,{image:e.movie.poster_path?"".concat(E).concat("w500").concat(e.movie.poster_path):"./images/no_image.jpg",clickable:!1})),c.a.createElement("div",{className:"rmdb-movieinfo-text"},c.a.createElement("h1",null,e.movie.title),c.a.createElement("h3",null,"PLOT"),c.a.createElement("p",null,e.movie.overview),c.a.createElement("h3",null,"IMDB Rating"),c.a.createElement("div",{className:"rmdb-rating"},c.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"40",high:"70",value:e.movie.vote_average?10*e.movie.vote_average:"50"}),c.a.createElement("p",{className:"rmdb-score"},e.movie.vote_average)),e.directors.length>1?c.a.createElement("h3",null,"Directors"):c.a.createElement("h3",null,"Director"),e.directors.map(function(e,t){return c.a.createElement("p",{key:t,className:"rmdb-director"},e.name)})),c.a.createElement(N.a,{className:"fa-film",name:"film",size:"4x"})))}),C=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)},U=(a(55),function(e){var t=e.time,a=e.budget,n=e.revenue;return c.a.createElement("div",{className:"rmdb-movieinfobar"},c.a.createElement("div",{className:"rmdb-movieinfobar-content"},c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(N.a,{className:"fa-time",name:"clock-o",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Running time: ",function(e){var t=Math.floor(e/60),a=e%60;return"".concat(t,"h ").concat(a,"m")}(t))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(N.a,{className:"fa-budget",name:"money",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Budget: ",C(a))),c.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},c.a.createElement(N.a,{className:"fa-revenue",name:"ticket",size:"2x"}),c.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Revenue: ",C(n)))))}),T=(a(56),function(e){var t=e.actor,a=t.profile_path,n=t.name,r=t.character;return c.a.createElement("div",{className:"rmdb-actor"},c.a.createElement("img",{src:a?"".concat(E).concat("w154").concat(a):"./images/no_image.jpg",alt:"actorthumb"}),c.a.createElement("span",{className:"rmdb-actor-name"},n),c.a.createElement("span",{className:"rmdb-actor-character"},r))}),x=(a(57),Object({NODE_ENV:"production",PUBLIC_URL:"/react-movie-finder",REACT_APP_MOVIE_KEY:"6cc7269f178c5910d8288d9f32230cd8",REACT_APP_BASE_URL:"https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/",REACT_APP_PUBLIC_URL:"https://supremesalvatore.github.io/react-movie-finder"})),L=x.REACT_APP_MOVIE_KEY,B=x.REACT_APP_BASE_URL,D=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).state={movie:{},actors:[],directors:[],loading:!1},a.fetchMovie=function(e){fetch(e).then(function(e){return e.json()}).then(function(e){console.log(e),e.status_code?a.setState({loading:!1}):a.setState({movie:e},function(){var e="".concat(B,"movie/").concat(a.props.match.params.movieId,"/credits?api_key=").concat(L);fetch(e).then(function(e){return e.json()}).then(function(e){var t=e.crew.filter(function(e){return"Director"===e.job});a.setState({actors:e.cast,directors:t,loading:!1},function(){localStorage.setItem("".concat(a.props.match.params.movieId),JSON.stringify(a.state))})}).catch(function(e){return console.log(e)})})})},a}return Object(p.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){if(localStorage.getItem("".concat(this.props.match.params.movieId))){var e=JSON.parse(localStorage.getItem("".concat(this.props.match.params.movieId)));this.setState(Object(s.a)({},e))}else{this.setState({loading:!0});var t="".concat(B,"movie/").concat(this.props.match.params.movieId,"?api_key=").concat(L,"&language=en-US");this.fetchMovie(t)}}},{key:"render",value:function(){var e=this.state,t=e.movie,a=e.directors,n=e.actors,r=e.loading,o=t.runtime,m=t.budget,i=t.revenue;return c.a.createElement("div",{className:"rmdb-movie"},t&&c.a.createElement("div",null,c.a.createElement(R,{movie:this.props.location.movieName}),c.a.createElement(w,{movie:t,directors:a}),c.a.createElement(U,{time:o,budget:m,revenue:i})),n&&c.a.createElement("div",{className:"rmdb-movie-grid"},c.a.createElement(y,{header:"Actors"},n.map(function(e,t){return c.a.createElement(T,{key:t,actor:e})}))),!n&&!r&&c.a.createElement("h1",null,"No Movie Found!"),r&&c.a.createElement(O,null))}}]),t}(n.Component),J=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Whoooops. This page doesn't exist"))},V=function(){return c.a.createElement(m.a,{basename:"/react-movie-finder"},c.a.createElement(l,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",component:M,exact:!0}),c.a.createElement(i.a,{path:"/:movieId",component:D,exact:!0}),c.a.createElement(i.a,{component:J})))};a(58);o.a.render(c.a.createElement(V,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.76ab8cc1.chunk.js.map