(this.webpackJsonpaboutme=this.webpackJsonpaboutme||[]).push([[0],{180:function(e,t,a){e.exports=a(428)},365:function(e,t,a){},367:function(e,t,a){},392:function(e,t,a){},403:function(e,t,a){},410:function(e,t,a){},424:function(e,t,a){},425:function(e,t,a){},426:function(e,t,a){},427:function(e,t,a){},428:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),i=a.n(l),c=a(176),o=a.n(c),s=a(17),d=a(18),m=a(20),u=a(19),h=a(177),p=a.n(h),E=(a(364),a(365),a(25)),v=a.n(E),b=a(36),f=a(75),y=a.n(f),x=(a(367),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={completed:0,windowHeight:0,domHeight:0},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setHeights(),window.addEventListener("scroll",this.handleScroll.bind(this));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll.bind(this))}},{key:"setHeights",value:function(){this.setState({domHeight:y()("body").height(),windowHeight:y()(window).height()})}},{key:"handleScroll",value:function(){var e=y()("body").scrollTop(),t=Math.round(e/this.state.domHeight*100);t>98&&(t=100),this.setState({completed:t+"%"})}},{key:"render",value:function(){var e=this.state.completed;return r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",style:{width:e}}))}}]),a}(n.Component)),N=a(178),g=a.n(N),w=a(56),C=a.n(w),k=(a(392),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n.state={open:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=!!document.documentMode,a=!t&&!!window.StyleMedia,(t||a)&&this.setState({open:!0});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=[r.a.createElement(C.a,{label:"Close",primary:!0,onTouchTap:this.handleClose})];return r.a.createElement("div",{className:"browser-detect"},r.a.createElement(g.a,{title:"I hate your browser.",actions:e,modal:!0,open:this.state.open},"Internet Explorer and Edge are not supported. Same for Safari :)"))}}]),a}(n.Component)),S=a(179),j=a.n(S),O=a(119),T=a.n(O),D=(a(403),a(173)),H=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={height:e.height,scrollTo:e.height},n}return Object(d.a)(a,[{key:"updateDimensions",value:function(){this.setState({height:window.innerHeight+"px",scrollTo:window.innerHeight})}},{key:"componentDidMount",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.addEventListener("resize",this.updateDimensions.bind(this)),this.updateDimensions();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"onScrollToIntro",value:function(){D(0,this.state.scrollTo,{ease:"out-bounce",duration:2e3})}},{key:"render",value:function(){return r.a.createElement("div",{className:"header-wrapper",style:{height:this.state.height}},r.a.createElement("div",{className:"header"},r.a.createElement("h3",null,"Washington Dutra"),r.a.createElement("h6",null,"Software Developer")),r.a.createElement("div",{className:"scroll-down-btn"},r.a.createElement(j.a,{mini:!0,backgroundColor:"#A80202",onClick:this.onScrollToIntro.bind(this)},r.a.createElement(T.a,null))))}}]),a}(n.Component),M=(a(410),a(120)),L=a.n(M);var J=function(){return r.a.createElement("div",{className:"introduction"},r.a.createElement(L.a,{src:"avatar.png",size:250}),r.a.createElement("p",{className:"introduction-text"},"Curious about life and the universe. ",r.a.createElement("br",null),"Working with Java, Python and Javascript ",r.a.createElement("br",null),"Loves Science, Nature and Gaming."))},B=a(16),P=a(14),U=a.n(P),R=(a(424),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleExpandChange=function(e){n.setState({expanded:e})},n.handleExpandChange1=function(e){n.setState({expanded1:e})},n.handleExpandChange2=function(e){n.setState({expanded2:e})},n.handleExpandChange3=function(e){n.setState({expanded3:e})},n.handleExpand=function(){n.setState({expanded:!0})},n.handleExpand2=function(){n.setState({expanded2:!0})},n.handleExpand3=function(){n.setState({expanded3:!0})},n.handleExpand4=function(){n.setState({expanded4:!0})},n.handleReduce=function(){n.setState({expanded:!1})},n.handleReduce1=function(){n.setState({expanded1:!1})},n.handleReduce2=function(){n.setState({expanded2:!1})},n.handleReduce3=function(){n.setState({expanded3:!1})},n.state={expanded:!1,expanded1:!1,expanded2:!1,expanded3:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(b.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"timeline"},r.a.createElement("p",{className:"headline"},"Working experience"),r.a.createElement("div",{className:"timeline-entry"},r.a.createElement(B.Card,{expanded:this.state.expanded,onExpandChange:this.handleExpandChange},r.a.createElement(B.CardHeader,{title:"Software Engineer",subtitle:"Lieno Tecnologia - PbHub Solu\xe7\xf5es",actAsExpander:!0,showExpandableButton:!0}),r.a.createElement(B.CardText,{expandable:!0},"January 2020 - Present. ",r.a.createElement("br",null),"Development of features and MVP's to Multiples Clients.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"timeline-entries"},r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,null,"Python")),r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,null,"Java")),r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,null,"Javascript")),r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,null,"React")),r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,null,"SQL")),r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,null,"Git")),r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,null,"Css")))))),r.a.createElement("div",{className:"timeline-entry"},r.a.createElement(B.Card,{expanded:this.state.expanded1,onExpandChange:this.handleExpandChange1},r.a.createElement(B.CardHeader,{title:"Software Developer",subtitle:"Unip\xea - Centro Universit\xe1rio de Jo\xe3o Pessoa",actAsExpander:!0,showExpandableButton:!0}),r.a.createElement(B.CardText,{expandable:!0},"February 2018 - June 2018. ",r.a.createElement("br",null),"Development of Microservices to Coordenadoria de Tecnologia da Informa\xe7\xe3o da Pol\xedcia Militar da Para\xedba.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"timeline-entries"},r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,null,"Ruby")),r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,null,"Rails")),r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,null,"SQL")),r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,null,"Git")),r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,null,"Bootstrap")),r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,null,"HTML5")))))),r.a.createElement("div",{className:"timeline-entry"},r.a.createElement(B.Card,{expanded:this.state.expanded2,onExpandChange:this.handleExpandChange2},r.a.createElement(B.CardHeader,{title:"Volunteer Software Developer",subtitle:"Unip\xea - Centro Universit\xe1rio de Jo\xe3o Pessoa",actAsExpander:!0,showExpandableButton:!0}),r.a.createElement(B.CardText,{expandable:!0},"February 2017 - June 2017. ",r.a.createElement("br",null),"Development of Microservices to F\xe1brica de Software - UBTech.",r.a.createElement("div",{className:"timeline-entries"},r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,null,"Python")),r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,null,"Django")),r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,null,"SQL")),r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,null,"Git")),r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,null,"Bootstrap")),r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,null,"HTML5")))))),r.a.createElement("div",{className:"timeline-entry"},r.a.createElement(B.Card,{expanded:this.state.expanded3,onExpandChange:this.handleExpandChange3},r.a.createElement(B.CardHeader,{title:"Student",subtitle:"Unip\xea - Centro Universit\xe1rio de Jo\xe3o Pessoa",actAsExpander:!0,showExpandableButton:!0}),r.a.createElement(B.CardText,{expandable:!0},"February 2014 - June 2019. Bachelor of Computer Science.",r.a.createElement("div",{className:"timeline-entries"},r.a.createElement("div",{className:"timeline-entry-chip"},r.a.createElement(U.a,{href:"https://unipe.edu.br/enade/wp-content/uploads/2018/06/Resultado-ENADE-2017.pdf"},"Third place at Enade's Assessment ")))))))}}]),a}(n.Component)),A=(a(425),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"agile-quote"},r.a.createElement("p",{className:"quote"},r.a.createElement("span",{className:"quote-marks"},"\u201c"),r.a.createElement("span",{className:"quote-content"},'"The power of human thought grows exponentially with the number of minds that share that thought.\u201d'),r.a.createElement("span",{className:"quote-author"},"- Dan Brown, The Lost Symbol   ")))}}]),a}(n.Component)),I=(a(426),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"code-github"},r.a.createElement("p",{className:"headline"},"Look at my code and help me learn"),r.a.createElement(B.Card,null,r.a.createElement(B.CardHeader,{subtitle:"Github Repository",title:"wasjnr/aboutme",avatar:"github.png"}),r.a.createElement(B.CardText,null,"This application is made with React and Material UI. Check out the code on Github."),r.a.createElement(B.CardActions,null,r.a.createElement(C.a,{label:"View on github",href:"https://github.com/wasjnr/aboutme",target:"_blank"}))))}}]),a}(n.Component)),G=(a(427),a(173)),W=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"onScrollToTop",value:function(){G(0,0,{ease:"out-bounce",duration:2e3})}},{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"link-list"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/wasjnr"},"Github"),"/",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://linkedin.com/in/was-dutra/"},"LinkedIn")),r.a.createElement(C.a,{labelStyle:{color:"rgba(0, 0, 0, 0.65)"},label:"Back to top",onClick:this.onScrollToTop}))}}]),a}(n.Component),q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(x,null),r.a.createElement("div",{className:"section header-section"},r.a.createElement("div",{className:"section-container header-component"},r.a.createElement(H,null))),r.a.createElement("div",{className:"section colored"},r.a.createElement("div",{className:"section-container"},r.a.createElement(J,null))),r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"section-container"},r.a.createElement(R,null))),r.a.createElement("div",{className:"section dark"},r.a.createElement("div",{className:"section-container"},r.a.createElement(A,null))),r.a.createElement("div",{className:"section colored"},r.a.createElement("div",{className:"section-container"},r.a.createElement(I,null))),r.a.createElement("div",{className:"section colored"},r.a.createElement("div",{className:"section-container footer-component"},r.a.createElement(W,null)))))}}]),a}(n.Component);o()(),i.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[180,1,2]]]);
//# sourceMappingURL=main.7aea8d91.chunk.js.map