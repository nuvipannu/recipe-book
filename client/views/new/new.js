

  Template.new.events({
    "submit .new-recipe": function (event) {
      //Prevent default browser form submit
      event.preventDefault();

      const tgt = event.target;

      //Get the value from the form element
      const name = tgt.name.value;
      const ingredients = tgt.ingredients.value;
      const description = tgt.description.value;

      var param =  {
        name: name, 
        ingredients: [],
        description: [description],
      };

      param.ingredients = ingredients.split(/,\s*/);

      if (name.length > 0 && ingredients.length > 0) {
        //Insert a recipe into the Collection
        Meteor.call('insertRecipe', param);
      } else {
        alert("Please enter a name and ingredient list")
      }

      // Clear the form
      $(tgt)[0].reset();
    }
  });
