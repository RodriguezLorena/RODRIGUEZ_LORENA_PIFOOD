const axios = require("axios");
// const{dataPorId}=require("../DatosJson/dataPorIdCreo")
// const { dataPrueba}= require("../DatosJson/dataPrueba")
// const {dataTotalCreo}= require("../DatosJson/dataTotalCreo")
// const {dataTotalEsteSi}=require("../DatosJson/dataTotalEsteSi")
const { API_KEY_DOS } = process.env;
const { Receta, Dieta } = require("../db");

const datosOficiales=[
	{
		"id": 716426,
		"nombre": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has 192 calories, 7g of protein, and 6g of fat per serving. For $1.12 per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about 30 minutes. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an awesome spoonacular score of 100%. Users who liked this recipe also liked Vegetable Fried Brown Rice, Vegetable Fried Cauliflower Rice, and Easy Vegetable Fried Brown Rice with Egg.",
		"puntajeDeSalud": 76,
		"pasoApaso": "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\" \nHeat 1T butter and 1T oil in a large skillet over medium heat. \nAdd garlic and the white and light green pieces of scallion. Sauté about a minute. \nAdd the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again. \nAdd cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom. \nLet it sit for about two minutes—so the rice can get toasted and a little crispy. \nAdd the peas and broccoli and stir again. \nDrizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat. \nAdd chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.",
		"imagen": "https://spoonacular.com/recipeImages/716426-312x231.jpg"
	},
	{
		"id": 715594,
		"nombre": "Homemade Garlic and Basil French Fries",
		"dieta": [
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "The recipe Homemade Garlic and Basil French Fries is ready in roughly 45 minutes and is definitely a super vegan option for lovers of American food. One serving contains 596 calories, 18g of protein, and 15g of fat. For 83 cents per serving, you get a side dish that serves 2. Several people made this recipe, and 1669 would say it hit the spot. If you have garlic salt, flour, garlic powder, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe deserves a spoonacular score of 100%. This score is outstanding. Try Homemade French Fries with Fresh Garlic and Dill, Roasted Garlic French Fries, and Sweet Potato Fries With Basil Salt and Garlic Mayonnaise for similar recipes.",
		"puntajeDeSalud": 77,
		"pasoApaso": "",
		"imagen": "https://spoonacular.com/recipeImages/715594-312x231.jpg"
	},
	{
		"id": 715497,
		"nombre": "Berry Banana Breakfast Smoothie",
		"dieta": [
			{
				"nombre": "lacto ovo vegetarian"
			}
		],
		"resumenDelPlato": "If you have around 5 minutes to spend in the kitchen, Berry Banana Breakfast Smoothie might be a tremendous lacto ovo vegetarian recipe to try. This recipe makes 1 servings with 501 calories, 21g of protein, and 11g of fat each. For $2.19 per serving, this recipe covers 32% of your daily requirements of vitamins and minerals. 688 people found this recipe to be tasty and satisfying. It is brought to you by Pink When. Head to the store and pick up graham crackers, soy milk, banana, and a few other things to make it today. It works well as a morn meal. Overall, this recipe earns a super spoonacular score of 100%. If you like this recipe, take a look at these similar recipes: Berry Banana Breakfast Smoothie, Berry and Bananan Oat Breakfast Smoothie, and Berry Breakfast Smoothie.",
		"puntajeDeSalud": 63,
		"pasoApaso": "Take some yogurt in your favorite flavor and add 1 container to your blender. \nAdd in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve.",
		"imagen": "https://spoonacular.com/recipeImages/715497-312x231.jpg"
	},
	{
		"id": 644387,
		"nombre": "Garlicky Kale",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "paleolithic"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "primal"
			},
			{
				"nombre": "whole 30"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Garlicky Kale might be just the side dish you are searching for. This caveman, gluten free, primal, and whole 30 recipe serves 2 and costs 69 cents per serving. One serving contains 179 calories, 3g of protein, and 15g of fat. A few people made this recipe, and 17 would say it hit the spot. If you have olive oil, garlic, curly kale, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 99%. This score is awesome. Try Garlicky Kale, Garlicky Kale, and Garlicky Kale Crostini for similar recipes.",
		"puntajeDeSalud": 92,
		"pasoApaso": "Heat the olive oil in a large pot over medium heat. \nAdd the kale and cover.Stir occasionally until the volume of the kale is reduced by half. Uncover. \nAdd garlic and basalmic.Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed. \nServe hot.",
		"imagen": "https://spoonacular.com/recipeImages/644387-312x231.jpg"
	},
	{
		"id": 716268,
		"nombre": "African Chicken Peanut Stew",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			}
		],
		"resumenDelPlato": "Need a gluten free and dairy free main course? African Chicken Peanut Stew could be a tremendous recipe to try. This recipe makes 1 servings with 1377 calories, 75g of protein, and 102g of fat each. For $3.87 per serving, this recipe covers 62% of your daily requirements of vitamins and minerals. It can be enjoyed any time, but it is especially good for Autumn. From preparation to the plate, this recipe takes approximately 45 minutes. 124 people have tried and liked this recipe. Head to the store and pick up bell peppers, tomato, pepper, and a few other things to make it today. To use up the tomato you could follow this main course with the Pink Peony Popcorn Balls as a dessert. All things considered, we decided this recipe deserves a spoonacular score of 99%. This score is super. Try African Chicken Peanut Stew, West African Peanut-Chicken Stew, and One-Pot African Peanut Stew for similar recipes.",
		"puntajeDeSalud": 100,
		"pasoApaso": "Season and Boil the Chicken for 10 minutes with salt, pepper, seasoning, a handful of onions.Once the chicken is ready, in the same stock, Boil the chopped sweet potatoes till its almost cooked. Save the stock in a separate Bowl and the chicken and potatoes in a separate Bowl as well.In a pot, heat up one cooking spoon of oil and fry the chicken till it Browns. Take it out and heat up the other 1.5 cooking spoons of oil and fry the onions, tomatoes Both chopped and Blended, ginger and garlic. \nAdd your seasoning, curry, thyme, parsley, salt and pepper to the pot. \nPour in your stock, chicken and potatoes to cook further.Stir in your peanut Butter and allow to cook for 10 minutes on low heat.If your sauce gets too thick, add a little water to it. \nServe with white rice or more sweet potatoes.You could also garnish the dish with Bell peppers.   ",
		"imagen": "https://spoonacular.com/recipeImages/716268-312x231.jpg"
	},
	{
		"id": 716381,
		"nombre": "Nigerian Snail Stew",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "paleolithic"
			},
			{
				"nombre": "primal"
			},
			{
				"nombre": "whole 30"
			}
		],
		"resumenDelPlato": "Nigerian Snail Stew might be just the main course you are searching for. For $9.08 per serving, this recipe covers 45% of your daily requirements of vitamins and minerals. This recipe makes 1 servings with 363 calories, 23g of protein, and 5g of fat each. Plenty of people made this recipe, and 361 would say it hit the spot. If you have chili powder, snails, limes, and a few other ingredients on hand, you can make it. To use up the ice cubes you could follow this main course with the Nectarine, Blackberry, and Pecan Sundaes as a dessert. It can be enjoyed any time, but it is especially good for Autumn. It is a good option if you're following a gluten free, dairy free, and whole 30 diet. All things considered, we decided this recipe deserves a spoonacular score of 99%. This score is spectacular. Try Nigerian Kidney Bean Stew With a Peanut Sauce, Little Snail Rolls, and Maple Snail Cookies for similar recipes.",
		"puntajeDeSalud": 89,
		"pasoApaso": "In a bowl, wash the snails with lime and salt till all the slime is gone. \nPlace the snail in a pot with the chili powder, seasoning cubes, chopped garlic, 1/2 of the onion(chopped) and a pinch of salt and bring to boil for about 15-18 minutes.In a separate pot, place the tomatoes, bell pepper, scotch bonnet peppers, crush with a wooden spoon till some of the juices come out and bring to boil till they are all soft on low heat. (This helps to dry up some of the extra water from the tomatoes)In a pot, pour in your oil, cut your onions in rings and fry in the hot oil on medium heat. \nPour in your tomato-pepper mix and allow to fry for about 8-10 minutes on low heat. \nPour in the left-over stock from the snail and allow to cook for 5 more minutes on medium heat. \nAdd your seasoning cubes and taste for salt. \nAdd your snails and stir in and allow to stew for 2-4 minutes more on medium heat. \nServe with Rice, Pasta, Plantain, Yams or Potatoes.",
		"imagen": "https://spoonacular.com/recipeImages/716381-312x231.jpg"
	},
	{
		"id": 782601,
		"nombre": "Red Kidney Bean Jambalaya",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Red Kidney Bean Jambalaya might be just the Creole recipe you are searching for. One serving contains 538 calories, 21g of protein, and 8g of fat. For $1.69 per serving, this recipe covers 34% of your daily requirements of vitamins and minerals. This recipe from foodandspice.blogspot.com has 52 fans. A few people really liked this main course. Head to the store and pick up brown rice, vegetable stock, liquid smoke, and a few other things to make it today. To use up the sea salt you could follow this main course with the Raspberry Sea Salt Brownies as a dessert. From preparation to the plate, this recipe takes about 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 99%. This score is spectacular. Try Red Kidney Bean Dip, Kidney Bean Dip, and Red Kidney Bean Curry for similar recipes.",
		"puntajeDeSalud": 100,
		"pasoApaso": "Rinse the kidney beans and brown rice separately. Cover the kidney beans with water and soak for 8 hours or overnight. In a separate bowl, cover the brown rice with water and soak for 8 hours or overnight. \nDrain and rinse the kidney beans, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 hour or until just tender but not falling apart. \nDrain and set aside. \nHeat the oil in a large saucepan over medium heat. When hot, add the onion and saut for 5 minutes. Now add the garlic, carrots, celery and green beans, and stir for another 5 minutes. Next add the tomatoes, red pepper, eggplant, sage, thyme, marjoram and celery seed, and continue to stir for another few minutes. \nPour in the vegetable stock, liquid smoke, rice and the cooked kidney beans. Bring to a boil, reduce heat to medium low, cover, and cook, stirring occasionally, for 45 minutes or until the rice is tender. \nAdd water as necessary if the stew becomes too dry.Season with sriracha, salt and pepper, and taste for seasoning  add more liquid smoke, sriracha, salt, pepper or herbs as desired.",
		"imagen": "https://spoonacular.com/recipeImages/782601-312x231.jpg"
	},
	{
		"id": 794349,
		"nombre": "Broccoli and Chickpea Rice Salad",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Need a gluten free and vegan main course? Broccoli and Chickpea Rice Salad could be a spectacular recipe to try. One serving contains 524 calories, 19g of protein, and 12g of fat. For $1.38 per serving, this recipe covers 36% of your daily requirements of vitamins and minerals. Head to the store and pick up almonds, olive oil, 2 tablespoons pineapple juice (juice from canned pineapple), and a few other things to make it today. 42 people have made this recipe and would make it again. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 99%. This score is spectacular. Similar recipes include Easy Balsamic Chickpea, Brown Rice & Broccoli Salad, Super Easy Chickpea, Brown Rice & Broccoli Crockpot Casserole, and Chickpean And Broccoli Salad.",
		"puntajeDeSalud": 100,
		"pasoApaso": "In a large skillet, heat the oil over medium heat. \nAdd the broccoli, stir well, and cover. Cook, stirring often, until the broccoli is tender. \nAdd the broccoli to a large bowl, along with the remaining salad ingredients.To make the dressing, whisk together all of the dressing ingredients in a small bowl. \nPour the dressing over the salad and toss well to coat evenly. Taste for seasoning and serve.",
		"imagen": "https://spoonacular.com/recipeImages/794349-312x231.jpg"
	},
	{
		"id": 715446,
		"nombre": "Slow Cooker Beef Stew",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			}
		],
		"resumenDelPlato": "If you want to add more gluten free and dairy free recipes to your recipe box, Slow Cooker Beef Stew might be a recipe you should try. One portion of this dish contains approximately 52g of protein, 16g of fat, and a total of 528 calories. This recipe serves 6. For $2.94 per serving, this recipe covers 45% of your daily requirements of vitamins and minerals. 58 people found this recipe to be scrumptious and satisfying. It works well as a reasonably priced main course for Winter. A mixture of canned beef broth, carrots, green onions, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes around 8 hours and 10 minutes. It is brought to you by Pink When. All things considered, we decided this recipe deserves a spoonacular score of 99%. This score is super. If you like this recipe, take a look at these similar recipes: Butternut Squash Beef Stew (Instant Pot, Pressure Cooker or Slow Cooker), Slow Cooker Beef Stew, and Slow-Cooker Beef Stew.",
		"puntajeDeSalud": 100,
		"pasoApaso": "To get started, heat your slow cooker to low. \nPour in the cream of mushroom soup, Dale's seasoning, water, and beef broth and stir until mixed well. \nAdd in your stew meat, potatoes, onions, carrots, celery, and green onions. Stir well until covered and cook on low for 8 hours. You can add salt and pepper as desired, but the flavors and the Dale's marry together so well that you probably won’t need them.",
		"imagen": "https://spoonacular.com/recipeImages/715446-312x231.jpg"
	},
	{
		"id": 715415,
		"nombre": "Red Lentil Soup with Chicken and Turnips",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			}
		],
		"resumenDelPlato": "Need a gluten free and dairy free main course? Red Lentil Soup with Chicken and Turnips could be an outstanding recipe to try. For $2.8 per serving, this recipe covers 37% of your daily requirements of vitamins and minerals. One serving contains 448 calories, 23g of protein, and 20g of fat. Head to the store and pick up garlic, olive oil, celery stalks, and a few other things to make it today. It is perfect for Autumn. From preparation to the plate, this recipe takes about 55 minutes. Plenty of people made this recipe, and 1866 would say it hit the spot. All things considered, we decided this recipe deserves a spoonacular score of 99%. This score is super. Try Clean Eating Carrot & Ginger Red Lentil Soup, One-Pot Red Lentil Sweet Potato Stew, and Red Lentil and Chicken Soup for similar recipes.",
		"puntajeDeSalud": 73,
		"pasoApaso": "To a large dutch oven or soup pot, heat the olive oil over medium heat. \nAdd the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally. \nAdd the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through. \nAdd the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste. \nServe the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!",
		"imagen": "https://spoonacular.com/recipeImages/715415-312x231.jpg"
	},
	{
		"id": 766453,
		"nombre": "Hummus and Za'atar",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "The recipe Hummus and Za'atar is ready in around 45 minutes and is definitely an outstanding gluten free and vegan option for lovers of middl eastern food. For $1.61 per serving, you get a marinade that serves 4. One serving contains 778 calories, 34g of protein, and 31g of fat. This recipe from foodandspice.blogspot.com has 35 fans. If you have sea salt, garlic, juice of lemon, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe deserves a spoonacular score of 99%. This score is excellent. Similar recipes include Chopped Hummus Dip with Za'atar, Hummus Deviled Eggs with Za’atar {Exercise Challenge}, and Za'atar Bread Rolls (Manaiesh Bi Za'atar).",
		"puntajeDeSalud": 100,
		"pasoApaso": "Rinse the chickpeas and soak for 8 hours or overnight in several inches of water. \nDrain and rinse, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 to 1 1/2 hours or until soft. \nDrain, reserving the cooking liquid. (If using canned chickpeas, rinse thoroughly.)Meanwhile, toast the pine nuts in a dry unoiled skillet or saucepan over medium-low heat, tossing or stirring frequently, for 10 minutes or until lightly browned. \nTransfer the chickpeas to a food processor and add the pine nuts, 2 tablespoons of olive oil, 1/4 cup of the reserved chickpea cooking liquid (or water if using canned chicpeas), the tahini, garlic, lemon juice and salt. Process until smooth, adding more of the reserved chickpea cooking liquid or water as necessary to reach a light creamy consistency. Taste for seasoning and add more salt or lemon juice as desired. \nTransfer the hummus to a shallow bowl and drizzle with olive oil. \nSprinkle with za'atar and paprika, and serve with chopped fresh vegetables or toasted pita triangles.Refrigerate leftover hummus for a few days or freeze for up to a month.",
		"imagen": "https://spoonacular.com/recipeImages/766453-312x231.jpg"
	},
	{
		"id": 716627,
		"nombre": "Easy Homemade Rice and Beans",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Need a gluten free and vegan main course? Easy Homemade Rice and Beans could be a great recipe to try. One serving contains 446 calories, 19g of protein, and 4g of fat. For $1.06 per serving, this recipe covers 26% of your daily requirements of vitamins and minerals. 471 person have made this recipe and would make it again. A mixture of olive oil, ground pepper, onion, and a handful of other ingredients are all it takes to make this recipe so yummy. To use up the olive oil you could follow this main course with the Sauteed Banana, Granolan and Yogurt Parfait as a dessert. From preparation to the plate, this recipe takes approximately 35 minutes. All things considered, we decided this recipe deserves a spoonacular score of 99%. This score is awesome. Try Easy homemade refried beans, Homemade Southern Red Beans and Rice, and Skillet Chicken with Homemade Rice-A-Roni and Green Beans for similar recipes.",
		"puntajeDeSalud": 60,
		"pasoApaso": "Heat the olive oil in a large pot over medium heat. \nAdd onions and saute until soft, or for about 5 minutes. \nAdd all other remaining ingredients and stir together. Increase the heat to medium high and bring to a boil. Cover and reduce heat to medium low so that the mixture simmers. Cook for 15-20 minutes, or until rice is fluffy and liquid is absorbed.* \nServe with salsa, cheese, and sour cream.",
		"imagen": "https://spoonacular.com/recipeImages/716627-312x231.jpg"
	},
	{
		"id": 716408,
		"nombre": "Greek-Style Baked Fish: Fresh, Simple, and Delicious",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "pescatarian"
			}
		],
		"resumenDelPlato": "You can never have too many main course recipes, so give Greek-Style Baked Fish: Fresh, Simple, and Delicious a try. For $3.04 per serving, this recipe covers 21% of your daily requirements of vitamins and minerals. This recipe makes 4 servings with 345 calories, 28g of protein, and 12g of fat each. This recipe is liked by 396 foodies and cooks. Head to the store and pick up salt & pepper, pepper, wine, and a few other things to make it today. To use up the cooked rice you could follow this main course with the Breakfast Rice Pudding as a dessert. From preparation to the plate, this recipe takes about 30 minutes. It is a good option if you're following a gluten free and pescatarian diet. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is awesome. Similar recipes include Simple Greek Style Baked Fish, Greek Style Baked Fish, and Delicious Greek Pastitsio {Casserole-Style}.",
		"puntajeDeSalud": 65,
		"pasoApaso": "Preheat the oven to 450 degrees F. Choose an oven-proof baking dish that your fish will fit in without overlapping and spray it with cooking spray. \nLay the fish fillets in the baking pan in a single layer, season with salt and pepper, then top the fish with red onion and bell pepper. \nSprinkle with dried basil and oregano, the tomato, and the feta cheese, then drizzle the white wine and olive oil over top. Grind some fresh pepper over the top. \nBake uncovered for about 12 – 15 minutes or until the fish flakes easily with a fork. Squeeze the lemon wedges over the cooked fish, garnish with the fresh basil and/or oregano and serve with hot cooked rice.",
		"imagen": "https://spoonacular.com/recipeImages/716408-312x231.jpg"
	},
	{
		"id": 795751,
		"nombre": "Chicken Fajita Stuffed Bell Pepper",
		"dieta": [
			{
				"nombre": "gluten free"
			}
		],
		"resumenDelPlato": "Chicken Fajita Stuffed Bell Pepper might be just the Mexican recipe you are searching for. One serving contains 561 calories, 36g of protein, and 24g of fat. For $2.96 per serving, this recipe covers 41% of your daily requirements of vitamins and minerals. 159 people have tried and liked this recipe. It works best as a main course, and is done in approximately 45 minutes. Head to the store and pick up medium/large avocado, cheese, chili powder, and a few other things to make it today. To use up the quinoa you could follow this main course with the Quinoa Pudding as a dessert. It is a good option if you're following a gluten free diet. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is tremendous. Try Stuffed Bell Peppers [or meatloaf in a bell pepper], Stuffed Bell Pepper, and Stuffed Red Bell Pepper Rellenos for similar recipes.",
		"puntajeDeSalud": 75,
		"pasoApaso": "To get started heat oven to 35 \nMix salt, pepper, cilantro, cumin, chili powder, and quinoa together and place to the side. \nCut the bell pepper in half (if you havent already) and clean out the seeds. \nLayer quinoa and then grilled chicken into the pepper, and then top each with cheese. \nPlace in the oven for about 10 minutes until the bell pepper has softened.Chicken Fajita Stuffed Bell Pepper \nTop with avocado and serve with shredded lettuce and salsa for a complete meal.This is SO GOOD! I love bell peppers, and I love all of these flavors that are married together that make this chicken fajita stuffed bell pepper so amazing. I could seriously just eat the flavored quinoa all by itself.If you are looking for even more delicious and healthy recipes, make sure you head over to the Simple Fit Forty tab under the cooking section of this blog. We have all of our favorite healthy recipes listed for you right there in one spot. You can also drool over out latest on the Simple Fit Forty Instagram page.If you are looking to get healthy and fit, come and join the super secret and awesome Simple Fit Forty Lifestyle community over on Facebook. We would love to have you join!",
		"imagen": "https://spoonacular.com/recipeImages/795751-312x231.jpg"
	},
	{
		"id": 640941,
		"nombre": "Crunchy Brussels Sprouts Side Dish",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "paleolithic"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "primal"
			}
		],
		"resumenDelPlato": "Crunchy Brussels Sprouts Side Dish might be just the side dish you are searching for. This recipe makes 4 servings with 232 calories, 8g of protein, and 16g of fat each. For $1.69 per serving, this recipe covers 22% of your daily requirements of vitamins and minerals. 26 people have tried and liked this recipe. If you have pepper, wine vinegar, dijon mustard, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around 30 minutes. It is a good option if you're following a caveman, gluten free, dairy free, and primal diet. All things considered, we decided this recipe deserves a spoonacular score of 99%. This score is spectacular. Try Easy Side Dish – Roasted Brussels Sprouts and Grapes, CSA Day with a Side of Sauteed Brussels Sprouts with Lemon Vinaigrette, and Thanksgiving Side : Shredded Brussels Sprouts with Persimmons, Apricots, and Walnuts for similar recipes.",
		"puntajeDeSalud": 100,
		"pasoApaso": "Blanch the Brussels sprouts in boiling water for 6-8 minutes or in a microwave oven in a little water for about 4 minutes. \nDrain. \nSaute the Brussels sprouts, stirring constantly, until they become golden-brown in color.Meanwhile mix the vinegar, mustard, honey and olive oil. \nAdd walnuts to the sprouts, stir and combine. \nPour the vinegar dressing over the sprouts, season with pepper. \nMix and combine so that each sprout is covered with the dressing. \nServe warm or cold as a side dish.",
		"imagen": "https://spoonacular.com/recipeImages/640941-312x231.jpg"
	},
	{
		"id": 798400,
		"nombre": "Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "The recipe Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant is ready in roughly 45 minutes and is definitely a spectacular gluten free and vegan option for lovers of Indian food. This recipe makes 6 servings with 130 calories, 7g of protein, and 2g of fat each. For 99 cents per serving, this recipe covers 21% of your daily requirements of vitamins and minerals. A few people made this recipe, and 32 would say it hit the spot. A mixture of chilies, olive oil, garam masala, and a handful of other ingredients are all it takes to make this recipe so delicious. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is amazing. Try Black-eyed Peas In A Spicy Goan Curry, Black-eyed Peas In A Spicy Goan Curry, and Roasted Butternut Squash, Black Bean and Swiss Chard Quinoa Bibimbap for similar recipes.",
		"puntajeDeSalud": 87,
		"pasoApaso": "Rinse the black-eyed peas and soak in several inches of water for 6 hours or overnight. \nDrain and rinse, then transfer to a large saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 40 to 60 minutes. Take care not to overcook  the beans should be tender but not be falling apart. \nDrain and set aside.To prepare the eggplant, cut of the stem and bottom edge and then cut in half lengthwise. Score the flesh into diagonal 1-inch lines, then turn and score again until you have a diagonal pattern. Take care not to cut through the skin. \nSprinkle with some salt and let sit for 40 minutes. Rinse and squeeze out any excess water. \nBrush the eggplant with some oil and transfer to a roasting pan. \nBake in a preheated 400 oven until the flesh appears collapsed and is wrinkly. \nRemove from heat and let cool for about 10 minutes, season with a bit of salt, and remove the flesh from the eggplant. If there is too much water, drain in a strainer. Set aside. \nHeat the oil over medium heat in the same saucepan used to cook the black-eyed peas. When hot, toss in the shallots and chilies and saut for 2 to 3 minutes. Now add the spices and stir for another minute, until fragrant. \nAdd the tomato, cook for another few minutes, and then add the eggplant and black-eyed peas, and cook for another few minutes, stirring often. \nPour a few tablespoons of water into the pan and add handfuls of chard at a time until wilted. \nAdd more water as necessary. \nAdd the lemon juice and salt to taste near the end of the cooking time. \nRemove from heat, cover, and let sit for a few minutes before serving.",
		"imagen": "https://spoonacular.com/recipeImages/798400-312x231.jpg"
	},
	{
		"id": 756814,
		"nombre": "Powerhouse Almond Matcha Superfood Smoothie",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "whole 30"
			}
		],
		"resumenDelPlato": "Powerhouse Almond Matcha Superfood Smoothie might be just the morn meal you are searching for. This recipe makes 2 servings with 294 calories, 11g of protein, and 13g of fat each. For $2.59 per serving, this recipe covers 27% of your daily requirements of vitamins and minerals. If you have pineapple, almond milk, banana, and a few other ingredients on hand, you can make it. 80 people were impressed by this recipe. It is a good option if you're following a gluten free, dairy free, and whole 30 diet. From preparation to the plate, this recipe takes around 10 minutes. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is tremendous. Try Powerhouse Golden Turmeric Smoothie, Matchan Almond Layer Cake with Matcha Frosting, and Minty Matcha Nanaimo Bars: A Decadent Superfood Treat for similar recipes.",
		"puntajeDeSalud": 54,
		"pasoApaso": "Combine all of the ingredients in a blender. Blend on high until smooth. \nServe immediately.",
		"imagen": "https://spoonacular.com/recipeImages/756814-312x231.jpg"
	},
	{
		"id": 729366,
		"nombre": "Plantain Salad",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "primal"
			},
			{
				"nombre": "pescatarian"
			}
		],
		"resumenDelPlato": "Plantain Salad might be just the main course you are searching for. This gluten free and pescatarian recipe serves 1 and costs $5.6 per serving. One serving contains 639 calories, 20g of protein, and 18g of fat. Several people made this recipe, and 126 would say it hit the spot. A mixture of vegetable oil, finger of plantain, tomatoes, and a handful of other ingredients are all it takes to make this recipe so delicious. To use up the vegetable oil you could follow this main course with the Blueberry Coffee Cake #SundaySupper as a dessert. From preparation to the plate, this recipe takes roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 99%. This score is excellent. Try How to Spiralize a Plantain & Plantain “Rice” and Beans, Honey Mustard Crunchy Chicken Plantain Salad, and Plantain and Coconut Pork Patties with a Tropical Mango and Cucumber Salad for similar recipes.",
		"puntajeDeSalud": 72,
		"pasoApaso": "Cube your plantain, fry and set aside.Chop your vegetables into your salad bowl and toss \nIn a pan, heat up vegetable oil and stir fry your shrimps and season. Allow to cool \nToss in your plantain and shrimps once cool into your bowl of vegetables. \nSprinkle the parmesan cheese over the salad \nDrizzle your dressing over and serve cool.   ",
		"imagen": "https://spoonacular.com/recipeImages/729366-312x231.jpg"
	},
	{
		"id": 715769,
		"nombre": "Broccolini Quinoa Pilaf",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "If you want to add more Mediterranean recipes to your recipe box, Broccolini Quinoa Pilaf might be a recipe you should try. One portion of this dish contains around 20g of protein, 31g of fat, and a total of 625 calories. This recipe serves 2 and costs $4.14 per serving. A few people really liked this main course. 95 people have made this recipe and would make it again. Head to the store and pick up quinoa, garlic clove, olive oil, and a few other things to make it today. From preparation to the plate, this recipe takes roughly 30 minutes. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. It is brought to you by Pick Fresh Foods. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is awesome. Similar recipes include Spring Broccolini & Kale Quinoa Bowls, Orange-Sesame Salmon with Quinoa & Broccolini, and Black Pepper Goat Cheese and Chard Quinoa with Roasted Broccolini.",
		"puntajeDeSalud": 74,
		"pasoApaso": "In a large pan with lid heat olive oil over medium high heat. \nAdd onions and cook for 1 minute. \nAdd garlic and cook until onions are translucent and garlic is fragrant. \nAdd quinoa to pan, stir to combine. Slowly add in broth and bring to a boil.Cover and reduce heat to low, cook for 15 minutes.In the last 2-3 minutes of cooking add in broccolini on top of the quinoa (do not stir) and cover.Uncover and toss broccolini and quinoa together.Season to taste with salt and pepper. \nAdd walnuts and serve hot.",
		"imagen": "https://spoonacular.com/recipeImages/715769-312x231.jpg"
	},
	{
		"id": 782600,
		"nombre": "Quinoa Salad with Vegetables and Cashews",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "You can never have too many side dish recipes, so give Quinoa Salad with Vegetables and Cashews a try. This recipe makes 6 servings with 487 calories, 9g of protein, and 39g of fat each. For $1.58 per serving, this recipe covers 24% of your daily requirements of vitamins and minerals. This recipe from foodandspice.blogspot.com has 88 fans. If you have quinoa, sunflower seeds, sesame oil, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately 45 minutes. It is a good option if you're following a gluten free and vegan diet. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is tremendous. Try Cashews and Vegetables, Lemony Quinoa Salad with Shaved Vegetables, and Grill-Roasted Vegetables and Quinoa Salad for similar recipes.",
		"puntajeDeSalud": 66,
		"pasoApaso": "Line a baking sheet with parchment paper and preheat an oven to 35 \nToss the parsnip, carrots and Brussels sprouts with 1 tablespoon of the olive oil and spread evenly on the pan. Roast for 30 minutes or until tender, stirring the vegetables half way through the cooking time.Meanwhile, toast the cashews, sunflower seeds, pumpkin seeds and sesame seeds in a dry unoiled skillet over medium-low heat for 10 to 15 minutes, tossing frequently, until the cashews and sesame seeds are lighly browned.Toss the kale with the remaining 3 tablespoons of olive oil in a large salad bowl. Fluff the quinoa and add to the bowl along with the roasted vegetables and cherry tomatoes. \nWhisk together the dressing ingredients. \nPour the dressing over the salad and toss. \nServe at room temperature or chilled. \nSprinkle each serving with a scattering of toasted cashews and seeds.",
		"imagen": "https://spoonacular.com/recipeImages/782600-312x231.jpg"
	},
	{
		"id": 642605,
		"nombre": "Farro With Mushrooms and Asparagus",
		"dieta": [
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			}
		],
		"resumenDelPlato": "Need a dairy free and vegetarian side dish? Farro With Mushrooms and Asparagus could be an excellent recipe to try. This recipe makes 4 servings with 365 calories, 12g of protein, and 9g of fat each. For $3.94 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes around 1 hour and 15 minutes. This recipe is liked by 47 foodies and cooks. If you have onion, chicken stock, garlic, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is amazing. Similar recipes include Farro Risotto with Wild Mushrooms and Asparagus, Farro with Asparagus, Hazelnuts and Kale Topped with Roasted Mushrooms, and Farro And Porcini Mushrooms (farro Con Funghi).",
		"puntajeDeSalud": 80,
		"pasoApaso": "In a small bowl, cover dried mushrooms with warm water.  Soak for 25 minutes, or until softened. \nDrain the mushrooms, and discard the soaking water.  Chop finely.Bring a large pot of water to a boil. \nAdd farro, and cook for 10 minutes, stirring occasionally. \nDrain and reserve.In a large skillet, over medium heat, heat the olive oil, and add onion, garlic, thyme, and mushrooms.Cook, stirring occasionally, for 5 minutes or until onions are tender.Stir in 2 tablespoons of sherry vinegar, and continue cooking for 1 minute. \nAdd chicken stock, and bring it to a boil.Stir in farro, and return to a boil.Lower the heat to a simmer, and cover with a tight fitting lid.  Cook for 10 minutes. \nAdd asparagus, and cook, covered, for an additional 10 minutes.Season with 1 tablespoon sherry vinegar, salt and pepper.",
		"imagen": "https://spoonacular.com/recipeImages/642605-312x231.jpg"
	},
	{
		"id": 715540,
		"nombre": "Summer Berry Salad",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "paleolithic"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "primal"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Summer Berry Salad might be just the side dish you are searching for. Watching your figure? This caveman, gluten free, primal, and vegan recipe has 98 calories, 2g of protein, and 1g of fat per serving. This recipe serves 1 and costs $1.75 per serving. 17 people have tried and liked this recipe. If you have apples, blackberries, romaine lettuce, and a few other ingredients on hand, you can make it. It can be enjoyed any time, but it is especially good for The Fourth Of July. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is outstanding. Try Berry Summer Salad, Summer Berry Salad, and Chicken & Berry Summer Salad for similar recipes.",
		"puntajeDeSalud": 95,
		"pasoApaso": "Cut up a Granny Smith green apple, strawberries, and add blackberries \nMix in with Romaine lettuce \nToss in some basalmic vinaigrette",
		"imagen": "https://spoonacular.com/recipeImages/715540-312x231.jpg"
	},
	{
		"id": 636589,
		"nombre": "Butternut Squash Frittata",
		"dieta": [
			{
				"nombre": "gluten free"
			}
		],
		"resumenDelPlato": "Butternut Squash Frittatan is a gluten free main course. One serving contains 446 calories, 24g of protein, and 4g of fat. For $3.03 per serving, this recipe covers 50% of your daily requirements of vitamins and minerals. 18 people were impressed by this recipe. If you have butternut squash, pepper, liquid egg substitute, and a few other ingredients on hand, you can make it. To use up the liquid egg substitute you could follow this main course with the Blueberry Cake as a dessert. From preparation to the plate, this recipe takes roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is excellent. Try Butternut Squash Frittata, Sausage and Butternut Squash Frittata, and Butternut Squash and Quinoa Frittata for similar recipes.",
		"puntajeDeSalud": 100,
		"pasoApaso": "Preheat oven to 350Spray a 10 oz oven safe dish with cooking spray \nAdd your butternut squash \nIn a measuring cup add your eggs and milk. \nMix until combined. \nPour over butternut squash. \nSprinkle with pepper and top with cheese. \nBake in oven for 30-35 minutes, until middle is slightly firm \nLet it cool for a few minutes",
		"imagen": "https://spoonacular.com/recipeImages/636589-312x231.jpg"
	},
	{
		"id": 640062,
		"nombre": "Corn Avocado Salsa",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "The recipe Corn Avocado Salsa could satisfy your Mexican craving in around 25 minutes. For $1.31 per serving, this recipe covers 15% of your daily requirements of vitamins and minerals. One serving contains 239 calories, 5g of protein, and 16g of fat. Head to the store and pick up corn, bell pepper, cumin, and a few other things to make it today. A couple people really liked this hor d'oeuvre. It is a good option if you're following a gluten free and vegan diet. This recipe is liked by 44 foodies and cooks. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is spectacular. Try Avocado Corn Salsa, Corn and Avocado Salsa, and Corn and Avocado Salsa for similar recipes.",
		"puntajeDeSalud": 71,
		"pasoApaso": "Preheat oven to 375 degrees. \nSpread corn flat on a baking sheet.Spray lightly with olive oil spray.Roast corn in the oven for about 8-10 minutes. (Be careful not to brown too much or burn.) \nRemove from heat and allow to cool.Finely chop red pepper and garlic and mix in a bowl.Peel and coarsely chop avocado and add to bowl. \nAdd cooled corn. \nMix in cumin and vinegar and blend well.",
		"imagen": "https://spoonacular.com/recipeImages/640062-312x231.jpg"
	},
	{
		"id": 715495,
		"nombre": "Turkey Tomato Cheese Pizza",
		"dieta": [],
		"resumenDelPlato": "You can never have too many main course recipes, so give Turkey Tomato Cheese Pizzan a try. For $2.04 per serving, this recipe covers 22% of your daily requirements of vitamins and minerals. This recipe makes 6 servings with 242 calories, 19g of protein, and 8g of fat each. 910 people have made this recipe and would make it again. This recipe is typical of Mediterranean cuisine. From preparation to the plate, this recipe takes approximately 15 minutes. A mixture of bell pepper, onion, tomato sauce, and a handful of other ingredients are all it takes to make this recipe so yummy. To use up the pepper you could follow this main course with the Dr. Pepper Cake with Flour Cooked Frosting as a dessert. All things considered, we decided this recipe deserves a spoonacular score of 94%. This score is outstanding. Try Turkey Tomato Pizza, Tomato Cheese Pizza, and Cheese & Tomato Pizza for similar recipes.",
		"puntajeDeSalud": 33,
		"pasoApaso": "Heat up your grill to 450 degrees.Start off with your whole wheat crust and spread the tomato sauce evenly over the top. \nAdd a little cheese, bell pepper, onion, turkey and create a layer.Top with another layer of cheese, turkey, tomato, bell pepper, onion. \nAdd another layer of cheese, and then sprinkle with pepper. \nPlace the pizza on a ceramic grill plate and place into the grill.Grill for 6-10 minutes, or until cooked as desired.Slice, and serve immediately.",
		"imagen": "https://spoonacular.com/recipeImages/715495-312x231.jpg"
	},
	{
		"id": 715421,
		"nombre": "Cheesy Chicken Enchilada Quinoa Casserole",
		"dieta": [
			{
				"nombre": "gluten free"
			}
		],
		"resumenDelPlato": "Cheesy Chicken Enchilada Quinoa Casserole might be just the main course you are searching for. This gluten free recipe serves 4 and costs $2.62 per serving. One serving contains 594 calories, 34g of protein, and 24g of fat. Autumn will be even more special with this recipe. 9912 people have tried and liked this recipe. From preparation to the plate, this recipe takes about 30 minutes. Head to the store and pick up chili powder, cumin, verde enchilada sauce, and a few other things to make it today. To use up the avocado you could follow this main course with the chocolate avocado mousse | quick dark chocolate avocado mousse as a dessert. This recipe is typical of Mexican cuisine. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is excellent. Try Cheesy Chicken Enchilada Casserole, Quinoa Chicken Enchilada Casserole, and The Heartbreak of Success, and A Healthy, Easy, and Cheesy Chicken and Brown Rice Enchilada Casserole for similar recipes.",
		"puntajeDeSalud": 38,
		"pasoApaso": "To get started, heat your oven to 350 and prepare an 8x8 baking dish. Cook the quinoa according to the instructions. If you haven't already, boil and shred your chicken breast.In a medium sized mixing bowl add 2 Tbsp cilantro, 1 cup shredded cheese, quinoa, tomatoes with chilis, black beans, half of the can of sweet corn, verde enchilada sauce, cumin, chili powder, white pepper, black pepper, and salt to taste. \nMix everything well, and then pour into the 8 x8 baking dish. Cover with the last cup of cheese and then bake in the oven for 15 minutes. \nRemove from oven and allow to cool for 5 minutes. Then top with chopped Roma tomato, chopped avocado, green onion tops, and remaining 2 tsp of cilantro. \nServe immediately.",
		"imagen": "https://spoonacular.com/recipeImages/715421-312x231.jpg"
	},
	{
		"id": 716432,
		"nombre": "Finger Foods: Frittata Muffins",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "primal"
			},
			{
				"nombre": "ketogenic"
			}
		],
		"resumenDelPlato": "Finger Foods: Frittata Muffins #incredibleEGG might be just the morn meal you are searching for. This recipe makes 1 servings with 658 calories, 50g of protein, and 45g of fat each. For $2.96 per serving, this recipe covers 46% of your daily requirements of vitamins and minerals. Plenty of people made this recipe, and 600 would say it hit the spot. If you have broccoli, chives, t cream, and a few other ingredients on hand, you can make it. It is a good option if you're following a gluten free, primal, and vegetarian diet. From preparation to the plate, this recipe takes about 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is tremendous. Try {38 Power Foods} Skinny Kiwifruit Muffins, {38 Power Foods} Skinny Broccoli Cheese Muffins, and Magic Mineral Broth {Processed Foods versus Refined Foods} for similar recipes.",
		"puntajeDeSalud": 49,
		"pasoApaso": "",
		"imagen": "https://spoonacular.com/recipeImages/716432-312x231.jpg"
	},
	{
		"id": 716437,
		"nombre": "Chilled Cucumber Avocado Soup with Yogurt and Kefir",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "primal"
			}
		],
		"resumenDelPlato": "Chilled Cucumber Avocado Soup with Yogurt and Kefir might be just the soup you are searching for. One serving contains 183 calories, 9g of protein, and 7g of fat. This gluten free, primal, and vegetarian recipe serves 3 and costs $2.12 per serving. 171 person have made this recipe and would make it again. It will be a hit at your Autumn event. Head to the store and pick up avocado, persian cucumbers, kefir, and a few other things to make it today. From preparation to the plate, this recipe takes about 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is awesome. Try Chilled Cucumber, Avocado, and Yogurt Soup, Chilled Cucumber-Yogurt Soup, and Chilled Cucumber Mint Yogurt Soup for similar recipes.",
		"puntajeDeSalud": 54,
		"pasoApaso": "",
		"imagen": "https://spoonacular.com/recipeImages/716437-312x231.jpg"
	},
	{
		"id": 639535,
		"nombre": "Citrusy Pecan Garbanzo Couscous: A Salad For Cold Weather",
		"dieta": [
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Need a vegan main course? Citrusy Pecan Garbanzo Couscous: A Salad For Cold Weather could be an excellent recipe to try. This recipe serves 2 and costs $2.75 per serving. One serving contains 564 calories, 15g of protein, and 17g of fat. A couple people made this recipe, and 41 would say it hit the spot. Head to the store and pick up rice vinegar, ground cumin, olive oil, and a few other things to make it today. To use up the pecans you could follow this main course with the Bourbon Cake with Pecans: A Southern Classic as a dessert. From preparation to the plate, this recipe takes around 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is tremendous. Try Winter Fruit Salad: Cool Food for Cold Weather, Citrusy Couscous Salad with Olives, and Cold-Weather Venison Chili for similar recipes.",
		"puntajeDeSalud": 72,
		"pasoApaso": "Prepare couscous according to package instructions. Meanwhile combine all remaining ingredients in a medium mixing bowl. \nDrain couscous and add to bowl while still hot. Thoroughly mix all ingredients. Taste and adjust seasonings. \nServe warm.",
		"imagen": "https://spoonacular.com/recipeImages/639535-312x231.jpg"
	},
	{
		"id": 652417,
		"nombre": "Moroccan chickpea and lentil stew",
		"dieta": [
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Moroccan chickpean and lentil stew is a dairy free, lacto ovo vegetarian, and vegan main course. One portion of this dish contains around 20g of protein, 7g of fat, and a total of 467 calories. This recipe serves 3. For $1.34 per serving, this recipe covers 30% of your daily requirements of vitamins and minerals. 11 person found this recipe to be tasty and satisfying. It will be a hit at your Autumn event. This recipe from Foodista requires lemon juice, ground turmeric, carrots, and ground cumin. From preparation to the plate, this recipe takes around 30 minutes. With a spoonacular score of 95%, this dish is amazing. Users who liked this recipe also liked Butternut Squash, Chickpea & Lentil Moroccan Stew, Crockpot Moroccan Lentil and Chickpea Soup, and Moroccan Chickpean and Lentil Soup (Harira).",
		"puntajeDeSalud": 96,
		"pasoApaso": "Heat oil in large saucepan over medium-high heat, add onion and cook for about 3 minutes. \nAdd celery, carrot and broccoli to pan and saut for about 5 minutes. \nAdd in all seasonings and cook additional 1 minute. \nAdd water, tomato paste, chickpeas and lentils, bring to a boil. Cover, reduce heat to low and simmer for 20 minutes.Meanwhile, cook couscous in separate pan according to package directions. \nAdd cilantro and lemon juice to stew and serve over warm couscous.",
		"imagen": "https://spoonacular.com/recipeImages/652417-312x231.jpg"
	},
	{
		"id": 794538,
		"nombre": "Almond Joy Protein Shake",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "fodmap friendly"
			},
			{
				"nombre": "ketogenic"
			}
		],
		"resumenDelPlato": "Almond Joy Protein Shake might be just the beverage you are searching for. Watching your figure? This gluten free, dairy free, and fodmap friendly recipe has 485 calories, 24g of protein, and 41g of fat per serving. For $2.24 per serving, this recipe covers 36% of your daily requirements of vitamins and minerals. A mixture of coconut, coconut milk, chocolate protein powder, and a handful of other ingredients are all it takes to make this recipe so yummy. 22 people have made this recipe and would make it again. From preparation to the plate, this recipe takes about 45 minutes. This recipe is typical of Southern cuisine. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is super. Try Almond Joy Protein Shake, Almond Mocha Protein Shake, and Amazing Almond Dairy-Free Protein Shake for similar recipes.",
		"puntajeDeSalud": 78,
		"pasoApaso": "",
		"imagen": "https://spoonacular.com/recipeImages/794538-312x231.jpg"
	},
	{
		"id": 648320,
		"nombre": "Jade Buddha Salmon Tartare",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "paleolithic"
			},
			{
				"nombre": "primal"
			},
			{
				"nombre": "pescatarian"
			}
		],
		"resumenDelPlato": "If you want to add more gluten free, dairy free, paleolithic, and primal recipes to your collection, Jade Buddha Salmon Tartare might be a recipe you should try. This main course has 320 calories, 34g of protein, and 18g of fat per serving. For $6.87 per serving, this recipe covers 27% of your daily requirements of vitamins and minerals. This recipe serves 2. From preparation to the plate, this recipe takes approximately approximately 45 minutes. 28 people have made this recipe and would make it again. A mixture of tablespoon of lime juice, green onion, salt and pepper, and a handful of other ingredients are all it takes to make this recipe so tasty. It is brought to you by Foodista. Overall, this recipe earns a great spoonacular score of 98%. Users who liked this recipe also liked Salmon Tartare, Salmon Tartare, and Salmon Tartare.",
		"puntajeDeSalud": 100,
		"pasoApaso": "Combine all ingredients except lime juice and vinegar. \nChill for 30 minutes. \nAdd lime juice and vinegar, adjust to perfect, and serve.",
		"imagen": "https://spoonacular.com/recipeImages/648320-312x231.jpg"
	},
	{
		"id": 769774,
		"nombre": "Shredded Roast Beef Stuffed Sweet Potatoes (Whole 30 & PALEO)",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "paleolithic"
			},
			{
				"nombre": "primal"
			},
			{
				"nombre": "whole 30"
			}
		],
		"resumenDelPlato": "You can never have too many side dish recipes, so give Shredded Roast Beef Stuffed Sweet Potatoes (Whole 30 & PALEO) a try. For $5.09 per serving, this recipe covers 26% of your daily requirements of vitamins and minerals. This recipe makes 4 servings with 788 calories, 33g of protein, and 60g of fat each. Not a lot of people made this recipe, and 4 would say it hit the spot. From preparation to the plate, this recipe takes approximately 45 minutes. It is a good option if you're following a caveman, gluten free, dairy free, and primal diet. If you have beef broth, roast, salt/pepper and favorite healthy seasonings, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe deserves a spoonacular score of 85%. This score is great. Try Paleo s: Chicken Stuffed Sweet Potatoes, Paleo Shredded Slow Cooker Roast Beef with Pumpkin and Salsa + A Slow Cooker Roundup and GIVEAWAY, and Real Men Cook: Chipotle Beef Barbacoa Stuffed Sweet Potatoes for similar recipes.",
		"puntajeDeSalud": 89,
		"pasoApaso": "",
		"imagen": "https://spoonacular.com/recipeImages/769774-312x231.jpg"
	},
	{
		"id": 649931,
		"nombre": "Lentil Salad With Vegetables",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "whole 30"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Lentil Salad With Vegetables might be just the side dish you are searching for. One serving contains 302 calories, 14g of protein, and 11g of fat. For 83 cents per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. If you have lentils, extra virgin olive oil, green onions, and a few other ingredients on hand, you can make it. Not a lot of people made this recipe, and 7 would say it hit the spot. From preparation to the plate, this recipe takes roughly 45 minutes. It is a good option if you're following a gluten free and vegan diet. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is outstanding. Try Puy Lentil Salad With Caramelized Vegetables, Grain and Lentil Salad with Grilled Vegetables and Hummus, and One-Pot Vegetables and Lentil for similar recipes.",
		"puntajeDeSalud": 100,
		"pasoApaso": "Heat olive oil in a saucepan over medium high heat and add onion. Cook until just translucent and then add lentils. \nAdd water and cook according to package directions. \nDrain and cool. \nCombine lentils with tomatoes, pepper, onions, rosemary, olive oil, and vinegars. Season with salt and pepper to taste and adjust oil or vinegar as desired. \nServe cold or at room temperature.",
		"imagen": "https://spoonacular.com/recipeImages/649931-312x231.jpg"
	},
	{
		"id": 661925,
		"nombre": "Strawberry-Mango Quinoa Salad",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			}
		],
		"resumenDelPlato": "Strawberry-Mango Quinoa Salad might be just the side dish you are searching for. One serving contains 334 calories, 7g of protein, and 17g of fat. For $1.46 per serving, this recipe covers 15% of your daily requirements of vitamins and minerals. 41 person have tried and liked this recipe. A mixture of cucumber, mint, lime juice, and a handful of other ingredients are all it takes to make this recipe so tasty. It is a good option if you're following a gluten free and vegetarian diet. From preparation to the plate, this recipe takes roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 92%. This score is spectacular. Try Strawberry & Mango Chopped Spinach Quinoa Salad with Sesame-Lime Vinaigrette, Strawberry Goat Cheese Quinoa Salad with Strawberry Balsamic Dressing, and Red Quinoan and Mango Salad for similar recipes.",
		"puntajeDeSalud": 65,
		"pasoApaso": "Prepare the quinoa: In a medium saucepan combine the quinoa, water and 1/4 t. salt. Bring to a boil, reduce heat to low, cover and simmer until the liquid is just absorbed, about 15 minutes. \nSpread the cooked quinoa out on a baking sheet to cool for about 20 minutes.In a large bowl whisk together lime juice, zest, honey, sour cream and olive oil. \nAdd the cooled quinoa, strawberries, mango, cucumber and mint. Toss well to combine and season with salt &amp; pepper. \nServe immediately.",
		"imagen": "https://spoonacular.com/recipeImages/661925-312x231.jpg"
	},
	{
		"id": 660228,
		"nombre": "Skinny Kale Basil Pesto",
		"dieta": [
			{
				"nombre": "gluten free"
			}
		],
		"resumenDelPlato": "If you have around approximately 45 minutes to spend in the kitchen, Skinny Kale Basil Pesto might be an outstanding gluten free recipe to try. This recipe serves 3. For $1.06 per serving, this recipe covers 18% of your daily requirements of vitamins and minerals. This condiment has 86 calories, 5g of protein, and 5g of fat per serving. This recipe from Foodista has 10 fans. A mixture of walnuts, basil leaves, parmesan cheese, and a handful of other ingredients are all it takes to make this recipe so flavorful. Overall, this recipe earns an outstanding spoonacular score of 97%. If you like this recipe, you might also like recipes such as Kale & Basil Pesto Caprese Pasta Salad, Kale Basil Pistachio Garlic Scape Pesto, and Vegan Kale Pesto & Crazy For Kale Launch party.",
		"puntajeDeSalud": 88,
		"pasoApaso": "Remove the kale and basil leaves from the stem and rinse. \nRoughly chop the kale leaves so that they fit inside a food processor. \nPlace the kale and basil leaves into a food processor and chop until the leaves turn into small pieces. \nAdd the rest of the ingredients into the food processor and mix until everything is well blended. \nPour out all the ingredients into a dish and enjoy with your favorite dishes!",
		"imagen": "https://spoonacular.com/recipeImages/660228-312x231.jpg"
	},
	{
		"id": 715447,
		"nombre": "Easy Vegetable Beef Soup",
		"dieta": [
			{
				"nombre": "dairy free"
			}
		],
		"resumenDelPlato": "Easy Vegetable Beef Soup might be just the main course you are searching for. One portion of this dish contains roughly 45g of protein, 19g of fat, and a total of 566 calories. This dairy free recipe serves 8 and costs $3.45 per serving. Many people made this recipe, and 130 would say it hit the spot. It is brought to you by Pink When. It can be enjoyed any time, but it is especially good for Autumn. If you have butter beans, canned tomatoes, worcestershire sauce, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes about 2 hours and 30 minutes. With a spoonacular score of 0%, this dish is improvable. Try Easy Vegetable Beef Soup, Easy Vegetable-Beef Soup, and Easy Vegetable Beef Soup for similar recipes.",
		"puntajeDeSalud": 65,
		"pasoApaso": "To get started, bring 4 quarts of water to a boil in a large pot.  \nWhile waiting on the water to boil, cut the beef short ribs into bite-sized pieces and add them to the water. \nAdd in diced tomatoes, potatoes, diced onion, parsley, garlic powder, beef bouillon cubes, Italian seasoning, salt, pepper, Worcestershire sauce, celery salt, bay leaves, and stir. \nThen add carrots, celery, black-eyed peas, butter beans, corn, and macaroni. \nHeat on high, stirring occasionally until the stew mixture comes to a boil. \nOnce you have reached a boil, cover with a lid, lower heat enough to keep it simmering.  Continue to simmer for 1.5 to 2 hours, stirring occasionally.",
		"imagen": "https://spoonacular.com/recipeImages/715447-312x231.jpg"
	},
	{
		"id": 715543,
		"nombre": "Homemade Guacamole",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "paleolithic"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "primal"
			},
			{
				"nombre": "whole 30"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Need a caveman, gluten free, primal, and whole 30 hor d'oeuvre? Homemade Guacamole could be an excellent recipe to try. For 89 cents per serving, this recipe covers 9% of your daily requirements of vitamins and minerals. This recipe makes 4 servings with 166 calories, 2g of protein, and 15g of fat each. If you have avocados, cilantro, pepper, and a few other ingredients on hand, you can make it. This recipe is liked by 1330 foodies and cooks. From preparation to the plate, this recipe takes about 45 minutes. This recipe is typical of Mexican cuisine. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is excellent. Try Homemade Guacamole, Homemade Guacamole, and Homemade Guacamole for similar recipes.",
		"puntajeDeSalud": 34,
		"pasoApaso": "",
		"imagen": "https://spoonacular.com/recipeImages/715543-312x231.jpg"
	},
	{
		"id": 641975,
		"nombre": "Easy Ginger Beef Broccoli",
		"dieta": [
			{
				"nombre": "dairy free"
			}
		],
		"resumenDelPlato": "Easy Ginger Beef Broccoli might be just the main course you are searching for. This recipe serves 4 and costs $1.39 per serving. One serving contains 252 calories, 30g of protein, and 6g of fat. 23 people have tried and liked this recipe. If you have round steak, ginger, flour, and a few other ingredients on hand, you can make it. To use up the flour you could follow this main course with the Apple Tart with Caramel Sauce as a dessert. It is a good option if you're following a dairy free diet. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is outstanding. Try Ginger Beef with Broccoli, Easy Beef and Broccoli, and Easy Beef and Broccoli for similar recipes.",
		"puntajeDeSalud": 70,
		"pasoApaso": "In a small bowl, combine flour, broth, sugar, and soy sauce. Stir until sugar and flour are dissolved.In a large skillet or wok over high heat, cook and stir beef 2 to 4 minutes, or until browned. Stir in broth mixture, ginger, garlic, and broccoli. Bring to a boil, then reduce heat. Simmer 5 to 10 minutes, or until sauce thickens.Excellent served over rice.",
		"imagen": "https://spoonacular.com/recipeImages/641975-312x231.jpg"
	},
	{
		"id": 652423,
		"nombre": "Moroccan Couscous and Chickpea Salad",
		"dieta": [
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Moroccan Couscous and Chickpea Salad might be just the side dish you are searching for. One serving contains 486 calories, 14g of protein, and 25g of fat. This recipe serves 6 and costs $1.91 per serving. A mixture of pepper, chickpeas, bell pepper, and a handful of other ingredients are all it takes to make this recipe so tasty. 71 person were impressed by this recipe. It is a good option if you're following a vegan diet. From preparation to the plate, this recipe takes about 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is excellent. Try Moroccan tomato & chickpea soup with couscous, Moroccan Tomato Couscous Chickpea Soup, and Moroccan Chickpea Tagine with Quinoa Couscous for similar recipes.",
		"puntajeDeSalud": 56,
		"pasoApaso": "Heat broth and a teaspoon of salt and bring to a boil. \nPlace couscous in a bowl and add broth.  Cover bowl to let couscous absorb liquid.After  5 minutes, remove cover and fluff couscous with a fork.In a large bowl, add the chickpeas, pistachios, red peppers, green onions and parsley and mix well. \nAdd the zest and juice of the lemon and mix again. \nAdd the spice mixture over the couscous and mix well. Taste, and add salt if needed. \nLet the salad marinate for an hour or so before serving.",
		"imagen": "https://spoonacular.com/recipeImages/652423-312x231.jpg"
	},
	{
		"id": 660306,
		"nombre": "Slow Cooker: Pork and Garbanzo Beans",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			}
		],
		"resumenDelPlato": "Slow Cooker: Pork and Garbanzo Beans might be just the main course you are searching for. This gluten free and dairy free recipe serves 6 and costs $2.83 per serving. One serving contains 438 calories, 58g of protein, and 11g of fat. A couple people made this recipe, and 22 would say it hit the spot. A mixture of onion, salt, garbanzo beans *1, and a handful of other ingredients are all it takes to make this recipe so flavorful. To use up the onion you could follow this main course with the Candy Corn Cupcakes as a dessert. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is outstanding. Try Slow Cooker Pork and Beans, Slow Cooker Pork and Beans, and Slow Cooker Pork and Beans for similar recipes.",
		"puntajeDeSalud": 75,
		"pasoApaso": "In slow cooker layer in this order: pork, then garbanzo beans, onion, pour water over all. \nMix spices together and sprinkle over pork and beans. Cover. Set on low and cook for approximately 6 hours. The beans should be tender and creamy. The pork should fall very easily from the bone. The pork can be either shredded for cubed for your preference. *3Serving Suggestion: Scoop about 1 cup of beans with broth into a soup bowl. Top with shredded pork. \nAdd 1/4 of an avocado sliced, top with chopped fresh cilantro.NOTES:*1 The beans do not need to be soaked before adding to the slow cooker. They will be perfectly soft and creamy without pre-soaking.*2 Substitute the water for: 2 cups water and 1 bottle of good quality dark beer like Negra Modelo. You can also substitute the water for chicken stock or pork stock. Each of these substitutions will add an extra dimension of flavor.*3 If you want to shred the pork, it is easiest to do when the pork is hot. Use two forks to pull the pork apart and shred. If you want to slice the pork (like for sandwiches) it is best to do when the pork is cold. \nLet the pork rest in the refrigerator for several hours or over night. Slice with a serrated knife or a very sharp chef knife.",
		"imagen": "https://spoonacular.com/recipeImages/660306-312x231.jpg"
	},
	{
		"id": 715424,
		"nombre": "The Best Chili",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			}
		],
		"resumenDelPlato": "The recipe The Best Chili is ready in about 2 hours and 10 minutes and is definitely a spectacular gluten free and dairy free option for lovers of American food. For $2.01 per serving, this recipe covers 29% of your daily requirements of vitamins and minerals. This recipe makes 8 servings with 323 calories, 33g of protein, and 7g of fat each. This recipe from Pink When has 65475 fans. It works well as a rather cheap main course. It can be enjoyed any time, but it is especially good for The Super Bowl. A mixture of group pepper, oregano, tomato paste, and a handful of other ingredients are all it takes to make this recipe so flavorful. To use up the white sugar you could follow this main course with the Whole Wheat Refined Sugar Free Sugar Cookies as a dessert. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is outstanding. Try 5th Annual Chili Contest: Entry #2 – Jamaican Jerk Chili + Weekly Menu for similar recipes.",
		"puntajeDeSalud": 34,
		"pasoApaso": "Brown the lean ground beef in a deep skillet. Cook over medium heat until cooked all the way through, and then drain.In a large pan over high heat add in all of your additional ingredients: cooked ground beef, tomato juice, kidney beans, pinto beans, water, tomato paste, chili powder, cumin, black pepper, oregano, sugar, cayenne pepper, bell pepper, and chopped onions.Bring to a boil.Once your large pot of chili has started to boil, lower the heat and simmer for 2 hours uncovered.",
		"imagen": "https://spoonacular.com/recipeImages/715424-312x231.jpg"
	},
	{
		"id": 662670,
		"nombre": "Swiss Chard Wraps",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "paleolithic"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "primal"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "You can never have too many side dish recipes, so give Swiss Chard Wraps a try. This recipe serves 6. One serving contains 139 calories, 4g of protein, and 11g of fat. For 82 cents per serving, this recipe covers 18% of your daily requirements of vitamins and minerals. 14 people have tried and liked this recipe. Head to the store and pick up swiss chard leaves, orange cauliflower, salt, and a few other things to make it today. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes about about 45 minutes. It is brought to you by Foodista. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is outstanding. Sweet Thai Chile Chicken Swiss Chard Wraps with Peanut Ginger Sauce, Swiss Chard, and Swiss Chard are very similar to this recipe.",
		"puntajeDeSalud": 90,
		"pasoApaso": "Chop off the stems of the swiss chard at the point where it meets the leaf. You could stem the swiss chard entirely. I like leaving a bit of stem with the leaves to give better structure to the wraps. \nChop the cauliflower into small pieces and pulse them in a food processor until it looks like rice. I usually pulse the cauliflower florets and the stalk together. \nPlace the olive oil in a saut pan over medium-high heat. Once the pan is hot, add the garlic and let it fry for about a minute or two, or until the garlic starts to brown. \nAdd the pulsed cauliflower rice and cook it for about 2-3 minutes. The cauliflower should turn into a vibrant yellow-orange color when it is cooked. \nAdd a pinch of salt and chopped basil to the cauliflower and stir. \nSpiralize the zucchini with Blade B to create zucchini noodles. If you do not have a spiralizer, just create zucchini ribbons with a vegetable peeler. \nTo assemble the wraps, place a large leaf flat down. \nAdd a bit of sauted cauliflower, zucchini noodles, red pepper, and avocado along the swiss chard stalk. \nDrizzle a bit of vinaigrette on top of the vegetables and wrap everything up. \nEnjoy these wraps as a side to your favorite protein! Feel free to dip these wraps in more sauce. \nThese wraps are best consumed when they are freshly made. Refrigerate any leftovers in an airtight container.",
		"imagen": "https://spoonacular.com/recipeImages/662670-312x231.jpg"
	},
	{
		"id": 716195,
		"nombre": "Spicy Indian-Style Hummus",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Spicy Indian-Style Hummus might be just the hor d'oeuvre you are searching for. This recipe makes 12 servings with 134 calories, 5g of protein, and 6g of fat each. For 43 cents per serving, this recipe covers 11% of your daily requirements of vitamins and minerals. It is a good option if you're following a gluten free and vegan diet. Several people made this recipe, and 161 would say it hit the spot. If you have ground cumin, turmeric, chilies, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly 45 minutes. This recipe is typical of middl eastern cuisine. All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is amazing. Try Indian Style Spicy Couscous, Kashmiri-Style leg of lamb – this Indian style of lamb is a real treat, everyone will think you are a gourmet chef, and Indian- Style Chicken for similar recipes.",
		"puntajeDeSalud": 40,
		"pasoApaso": "Rinse the chickpeas and soak for 8 hours or overnight covered in several inches of water with a little yogurt whey or lemon juice added. \nDrain and rinse, then transfer to a large saucepan.  Cover with several inches of fresh water, bring to a boil, reduce the heat to medium-low and cover.  Simmer for 1 to 1 1/2 hours or until the beans are buttery soft. \nDrain.In a food processor, combine all of the ingredients and process until you have a thick, smooth paste. You may need to add extra olive oil or a bit of water if you want a thinner paste. Makes 3 cups, nutrition information is based on 1/4 cup serving.",
		"imagen": "https://spoonacular.com/recipeImages/716195-312x231.jpg"
	},
	{
		"id": 663559,
		"nombre": "Tomato and lentil soup",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "whole 30"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Tomato and lentil soup takes about about 45 minutes from beginning to end. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has 358 calories, 19g of protein, and 8g of fat per serving. This recipe serves 4 and costs $1.26 per serving. 11 person were impressed by this recipe. It works well as an affordable main course for Autumn. A mixture of carrots, bay leaf, parsley, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. Taking all factors into account, this recipe earns a spoonacular score of 97%, which is super. If you like this recipe, you might also like recipes such as Lentil & Tomato Soup, Lentil-Tomato Soup, and Tomato and Lentil Soup.",
		"puntajeDeSalud": 100,
		"pasoApaso": "Saut onion and garlic in olive oil for 5 minutes. \nAdd the carrot, saut for another 2 minutes. \nAdd tomatoes, bay leaf and water, stir and bring to the boil. \nStir in lentils, season with salt and cook for 5 minutes. \nBefore serving sprinkle with chopped parsley.",
		"imagen": "https://spoonacular.com/recipeImages/663559-312x231.jpg"
	},
	{
		"id": 633942,
		"nombre": "Balsamic Roasted Vegetables",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "whole 30"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Balsamic Roasted Vegetables is a side dish that serves 6. One portion of this dish contains about 5g of protein, 3g of fat, and a total of 175 calories. For $1.66 per serving, this recipe covers 15% of your daily requirements of vitamins and minerals. 33 people have made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly roughly 45 minutes. If you have olive oil, balsamic vinegar, bulb fennel, and a few other ingredients on hand, you can make it. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and whole 30 diet. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is awesome. If you like this recipe, you might also like recipes such as Balsamic Roasted Vegetables, My Go-To Balsamic Roasted Vegetables, and Balsamic Roasted Vegetables.",
		"puntajeDeSalud": 62,
		"pasoApaso": "Clean and top the beets and, along with the fingerling potatoes, drizzle with enough olive oil just to coat. Roast whole at 400 degrees until softened, but not completely cooked (about 30 minutes). \nRemove from the oven and carefully peel the beets, then cut in half. You can leave the fingerlings whole, and slice lengthwise in half before serving, or halve them and continue roasting (both ways are delicious!) \nQuarter the fennel and red onion lengthwise, and cut the kabocha into 1/2 inch wedges. \nToss all the vegetables in a bowl and drizzle enough olive oil to sufficiently coat. Then, add a big splash of balsamic vinegar (approx. 1/4 cup), a couple hearty pinches of Kosher salt, a few good turns of fresh ground black pepper, and a small sprig of fresh rosemary. \nLet roast another 30-40 minutes, turning every so often to get an even roast.",
		"imagen": "https://spoonacular.com/recipeImages/633942-312x231.jpg"
	},
	{
		"id": 715521,
		"nombre": "Turkey Avocado BLT Salad",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "paleolithic"
			},
			{
				"nombre": "primal"
			},
			{
				"nombre": "whole 30"
			},
			{
				"nombre": "ketogenic"
			}
		],
		"resumenDelPlato": "Turkey Avocado BLT Salad might be just the main course you are searching for. For $3.77 per serving, this recipe covers 30% of your daily requirements of vitamins and minerals. One serving contains 514 calories, 49g of protein, and 32g of fat. This recipe is liked by 5518 foodies and cooks. It is a good option if you're following a caveman, gluten free, dairy free, and primal diet. From preparation to the plate, this recipe takes approximately 45 minutes. Head to the store and pick up avocado, center cut bacon, turkey breast, and a few other things to make it today. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is excellent. Similar recipes include BLT Salad, BLT Salad, and Avocado Turkey Salad.",
		"puntajeDeSalud": 33,
		"pasoApaso": "",
		"imagen": "https://spoonacular.com/recipeImages/715521-312x231.jpg"
	},
	{
		"id": 716276,
		"nombre": "Doughnuts",
		"dieta": [
			{
				"nombre": "lacto ovo vegetarian"
			}
		],
		"resumenDelPlato": "Need a vegetarian morn meal? Doughnuts could be an awesome recipe to try. This recipe serves 2 and costs 60 cents per serving. One serving contains 425 calories, 13g of protein, and 2g of fat. From preparation to the plate, this recipe takes approximately 45 minutes. 205 people have made this recipe and would make it again. If you have yeast, honey, powdered milk, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is great. Try How to make doughnuts (with video) and Coffee-Biscoff-Bacon Doughnuts, Everything Doughnuts, and No-Fry Doughnuts for similar recipes.",
		"puntajeDeSalud": 39,
		"pasoApaso": "In a bowl mix the water with the yeast and honey, whisk and allow to sit for 15 minutes or until the mixture is foamy. \nMix the flour with the salt and powdered milk and pour the yeast mixture into the bowl.Knead the dough till its elastic and not sticky and cover and leave to double in size. This could take 1-2 hours.On a lightly floured surface, roll out your dough but not to thin so your doughnuts are not flat and cut the dough into circles. If You have a doughnut cutter use that, if not use a small round shaped cover or bowl to make your circles and a smaller container for the middle hole. You can improvise and use the mouth of a plastic bottle to make the hole in the middle.Leave to rise for another 45 minutes. \nHeat up your oil and fry the doughnuts till they are brown on both sides.Vanilla Glaze \nMix 1 cup of powdered sugar with 30 ml of milk and 1 teaspoon of vanilla. \nWhisk till its properly mixed and drizzle the doughnuts with it. \nAdd sprinkles for garnishing \nChocolate GlazeI used a chocolate sauce and drizzled over the doughnuts with sprinkles to top it.",
		"imagen": "https://spoonacular.com/recipeImages/716276-312x231.jpg"
	},
	{
		"id": 658509,
		"nombre": "Roasted Broccoli with Lemon and Garlic",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "paleolithic"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "primal"
			},
			{
				"nombre": "whole 30"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Roasted Broccoli with Lemon and Garlic might be just the side dish you are searching for. One serving contains 58 calories, 3g of protein, and 2g of fat. For 30 cents per serving, this recipe covers 14% of your daily requirements of vitamins and minerals. Not a lot of people made this recipe, and 4 would say it hit the spot. Head to the store and pick up salt, ground pepper, garlic, and a few other things to make it today. From preparation to the plate, this recipe takes roughly 45 minutes. It is a good option if you're following a caveman, gluten free, primal, and whole 30 diet. All things considered, we decided this recipe deserves a spoonacular score of 94%. This score is great. Try Roasted Broccoli With Garlic And Lemon, Roasted Broccoli with Garlic and Lemon, and Roasted Garlic Lemon Broccoli for similar recipes.",
		"puntajeDeSalud": 70,
		"pasoApaso": "Preheat the oven to 400 degrees FIn a large bowl, add broccoli florets, olive oil, salt, pepper and garlic. \nSpread the broccoli out in an even layer on a baking sheet. \nBake in the preheated oven until broccoli is tender enough to pierce the stems with a fork, 15 to 20 minutes. \nRemove and place in a bowl, toss with lemon juice.",
		"imagen": "https://spoonacular.com/recipeImages/658509-312x231.jpg"
	},
	{
		"id": 782622,
		"nombre": "Chocolate Peanut Butter Cinnamon Smoothie",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "fodmap friendly"
			}
		],
		"resumenDelPlato": "Chocolate Peanut Butter Cinnamon Smoothie is a gluten free, dairy free, and fodmap friendly morn meal. This recipe serves 1 and costs $1.5 per serving. One serving contains 417 calories, 28g of protein, and 21g of fat. 5 people were impressed by this recipe. Head to the store and pick up elmhurst harvest chocolate almond milk, banana, cinnamon, and a few other things to make it today. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is great. Try Peanut Butter Chocolate Chip Protein Smoothie with Kura Smoothie Starter, Chocolate Peanut Butter Smoothie, and Chocolate Peanut Butter Smoothie for similar recipes.",
		"puntajeDeSalud": 100,
		"pasoApaso": "",
		"imagen": "https://spoonacular.com/recipeImages/782622-312x231.png"
	},
	{
		"id": 664547,
		"nombre": "Vegetable Dip",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "primal"
			}
		],
		"resumenDelPlato": "You can never have too many hor d'oeuvre recipes, so give Vegetable Dip a try. One serving contains 210 calories, 16g of protein, and 4g of fat. This gluten free, primal, and vegetarian recipe serves 3 and costs $1.84 per serving. It can be enjoyed any time, but it is especially good for The Super Bowl. Not a lot of people made this recipe, and 1 would say it hit the spot. If you have spinach, vegetables, cup onion, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is outstanding. Try Pizza Dip, Smoky Eggplant Dip, and Buffalo Chicken Dip for similar recipes.",
		"puntajeDeSalud": 100,
		"pasoApaso": "In a medium bowl combine all ingredients (except raw vegetables for dipping). Cover and refrigerate until ready to serve. \nServe as a dip for raw vegetables. Makes approximately 3 cups.",
		"imagen": "https://spoonacular.com/recipeImages/664547-312x231.jpg"
	},
	{
		"id": 661340,
		"nombre": "Spinach Salad with Strawberry Vinaigrette",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "primal"
			}
		],
		"resumenDelPlato": "Spinach Salad with Strawberry Vinaigrette might be just the main course you are searching for. For $3.39 per serving, this recipe covers 33% of your daily requirements of vitamins and minerals. One serving contains 353 calories, 21g of protein, and 17g of fat. A mixture of shallot, balsamic vinegar, chicken, and a handful of other ingredients are all it takes to make this recipe so delicious. To use up the strawberries you could follow this main course with the Crepes with Strawberries as a dessert. It can be enjoyed any time, but it is especially good for Mother's Day. It is a good option if you're following a gluten free and primal diet. 15 people were impressed by this recipe. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is super. Try Strawberry Avocado Spinach Salad with Strawberry Vinaigrette #SundaySupper, Spinach Strawberry Salad with Strawberry Vinaigrette, and Spinach Salad with Strawberry Vinaigrette for similar recipes.",
		"puntajeDeSalud": 78,
		"pasoApaso": "Place everything on a plate!  :)",
		"imagen": "https://spoonacular.com/recipeImages/661340-312x231.jpg"
	},
	{
		"id": 715385,
		"nombre": "Slow Cooker Baked Potato Soup",
		"dieta": [],
		"resumenDelPlato": "Slow Cooker Baked Potato Soup might be just the main course you are searching for. One serving contains 618 calories, 25g of protein, and 29g of fat. For $1.89 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. 991 person have made this recipe and would make it again. It can be enjoyed any time, but it is especially good for Autumn. If you have water, onion, baking potatoes, and a few other ingredients on hand, you can make it. To use up the bacon bits you could follow this main course with the Blueberry Buckle as a dessert. All things considered, we decided this recipe deserves a spoonacular score of 80%. This score is solid. Try Slow cooker baked potato soup, Slow Cooker Baked Potato Soup, and Slow-Cooker Loaded Baked Potato Soup for similar recipes.",
		"puntajeDeSalud": 44,
		"pasoApaso": "",
		"imagen": "https://spoonacular.com/recipeImages/715385-312x231.jpg"
	},
	{
		"id": 716406,
		"nombre": "Asparagus and Pea Soup: Real Convenience Food",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "paleolithic"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "primal"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "You can never have too many soup recipes, so give Asparagus and Pea Soup: Real Convenience Food a try. For $3.24 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. One serving contains 240 calories, 11g of protein, and 8g of fat. This recipe from fullbellysisters.blogspot.com has 204 fans. From preparation to the plate, this recipe takes about 20 minutes. It will be a hit at your Autumn event. If you have onion, peas, a couple of garlic cloves, and a few other ingredients on hand, you can make it. It is a good option if you're following a caveman, gluten free, primal, and vegan diet. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is spectacular. Try Butternut Squash & Pear Soup: Real Convenience Food, Tomato, Cucumber & Onion Salad with Feta Cheese: Real Convenience Food, and Everyday Granola from Real Food, Real Simple for similar recipes.",
		"puntajeDeSalud": 44,
		"pasoApaso": "Chop the garlic and onions. \nSaute the onions in the EVOO, adding the garlic after a couple of minutes; cook until the onions are translucent. \nAdd the whole bag of asparagus and cover everything with the broth. Season with salt and pepper and a pinch of red pepper flakes, if using.Simmer until the asparagus is bright green and tender (if you've thawed the asparagus it will only take a couple of minutes). Turn off the heat and puree using an immersion blender. \nAdd peas (the heat of the soup will quickly thaw them) and puree until smooth; add more until it reaches the thickness you like.Top with chives and a small dollop of creme fraiche or sour cream or greek yogurt.",
		"imagen": "https://spoonacular.com/recipeImages/716406-312x231.jpg"
	},
	{
		"id": 658579,
		"nombre": "Roasted Endive Salad With Prosciutto, Figs and Pistachios",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "paleolithic"
			},
			{
				"nombre": "primal"
			}
		],
		"resumenDelPlato": "If you have around around 45 minutes to spend in the kitchen, Roasted Endive Salad With Prosciutto, Figs and Pistachios might be a spectacular gluten free, dairy free, paleolithic, and primal recipe to try. One serving contains 494 calories, 13g of protein, and 24g of fat. This recipe serves 4 and costs $3.64 per serving. If you have endive, figs, pistachio nuts, and a few other ingredients on hand, you can make it. 6 people were impressed by this recipe. It is brought to you by Foodista. It works well as a main course. Taking all factors into account, this recipe earns a spoonacular score of 96%, which is spectacular. Frisée Salad with Prosciutto, Roasted Figs, and Walnuts, Chicory and Endive Salad with Spiced Pistachios, and Prosciutto Roasted Figs are very similar to this recipe.",
		"puntajeDeSalud": 100,
		"pasoApaso": "Preheat your oven (*ding, this is a great toaster oven candidate) to 350F.  Line a rimmed baking sheet with aluminum foil. \nWash the endive and remove any unsightly outer leaves.  Slice each endive head in half from the stem to the tip.  Arrange the endive cut side up on the foil-lined baking sheet.  Coat the endive generously with olive oil. \nBake at 350F for 30 minutes, or until the outer edges are golden brown. \nMeanwhile, fry the prosciutto in a skillet until crispy. \nDrain onto paper towels, then crumble the prosciutto and set it aside. \nWhen the endive is done roasting, arrange three pieces on a plate alongside a handful of sliced dried figs and pistachio nuts. \nDrizzle a spoonful of honey over the plate, then sprinkle the endive with about 1/4th of the crumbled prosciutto.",
		"imagen": "https://spoonacular.com/recipeImages/658579-312x231.jpg"
	},
	{
		"id": 765011,
		"nombre": "Snap Pea and Green Bean Salad with Arugula Pesto",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "primal"
			}
		],
		"resumenDelPlato": "Snap Pean and Green Bean Salad with Arugula Pesto might be just the side dish you are searching for. For $2.27 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. One serving contains 441 calories, 12g of protein, and 36g of fat. Head to the store and pick up roasted almonds, wax beans, lemon zest, and a few other things to make it today. Several people made this recipe, and 127 would say it hit the spot. From preparation to the plate, this recipe takes approximately 45 minutes. It is a good option if you're following a gluten free, primal, and vegetarian diet. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is spectacular. Try Snap Peas and Green Beans with Arugula-Mint Pesto, Snap Peas and Green Beans with Arugula-Mint Pesto, and Michael Natkin's Potato and Green Bean Salad with Arugula Pesto for similar recipes.",
		"puntajeDeSalud": 46,
		"pasoApaso": "Bring a large pot of salted water to a boil.While your water is coming to a boil, prepare your arugula pesto and cilantro cream drizzle.In the bowl of your food processor, add the almonds, pistachios, garlic, lemon zest, baby arugula and basil leaves. Pulse 8-9 times until completely broken up. With the food processor running, slowly pour in the olive oil until the pesto just comes together. Season to taste with salt and black pepper and transfer to a large bowl.In the same food processor bowl (wipe clean if you wish), combine the yogurt and cilantro. Pulse until the two ingredients come together. Season to taste with salt and black pepper and set aside.Have an ice bath ready. \nAdd the snap peas and beans to the boiling water and blanch for about 1 minute and 30 seconds. \nDrain and transfer immediately to the ice bath to cool down. \nDrain again once the veggies are cool, and pat them dry. \nAdd the veggies to the bowl with the pesto and toss to coat. \nPour the veggies onto a large platter and drizzle with the cilantro cream. Top with micro greens and sliced almonds. Enjoy immediately or place in the refrigerator to chill.",
		"imagen": "https://spoonacular.com/recipeImages/765011-312x231.jpg"
	},
	{
		"id": 647875,
		"nombre": "Indian-Style Dill and Turmeric Potato Salad",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "whole 30"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Need a gluten free, whole 30, and vegan side dish? Indian-Style Dill and Turmeric Potato Salad could be a great recipe to try. This recipe makes 4 servings with 256 calories, 6g of protein, and 14g of fat each. For 96 cents per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. This recipe is liked by 3 foodies and cooks. It is perfect for The Fourth Of July. If you have olive oil, dill, garlic, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes about 30 minutes. All things considered, we decided this recipe deserves a spoonacular score of 93%. This score is tremendous. Try Turmeric Potato Salad, potato podimas , how to make potato podimas | south indian style, and Vietnamese Tilapia with Turmeric and Dill for similar recipes.",
		"puntajeDeSalud": 100,
		"pasoApaso": "Heat the olive oil in a large frying pan. \nAdd the garlic and chilli and heat gently until fragrant. Then add the turmeric powder. Fry together for about 30 seconds. \nAdd the potatoes and mix gently to coat with the turmeric. \nAdd a about 1/4 cup of water and let the potatoes cook through. Then add some salt to taste.Take off the heat and add the dill. \nServe immediately.",
		"imagen": "https://spoonacular.com/recipeImages/647875-312x231.jpg"
	},
	{
		"id": 157344,
		"nombre": "Spicy Salad with Kidney Beans, Cheddar, and Nuts",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			}
		],
		"resumenDelPlato": "Spicy Salad with Kidney Beans, Cheddar, and Nuts might be just the main course you are searching for. For $4.59 per serving, this recipe covers 37% of your daily requirements of vitamins and minerals. This recipe makes 1 servings with 725 calories, 27g of protein, and 50g of fat each. A mixture of almonds, avocado, kidney beans, and a handful of other ingredients are all it takes to make this recipe so tasty. To use up the avocado you could follow this main course with the chocolate avocado mousse | quick dark chocolate avocado mousse as a dessert. From preparation to the plate, this recipe takes about 10 minutes. It is a good option if you're following a gluten free and vegetarian diet. Try Turkey Sausages With Spicy Kidney Beans, Spicy Chopped Kidney Bean Salad, and Stoneground Grits with Cheddar Cheese and Spicy Black Beans – Meatless Monday for similar recipes.",
		"puntajeDeSalud": 75,
		"pasoApaso": "Rinse and drain the kidney beans, cut the sundried tomatoes, and tear the slice of cheese into small pieces. \nPut the mixed greens in a bowl and top with kidney beans, sundried tomatoes, cheddar cheese, and nuts. \nMix together the olive oil, balsamic vinegar, and hot sauce in a small bowl. \nPour the dressing over the salad. \nFast, easy, and healthy-- one of my favorite lunches!",
		"imagen": "https://spoonacular.com/recipeImages/157344-312x231.jpg"
	},
	{
		"id": 639851,
		"nombre": "Cod with Tomato-Olive-Chorizo Sauce and Mashed Potatoes",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "whole 30"
			}
		],
		"resumenDelPlato": "Need a gluten free, dairy free, fodmap friendly, and whole 30 main course? Cod with Tomato-Olive-Chorizo Sauce and Mashed Potatoes could be a super recipe to try. For $6.21 per serving, this recipe covers 47% of your daily requirements of vitamins and minerals. This recipe makes 2 servings with 768 calories, 56g of protein, and 47g of fat each. Thanksgiving will be even more special with this recipe. This recipe from Foodista has 14 fans. From preparation to the plate, this recipe takes roughly 45 minutes. Head to the store and pick up salt, cod fillets, plum tomatoes, and a few other things to make it today. To use up the salt you could follow this main course with the Apple Turnovers Recipe as a dessert. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is spectacular. Try Tuna Steaks In Spicy Tomato Sauce With Mashed Potatoes, Olive Oil Mashed Potatoes, and Mashed Potatoes with Olive Oil and Herbs for similar recipes.",
		"puntajeDeSalud": 81,
		"pasoApaso": "If frozen, thaw completely the cod fillets, and dry them with paper towels. season with salt and set aside.Peel and quarter the potatoes, and cook in lightly salted water until tender.Meanwhile, fry the pepper in olive oil for 3-4 minutes. \nAdd cubed sausage, saut for another 2-3 minutes. \nAdd the whole plum tomatoes,  halve them with a flat end of a wooden spoon.Stir in olives and parsley, cook the sauce gently for 2 minutes. Set aside. \nDrain the potatoes and season with parsley, olive oil and lemon juice. Use a hand masher to mix and mash. Leave in a warm place. \nPlace the cod fillets into a hot oiled non-stick pan and cook over a high heat for 5 minutes on each side or until golden brown. \nServe with mashed potatoes and sauce.",
		"imagen": "https://spoonacular.com/recipeImages/639851-312x231.jpg"
	},
	{
		"id": 633921,
		"nombre": "Balsamic & Honey Glazed Salmon with Lemony Asparagus",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "pescatarian"
			}
		],
		"resumenDelPlato": "Need a gluten free, dairy free, and pescatarian main course? Balsamic & Honey Glazed Salmon with Lemony Asparagus could be a spectacular recipe to try. One portion of this dish contains about 25g of protein, 21g of fat, and a total of 362 calories. For $4.43 per serving, this recipe covers 27% of your daily requirements of vitamins and minerals. This recipe serves 2. 29 people found this recipe to be tasty and satisfying. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly 1 hour. A mixture of juice of lemon, ground pepper, honey, and a handful of other ingredients are all it takes to make this recipe so scrumptious. Overall, this recipe earns an amazing spoonacular score of 98%. Balsamic-Honey Glazed Salmon, Easy Balsamic-Honey-Mustard Glazed Salmon, and Honey Glazed Salmon With Asparagus are very similar to this recipe.",
		"puntajeDeSalud": 80,
		"pasoApaso": "In a small mixing bowl or blender, combine all of the ingredients for the balsamic marinade except for the lemon juice (balsamic vinegar, apple cider vinegar, 1 tbsp grapeseed oil, honey, dried dill, herbs de provence, salt and pepper). \nWhisk or blend until oil and vinegar are well incorporated and no longer separate. \nPlace salmon fillet in a baking dish (I use a small casserole dish). \nPour the marinade over the salmon and allow it to marinate for at least 15 minutes (or up to 24 hours covered in the refrigerator).  Turn your oven on high broil. Just before putting the salmon in the oven, drizzle the lemon juice over the fish. \nBake for 10 to 12 minutes on the top rack or until salmon is glazed, browned and sizzling.While the salmon is baking, prepare the asparagus.  Wash the asparagus and cut off the bottom inch and a half of each stalk and discard. \nSpread the asparagus on in a large skillet. \nDrizzle the grapeseed oil over the asparagus and spread the oil on the asparagus with your hands so that all stalks are completely coated. \nSprinkle asparagus with desired amount of salt and pepper. \nSaute over medium heat for 5 minutes. \nAdd the two tablespoons of vegetable stock and cover the skillet. \nSaute 4 minutes. \nRemove lid and add the minced garlic. \nPlace cover back over the asparagus. Continue cooking an additional 3 to 5 minutes until asparagus is cooked but not too soft.  Grate lemon zest over the top of the asparagus.",
		"imagen": "https://spoonacular.com/recipeImages/633921-312x231.jpg"
	},
	{
		"id": 660405,
		"nombre": "Smoky Black Bean Soup With Sweet Potato & Kale",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			}
		],
		"resumenDelPlato": "Need a gluten free, dairy free, and vegetarian main course? Smoky Black Bean Soup With Sweet Potato & Kale could be an excellent recipe to try. For $2.03 per serving, this recipe covers 31% of your daily requirements of vitamins and minerals. This recipe makes 6 servings with 375 calories, 13g of protein, and 6g of fat each. This recipe from Foodista has 5 fans. A mixture of salt & pepper, ground cumin, chipotle chiles, and a handful of other ingredients are all it takes to make this recipe so yummy. To use up the black beans you could follow this main course with the Black Beans and Sweet Potato Dessert as a dessert. Autumn will be even more special with this recipe. From preparation to the plate, this recipe takes approximately 10 hours and 30 minutes. All things considered, we decided this recipe deserves a spoonacular score of 94%. This score is super. Try Smoky Sweet Potato and Black Bean Tacos, Sweet and Smoky Sriracha Black Bean Soup, and Smoky Ham, Bean and Sweet Potato Soup for similar recipes.",
		"puntajeDeSalud": 100,
		"pasoApaso": "Spread the dry beans out on a baking sheet and pick out any pebbles. \nPlace the beans in a big soup pot, cover with water by 3 inches and allow them to soak overnight or for 6-8 hours, then discard that water. Return the soaked beans to the pot and cover with 3 inches of water again, bring to a boil. Reduce heat to medium low, put the cover on and allow to cook until the beans start to get tender but still firm, about 1 1/2 hours. \nDrain the beans. \nHeat the oil in a soup pot over med-high heat. \nAdd the onion along with a pinch of salt and saute until softened and golden. Stir in 1 tbsp of ground cumin, add the beans along with the broth or water and bring to a boil. Reduce heat to medium-low, cover and cook for 30 min. Meanwhile peel and chop the sweet potatoes. Wash the kale, remove the stems and chop the leaves. \nRemove half of the beans and liquid and set aside to cool a bit. \nAdd the sweet potatoes and kale to the pot with some salt and pepper. Cover and cook for 10 minutes. \nTransfer the cooled beans to a blender and puree until smooth, then return them to the pot. Stir in the remaining 1 tbsp of ground cumin. Now add 1 tbsp of the chipotles in adobo. Taste and continue to add more until it has a spice level that you like. Adjust the salt &amp; pepper as needed. \nServe with a dollop of sour cream.",
		"imagen": "https://spoonacular.com/recipeImages/660405-312x231.jpg"
	},
	{
		"id": 637162,
		"nombre": "Carrot and Cabbage Salad With Coriander+cumin Dry Rub",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "paleolithic"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "primal"
			},
			{
				"nombre": "fodmap friendly"
			},
			{
				"nombre": "whole 30"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Carrot and Cabbage Salad With Coriander+cumin Dry Rub is a caveman, gluten free, primal, and fodmap friendly side dish. For $1.35 per serving, this recipe covers 27% of your daily requirements of vitamins and minerals. This recipe makes 1 servings with 220 calories, 6g of protein, and 10g of fat each. 3 people have made this recipe and would make it again. Head to the store and pick up ground coriander, juice of lime, cabbage, and a few other things to make it today. From preparation to the plate, this recipe takes approximately 25 minutes. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is amazing. Try Citrusy Cabbage Salad with Cumin and Coriander, Best Dry Spice Rub for Chicken, Beef and Pork, and Carrot And Apple Soup With Cumin And Coriander for similar recipes.",
		"puntajeDeSalud": 100,
		"pasoApaso": "Chop up the carrots and the cabbage into slivers of roughly the same size. \nAdd the ground coriander, cumin seed, lime juice, and olive oil and massage it into the veggies. \nAdd the fresh coriander and sunflower seeds on top.Leave aside for a couple of hours for the spices to seep into the veggies for added flavor.",
		"imagen": "https://spoonacular.com/recipeImages/637162-312x231.jpg"
	},
	{
		"id": 716221,
		"nombre": "Split Pea and Mushroom Soup",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "primal"
			}
		],
		"resumenDelPlato": "Split Pean and Mushroom Soup might be just the main course you are searching for. This recipe makes 1 servings with 661 calories, 26g of protein, and 37g of fat each. For $5.59 per serving, this recipe covers 47% of your daily requirements of vitamins and minerals. It can be enjoyed any time, but it is especially good for Autumn. This recipe from foodandspice.blogspot.com has 16 fans. If you have water, juice of lemon, jalapeño peppers, and a few other ingredients on hand, you can make it. To use up the juice of lemon you could follow this main course with the Fruit Juice Pops as a dessert. It is a good option if you're following a gluten free and primal diet. From preparation to the plate, this recipe takes around 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is great. Try Split Pea Mini Pancakes with Mushroom Relish, Soup for Spring: Simple, Easy Split Pea Soup, and Split-Pea Soup for similar recipes.",
		"puntajeDeSalud": 76,
		"pasoApaso": "",
		"imagen": "https://spoonacular.com/recipeImages/716221-312x231.jpg"
	},
	{
		"id": 632252,
		"nombre": "Alouette® Stuffed Mushroom Caps",
		"dieta": [
			{
				"nombre": "dairy free"
			}
		],
		"resumenDelPlato": "Alouette® Stuffed Mushroom Caps is a dairy free hor d'oeuvre. This recipe makes 8 servings with 37 calories, 2g of protein, and 1g of fat each. For $1.51 per serving, this recipe covers 11% of your daily requirements of vitamins and minerals. This recipe from Foodista has 11 fans. If you have seasoned bread crumbs, mushroom caps, alouette spinach & artichoke spread, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is awesome. Try Stuffed Mushroom Caps, Stuffed Mushroom Caps, and Stuffed Mushroom Caps for similar recipes.",
		"puntajeDeSalud": 52,
		"pasoApaso": "Preheat oven to 375 F. \nPlace mushroom caps hollow side up on baking sheet. Fill each cap with 1 tsp. Alouette Garlic & Herbs \nSpreadable Cheese and sprinkle with seasoned bread crumbs. \nBake 12-15 minutes. \nGarnish and serve.",
		"imagen": "https://spoonacular.com/recipeImages/632252-312x231.jpg"
	},
	{
		"id": 982371,
		"nombre": "Instant Pot Quinoa Grain Bowl",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "If you have about 13 minutes to spend in the kitchen, Instant Pot Quinoa Grain Bowl might be an awesome gluten free, dairy free, lacto ovo vegetarian, and vegan recipe to try. One portion of this dish contains around 15g of protein, 9g of fat, and a total of 400 calories. For $2.03 per serving, you get a main course that serves 4. 1 person has tried and liked this recipe. It is brought to you by Pink When. Head to the store and pick up kale, stock, salt and pepper, and a few other things to make it today. To use up the avocado you could follow this main course with the chocolate avocado mousse | quick dark chocolate avocado mousse as a dessert. With a spoonacular score of 94%, this dish is spectacular. Similar recipes include Instant Pot Sausage Cabbage Bowl with Quinoa (or Stovetop), Crock Pot Chicken Fajita Bowl (Grain-Free, Paleo), and Instant Pot Quinoa Pilaf.",
		"puntajeDeSalud": 100,
		"pasoApaso": "Rinse and drain the quinoa to remove the bitter and sometimes mildly soapy taste that can linger if not rinsed. \nCombine the quinoa, stock and seasonings in the Instant Pot together and then twist to lock the lid shut. Set the pot to Manual for 1 minute. \nAt the end of the cook time, let the pot to natural pressure release for 10 minutes before carefully releasing the remaining pressure. \nFluff the cooked quinoa with a fork. Now you have Instant Pot Quinoa! \nAdd fruits and vegetables over a scoop of cooked quinoa and make an amazing quinoa grain bowl.",
		"imagen": "https://spoonacular.com/recipeImages/982371-312x231.jpg"
	},
	{
		"id": 632244,
		"nombre": "Alouette Chicken Paprika",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "primal"
			}
		],
		"resumenDelPlato": "You can never have too many main course recipes, so give Alouette Chicken Paprikan a try. This recipe makes 4 servings with 172 calories, 25g of protein, and 6g of fat each. For $1.28 per serving, this recipe covers 16% of your daily requirements of vitamins and minerals. A few people made this recipe, and 49 would say it hit the spot. If you have alouette garlic & herbs spreadable cheese, butter, chicken breasts halves, and a few other ingredients on hand, you can make it. It is a good option if you're following a gluten free and primal diet. All things considered, we decided this recipe deserves a spoonacular score of 70%. This score is good. Try Chicken Alouette, Alouette Summer Vegetables, and Alouette® Cranberry Brie for similar recipes.",
		"puntajeDeSalud": 55,
		"pasoApaso": "Coat chicken with a mixture of 6 tsp. of paprika and all of the garlic powder.Saut chicken in butter over medium heat about 5 minutes on each side.Cover and simmer 15 minutes on low heat. \nRemove chicken from skillet, reserving liquid. \nCombine milk, Alouette \nSpreadable Cheese and remaining paprika in a small mixing bowl. \nPour Alouette Garlic & Herbs \nSpreadable Cheese mixture into skillet, stirring well with reserved liquid.To serve, pour sauce over chicken. Use remaining sauce over rice, pasta or potatoes.",
		"imagen": "https://spoonacular.com/recipeImages/632244-312x231.jpg"
	},
	{
		"id": 655235,
		"nombre": "Peanut Butter and Jelly Smoothie",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "fodmap friendly"
			}
		],
		"resumenDelPlato": "Peanut Butter and Jelly Smoothie might be just the morn meal you are searching for. For 96 cents per serving, this recipe covers 20% of your daily requirements of vitamins and minerals. This recipe makes 2 servings with 513 calories, 18g of protein, and 34g of fat each. A few people made this recipe, and 58 would say it hit the spot. If you have almond milk, bananas, peanut butter, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly 45 minutes. It is a good option if you're following a gluten free, dairy free, and fodmap friendly diet. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is awesome. Similar recipes include Peanut Butter and Jelly Smoothie, Peanut Butter and Jelly Smoothie, and Peanut Butter and Jelly Smoothie.",
		"puntajeDeSalud": 32,
		"pasoApaso": "Place ingredients in a high speed blender like Blendtec for super smooth texture, blend on high.If using a regular blender put milk and strawberries in then blend.Next, add banana pieces and peanut butter, process until smooth. \nGarnish with crushed peanuts and serve.",
		"imagen": "https://spoonacular.com/recipeImages/655235-312x231.jpg"
	},
	{
		"id": 1095753,
		"nombre": "Roasted Cauliflower Detox Bowl with Tahini Sauce",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "The recipe Roasted Cauliflower Detox Bowl with Tahini Sauce can be made in roughly 50 minutes. This recipe serves 2 and costs $3.07 per serving. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has 565 calories, 20g of protein, and 29g of fat per serving. 1 person were glad they tried this recipe. This recipe from Foodista requires tahini, kale, water, and water. It works well as a main course. Overall, this recipe earns an awesome spoonacular score of 89%. Try Quinoa Bowl with Roasted Cauliflower and Tahini Dressing, Roasted Cauliflower with Tahini Sauce, and Roasted Cauliflower in Lemon-Tahini Sauce for similar recipes.",
		"puntajeDeSalud": 100,
		"pasoApaso": "Soak the cashews overnight in water.Preheat the oven to 200C/~395 F. Chop the cauliflower into florets and toss with the olive oil and ground cumin. Roast for 20-25 minutes until golden.To make the sauce, add all ingredients except the water and salt to a food processor. While blending, drizzle in the water a little at a time until the sauce starts to become smooth. Continue processing, scraping down the sides or adding additional water as needed, until the sauce is as smooth as your food processor can make it. \nAdd salt to taste.Boil the quinoa in a saucepan for 10 minutes then drain and set aside. Meanwhile, chop the kale and red cabbage into thin strips and saute in a frying pan with the minced garlic clove over a medium heat until wilted. \nAdd in the quinoa and toss so everything is mixed together. \nPlace some of the kale mixture in the bottom of a bowl and top with sliced avocado, some of the roasted cauliflower, a drizzle of the tahini sauce and if desired, sprinkle some cress on the top.",
		"imagen": "https://spoonacular.com/recipeImages/1095753-312x231.jpg"
	},
	{
		"id": 633344,
		"nombre": "Bacon Wrapped Pork Tenderloin",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "paleolithic"
			},
			{
				"nombre": "primal"
			},
			{
				"nombre": "whole 30"
			}
		],
		"resumenDelPlato": "Bacon Wrapped Pork Tenderloin is a caveman, gluten free, dairy free, and primal main course. For $2.2 per serving, this recipe covers 30% of your daily requirements of vitamins and minerals. One serving contains 411 calories, 51g of protein, and 21g of fat. A couple people made this recipe, and 55 would say it hit the spot. If you have garlic powder, pepper, sage, and a few other ingredients on hand, you can make it. To use up the black pepper you could follow this main course with the Dr. Pepper Cake with Flour Cooked Frosting as a dessert. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 91%. This score is outstanding. Try Bacon-Wrapped Pork Tenderloin, Bacon Wrapped Pork Tenderloin, and Bacon Wrapped Pork Tenderloin for similar recipes.",
		"puntajeDeSalud": 51,
		"pasoApaso": "Remove about an inch off the tapered end of each tenderloin to make a perfect cylinder.Season with salt, pepper, and a pinch of garlic powder. \nLay the bacon strips in a overlapping line on a sheet of cling wrap. \nPlace sage leaves all over bacon (about 9-10 leaves). \nPlace 1 piece of tenderloin across the short ends of the bacon and roll to cover with the bacon.Repeat with the other tenderloin segments.Preheat oven to 425 F. \nPlace the tenderloin in non-stick pan and sear on all sides over medium-high heat. \nTransfer the pan to the preheated oven and cook for 8-10 minutes, turning the pieces after 5 minutes to ensure even cooking.",
		"imagen": "https://spoonacular.com/recipeImages/633344-312x231.jpg"
	},
	{
		"id": 715573,
		"nombre": "Simple Skillet Lasagna",
		"dieta": [],
		"resumenDelPlato": "Simple Skillet Lasagna might be just the main course you are searching for. This recipe makes 5 servings with 814 calories, 34g of protein, and 46g of fat each. For $2.47 per serving, this recipe covers 35% of your daily requirements of vitamins and minerals. 231 person have tried and liked this recipe. If you have pepper flakes, onion, oregano flakes, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes about 35 minutes. This recipe is typical of Mediterranean cuisine. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is excellent. Try Simple Vegetarian Skillet Lasagna, Quick and Simple Springtime Skillet Lasagna with a Mediterranean Kick, and Simple Lasagna for similar recipes.",
		"puntajeDeSalud": 39,
		"pasoApaso": "In a large saute pan, heat oil on high. \nAdd sausage and cook until browned, about 3-5 minutes. \nTransfer to a side bowl and set aside.Reduce the heat to medium low and add your onion, garlic, and pepper flakes. Cook until onions are softened, about 8 minutes. \nAdd your oregano, tomatoes and their juices (crushing the whole tomatoes with your hands or a mixer if you prefer), the basil sprig, and the cooked sausage. \nAdd salt and pepper and simmer for about 5 minutes.Break half of the lasagna noodles in half and place into the meat mixture under the sausage. Distribute them evenly throughout. Take the other half of the noodles and use a spoon to submerge them down into the pan.Dollop Ricotta over lasagna and mix in with the sauce. Top with Mozzarella and bake in the oven on 325 degrees for 15 minutes. Top with basil, then remove from heat and allow to cool before serving.",
		"imagen": "https://spoonacular.com/recipeImages/715573-312x231.jpg"
	},
	{
		"id": 716361,
		"nombre": "Stir Fried Quinoa, Brown Rice and Chicken Breast",
		"dieta": [
			{
				"nombre": "gluten free"
			}
		],
		"resumenDelPlato": "Stir Fried Quinoa, Brown Rice and Chicken Breast might be just the main course you are searching for. This recipe makes 1 servings with 617 calories, 34g of protein, and 16g of fat each. For $2.58 per serving, this recipe covers 37% of your daily requirements of vitamins and minerals. If you have quinoan and brown rice mix, cherry tomatoes, an of carrots, and a few other ingredients on hand, you can make it. To use up the ice cubes you could follow this main course with the Nectarine, Blackberry, and Pecan Sundaes as a dessert. This recipe is liked by 39 foodies and cooks. It is a good option if you're following a gluten free diet. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is spectacular. Try Gai Lan and Shiitake Stir-Fried Brown Rice Recipe, Stir-fried Chickpeas And Asparagus With Brown Rice And Lemon Ta, and Stir-Fried Broccoli with Brown Rice {Meat Optional} for similar recipes.",
		"puntajeDeSalud": 56,
		"pasoApaso": "In a bowl, season the chicken breast with the seasoning cubes and suya spice and allow to marinate for 2 hours or if you are really hungry, you can use immediately.In a pot of boiling water (1 cup), pour in your quinoa mix and the teaspoon of oil and allow to boil till soft which should take about 5-7 minutes. \nPour into a bowl and set aside.In a pan, heat up the melted butter and pan fry on medium heat the chicken breast, constantly flipping it over so it browns on both sides, reduce the heat, cover the pan and allow the chicken cook properly. If the pan becomes to dry, add 2 tablespoons of water.Stir in the chopped vegetables into the pan of frying chicken and finally add the quinoa/brown rice mix. \nServe hot!     ",
		"imagen": "https://spoonacular.com/recipeImages/716361-312x231.jpg"
	},
	{
		"id": 664090,
		"nombre": "Turkish Chicken Salad with Home-made Cacik Yogurt Sauce",
		"dieta": [
			{
				"nombre": "gluten free"
			}
		],
		"resumenDelPlato": "You can never have too many main course recipes, so give Turkish Chicken Salad with Home-made Cacik Yogurt Sauce a try. For $3.77 per serving, this recipe covers 41% of your daily requirements of vitamins and minerals. Watching your figure? This gluten free recipe has 713 calories, 64g of protein, and 40g of fat per serving. Not a lot of people made this recipe, and 9 would say it hit the spot. A mixture of lemon juice, roast chicken, i head gem lettuce, and a handful of other ingredients are all it takes to make this recipe so flavorful. To use up the tomatoes you could follow this main course with the Pink Peony Popcorn Balls as a dessert. From preparation to the plate, this recipe takes roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is amazing. Try Spicy Lamb Kabobs With Turkish Cacik, Jerk Rubbed Chicken Thighs with Home-Made Mango-Habanero Hot Sauce, and Yogurt and Cucumber Dip Cacik for similar recipes.",
		"puntajeDeSalud": 83,
		"pasoApaso": "First prepare the Cacik: For the Cacik: Chop the cucumber into tiny pieces, as small as you can, and place in a bowl. Cover the cucumber with salt and set aside for 30 minutes. The cucumbers will start to exude their juices which will flavour the yogurt nicely. \nPut a griddle pan on medium  high heat, cover the peppers with olive oil and start to char. \nCut the tomato and cucumber into medium pieces. Slice the red onion as thin as you can. Chop the parsley fine. \nPlace all ingredients in a bowl and cover with a the juice of 1 lemon. Season with salt and pepper. \nLet it sit in the fridge for 30 minutes  1 hour, stirring a couple times, so it starts to exude juice. \nTear the lettuce into mouth-siazed peices. \nCut the red cabbage into thin slices. Grate the carrot. \nMix together in a bowl. \nTear the chicken into large pieces and add to the salad. \nRemove the tomato salsa from the fridge. \nDrain the juice and keep for later. Now add the tomato, cucumber, parsley onion mix to the chicken salad, as well as the sliced gherkin. \nLay out the salad on a large plate or chopping board. \nServe with the charred peppers, cacik, salsa vinaigrette and some chilli sauce.",
		"imagen": "https://spoonacular.com/recipeImages/664090-312x231.jpg"
	},
	{
		"id": 651977,
		"nombre": "Mini Stuffed Mexican Bell Peppers",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			}
		],
		"resumenDelPlato": "The recipe Mini Stuffed Mexican Bell Peppers could satisfy your Mexican craving in around 45 minutes. Watching your figure? This gluten free and dairy free recipe has 367 calories, 28g of protein, and 5g of fat per serving. For $5.22 per serving, you get a side dish that serves 4. Not a lot of people made this recipe, and 7 would say it hit the spot. Head to the store and pick up onion, chipotles in adobo, chili powder, and a few other things to make it today. All things considered, we decided this recipe deserves a spoonacular score of 94%. This score is spectacular. Try Mexican Stuffed Bell Peppers, Jerk Chicken and Stuffed Mini Bell Peppers, and Goat Cheese Stuffed Mini Bell Peppers for similar recipes.",
		"puntajeDeSalud": 92,
		"pasoApaso": "Roast the vegetables:  Preheat oven to 400 degrees. \nCut the tomatillos in half, slice the onion into 1/2 in slices and remove garlic from covering. \nPlace on baking sheet. Roast till tomatillos are tender and start to brown, about 20 minutes.",
		"imagen": "https://spoonacular.com/recipeImages/651977-312x231.jpg"
	},
	{
		"id": 636602,
		"nombre": "Butternut Squash Soup (In Half An Hour!)",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Butternut Squash Soup (In Half An Hour!) might be just the soup you are searching for. This recipe serves 8 and costs $1.26 per serving. One serving contains 254 calories, 9g of protein, and 6g of fat. 5 people have made this recipe and would make it again. It is perfect for Autumn. A mixture of onions, quinoa, collard greens, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes roughly 30 minutes. It is a good option if you're following a gluten free and vegan diet. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is outstanding. Try Half-Hour Chili, Half-hour Chicken Gumbo, and Meatless Monday: Half-Hour Veggie Chili for similar recipes.",
		"puntajeDeSalud": 86,
		"pasoApaso": "In large pot, saute onion in butter, ghee or olive oil until soft \nAdd cubed squash and saute for a couple of minutes \nAdd vegetable stock and 1 3 inch piece of kombu and bring to a boil \nReduce heat and simmer until squash is soft (about 15 minutes)Using a slotted spoon, remove squash and puree in blender \nReturn squash to pot and stir in black-eyed peas and cooked quinoa. \nAdd greens for about five minutes until soft \nAdd nutmeg, sea salt and pepper to taste",
		"imagen": "https://spoonacular.com/recipeImages/636602-312x231.jpg"
	},
	{
		"id": 661259,
		"nombre": "Spinach and Gorgonzola Stuffed Flank Steak",
		"dieta": [],
		"resumenDelPlato": "Spinach and Gorgonzola Stuffed Flank Steak might be a good recipe to expand your main course recipe box. This recipe makes 4 servings with 523 calories, 47g of protein, and 28g of fat each. For $4.21 per serving, this recipe covers 39% of your daily requirements of vitamins and minerals. This recipe from Foodista has 9 fans. valentin day will be even more special with this recipe. If you have salt and pepper, spinach, shallot, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is outstanding. Similar recipes include Bruce Aidells' Spinach and Gorgonzola-Stuffed Flank Steak, Spinach-stuffed Flank Steak, and Spinach & Feta Stuffed Flank Steak.",
		"puntajeDeSalud": 81,
		"pasoApaso": "Preheat oven to 37 \nButterfly the steak by using a long sharp knife holding it parallel to the work surface, cut through the long side of the steak, stopping about  inch from the opposite side. If the steak is already thin, just pound it with a mallet to  inch thick. \nIn a large skillet over medium heat add 1 tablespoon olive oil and saut` the shallots until soft, 2 minutes. \nAdd the spinach and cook until just wilted, about 2 to 3 minutes. \nTransfer to a colander. \nWhen cool enough to handle, squeeze out all the moisture from the spinach and transfer to a medium bowl. Stir in the bread crumbs and cheese. Season with salt and pepper. \nPlace the steak on a sheet of plastic wrap. Smear the spinach mixture evenly over the steak, leaving about 1 inch border along the side edge. Beginning with the side near you and using the plastic wrap as an aid, rollup the steak, gently pressing on the filling. \nTie the rolled steak with twine at 2-3 inch interval. \nSeason the outside with salt and pepper. \nHeat the remaining 2 tablespoons olive oil in a large ovenproof skillet over medium high heat. Sear the roast on all sided, about 2 minutes per side. \nPlace in the oven and roast for 20 to 25 minutes. \nTransfer to a cutting board, tend with aluminum foil and allow resting for 10 minutes. \nTo serve, remove the twine from the roast and cut into  inch to 1 inch thick slices.",
		"imagen": "https://spoonacular.com/recipeImages/661259-312x231.jpg"
	},
	{
		"id": 716423,
		"nombre": "Grilled Zucchini with Goat Cheese and Balsamic-Honey Syrup",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			}
		],
		"resumenDelPlato": "Grilled Zucchini with Goat Cheese and Balsamic-Honey Syrup might be just the side dish you are searching for. This recipe serves 2 and costs $2.18 per serving. One serving contains 272 calories, 8g of protein, and 14g of fat. This recipe is liked by 11132 foodies and cooks. It can be enjoyed any time, but it is especially good for The Fourth Of July. From preparation to the plate, this recipe takes about 45 minutes. If you have balsamic vinegar, pepper, salt, and a few other ingredients on hand, you can make it. It is a good option if you're following a gluten free and vegetarian diet. All things considered, we decided this recipe deserves a spoonacular score of 77%. This score is solid. Similar recipes include Grilled Zucchini with Goat Cheese and Balsamic-Honey Syrup, Grilled Chicken Salad with Corn, Peaches, Blue Cheese, and Balsamic-Honey Syrup, and Grilled Peach Salad with Toasted Pecans, Blue Cheese and Honey Balsamic Syrup.",
		"puntajeDeSalud": 27,
		"pasoApaso": "",
		"imagen": "https://spoonacular.com/recipeImages/716423-312x231.jpg"
	},
	{
		"id": 634548,
		"nombre": "Beans With Smoked Pork Hock",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			}
		],
		"resumenDelPlato": "Beans With Smoked Pork Hock might be just the side dish you are searching for. This recipe makes 4 servings with 195 calories, 10g of protein, and 1g of fat each. For 66 cents per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. 5 people have made this recipe and would make it again. From preparation to the plate, this recipe takes around 45 minutes. If you have salt and pepper, onion, celery root, and a few other ingredients on hand, you can make it. It is a good option if you're following a gluten free and dairy free diet. All things considered, we decided this recipe deserves a spoonacular score of 94%. This score is excellent. Similar recipes include Smoked Ham Hock Pie, Collard Greens With Ham And Smoked Hock, and Collard Greens with Ham and Smoked Hock.",
		"puntajeDeSalud": 81,
		"pasoApaso": "Soak beans the night before.Wash the smoked pork hock, remove skin. \nPlace onion and meat in a large pan. \nAdd beans, bay leaf and garlic.Cover beans and meat with water.Crumble in the vegetable cube.Cook beans and meat for about 60 minutes on low heat, covered.Chop the carrots and celery in a blender, add to the meat and beans 15 minutes before the end of cooking. Stir. \nRemove the cooked pork hock from the beans, tear into smaller pieces. \nRemove the bay leaf. \nAdd salt and pepper as needed. \nServe beans with small pieces of meat and black bread.",
		"imagen": "https://spoonacular.com/recipeImages/634548-312x231.jpg"
	},
	{
		"id": 646651,
		"nombre": "Herb chicken with sweet potato mash and sautéed broccoli",
		"dieta": [
			{
				"nombre": "gluten free"
			}
		],
		"resumenDelPlato": "Herb chicken with sweet potato mash and sautéed broccoli might be just the main course you are searching for. This recipe makes 4 servings with 554 calories, 43g of protein, and 26g of fat each. For $2.49 per serving, this recipe covers 43% of your daily requirements of vitamins and minerals. Head to the store and pick up pepper and salt, sweet potatoes, russet potato, and a few other things to make it today. To use up the unsalted butter you could follow this main course with the Almond Milk Chocolate Pudding as a dessert. 4 people have made this recipe and would make it again. It is a good option if you're following a gluten free diet. From preparation to the plate, this recipe takes roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 91%. This score is super. Try Sesame halloumi parcels with sweet potato tahini mash & chopped herb salad, Thanksgiving Foragers Pie: Wild Mushrooms, Herb Gravy, and Sweet Potato Mash in a Flaky Spelt Crust [Vegan], and Moroccan chicken with sweet potato mash for similar recipes.",
		"puntajeDeSalud": 78,
		"pasoApaso": "Preheat the oven to 350F (180C) or 320F (160C) for convection oven and cook the chicken according to the pack instructions. About 15 minutes before the end of the chicken cooking time, place the diced potato into boiling water for 5 minutes, then add the sweet potato and cook until the potatoes are tender. Roughly mash, adding butter, salt, and pepper to taste, then mash thoroughly. \nHeat the oil in a pan and quickly saut the broccoli until tender. Cover to keep warm. \nRemove the chicken from the oven, leave to cool for a minute then cut the bag open and gently tip the contents into a dish. Slice the chicken breasts into chunky pieces on a board, keeping the chicken breast shape together. \nServe the mash potato topped with the chicken and remaining sauce with a side of broccoli.",
		"imagen": "https://spoonacular.com/recipeImages/646651-312x231.jpg"
	},
	{
		"id": 792072,
		"nombre": "Dressed Up Kale Salad",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Need a gluten free and vegan side dish? Dressed Up Kale Salad could be a tremendous recipe to try. This recipe makes 4 servings with 63 calories, 3g of protein, and 2g of fat each. For 37 cents per serving, this recipe covers 9% of your daily requirements of vitamins and minerals. This recipe is liked by 31 foodies and cooks. If you have agave nectar, tahini, water, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is amazing. Try All-Dressed Kale Chips, Spinach & Kale Soup With Tahini Dressed Chickpeas, and Warm Bacon Dressed Zucchini Noodles with Mushrooms, Kale and a Fried Egg for similar recipes.",
		"puntajeDeSalud": 44,
		"pasoApaso": "Remove the kale leaves from the stalk and tear into pieces. Rinse well and pat dry.In a large bowl, whisk together the nutritional yeast, tahini, lemon juice, sweetneer and shalot. \nAdd water as necessary to thin to a thick but pourable consistency. \nAdd the kale to the bowl and mix with your hands until everything is well blended. \nSprinkle with seeds if desired, and serve.",
		"imagen": "https://spoonacular.com/recipeImages/792072-312x231.jpg"
	},
	{
		"id": 632269,
		"nombre": "Amaranth and Roast Veggie Salad",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Amaranth and Roast Veggie Salad might be just the side dish you are searching for. This recipe makes 2 servings with 331 calories, 7g of protein, and 18g of fat each. For $1.47 per serving, this recipe covers 15% of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 5 would say it hit the spot. From preparation to the plate, this recipe takes roughly 45 minutes. Head to the store and pick up onion, punnet baby tomatoes, pepper, and a few other things to make it today. It is a good option if you're following a gluten free and vegan diet. All things considered, we decided this recipe deserves a spoonacular score of 87%. This score is tremendous. Try Mum’s Roast Veggie Salad, amaranth yogurt parfait – popped amaranth parfait with fruits, and Coriander Cauliflower Amaranth Salad for similar recipes.",
		"puntajeDeSalud": 87,
		"pasoApaso": "Cook the amaranth with about a cup of water until it reaches a sticky consistency \nCut the onion roughly into chunks \nAdd the onion and diced pumpkin to a tinfoil lined baking tray \nDrizzled over the olive oil and sprinkle with the herbal salt and pepper \nPut into a hot oven and roast until the edges of the pumpkin go crispy \nJust before the veggies are done, throw in the baby tomatoes \nCoat the veggies in the cooked amaranth \nTear a few rocket leaves \nToss together and there you have it, an unusual roast veggie salad! \nServe warm",
		"imagen": "https://spoonacular.com/recipeImages/632269-312x231.jpg"
	},
	{
		"id": 659143,
		"nombre": "Salmon, Watercress, Fennel and Baby Beetroot Salad With Lemony \"Caviar\" Dressing",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "paleolithic"
			},
			{
				"nombre": "primal"
			},
			{
				"nombre": "pescatarian"
			}
		],
		"resumenDelPlato": "You can never have too many main course recipes, so give Salmon, Watercress, Fennel and Baby Beetroot Salad With Lemony \"Caviar\" Dressing a try. This caveman, gluten free, dairy free, and primal recipe serves 4 and costs $4.13 per serving. One serving contains 433 calories, 27g of protein, and 29g of fat. If you have baby beets, bay leaf, pepper, and a few other ingredients on hand, you can make it. Only a few people made this recipe, and 4 would say it hit the spot. From preparation to the plate, this recipe takes approximately 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 93%. This score is great. Try [] Wild Rice, Baby Beetroot & Beef Kofta Salad (ft. Love Beets Baby Beetroot), Poached Salmon and Watercress Salad with Dill-Yogurt Dressing, and Beetroot, Red Apple And Watercress Salad for similar recipes.",
		"puntajeDeSalud": 100,
		"pasoApaso": "Place the salmon in a pan, cover with water, and add the wine, bay and tarragon stalks.  Bring to the boil and then immediately turn off and leave for a couple of minutes to cook in the residual heat. \nRemove to a plate with a slotted spoon and leave to cool before flaking into large pieces.Make the dressing by lightly whisking the olive oil and lemon juice together. Stir in the Arnkha MSC and season with some black pepper.Next, arrange the watercress, beets and fennel in 4 shallow salad bowls, then add the salmon and tarragon. \nDrizzle over the Arnkha MSC dressing and serve.",
		"imagen": "https://spoonacular.com/recipeImages/659143-312x231.jpg"
	},
	{
		"id": 715533,
		"nombre": "Filet Mignon Soft Tacos",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "pescatarian"
			}
		],
		"resumenDelPlato": "The recipe Filet Mignon Soft Tacos could satisfy your Mexican craving in approximately 45 minutes. This main course has 512 calories, 50g of protein, and 29g of fat per serving. For $4.21 per serving, this recipe covers 24% of your daily requirements of vitamins and minerals. If you have cream, extra virgin olive oil, cracked pepper, and a few other ingredients on hand, you can make it. To use up the extra virgin olive oil you could follow this main course with the Peach Crisp: Healthy Crisp for Breakfast as a dessert. 400 people were impressed by this recipe. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is super. Similar recipes include Filet Mignon, Filet Mignon, and Filet Mignon Pasta.",
		"puntajeDeSalud": 36,
		"pasoApaso": "",
		"imagen": "https://spoonacular.com/recipeImages/715533-312x231.jpg"
	},
	{
		"id": 640921,
		"nombre": "Stuffed Artichoke Main Dish",
		"dieta": [
			{
				"nombre": "gluten free"
			}
		],
		"resumenDelPlato": "Need a gluten free main course? Stuffed Artichoke Main Dish could be a super recipe to try. For $2.1 per serving, this recipe covers 26% of your daily requirements of vitamins and minerals. This recipe makes 2 servings with 272 calories, 30g of protein, and 6g of fat each. 18 people were impressed by this recipe. If you have potato, chicken breasts, salt, and a few other ingredients on hand, you can make it. To use up the olive oil you could follow this main course with the Sauteed Banana, Granolan and Yogurt Parfait as a dessert. From preparation to the plate, this recipe takes about 1 hour. All things considered, we decided this recipe deserves a spoonacular score of 85%. This score is awesome. Try Caprese-Style Stuffed Main Dish, Main-Dish Minestrone, and Summertime Main-Dish Salad for similar recipes.",
		"puntajeDeSalud": 78,
		"pasoApaso": "Pull apart center leaves of artichoke \nCut the center so that you take the prickly center \nUse spoon to get all that out so you only have the center being empty \nAdd a bit of lemon juice to make sure it doesn't change color \nAdd artichoke to boiling water \nLet boil for 10 min so it gets kind of soft \nTake out \nAdd cold water so it cools \nCut the edges of artichoke \nHow to make the stuffing.Boil the potato, or put into microwave to cook it up. (it just needs to be soft)In a sauce pan at med-high heat add the olive oil, rosemary, maple syrup, crushed and finely sliced garlic and the chicken. \nAdd the lemon sliced  up to the saucepan and cook it all together for for 15 min. So that it is all cooked up.  and put it onto a plate to cool.Now there should be some sauce still left in the pan, so slice the cooked potatoe and add it to the pan to get all that tasty sauce.Now cut up the chicken, potato and some grated mozzarella cheese and mash it up so that you can stuff it into the artichoke. \nBake in oven at 350 for 20ish min.",
		"imagen": "https://spoonacular.com/recipeImages/640921-312x231.jpg"
	},
	{
		"id": 639411,
		"nombre": "Cilantro Lime Halibut",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "paleolithic"
			},
			{
				"nombre": "primal"
			},
			{
				"nombre": "pescatarian"
			}
		],
		"resumenDelPlato": "Cilantro Lime Halibut is a caveman, gluten free, dairy free, and primal main course. For $8.75 per serving, this recipe covers 28% of your daily requirements of vitamins and minerals. One serving contains 418 calories, 43g of protein, and 22g of fat. 19 people were impressed by this recipe. From preparation to the plate, this recipe takes around 45 minutes. If you have juice of lime, another slug of blood orange olive oil, dusting of garlic-pepper, and a few other ingredients on hand, you can make it. To use up the white wine you could follow this main course with the White Wine Frozen Yogurt as a dessert. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is great. Try Halibut With Citrus And Cilantro, Cilantro-Ginger Halibut, and Poached Halibut with Ginger and Cilantro for similar recipes.",
		"puntajeDeSalud": 67,
		"pasoApaso": "Heat the oil in a large frying pan over medium heat. Coat the filets with garlic pepper on the flesh side. When pan is heated, add filet flesh side down to pan to sear that side. Allow to cook for about 30 seconds. Then flip filets over with tongs. \nAdd white wine to pan and cover to steam. After about 2 minutes, much of the wine will have evaporated. \nAdd the chicken stock gradually. Allow the filets to steam for another couple of minutes. Then add the lime juice. When bubbling and both filets are opaque all the way through, add the green onions to the pan and swirl in the sauce for a moment. \nRemove filets to beds of lettuce. \nAdd a tsp of the Blood Orange Olive, swirl the green onions in the sauce one more time and then pour equal parts over the fish. \nGarnish with fresh cilantro and lime wedges. \nSprinkle with salt and pepper to taste. \nServe immediately.",
		"imagen": "https://spoonacular.com/recipeImages/639411-312x231.jpg"
	},
	{
		"id": 646043,
		"nombre": "Gujarati Dry Mung Bean Curry",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "The recipe Gujarati Dry Mung Bean Curry is ready in around 45 minutes and is definitely an excellent gluten free and vegan option for lovers of Indian food. For $2.53 per serving, this recipe covers 45% of your daily requirements of vitamins and minerals. This recipe makes 4 servings with 417 calories, 23g of protein, and 6g of fat each. This recipe from Foodista has 2 fans. It works well as an affordable main course. A mixture of salt, sugar, cinnamon powder, and a handful of other ingredients are all it takes to make this recipe so flavorful. To use up the cumin seeds you could follow this main course with the Indian Fried Banana Cakes (Mangalore Buns) as a dessert. All things considered, we decided this recipe deserves a spoonacular score of 94%. This score is amazing. Try Uncle Bill's Mung Bean Curry, Mung Bean Crepes, and Korean Mung With Bean for similar recipes.",
		"puntajeDeSalud": 100,
		"pasoApaso": "Wash the mung beans and boil them in plenty of hot water with a pinch of baking powder until al-dente. If you have a pressure cooker thats about 6-7 whistles. \nDrain and set aside.In a large pan heat the oil and add the mustard seeds (wait for them to pop) then add the cumin seeds, asafoetida, curry leaves, garlic and chillies. Saut until aromatic. Obviously dont let it burn. \nAdd the tomatoes, turmeric and mung beans and cook for two minutes. Be careful not to mash it up as you stir. \nAdd the salt, sugar, lemon juice and cinnamon powder and cook for a further two minutes.Throw in the chopped coriander, combine and serve.",
		"imagen": "https://spoonacular.com/recipeImages/646043-312x231.jpg"
	},
	{
		"id": 975070,
		"nombre": "Instant Pot Chicken Taco Soup",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			}
		],
		"resumenDelPlato": "Need a gluten free and dairy free main course? Instant Pot Chicken Taco Soup could be a great recipe to try. One serving contains 346 calories, 25g of protein, and 8g of fat. This recipe serves 4. For $2.72 per serving, this recipe covers 40% of your daily requirements of vitamins and minerals. 6 people have made this recipe and would make it again. This recipe is typical of Mexican cuisine. Head to the store and pick up chili powder, green onion, canned tomatoes, and a few other things to make it today. From preparation to the plate, this recipe takes roughly 25 minutes. It is perfect for Autumn. It is brought to you by Pink When. Taking all factors into account, this recipe earns a spoonacular score of 99%, which is spectacular. Similar recipes are Instant Pot Chicken Taco Soup, Instant Pot Taco Soup, and Instant Pot Taco Soup.",
		"puntajeDeSalud": 83,
		"pasoApaso": "Press the \nSaute button on the Instant Pot and heat oil. \nAdd onion and bell pepper and saute until translucent. \nAdd tomatoes including juice and add water. Make sure to scrape all of the bits from the sides and bottom of the Instant Pot as you are stirring. \nAdd chicken, chili powder, corn, black beans, green onions, green chilis, and  cup of cilantro. Lock lid. Press the manual or pressure cook button and set time for 15 minutes. When time is up, do a quick release until the valve drops and then unlock the lid. Shred the chicken using two forks and then let the soup simmer for 5 minutes. \nServe the soup into bowls and then top with your favorite toppings such as sour cream, cheese, avocado, etc.",
		"imagen": "https://spoonacular.com/recipeImages/975070-312x231.jpg"
	},
	{
		"id": 636608,
		"nombre": "Butternut Squash, Arugula and Goat Cheese Quinoa",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			}
		],
		"resumenDelPlato": "Butternut Squash, Arugulan and Goat Cheese Quinoan is a gluten free and lacto ovo vegetarian recipe with 4 servings. One serving contains 482 calories, 15g of protein, and 23g of fat. For $2.55 per serving, this recipe covers 31% of your daily requirements of vitamins and minerals. 3 people were impressed by this recipe. If you have chicken stock, butternut squash, goat cheese, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly roughly 45 minutes. It is brought to you by Foodista. Overall, this recipe earns a super spoonacular score of 95%. Users who liked this recipe also liked 5-Ingredient Butternut Squash, Arugulan and Goat Cheese Pasta, 5-Ingredient Butternut Squash, Arugulan and Goat Cheese Pasta, and Butternut Squash, Arugula, and Roasted Garlic Goat Cheese Tartine.",
		"puntajeDeSalud": 100,
		"pasoApaso": "Preheat oven to 450F. \nSpray a cookie sheet with nonstick spray. \nToss butternut squash with about 1 tbsp olive oil (possibly less, just enough to coat) and season with salt and pepper. \nSpread in one layer on cookie sheet. \nRoast butternut squash for 20-25 minutes, until fork tender. \nWhile squash is roasting, combine quinoa and water or stock in a saucepan. If using water, season with 1/2 tsp salt. Bring to a boil, lower heat, cover and simmer for 10-15 minutes, until liquid is absorbed. \nIn a large bowl, combine cooked quinoa, butternut squash, arugula, 1 tbsp olive oil, balsamic vinegar and crumbled goat cheese. Season with a pinch more salt and pepper. Toss well to mix everything and wilt arugula. \nServe immediately, garnished with toasted nuts, if desired.",
		"imagen": "https://spoonacular.com/recipeImages/636608-312x231.jpg"
	},
	{
		"id": 715391,
		"nombre": "Slow Cooker Chicken Taco Soup",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			}
		],
		"resumenDelPlato": "Slow Cooker Chicken Taco Soup might be just the main course you are searching for. This recipe serves 6 and costs $1.41 per serving. Watching your figure? This gluten free and dairy free recipe has 312 calories, 24g of protein, and 4g of fat per serving. This recipe from Pink When has 2179 fans. It can be enjoyed any time, but it is especially good for Autumn. If you have beans, tomatoes, chili beans, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around 8 hours and 5 minutes. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is amazing. Try Slow Cooker Chicken Taco Soup, Slow Cooker Chicken Taco Soup, and Slow Cooker Beef or Chicken Taco Soup for similar recipes.",
		"puntajeDeSalud": 27,
		"pasoApaso": "Once you have all of your ingredients added, allow it to cook all day for 8 hours on low. If you are wanting to make this a little faster, turn it on high and cook for 4 hours.When your Chicken Taco Soup is ready to serve, add in some crushed tortilla shells, shredded cheddar cheese, and a little sour cream.",
		"imagen": "https://spoonacular.com/recipeImages/715391-312x231.jpg"
	},
	{
		"id": 716330,
		"nombre": "Chicken and Mango Skewer",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "whole 30"
			}
		],
		"resumenDelPlato": "Chicken and Mango Skewer might be just the main course you are searching for. This gluten free, dairy free, and whole 30 recipe serves 1 and costs $3.67 per serving. One serving contains 420 calories, 30g of protein, and 7g of fat. A couple people made this recipe, and 19 would say it hit the spot. A mixture of chicken breast, chicken stock cube, mangos, and a handful of other ingredients are all it takes to make this recipe so tasty. To use up the vegetable cooking oil you could follow this main course with the Banana Bread no.7 as a dessert. From preparation to the plate, this recipe takes about 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is outstanding. Try Grilled Chicken Caesar on a Skewer, Thai Chicken Skewer Appetizers with Sweet and Spicy Chili Sauce, and Caprese Skewer for similar recipes.",
		"puntajeDeSalud": 61,
		"pasoApaso": "Chop chicken breast into cubes and place on sticks. Set fire to your grill or oven. \nPlace the chicken breast on the grill to heat up a little \nMix all your seasoning in a bowl with your vegetable oil.With a brush, smear the mix on the chicken breast on both sides.Flip occasionally as it browns till its cooked. Stack your mangoes after the chicken is done but if your mangoes are firm, you can grill them as well. \nServe on its own as an appetizer or with rice.",
		"imagen": "https://spoonacular.com/recipeImages/716330-312x231.jpg"
	},
	{
		"id": 636230,
		"nombre": "Broccoli with cheese soup",
		"dieta": [
			{
				"nombre": "lacto ovo vegetarian"
			}
		],
		"resumenDelPlato": "Broccoli with cheese soup requires around around 45 minutes from start to finish. For 66 cents per serving, this recipe covers 18% of your daily requirements of vitamins and minerals. Watching your figure? This lacto ovo vegetarian recipe has 121 calories, 7g of protein, and 5g of fat per serving. This recipe serves 4. This recipe from Foodista requires broccoli florets, swiss chesee, milk, and feta cheese. It works well as a side dish. 18 people were impressed by this recipe. It can be enjoyed any time, but it is especially good for Autumn. Taking all factors into account, this recipe earns a spoonacular score of 95%, which is tremendous. Users who liked this recipe also liked Broccoli Cheese Soup, Broccoli Cheese Soup, and Broccoli Cheese Soup.",
		"puntajeDeSalud": 52,
		"pasoApaso": "Add onions and carrots to the melted butter and saute for 5-6 minutes over medium heat, or until vegetables are tender. \nAdd 1 cup chicken broth and bring to the boil. \nAdd broccoli and cook, covered, 5 to 6 minutes or until the broccoli is tender. Using a spoon, break broccoli florets in small pieces. \nReduce heat to low and add remaining cup of chicken broth. \nMix flour and milk in a small bowl and whisk until smooth. \nAdd mixture to the pot. \nAdd garlic powder, salt, and pepper. Continue cooking for about 5-6 minutes over low heat until soup thickens. \nAdd cheese, handfuls at a time, and stir constantly over low heat for 10 minutes until smooth and creamy. If soup becomes too thick, add additional chicken stock. Do not let soup boil.",
		"imagen": "https://spoonacular.com/recipeImages/636230-312x231.jpg"
	},
	{
		"id": 652393,
		"nombre": "Moosewood Lentil Soup",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Moosewood Lentil Soup is a gluten free and vegan main course. One serving contains 423 calories, 27g of protein, and 4g of fat. For $1.2 per serving, this recipe covers 38% of your daily requirements of vitamins and minerals. This recipe from Foodista has 2 fans. It is perfect for Autumn. Head to the store and pick up pepper, tomatoes, celery, and a few other things to make it today. To use up the salt you could follow this main course with the Apple Turnovers Recipe as a dessert. From preparation to the plate, this recipe takes around 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 94%. This score is spectacular. Similar recipes include Moosewood Mushroom Barley Soup!, Hungarian Mushroom Soup, from the Moosewood Cookbook, and Moosewood Restaurant Almost Fat-Free Cornbread.",
		"puntajeDeSalud": 100,
		"pasoApaso": "Place lentils and water in a soup pot or Dutch oven.Bring to a boil, lower heat to a simmer, and let cook until lentils are mushy (about 45 minutes). \nAdd more water as needed, until the soup is your favorite consistency. \nHeat oil or melt butter in a medium-sized skillet. \nAdd onion, celery, and carrots, and saut over medium heat for about 10 minutes. \nAdd garlic, salt, pepper, and herbs of your choice, and saut about 5 minutes longer. \nTransfer to lentils.Stir in wine, if desired, lemon juice and molasses or brown sugar.Taste to correct seasonings, then simmer for \nAt least 15 minutes longer. \nServe hot, with a little vinegar drizzled onto each serving, and a sprinkling of minced \nScallions or parsley on top, if desired.",
		"imagen": "https://spoonacular.com/recipeImages/652393-312x231.jpg"
	},
	{
		"id": 640117,
		"nombre": "Corn-Crusted Fish Tacos With Jalapeno-Lime Sauce and Spicy Black Beans",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "pescatarian"
			}
		],
		"resumenDelPlato": "You can never have too many main course recipes, so give Corn-Crusted Fish Tacos With Jalapeno-Lime Sauce and Spicy Black Beans a try. This recipe makes 4 servings with 1112 calories, 57g of protein, and 54g of fat each. For $4.9 per serving, this recipe covers 50% of your daily requirements of vitamins and minerals. 11 person have made this recipe and would make it again. It is a good option if you're following a gluten free and pescatarian diet. A mixture of mayo, tomatoes, cilantro, and a handful of other ingredients are all it takes to make this recipe so flavorful. To use up the olive oil you could follow this main course with the Sauteed Banana, Granolan and Yogurt Parfait as a dessert. This recipe is typical of Mexican cuisine. From preparation to the plate, this recipe takes around 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 94%. This score is super. Similar recipes include Corn-Crusted Fish Tacos with Jalapeno-Lime Sauce and Spicy Black Beans, Corn-crusted Fish Tacos With Jalapeno-lime Sauce And Spicy Blac, and Fish Tacos with Jalapeno Lime Sauce.",
		"puntajeDeSalud": 72,
		"pasoApaso": "Mix the mayo, lime juice and chopped jalapeno in a small bowl. Salt and pepper to taste, then put in the fridge.Chop all veggies and set aside. \nAdd 1 tablespoon of oil to a small pan over medium-high heat. \nAdd the green onions and allow them to saute for 1-2 minutes. \nPour both cans of drained beans into the pan. Bring to a simmer and add the cumin, cayenne and  tsp. of salt. Squeeze a couple of lime wedges into the beans. Cook for 5 minutes longer. Cover and set aside. Top the beans with cheese when you are ready to serve them. \nHeat a large skillet to high heat. \nCut the fish into 1 x 3 inch strips. \nDrizzle oil on the fish, then salt and pepper both sides. \nPour the cornmeal into a pie pan. \nRoll the fish strips in cornmeal, shaking off the excess. \nAdd 2 tablespoons of oil to pan. When it is hot, cook half the fish strips 1-2 minutes per side, until opaque and flaky. The cooking time will depend on the thickness of the fish. \nRemove the fish from the pan and place on a paper towel-lined plate. Repeat.Warm the tortillas in the microwave. Divide the fish between 8 tortillas. (You can double up the tortillas so they wont break!) Then top each with cabbage, tomatoes, cilantro and jalapeno-lime sauce. \nServe with lime wedges and hot sauce, black beans on the side.",
		"imagen": "https://spoonacular.com/recipeImages/640117-312x231.jpg"
	},
	{
		"id": 644826,
		"nombre": "Gluten Free Dairy Free Sugar Free Chinese Chicken Salad",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			}
		],
		"resumenDelPlato": "The recipe Gluten Free Dairy Free Sugar Free Chinese Chicken Salad could satisfy your Chinese craving in around 45 minutes. One serving contains 351 calories, 31g of protein, and 15g of fat. For $3.06 per serving, this recipe covers 32% of your daily requirements of vitamins and minerals. It works well as a pretty expensive main course. A mixture of extra virgin olive oil, xylitol, juice of 1 mandarin (cut crosswise then tablespoon into jar over a strainer), and a handful of other ingredients are all it takes to make this recipe so flavorful. To use up the white sesame seeds you could follow this main course with the Sesame Banana Bread as a dessert. It is a good option if you're following a gluten free and dairy free diet. 1 person were impressed by this recipe. All things considered, we decided this recipe deserves a spoonacular score of 93%. This score is outstanding. Try Thousand Island Dressing (Gluten-Free, Corn-Free, Dairy-Free, Soy-Free, Nut-Free, Gum-Free and Refined Sugar-Free), Everything-Free Cookies (dairy-free, gluten-free, egg-free, nut-free, & sugar-free), and Gluten-Free Vegan Walnut and Oat Brownies (Vegan, Gluten-Free, Grain-Free, Flourless, Dairy-Free, No Refined Sugar) for similar recipes.",
		"puntajeDeSalud": 99,
		"pasoApaso": "For the salad:Finely slice the red, and green cabbage. \nRemove ends and finely slice romaine lettuce.Trim ends of scallions (white and green side) and finely slice.Peel and grate carrots, or put into a mini food processor to finely chop.Peel clementines then remove pith from slices.",
		"imagen": "https://spoonacular.com/recipeImages/644826-312x231.jpg"
	},
	{
		"id": 642085,
		"nombre": "Easy Roasted Vegetables",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "whole 30"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Easy Roasted Vegetables is a gluten free, dairy free, lacto ovo vegetarian, and whole 30 recipe with 4 servings. One serving contains 297 calories, 11g of protein, and 4g of fat. For $1.28 per serving, this recipe covers 33% of your daily requirements of vitamins and minerals. This recipe is liked by 2 foodies and cooks. Not a lot of people really liked this side dish. If you have butternut squash, salt & pepper, paprika, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. From preparation to the plate, this recipe takes about about 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 95%. This score is spectacular. If you like this recipe, take a look at these similar recipes: Easy Roasted Vegetables, Easy Roasted Summer Vegetables, and Easy Herb-Roasted Chicken & Vegetables.",
		"puntajeDeSalud": 100,
		"pasoApaso": "Preheat oven to 200 degrees Celsius (fan: 180 degrees Celsius) \nPeel and cut the vegetables into bite size pieces (the potatoes dont necessarily need to be peeled). \nMix the olive oil, paprika, dried basil, salt and pepper in a large bowl before adding the vegetables. \nMix everything together well. \nPlace the vegetables on a large baking tray/baking dish. Make sure they are spread out evenly. Aim for single layer. \nCook the vegetables in the oven for about 30 minutes. They should be tender but still have a slight bite to them.",
		"imagen": "https://spoonacular.com/recipeImages/642085-312x231.jpg"
	},
	{
		"id": 662968,
		"nombre": "Tempered Spicy Potatoes",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "whole 30"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Need a gluten free, whole 30, and vegan side dish? Tempered Spicy Potatoes could be an outstanding recipe to try. This recipe makes 4 servings with 132 calories, 5g of protein, and 1g of fat each. For $1.79 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals. A mixture of salt, curry leaves, chilli flakes, and a handful of other ingredients are all it takes to make this recipe so tasty. 3 people have made this recipe and would make it again. From preparation to the plate, this recipe takes roughly 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 82%. This score is super. Try Butter Dal Fry - Tempered Yellow Lentils, Spicy potatoes, and Spicy Potatoes for similar recipes.",
		"puntajeDeSalud": 94,
		"pasoApaso": "Cut the par boiled potatoes into wedges \nHeat  oil in a pan for deep frying and fry the potatoes until its slightly golden brown. Keep the fried potatoes aside. \nKeep a frying pan on medium heat ( I used a non stick pan )and add 1 1/2  tbsp of oil \nAdd the mustard seeds , cinnamon stick and curry leaves. \nLet the mustard seeds pop. \nNext add the sliced onions and cook for 1 minute . \nAdd the potatoes, turmeric and salt . \nStir fry the potatoes for 5 minutes on low heat  until the onions are  slightly golden brown. \nLastly add the red chilli flakes cook for a  minute . \nServe warm with rice/ roti/ bread",
		"imagen": "https://spoonacular.com/recipeImages/662968-312x231.jpg"
	},
	{
		"id": 659109,
		"nombre": "Salmon Quinoa Risotto",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "pescatarian"
			}
		],
		"resumenDelPlato": "Salmon Quinoa Risotto is a gluten free, dairy free, and pescatarian recipe with 4 servings. One portion of this dish contains approximately 26g of protein, 19g of fat, and a total of 439 calories. For $3.55 per serving, this recipe covers 42% of your daily requirements of vitamins and minerals. This recipe from Foodista requires quinoa, onion, vegetable stock, and garlic cloves. 3 people found this recipe to be tasty and satisfying. From preparation to the plate, this recipe takes about about 45 minutes. Not a lot of people really liked this Mediterranean dish. It works well as a main course. Taking all factors into account, this recipe earns a spoonacular score of 95%, which is spectacular. Try Quinoa Risotto With Salmon And Kale, Quinoa Risotto, and Quinoa Risotto for similar recipes.",
		"puntajeDeSalud": 100,
		"pasoApaso": "In a 4 quart saucepan, heat 2 tablespoons of olive oil over medium high heat. \nWhen oil is shimmering, add diced onion. \nSaute onion until transparent. \nAdd quinoa to onion mixture and stir, to toast quinoa, for 2 minutes. \nAdd 1 cup of vegetable stock to quinoa and onions. \nStir until stock is absorbed.  Once stock is absorbed, add 1 cup of stock. \nContinue stirring until stock is absorbed. \nAdd remaining stock in 1/2 cup intervals, stirring until all stock is absorbed. \nRemove from heat. \nWhile preparing the onion quinoa mixture, heat 1 tablespoon of oil in a saute pan with chopped garlic (over medium high heat). \nOnce garlic is sizzling, add chopped kale to the pan. \nTurn kale to coat with oil and garlic. \nTurn kale mixture until fragrant (approximately 2 minutes). \nRemove kale mixture from heat. \nOnce quinoa is complete, add kale and salmon. \nStir to combine. \nAdd salt and pepper to taste.",
		"imagen": "https://spoonacular.com/recipeImages/659109-312x231.jpg"
	},
	{
		"id": 646738,
		"nombre": "Herbivoracious' White Bean and Kale Soup",
		"dieta": [
			{
				"nombre": "gluten free"
			}
		],
		"resumenDelPlato": "Herbivoracious' White Bean and Kale Soup could be just the gluten free recipe you've been looking for. For 50 cents per serving, you get a soup that serves 6. One serving contains 195 calories, 7g of protein, and 10g of fat. 10 people have made this recipe and would make it again. It can be enjoyed any time, but it is especially good for Autumn. Head to the store and pick up rosemary leaves, bay leaves, carrot, and a few other things to make it today. From preparation to the plate, this recipe takes roughly roughly 45 minutes. It is brought to you by Foodista. With a spoonacular score of 95%, this dish is excellent. White Bean Kale Soup, White Bean and Kale Soup, and White Bean And Kale Soup are very similar to this recipe.",
		"puntajeDeSalud": 72,
		"pasoApaso": "PRESSURE COOKER METHOD \nIn the pressure cooker base, but without pressure, heat the olive oil over medium-high heat. Saut the onion, garlic, carrot, and 1 teaspoon salt until the onion is translucent, about 4 minutes. \nAdd the bay leaves, rosemary, and your choice(s) of the Parmesan rind, dried porcini, or broth powder. \nAdd the dry beans and water. Bring up to high pressure and cook for 40 minutes, then allow the pressure to release naturally. Open the lid. \nRemove the bay leaves and Parmesan rind, if using. \nAdd the kale and lemon juice and simmer for 10 minutes, until the kale is tender. Taste and adjust the seasoning, then serve, garnished with a generous drizzle of extra-virgin olive oil. \nSTOVETOP METHOD \nCover the beans with several inches of water and soak overnight. \nDrain the beans and place in a large saucepan. Cover with water by at least 2 inches and bring to a boil. Reduce the heat and simmer the beans until tender, about 1 1/2 to 2 hours. \nDrain the beans, reserving the bean broth. \nIn a large saucepan, heat the olive oil over medium-high heat. Saut the onion, garlic, carrot, and 1 teaspoon salt until the onion is translucent, about 4 minutes. \nAdd 4 cups of the bean broth, the bay leaves, rosemary, and your choice of the Parmesan rind, dried porcini, or broth powder. Bring to a simmer and cook for 30 minutes. \nRemove the bay leaves and Parmesan rind, if using. \nAdd the beans, kale, and lemon juice and simmer for 10 minutes, until the kale is tender. Taste and adjust the seasoning, then serve, garnished with a generous drizzle of extra-virgin olive oil.",
		"imagen": "https://spoonacular.com/recipeImages/646738-312x231.jpg"
	},
	{
		"id": 633221,
		"nombre": "Baby Beet Salad",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "paleolithic"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "primal"
			},
			{
				"nombre": "whole 30"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "Baby Beet Salad might be just the side dish you are searching for. One serving contains 133 calories, 3g of protein, and 7g of fat. This caveman, gluten free, primal, and whole 30 recipe serves 6 and costs 62 cents per serving. 10 people were impressed by this recipe. From preparation to the plate, this recipe takes about 45 minutes. If you have salt, red-wine vinegar, olive oil, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe deserves a spoonacular score of 75%. This score is pretty good. Try Roasted Baby Beet Salad, Baby Spinach And Roasted Beet Salad, and Baby Beet Salad With Feta, Walnuts & Arugula for similar recipes.",
		"puntajeDeSalud": 63,
		"pasoApaso": "Scrub the beets well. Wrap groups of 2 or 3 beets together in little packets of aluminum foil. \nPlace the packets on a baking sheet and bake at 350 degrees until very tender, about 1 hour.When the beets are cool enough to handle, slip off and discard the skins (using rubber gloves). Halve beets lengthwise and place in a bowl. \nWhisk together the oil, vinegar, salt and pepper; toss with the beets. \nSprinkle with the mint leaves.",
		"imagen": "https://spoonacular.com/recipeImages/633221-312x231.jpg"
	},
	{
		"id": 659135,
		"nombre": "Salmon with roasted vegetables",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "whole 30"
			},
			{
				"nombre": "pescatarian"
			}
		],
		"resumenDelPlato": "Salmon with roasted vegetables is a main course that serves 2. One portion of this dish contains around 39g of protein, 18g of fat, and a total of 473 calories. For $5.16 per serving, this recipe covers 46% of your daily requirements of vitamins and minerals. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately approximately 45 minutes. Only a few people made this recipe, and 7 would say it hit the spot. It is a good option if you're following a gluten free, dairy free, whole 30, and pescatarian diet. A mixture of rosemary and thyme, onion, lemon juice, and a handful of other ingredients are all it takes to make this recipe so scrumptious. With a spoonacular score of 95%, this dish is tremendous. If you like this recipe, take a look at these similar recipes: Roasted Salmon & Vegetables, Salmon With Roasted Vegetables, and Roasted Salmon and Vegetables.",
		"puntajeDeSalud": 100,
		"pasoApaso": "Season the salmon fillets with some salt, pepper and a pinch of paprika and keep aside. \nPreheat the oven to 200 C.  Roughly dice the potatoes, parsnips and carrots and add to a roasting tray. \nDrizzle over the olive oil and season with salt and pepper. \nMix well and roast for 15 minutes. \nAdd in the onion and roast for a further 10-15 minutes \nPlace the salmon fillets and tomatoes between the veg. \nDrizzle the lemon juice and sprinkle over the rosemary and thyme. Season lightly with salt and pepper and roast for 10-15 minutes or until the salmon and veg is cooked through. \nServe with some green salad.",
		"imagen": "https://spoonacular.com/recipeImages/659135-312x231.jpg"
	},
	{
		"id": 647016,
		"nombre": "HomeMade Hashbrowns with Spinach and Carrots",
		"dieta": [
			{
				"nombre": "gluten free"
			},
			{
				"nombre": "dairy free"
			},
			{
				"nombre": "lacto ovo vegetarian"
			},
			{
				"nombre": "vegan"
			}
		],
		"resumenDelPlato": "You can never have too many side dish recipes, so give HomeMade Hashbrowns with Spinach and Carrots a try. This recipe serves 3 and costs 42 cents per serving. Watching your figure? This gluten free and vegan recipe has 153 calories, 6g of protein, and 0g of fat per serving. Only a few people made this recipe, and 1 would say it hit the spot. If you have salt, chilli powder, cornflour, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes about 35 minutes. All things considered, we decided this recipe deserves a spoonacular score of 93%. This score is awesome. Try Hashbrowns, Spinach and Tomato Pie, Cheesy Spinach and Egg Hashbrowns Skillet, and Carrots, Artichokes Hearts And Spinach for similar recipes.",
		"puntajeDeSalud": 87,
		"pasoApaso": "In a bowl mix grated potatoes, spinach, onion, carrot \nAdd 1/2 tsp salt and mix well \nSqueeze the veggie mixture to remove all the moisture out \nAdd red chilli powder and corn starch \nAdjust salt by tasting the mixture \nForm the mixture into patties \nHeat oil in a pan for shallow frying \nPut the patties gently in the hot pan \nLet them brown on medium high heat for few minutes from both the sides then lower the \nheat to medium.Cook till done.",
		"imagen": "https://spoonacular.com/recipeImages/647016-312x231.jpg"
	},
]
const datosApi = async () => {
  try {
    // const limite = 100;
    // const promesas = await axios(
    //   `https://api.spoonacular.com/recipes/complexSearch?apiKey=e831cf2d8b764526ad1e90ac6fe10893&addRecipeInformation=true&number=${limite}`
    // );
    // const datosObtenidos = await promesas.data.results.map((elemento) => {
    //   return {
    //     id: elemento.id,
    //     nombre: elemento.title,
    //     dieta: elemento.diets.map((ele) => {
    //       return {
    //         nombre: ele
    //       };
    //     }),
    //     resumenDelPlato: elemento.summary.replace(/(<([^>]+)>)/gi, ""),
    //     puntajeDeSalud: elemento.healthScore,
    //     pasoApaso:
    //       elemento.analyzedInstructions[0] &&
    //       elemento.analyzedInstructions[0].steps
    //         ? elemento.analyzedInstructions[0].steps
    //             .map((s) => s.step)
    //             .join(" \n")
    //         : "",
    //     imagen: elemento.image,
    //   };
    // });
    // console.log("ACA ESTAN LOS DATOS OBTENIDOS ", datosObtenidos.length)
    // return datosObtenidos;
     return datosOficiales;
  } catch (error) {
    console.log("ACA HAY UN ERROR EN LA LLAMADA A LA API ", error);
  }
};

const datosDeLaDB = async () => {
  try {
    const foo = await Receta.findAll({
      include: [
        {
          model: Dieta,
          attributes: ["nombre"],
          through: { attributes: [] },
        },
      ],
    });

    console.log("ACA ESTA RESULTADOS ", foo);
    return foo;
  } catch (error) {
    console.log("ESTO ES UN ERROR EN LA LLAMADA A LA BASE DE DATOS ", error);
  }
};

const llamadaTotalDeRecetas = async () => {
  try {
    const datosDeLaApi = await datosApi();
    const datosDelaBase = await datosDeLaDB();
    const datosTotales = [...datosDeLaApi, ...datosDelaBase];
    return datosTotales;
  } catch (error) {
    console.log("ACA ESTA EL ERROR A LA LLAMADA DE AMBAS RECURSOS ", error);
  }
};

const datosIdDeLaApi = async (id) => {
  try {
    const todasLasRecetas = await llamadaTotalDeRecetas();
    const buscarPorId = todasLasRecetas.find((elemento) => elemento.id == id);
    return buscarPorId;
  } catch (error) {
    console.log("ACA ESTA EL ERROR EN LA LLAMADA A LA API POR ID ", error);
  }
};

module.exports = {
  datosApi,
  llamadaTotalDeRecetas,
  datosIdDeLaApi,
};

// state = [1,2,3]

//state1 [1,2]

// state

//...state
