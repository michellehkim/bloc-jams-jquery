{

    $('#album-title').text(album.title);
    $('img#album-cover-art').attr('src', album.albumArtUrl);

  $('#album-title').text(album.title);
  $("#artist").text(album.artist);
  $('img#album-cover-art').attr('src', album.albumArtUrl);

  $("#release-info").text(album.releaseInfo);
}
