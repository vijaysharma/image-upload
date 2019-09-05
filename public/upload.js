(function($, window){

  $.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                      .exec(window.location.search);

    return (results !== null) ? results[1] || 0 : false;
  }



  
let accessCode = '';

$('#accessBtn').on('click', () => {
  window.location.href = "https://login.dev.causeway.com/oauth2/authz/?response_type=code&client_id=localoauth20&redirect_uri=http:localhost:4100/index.html";
  console.log(window.location);
})

$('#setAccessBtn').on('click', () => {
  accessCode = $.urlParam('code');
})



$('#setAuthzBtn').on('click', () => {

  // const formData = new FormData();
  // formData.append('grant_type', 'authorization_code');
  // formData.append('code', accessCode);
  // formData.append('client_id', 'localoauth20');
  // formData.append('client_secret', 'localoauth20_secret');
  // formData.append('redirect_uri', `http://localhost:4100/index.html`);

  const formData = {
    'grant_type': 'authorization_code',
    'code': `${accessCode}`,
    'redirect_uri': 'https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb'
  }
  $.ajax({
    type: "POST",
    url: 'https://login.dev.causeway.com/oauth2/access/',
    data: formData,
    success: (result) => {
      console.log(result)
    }
  });

})


}(jQuery, window));
