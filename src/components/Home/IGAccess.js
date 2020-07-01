
/* Access Token Exchange cURL POST request */
var settings = {
    "url": "https://api.instagram.com/oauth/access_token",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cookie": "csrftoken=UQCbuuuiD7WhrECNjiBwcH9WyGCFvhGr; rur=FRC"
    },
    "data": {
      "client_id": process.env.GATSBY_INSTA_APP_ID,
      "client_secret": process.env.GATSBY_INSTA_APP_SECRET,
      "redirect_uri": "https://honeyandcombsalon.netlify.app/gallery/",
      "grant_type": "authorization_code",
      "code": "AQCKfGZf9zx_H54nEzkwA7tfOR7dDPbgk6gUb9wz2uEgGVmZYM3Q7nDaJUqO_7ll-kJ-J-6F7D2Z-PPO_lSQ49S3t2FYlBERVbw9G67ggcjhRXzKtU5fKRmVnsTH20iRpsa3udh3q57YPaAb51n77egOXWZv-1_3V2oyXUfLWuSopQZ1AHycWNs_TO5cTETb-TkkYw_r-hfglicRUhOMHYD3HAIm0k-M3L3QH6tlOI3lCQ"
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });


/* Access Token Exchange cURL GET request */

var settings = {
    "url": "https://graph.instagram.com/17841412586120133?access_token=IGQVJWLV9MaG5MX2t2ZA2xkRlR6VGxtTFphaUJ0NmZAmbzJJdjJOUWNZAaU4tRWVwRUxUUTRHT1M1bnFubHBTSjVZAdDQwUnh2V3hpZAnJzeWlvc0dvajYzVXpZAcUZAJcXBmRXlvT0UzQmF3TWswRWxLWVNWVHNRQXcwNjVRMzhN&fields=id,username,media_count,account_type,ig_id,media",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Cookie": "csrftoken=UQCbuuuiD7WhrECNjiBwcH9WyGCFvhGr; rur=FRC"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });