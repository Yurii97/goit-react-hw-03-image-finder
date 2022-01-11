(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={gelleryList:"ImageGallery_gelleryList__3HtR0",galleryItem:"ImageGallery_galleryItem__19mQs"}},13:function(e,t,a){e.exports={overlay:"Modal_overlay__1GXjN",modalCont:"Modal_modalCont__3_1S4"}},15:function(e,t,a){e.exports={button:"Button_button__2Agwc"}},16:function(e,t,a){e.exports={galleryImage:"ImageGalleryItem_galleryImage__3hxz2"}},18:function(e,t,a){e.exports={spiner:"Spiner_spiner__3evm_"}},23:function(e,t,a){},24:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=(a(23),a(3)),s=a(4),l=a(6),u=a(5),h=a(8),g=(a(24),a(7)),b=(a(25),a(19)),d=a(9),m=a.n(d),p=a(1),f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleInputChange=function(t){e.setState({inputValue:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.inputValue.trim()?(e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})):g.b.error("enter a query")},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:m.a.searchbar,children:Object(p.jsxs)("form",{className:m.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:m.a.button,children:Object(p.jsx)(b.a,{className:m.a.button_icon})}),Object(p.jsx)("input",{className:m.a.input,type:"text",value:this.state.inputValue,onChange:this.handleInputChange,placeholder:"Search images and photos"})]})})}}]),a}(h.Component),j=a(14),y=a(12),v=a.n(y),O=a(15),_=a.n(O);var x=function(e){var t=e.clickBtn;return Object(p.jsx)("button",{type:"button",className:_.a.button,onClick:t,children:"Load more"})},w=a(16),k=a.n(w),C=a(2),S=a.n(C);function I(e){var t=e.webformatURL,a=e.largeImageURL,n=e.tags,r=e.clickImg;return Object(p.jsx)("img",{src:t,alt:n,className:k.a.galleryImage,"data-source":a,onClick:r})}I.prototype={webformatURL:S.a.string.isRequired,largeImageURL:S.a.string.isRequired,tags:S.a.string.isRequired,clickImg:S.a.func.isRequired};var R=I,q=a(17),L=a.n(q),N=a(18),U=a.n(N);var M=function(){return Object(p.jsx)("div",{className:U.a.spiner,children:Object(p.jsx)(L.a,{type:"Circles",color:"#00BFFF",margin:"0 auto",height:60,width:60})})};function Q(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("24124599-81915d8fff3f3b2b5bfb5c22e","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No images found on request"))}))}Q.prototype={query:S.a.string.isRequired,page:S.a.number.isRequired};var F=a(13),D=a.n(F),E=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleClicOverlay=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(p.jsx)("div",{className:D.a.overlay,onClick:this.handleClicOverlay,children:Object(p.jsx)("div",{className:D.a.modalCont,children:this.props.children})})}}]),a}(n.Component),V=E,z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],page:1,loading:!1,error:null,showModal:!1,imageURL:null},e.togleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleChangePage=function(){e.setState({page:e.state.page+1})},e.clicktoImg=function(t){e.setState({imageURL:{alt:t.target.alt,src:t.target.dataset.source}}),e.togleModal()},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){if(e.searchQuery!==this.props.searchQuery&&this.requestFetch([],1),t.page!==this.state.page){var a=this.state,n=a.images,r=a.page;this.requestFetch(n,r)}}},{key:"requestFetch",value:function(e,t){var a=this;this.setState({loading:!0}),Q(this.props.searchQuery,t).then((function(t){a.setState({images:[].concat(Object(j.a)(e),Object(j.a)(t.hits))}),t.hits.length>0?(g.b.success("request completed"),window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})):g.b.error("No images found on request")})).catch((function(e){a.setState({error:e}),g.b.error(e)})).finally((function(){return a.setState({loading:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.images,n=t.imageURL,r=t.loading,o=t.showModal;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("ul",{className:v.a.gelleryList,children:a.map((function(t){return Object(p.jsx)("li",{className:v.a.galleryItem,children:Object(p.jsx)(R,{webformatURL:t.webformatURL,largeImageURL:t.largeImageURL,tags:t.tags,clickImg:e.clicktoImg})},t.id)}))}),r&&Object(p.jsx)(M,{}),a.length>0&&Object(p.jsx)(x,{clickBtn:this.handleChangePage}),o&&Object(p.jsx)(V,{onClose:this.togleModal,children:Object(p.jsx)("img",{src:n.src,alt:n.alt,width:960})})]})}}]),a}(h.Component),A=z,B=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handlequeryChange=function(t){e.setState({searchQuery:t})},e}return Object(s.a)(a,[{key:"render",value:function(){this.state.searchQuery;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{onSubmit:this.handlequeryChange}),Object(p.jsx)(A,{searchQuery:this.state.searchQuery}),Object(p.jsx)(g.a,{})]})}}]),a}(h.Component),G=B;c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(G,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__XRfRf",form:"Searchbar_form__1vTzb",button:"Searchbar_button__3Jzz1",button_icon:"Searchbar_button_icon__2YeqE",input:"Searchbar_input__1N-iq"}}},[[47,1,2]]]);
//# sourceMappingURL=main.2dbc8205.chunk.js.map