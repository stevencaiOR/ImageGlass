﻿!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("ig-ui",[],n):"object"==typeof exports?exports["ig-ui"]=n():e["ig-ui"]=n()}(this,(()=>(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n);var t=function(){function e(){this.eventHandlers={}}return e.prototype.addEvent=function(e,n){this.eventHandlers[e]=n},e.prototype.removeEvent=function(e){delete this.eventHandlers[e]},e.prototype.startListening=function(){var e,n=this;null===(e=window.chrome.webview)||void 0===e||e.addEventListener("message",(function(e){var t,o,a=e.data,r=null!==(t=null==a?void 0:a.Name)&&void 0!==t?t:"",i=null!==(o=null==a?void 0:a.Data)&&void 0!==o?o:"",l=n.eventHandlers[r],u=!!l;console.info("Received event '".concat(r,"' (handler=").concat(u,") with data:"),i),u&&l(r,i)}))},e}(),o=function(e,n,t,o){return new(t||(t=Promise))((function(a,r){function i(e){try{u(o.next(e))}catch(e){r(e)}}function l(e){try{u(o.throw(e))}catch(e){r(e)}}function u(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}u((o=o.apply(e,n||[])).next())}))},a=function(e,n){var t,o,a,r,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(l){return function(u){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;r&&(r=0,l[0]&&(i=0)),i;)try{if(t=1,o&&(a=2&l[0]?o.return:l[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,l[1])).done)return a;switch(o=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,o=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(e,i)}catch(e){l=[6,e],o=0}finally{t=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}},r=function(e,n){return new Promise((function(t){setTimeout((function(){return t(n)}),e)}))},i=function(e,n){_webview.addEvent(e,n)};const l=function(){function e(){}return e.addEvents=function(){for(var n=Array.from(document.querySelectorAll('input[name="nav"]')),t=0;t<n.length;t++){n[t].addEventListener("change",(function(n){var t=n.target.value;e.setActiveMenu(t)}),!1)}},e.setActiveMenu=function(e){queryAll(".tab-page").forEach((function(e){return e.classList.remove("active")}));var n=query('.tab-page[tab="'.concat(e,'"]'));null==n||n.classList.add("active"),queryAll('input[type="radio"]').forEach((function(e){return e.checked=!1}));var t=query('input[type="radio"][value="'.concat(e,'"]'));t&&(t.checked=!0)},e}();const u=function(){function e(){}return e.load=function(){for(var e in _pageSettings.lang)if(Object.prototype.hasOwnProperty.call(_pageSettings.lang,e))for(var n=_pageSettings.lang[e],t=0,o=queryAll('[data-lang="'.concat(e,'"]'));t<o.length;t++){o[t].innerText=n}},e}();var s=function(e,n,t){if(t||2===arguments.length)for(var o,a=0,r=n.length;a<r;a++)!o&&a in n||(o||(o=Array.prototype.slice.call(n,0,a)),o[a]=n[a]);return e.concat(o||Array.prototype.slice.call(n))},c=function(e){for(var n={},t=queryAll('[tab="'.concat(e,'"] input[name]')),o=queryAll('[tab="'.concat(e,'"] select[name]')),a=0,r=s(s([],t,!0),o,!0);a<r.length;a++){var i=r[a],l=i.name,u="";i.checkValidity()&&((u="checkbox"===i.type?i.checked:"number"===i.type?+i.value:i.value)!==_pageSettings.config[l]&&(n[l]=u))}return n};const d=function(){function e(){}return Object.defineProperty(e,"isOriginalAutoUpdateEnabled",{get:function(){return"0"!==_pageSettings.config.AutoUpdate},enumerable:!1,configurable:!0}),e.loadSettings=function(){query("#Lnk_StartupDir").innerText=_pageSettings.startUpDir||"(unknown)",query("#Lnk_ConfigDir").innerText=_pageSettings.configDir||"(unknown)",query("#Lnk_UserConfigFile").innerText=_pageSettings.userConfigFilePath||"(unknown)",query('[name="AutoUpdate"]').checked=e.isOriginalAutoUpdateEnabled},e.addEvents=function(){query("#Lnk_StartupDir").addEventListener("click",(function(){return post("Lnk_StartupDir",_pageSettings.startUpDir)}),!1),query("#Lnk_ConfigDir").addEventListener("click",(function(){return post("Lnk_ConfigDir",_pageSettings.configDir)}),!1),query("#Lnk_UserConfigFile").addEventListener("click",(function(){return post("Lnk_UserConfigFile",_pageSettings.userConfigFilePath)}),!1)},e.exportSettings=function(){var n=c("general");return!0===n.AutoUpdate!==e.isOriginalAutoUpdateEnabled?n.AutoUpdate=n.AutoUpdate?(new Date).toISOString():"0":delete n.AutoUpdate,n},e}();var g=function(e,n,t,o){return new(t||(t=Promise))((function(a,r){function i(e){try{u(o.next(e))}catch(e){r(e)}}function l(e){try{u(o.throw(e))}catch(e){r(e)}}function u(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}u((o=o.apply(e,n||[])).next())}))},f=function(e,n){var t,o,a,r,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(l){return function(u){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;r&&(r=0,l[0]&&(i=0)),i;)try{if(t=1,o&&(a=2&l[0]?o.return:l[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,l[1])).done)return a;switch(o=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,o=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(e,i)}catch(e){l=[6,e],o=0}finally{t=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}};const v=function(){function e(){}return e.loadSettings=function(){var n=_pageSettings.config.ColorProfile||"";n.includes(".")&&(query('[name="ColorProfile"]').value="Custom",query("#Lnk_CustomColorProfile").innerText=n),e.handleColorProfileChanged(),e.handleUseEmbeddedThumbnailOptionsChanged()},e.addEvents=function(){var n=this;query("#Btn_BrowseColorProfile").addEventListener("click",(function(){return g(n,void 0,void 0,(function(){var e;return f(this,(function(n){switch(n.label){case 0:return[4,postAsync("Btn_BrowseColorProfile")];case 1:return e=n.sent(),query("#Lnk_CustomColorProfile").innerText=e,[2]}}))}))}),!1),query("#Lnk_CustomColorProfile").addEventListener("click",(function(){var e=query("#Lnk_CustomColorProfile").innerText.trim();post("Lnk_CustomColorProfile",e)}),!1),query('[name="ColorProfile"]').addEventListener("change",e.handleColorProfileChanged,!1),query('[name="UseEmbeddedThumbnailRawFormats"]').addEventListener("input",e.handleUseEmbeddedThumbnailOptionsChanged,!1),query('[name="UseEmbeddedThumbnailOtherFormats"]').addEventListener("input",e.handleUseEmbeddedThumbnailOptionsChanged,!1)},e.exportSettings=function(){var e=c("image");e.ImageBoosterCacheCount=+(e.ImageBoosterCacheCount||0),e.ImageBoosterCacheCount===_pageSettings.config.ImageBoosterCacheCount&&delete e.ImageBoosterCacheCount;var n=_pageSettings.config.ColorProfile,t=e.ColorProfile;if("Custom"===t){var o=query("#Lnk_CustomColorProfile").innerText;o&&(t=o)}return t!==n?e.ColorProfile=t:delete e.ColorProfile,e},e.handleColorProfileChanged=function(){var e="Custom"===query('[name="ColorProfile"]').value;query("#Btn_BrowseColorProfile").hidden=!e,query("#Section_CustomColorProfile").hidden=!e},e.handleUseEmbeddedThumbnailOptionsChanged=function(){var e=query('[name="UseEmbeddedThumbnailRawFormats"]').checked,n=query('[name="UseEmbeddedThumbnailOtherFormats"]').checked,t=e||n;query("#Section_EmbeddedThumbnailSize").hidden=!t},e}();const h=function(){function e(){}return e.loadSettings=function(){e.handleUseRandomIntervalForSlideshowChanged(),e.handleSlideshowIntervalsChanged()},e.addEvents=function(){query('[name="UseRandomIntervalForSlideshow"]').addEventListener("input",e.handleUseRandomIntervalForSlideshowChanged,!1),query('[name="SlideshowInterval"]').addEventListener("input",e.handleSlideshowIntervalsChanged,!1),query('[name="SlideshowIntervalTo"]').addEventListener("input",e.handleSlideshowIntervalsChanged,!1)},e.exportSettings=function(){return c("slideshow")},e.handleSlideshowIntervalsChanged=function(){var n=query('[name="SlideshowInterval"]'),t=query('[name="SlideshowIntervalTo"]');n.max=t.value,t.min=n.value;var o=+n.value||5,a=+t.value||5,r=e.toTimeString(o),i=e.toTimeString(a),l=query('[name="UseRandomIntervalForSlideshow"]').checked;query("#Lbl_SlideshowInterval").innerText=l?"".concat(r," - ").concat(i):r},e.handleUseRandomIntervalForSlideshowChanged=function(){var e=query('[name="UseRandomIntervalForSlideshow"]').checked;query("#Lbl_SlideshowIntervalFrom").hidden=!e,query("#Section_SlideshowIntervalTo").hidden=!e},e.toTimeString=function(e){var n=new Date(1e3*e),t=n.getUTCMinutes().toString(),o=n.getUTCSeconds().toString(),a=n.getUTCMilliseconds().toString();return t.length<2&&(t="0".concat(t)),o.length<2&&(o="0".concat(o)),"".concat(t,":").concat(o,".").concat(a)},e}();const p=function(){function e(){}return e.loadSettings=function(){var e,n,t,o;query("#Cmb_MouseWheel_Scroll").value=(null===(e=_pageSettings.config.MouseWheelActions)||void 0===e?void 0:e.Scroll)||"DoNothing",query("#Cmb_MouseWheel_CtrlAndScroll").value=(null===(n=_pageSettings.config.MouseWheelActions)||void 0===n?void 0:n.CtrlAndScroll)||"DoNothing",query("#Cmb_MouseWheel_ShiftAndScroll").value=(null===(t=_pageSettings.config.MouseWheelActions)||void 0===t?void 0:t.ShiftAndScroll)||"DoNothing",query("#Cmb_MouseWheel_AltAndScroll").value=(null===(o=_pageSettings.config.MouseWheelActions)||void 0===o?void 0:o.AltAndScroll)||"DoNothing"},e.addEvents=function(){query("#Btn_ResetMouseWheelAction").addEventListener("click",e.resetDefaultMouseWheelActions,!1)},e.exportSettings=function(){var e,n,t,o,a=c("mouse_keyboard"),r=query("#Cmb_MouseWheel_Scroll").value,i=query("#Cmb_MouseWheel_CtrlAndScroll").value,l=query("#Cmb_MouseWheel_ShiftAndScroll").value,u=query("#Cmb_MouseWheel_AltAndScroll").value,s={};return r!==(null===(e=_pageSettings.config.MouseWheelActions)||void 0===e?void 0:e.Scroll)&&(s.Scroll=r),i!==(null===(n=_pageSettings.config.MouseWheelActions)||void 0===n?void 0:n.CtrlAndScroll)&&(s.CtrlAndScroll=i),l!==(null===(t=_pageSettings.config.MouseWheelActions)||void 0===t?void 0:t.ShiftAndScroll)&&(s.ShiftAndScroll=l),u!==(null===(o=_pageSettings.config.MouseWheelActions)||void 0===o?void 0:o.AltAndScroll)&&(s.AltAndScroll=u),Object.keys(s).length>0?a.MouseWheelActions=s:delete a.MouseWheelActions,a},e.resetDefaultMouseWheelActions=function(){query("#Cmb_MouseWheel_Scroll").value="Zoom",query("#Cmb_MouseWheel_CtrlAndScroll").value="PanVertically",query("#Cmb_MouseWheel_ShiftAndScroll").value="PanHorizontally",query("#Cmb_MouseWheel_AltAndScroll").value="BrowseImages"},e}();var m=function(e,n,t,o){return new(t||(t=Promise))((function(a,r){function i(e){try{u(o.next(e))}catch(e){r(e)}}function l(e){try{u(o.throw(e))}catch(e){r(e)}}function u(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}u((o=o.apply(e,n||[])).next())}))},S=function(e,n){var t,o,a,r,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(l){return function(u){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;r&&(r=0,l[0]&&(i=0)),i;)try{if(t=1,o&&(a=2&l[0]?o.return:l[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,l[1])).done)return a;switch(o=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,o=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=n.call(e,i)}catch(e){l=[6,e],o=0}finally{t=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}};const y=function(){function e(){}return e.loadSettings=function(){e.handleLanguageChanged()},e.addEvents=function(){var n=this;query("#Cmb_LanguageList").addEventListener("change",e.handleLanguageChanged,!1),query("#Btn_RefreshLanguageList").addEventListener("click",(function(){return m(n,void 0,void 0,(function(){var n;return S(this,(function(t){switch(t.label){case 0:return[4,postAsync("Btn_RefreshLanguageList")];case 1:return n=t.sent(),e.loadLanguageList(n),[2]}}))}))}),!1),query("#Lnk_InstallLanguage").addEventListener("click",(function(){return m(n,void 0,void 0,(function(){var n;return S(this,(function(t){switch(t.label){case 0:return[4,postAsync("Lnk_InstallLanguage")];case 1:return n=t.sent(),e.loadLanguageList(n),[2]}}))}))}),!1)},e.exportSettings=function(){return c("language")},e.handleLanguageChanged=function(){var e=query("#Cmb_LanguageList").value,n=_pageSettings.langList.find((function(n){return n.FileName===e}));n&&(query("#Section_LanguageContributors").innerText=n.Metadata.Author)},e.loadLanguageList=function(n){for(var t=query("#Cmb_LanguageList");t.options.length;)t.remove(0);Array.isArray(n)&&n.length>0&&(_pageSettings.langList=n),_pageSettings.langList.forEach((function(e){var n="".concat(e.Metadata.LocalName," (").concat(e.Metadata.EnglishName,")");e.FileName&&0!==e.FileName.length||(n=e.Metadata.EnglishName);var o=new Option(n,e.FileName);t.add(o)})),t.value=_pageSettings.config.Language,e.handleLanguageChanged()},e}();const b=function(){function e(){}return e.loadSettings=function(){},e.addEvents=function(){},e.exportSettings=function(){return c("edit")},e}();const L=function(){function e(){}return e.loadSettings=function(){var e=_pageSettings.config.ZoomLevels||[];query('[name="ZoomLevels"]').value=e.join("; ")},e.addEvents=function(){query('[name="ZoomLevels"]').addEventListener("input",e.handleZoomLevelsChanged,!1),query('[name="ZoomLevels"]').addEventListener("blur",e.handleZoomLevelsBlur,!1)},e.exportSettings=function(){var n,t,o=c("viewer");if(o.ZoomLevels=e.getZoomLevels(),query('[name="ZoomLevels"]').checkValidity()){var a=null===(n=_pageSettings.config.ZoomLevels)||void 0===n?void 0:n.toString();(null===(t=o.ZoomLevels)||void 0===t?void 0:t.toString())===a&&delete o.ZoomLevels}else delete o.ZoomLevels;return o},e.handleZoomLevelsChanged=function(){var n=query('[name="ZoomLevels"]');e.getZoomLevels().some((function(e){return!Number.isFinite(e)}))?n.setCustomValidity("Value contains invalid characters. Only number, semi-colon are allowed."):n.setCustomValidity("")},e.handleZoomLevelsBlur=function(){var n=query('[name="ZoomLevels"]');n.checkValidity()&&(n.value=e.getZoomLevels().join("; "))},e.getZoomLevels=function(){return query('[name="ZoomLevels"]').value.split(";").map((function(e){return e.trim()})).filter(Boolean).map((function(e){return parseFloat(e)}))},e}();const _=function(){function e(){}return e.loadSettings=function(){},e.addEvents=function(){},e.exportSettings=function(){return c("toolbar")},e}();const w=function(){function e(){}return e.loadSettings=function(){},e.addEvents=function(){},e.exportSettings=function(){return c("gallery")},e}();const C=function(){function e(){}return e.loadSettings=function(){},e.addEvents=function(){},e.exportSettings=function(){return c("file_assocs")},e}();const A=function(){function e(){}return e.loadSettings=function(){},e.addEvents=function(){},e.exportSettings=function(){return c("tools")},e}();const E=function(){function e(){}return e.loadSettings=function(){e.loadThemeList(),_pageSettings.themeList.length>0&&(query('[name="DarkTheme"][value="'.concat(_pageSettings.config.DarkTheme,'"]')).checked=!0,query('[name="LightTheme"][value="'.concat(_pageSettings.config.LightTheme,'"]')).checked=!0)},e.addEvents=function(){query("#Lnk_ResetBackgroundColor").addEventListener("click",e.resetBackgroundColor,!1),query("#Lnk_ResetSlideshowBackgroundColor").addEventListener("click",e.resetSlideshowBackgroundColor,!1)},e.exportSettings=function(){return c("appearance")},e.loadThemeList=function(){for(var e=_pageSettings.themeList||[],n=query("#List_ThemeList"),t="",o=0,a=e;o<a.length;o++){var r=a[o];t+='\n        <li>\n          <div class="theme-item">\n            <div class="theme-preview">\n              <img src="'.concat(r.PreviewImage,'" alt="').concat(r.Info.Name,'" />\n            </div>\n            <div class="theme-info">\n              <div class="theme-heading">\n                <div class="theme-title">\n                  <span class="theme-name">').concat(r.Info.Name,'</span>\n                  <span class="theme-version">').concat(r.Info.Version,'</span>\n                  <span class="theme-mode ').concat(r.IsDarkMode?"theme-dark":"theme-light",'"></span>\n                </div>\n                <div class="theme-actions">\n                  <label>\n                    <input type="radio" name="DarkTheme" value="').concat(r.FolderName,'" />\n                    <span>\n                      <span>🌙</span>\n                      <span data-lang="FrmSettings.Tab.Appearance._DarkTheme">[Dark]</span> \n                    </span>\n                  </label>\n                  <label>\n                    <input type="radio" name="LightTheme" value="').concat(r.FolderName,'" />\n                    <span>\n                      <span>☀️</span>\n                      <span data-lang="FrmSettings.Tab.Appearance._LightTheme">[Light]</span>\n                    </span>\n                  </label>\n                </div>\n              </div>\n              <div class="theme-description" title="').concat(r.Info.Description,'">').concat(r.Info.Description,'</div>\n              <div class="theme-location" title="').concat(r.FolderPath,'">').concat(r.FolderPath,'</div>\n              <div class="theme-author">\n                <span class="me-4">\n                  <span data-lang="FrmSettings.Tab.Appearance._Author">[Author]</span>:\n                  ').concat(r.Info.Author||"?",'\n                </span>\n                <span class="me-4">\n                  <span data-lang="_._Website">[Website]</span>:\n                  ').concat(r.Info.Website||"?",'\n                </span>\n                <span>\n                  <span data-lang="_._Email">[Email]</span>:\n                  ').concat(r.Info.Email||"?","\n                </span>\n              </div>\n            </div>\n          </div>\n        </li>")}n.innerHTML=t},e.resetBackgroundColor=function(){var e="light"!==document.documentElement.getAttribute("color-mode")?_pageSettings.config.DarkTheme:_pageSettings.config.LightTheme,n=_pageSettings.themeList.find((function(n){return n.FolderName===e}));if(n){var t=n.BgColor||"#00000000";query('[name="BackgroundColor"]').value=t.substring(0,t.length-2)}},e.resetSlideshowBackgroundColor=function(){query('[name="SlideshowBackgroundColor"]').value="#000000"},e}();const k=function(){function e(){}return e.loadSettings=function(){},e.addEvents=function(){},e.exportSettings=function(){return c("layout")},e}();var q=function(){return q=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},q.apply(this,arguments)};const x=function(){function e(){}return e.load=function(){for(var n in e.loadSelectBoxEnums(),y.loadLanguageList(),_pageSettings.config)if(Object.prototype.hasOwnProperty.call(_pageSettings.config,n)){var t=_pageSettings.config[n];if("string"==typeof t||"number"==typeof t||"boolean"==typeof t){var o=query('[name="'.concat(n,'"]'));if(o){var a=o.tagName.toLowerCase();if("select"===a)o.value=t.toString();else if("input"===a){var r=o.getAttribute("type").toLowerCase(),i=o;if("radio"===r||"checkbox"===r)i.checked=Boolean(t);else if("color"===r){var l=t.toString()||"#00000000";i.value=l.substring(0,l.length-2)}else i.value=t.toString()}}}}d.loadSettings(),v.loadSettings(),h.loadSettings(),b.loadSettings(),L.loadSettings(),_.loadSettings(),w.loadSettings(),y.loadSettings(),p.loadSettings(),C.loadSettings(),A.loadSettings(),y.loadSettings(),E.loadSettings()},e.addEventsForFooter=function(){query("#BtnCancel").addEventListener("click",(function(){return post("BtnCancel")}),!1),query("#BtnOK").addEventListener("click",(function(){var n=e.saveAsJson();post("BtnOK",n)}),!1),query("#BtnApply").addEventListener("click",(function(){var n=e.saveAsJson();post("BtnApply",n)}),!1)},e.saveAsJson=function(){var e=q(q(q(q(q(q(q(q(q(q(q(q(q({},d.exportSettings()),v.exportSettings()),h.exportSettings()),b.exportSettings()),L.exportSettings()),_.exportSettings()),w.exportSettings()),k.exportSettings()),p.exportSettings()),C.exportSettings()),A.exportSettings()),y.exportSettings()),E.exportSettings());return JSON.stringify(e)},e.loadSelectBoxEnums=function(){var e=function(e){if(!Object.prototype.hasOwnProperty.call(_pageSettings.enums,e))return"continue";for(var n=_pageSettings.enums[e],t=function(t){n.forEach((function(n){var o=new Option("".concat(n),n);o.setAttribute("data-lang","_.".concat(e,"._").concat(n)),t.add(o)}))},o=0,a=queryAll('select[data-enum="'.concat(e,'"]'));o<a.length;o++){t(a[o])}};for(var n in _pageSettings.enums)e(n)},e}();return window._webview=new t,_webview.startListening(),window.query=function(e){try{return document.querySelector(e)}catch(e){}return null},window.queryAll=function(e){try{return Array.from(document.querySelectorAll(e))}catch(e){}return[]},window.on=i,window.post=function(e,n){var t;null===(t=window.chrome.webview)||void 0===t||t.postMessage({name:e,data:n})},window.postAsync=function(e,n){return o(void 0,void 0,void 0,(function(){var t,o,l;return a(this,(function(a){switch(a.label){case 0:t=!1,o=null,i(e,(function(n,a){n===e&&(t=!0,o=a,_webview.removeEvent(e))})),null===(l=window.chrome.webview)||void 0===l||l.postMessage({name:e,data:n}),a.label=1;case 1:return t?[3,3]:[4,r(100)];case 2:return a.sent(),[3,1];case 3:return[2,o]}}))}))},window._pageSettings||(window._pageSettings={config:{},lang:{},langList:[],themeList:[],enums:{ImageOrderBy:[],ImageOrderType:[],ColorProfileOption:[],AfterEditAppAction:[],ImageInterpolation:[],MouseWheelAction:[],MouseWheelEvent:[],MouseClickEvent:[],BackdropStyle:[],ToolbarItemModelType:[]},startUpDir:"",configDir:"",userConfigFilePath:""}),_pageSettings.setSidebarActiveMenu=l.setActiveMenu,_pageSettings.loadLanguage=u.load,_pageSettings.loadSettings=x.load,_pageSettings.loadLanguageList=y.loadLanguageList,l.addEvents(),l.setActiveMenu("appearance"),x.load(),u.load(),x.addEventsForFooter(),d.addEvents(),v.addEvents(),h.addEvents(),b.addEvents(),L.addEvents(),_.addEvents(),w.addEvents(),y.addEvents(),p.addEvents(),C.addEvents(),A.addEvents(),y.addEvents(),E.addEvents(),n})()));