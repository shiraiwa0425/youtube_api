(function() {
var SI = window.SI = function () {
  this.keyword = {
    q : '靴'
  }
  this.setting = {
    url : 'https://www.googleapis.com/youtube/v3/search',
    key : 'AIzaSyCnz5XLfPqOzBIKcCrWdQI6eIeRUSXxIEw'
  };
  this.data = {
    kind : '',
    videoId :'',
  }
};

SI.prototype.setUrl = function() {
  var url = si.setting.url;
  var key = si.setting.key;
  var keyword =　encodeURI(si.keyword.q);

  var urlQueri = url + '?' + 'key=' + key +'&q=' + keyword + '&part=id';
  decodeURI(urlQueri);
  console.log(urlQueri);
  si.fnAjax(urlQueri);

};




SI.prototype.fnAjax = function(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET',url);
  xhr.responseType = 'json';
  xhr.send();
  xhr.addEventListener('load',function(data){
    console.log(1);
    console.log(result);
    var result = data.currentTarget.response;
    si.data.kind = result.items[0].id.kind;
    console.log(si.data.kind);
  });
  console.log(2);
};


var si = new SI();
si.setUrl();


})();
