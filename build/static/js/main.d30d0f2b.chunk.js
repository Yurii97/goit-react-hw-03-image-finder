(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={gelleryList:"ImageGallery_gelleryList__3HtR0",galleryItem:"ImageGallery_galleryItem__19mQs"}},14:function(e,t,a){e.exports={button:"Button_button__2Agwc"}},15:function(e,t,a){e.exports={galleryImage:"ImageGalleryItem_galleryImage__3hxz2"}},17:function(e,t,a){e.exports={spiner:"Spiner_spiner__3evm_"}},22:function(e,t,a){},23:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),s=a.n(c),o=(a(22),a(4)),i=a(5),u=a(7),l=a(6),h=a(3),b=(a(23),a(8)),g=(a(24),a(18)),p=a(9),m=a.n(p),j=a(1),f=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleInputChange=function(t){e.setState({inputValue:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.inputValue.trim()?(e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})):b.b.error("enter a query")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:m.a.searchbar,children:Object(j.jsxs)("form",{className:m.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:m.a.button,children:Object(j.jsx)(g.a,{className:m.a.button_icon})}),Object(j.jsx)("input",{className:m.a.input,type:"text",value:this.state.inputValue,onChange:this.handleInputChange,placeholder:"Search images and photos"})]})})}}]),a}(h.Component),d=a(13),y=a(12),_=a.n(y),O=a(14),v=a.n(O);var x=function(e){var t=e.clickBtn;return Object(j.jsx)("button",{type:"button",className:v.a.button,onClick:t,children:"Load more"})},S=a(15),I=a.n(S);var w=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.tags;return Object(j.jsx)("img",{src:t,alt:n,className:I.a.galleryImage,"data-source":a})},k=a(16),N=a.n(k),C=a(17),L=a.n(C);var q=function(){return Object(j.jsx)("div",{className:L.a.spiner,children:Object(j.jsx)(N.a,{type:"Circles",color:"#00BFFF",margin:"0 auto",height:60,width:60})})};var R=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],page:1,loading:!1,error:null},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){e.searchQuery!==this.props.searchQuery&&(this.setState({images:[],page:1,loading:!0}),console.log("change"),this.requestFetch()),t.page!==this.state.page&&window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}},{key:"requestFetch",value:function(){var e=this,t=this.state,a=t.images,n=t.page;(function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("24124599-81915d8fff3f3b2b5bfb5c22e","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():b.b.error("No images found on request")}))})(this.props.searchQuery,n).then((function(t){return e.setState({images:[].concat(Object(d.a)(a),Object(d.a)(t.hits)),page:n+1})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state.images;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{className:_.a.gelleryList,children:e.map((function(e){return Object(j.jsx)("li",{className:_.a.galleryItem,children:Object(j.jsx)(w,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags})},e.id)}))}),this.state.loading&&Object(j.jsx)(q,{}),e.length>0&&Object(j.jsx)(x,{clickBtn:this.requestFetch})]})}}]),a}(h.Component),F=R,Q=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handlequeryChange=function(t){e.setState({searchQuery:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{onSubmit:this.handlequeryChange}),Object(j.jsx)(F,{searchQuery:this.state.searchQuery}),Object(j.jsx)(b.a,{})]})}}]),a}(h.Component),U=Q;s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(U,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__XRfRf",form:"Searchbar_form__1vTzb",button:"Searchbar_button__3Jzz1",button_icon:"Searchbar_button_icon__2YeqE",input:"Searchbar_input__1N-iq"}}},[[46,1,2]]]);
//# sourceMappingURL=main.d30d0f2b.chunk.js.map