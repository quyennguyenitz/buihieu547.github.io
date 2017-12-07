IN.UI.Authorize().place();
IN.Event.on(IN, 'auth', function() {
  $.ajax({
    url: 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=786u8yps549myw&redirect_uri=https%3A%2F%2Fbuihieu547.github.io%2F',
    type: 'GET',
    dataType: 'json',
    crossDomain: true,
    contentType: 'application/json; charset=utf-8',
    success: function (data) {
      console.log(data);
    }
  });
});
