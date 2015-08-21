Meteor.methods({
  insertRecipe: function(params) {
    check(params, {
    	name: String,
    	ingredients: [String],
    	description: [String]
    });

    if (params.name.length > 0 && params.ingredients.length > 0) {
   		Recipes.insert(params);
  	}
  }
});