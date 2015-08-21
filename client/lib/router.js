//Router
Router.route("list", {
	path: '/', 
	action: function () {
  		this.render('list');
  	}
});

Router.route('/new', function () {
  this.render('new');
});

Router.route('/search', function () {
  this.render('search');
});