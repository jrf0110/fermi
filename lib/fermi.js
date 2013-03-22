window.define = window.define || function(module){ window.fermi = module(); };

(function(define){
  define(function(){
    var utils = (function(){
      var exports = {};

      exports.get = function(url, params, callback){
        exports.ajax({
          method: 'GET'
        , data:   params
        , url:    url
        }, callback);

        return exports
      };

      exports.getText = function(url, params, callback){
        exports.ajax({
          method:       'GET'
        , data:         params
        , url:          url
        , contentType:  'application/text'
        }, callback);

        return exports
      };

      exports.post = function(url, data, callback){
        exports.ajax({
          method: 'POST'
        , data:   data
        , url:    url
        }, callback);

        return exports
      };

      exports.put = function(url, data, callback){
        exports.ajax({
          method: 'PUT'
        , data:   data
        , url:    url
        }, callback);

        return exports
      };

      exports.delete = function(url, data, callback){
        exports.ajax({
          method: 'PUT'
        , data:   data
        , url:    url
        }, callback);

        return exports
      };

      exports.ajax = function(options, callback){
        var req = new XMLHttpRequest();

        if (typeof options.data === "function"){
          callback = options.data;
          options.data = {};
        }

        options.method = options.method || options.type;

        if (options.method === "GET"){
          var i = 0;
          for (var key in options.data){
            options.url += (i++ == 0 ? '?' : '&') + key + "=" + options.data[key];
          }
        }


        req.open(options.method, options.url);
        req.withCredentials = true;
        req.setRequestHeader('Content-Type', options.contentType || 'application/json');
        req.send(options.data && options.method != "GET" ? JSON.stringify(options.data) : null);

        req.onreadystatechange = function(e){
          if (req.readyState == 4 && callback)
            callback(null, options.contentType === 'application/json'
              ? JSON.parse(req.responseText)
              : req.responseText
            );
        };

      }

      exports.with = function(fn){
        var args = Array.prototype.slice.call(arguments, 1);
        return function(){
          fn.apply({}, args);
        };
      }

       return exports;
    })();

    var loadContent = function(node){
      utils.get(node.dataset.content, function(error, result){
        if (error) throw error;

        node.innerHTML = result;
      });
    };

    var evaluate = function(node){
      var nodes = [node], curr;

      while (curr = nodes.pop()){
        for (var i = 0, l = curr.childNodes.length; i < l; ++i)
          nodes.push(curr.childNodes[i]);
        
        if (curr && curr.dataset && curr.dataset.content) loadContent(curr);
      }
    };

    return {
      init: function(){
        evaluate(document.body);
      }
    }
  });
})(define);