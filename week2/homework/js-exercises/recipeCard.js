let myMealRecipe = {
    title: "eggplant ball",
    Serving:1,
    ingredients: "eggplant, cream chees, corriander, egg, salt and pepper"
};

for (let item in myMealRecipe) {
    if (item == 'title') {
    console.log('Meal neme: ',  myMealRecipe[item]);
} else if (item == 'Serving') {
    console.log('Serves: ',  myMealRecipe[Serving]);
} else {
    
    console.log('Ingedients: ',  myMealRecipe[ingredients]);
}
}
