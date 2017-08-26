var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

exports.client = new Twitter ({
   consumer_key: '5PkeuT6UIUKHHsqCS9niROIHN',
   consumer_secret: '5Yj8MCvv2NG1AzLKVF2C8cOo3eL9JcyyeDqWgC1W6iVJ1r0EvX',
   access_token_key: '899019541769932800-OilSFsKhrS59Okp69G6gxHNgHIYR2mX',
   access_token_secret: 'soeH1qKbeLOTV9mu7RoDqoPebMmJgCgmZWusdEeDh12Sb'
});


exports.spotify = new Spotify ({
  id: 'a3fb348dd41d48878cdb1eacc0f5f2c0',
  secret: 'c388628f716c4adaa213069f4e807253'
});