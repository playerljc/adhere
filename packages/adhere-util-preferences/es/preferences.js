function putString(t,n,e){e.setItem(t,n)}function getString(t,n){return n.getItem(t)}function putObject(t,n,e){putString(t,JSON.stringify(n),e)}function getObject(t,n){t=n.getItem(t);return null==t?null:JSON.parse(t)}function remove(t,n){n.removeItem(t)}export default{putStringByLocal:function(t,n){putString(t,n,window.localStorage)},getStringByLocal:function(t){return getString(t,window.localStorage)},putObjectByLocal:function(t,n){putObject(t,n,window.localStorage)},getObjectByLocal:function(t){return getObject(t,window.localStorage)},removeByLocal:function(t){remove(t,window.localStorage)},putStringBySession:function(t,n){putString(t,n,window.sessionStorage)},getStringBySession:function(t){return getString(t,window.sessionStorage)},putObjectBySession:function(t,n){putObject(t,n,window.sessionStorage)},getObjectBySession:function(t){return getObject(t,window.sessionStorage)},removeBySession:function(t){remove(t,window.sessionStorage)}};
//# sourceMappingURL=preferences.js.map