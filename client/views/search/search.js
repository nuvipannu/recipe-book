Template.search.helpers({
	results: function() {
		const recipes = Recipes.find({$or: [
			{name: Session.get("search")},
			{ingredients: Session.get("search")}
		]});

		console.log(recipes.fetch());
		return recipes;
	}
});

Template.search.events({
	"keyup #search": function(e, t) {
		const search = $(e.currentTarget).val();
		console.log(search);
		Session.set("search" , search);
	}
});
