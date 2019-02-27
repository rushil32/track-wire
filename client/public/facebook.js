function facebookLogin (response) {
  if (response.status === 'connected') {
    var id = response.authResponse.userID;
    var accessToken = response.authResponse.accessToken;

    FB.api('/me', { fields: 'name, email, picture'}, function(response) {
      createUser({ id, ...response });

      if (window.location.pathname === '/') {
        window.location.href = '/dash';
      }
    });
  } else {
    if (window.location.pathname !== '/') {
      window.location.href = '/';
    }
  }
}

function createUser(data) {
  return fetch('/user', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: data.id,
      name: data.name,
      email: data.email,
      picture: data.picture.data.url
    })
  })
  .then(res => res.json())
  .then(user => {
    console.log(user);
    window.user = user;
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId            : '1585829324882369',
    autoLogAppEvents : true,
    xfbml            : true,
    status           : true,
    version          : 'v3.2'
  });
  
  window.facebookLogin = facebookLogin;
  FB.getLoginStatus(window.facebookLogin);
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));