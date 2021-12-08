function a() {
  window.b=window.open('https://non-existent.google.com/');
  setTimeout(function(){b.document.body.innerHTML='<h1>Hello from Fake Google</h1>'},2000)
}