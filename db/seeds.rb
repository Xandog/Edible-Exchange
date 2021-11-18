# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Bubbagump", password: "shrimp", password_confirmation: "shrimp")
User.create(username: "its_coming_home", password: "GodSaveTheQueen", password_confirmation: "GodSaveTheQueen")
User.create(username: "El Jefe", password: "modeloTime", password_confirmation: "modeloTime")
User.create(username: "Mr.Lee", password: "123", password_confirmation: "123")
User.create(username: "GalaxyBaby", password: "456", password_confirmation: "456")
User.create(username: "Beansprout", password: "789", password_confirmation: "789")
User.create(username: "Big_Tony", password: "soprano", password_confirmation: "soprano")

Recipe.create(name: "Biscuits n' Gravy", image: "https://www.tasteandtellblog.com/wp-content/uploads/2020/04/Biscuits-Sausage-Gravy-1.jpg", description: "A hearty southern American meal!", cuisine:"American" , user_id: 1)
Recipe.create(name: "Beans on Toast", image: "https://static.wikia.nocookie.net/recipes/images/c/ce/IMG_7241_heinz_beans_on_toast.jpg/revision/latest?cb=20090416202838", description: "No better way to start the morning than with beans and toast, and that's on the Queen", cuisine: "British", user_id: 2)
Recipe.create(name: "Tacos al Pastor", image: "https://hilahcooking.com/wp-content/uploads/2010/06/tacos-al-pastor.jpg", description: "This street-style recipe hits the spot after a hard days work. Make sure to pair with a cold beer!", cuisine: "Mexican", user_id: 3)
Recipe.create(name: "Spicy Szechuan Beef", image: "https://static.onecms.io/wp-content/uploads/sites/19/2019/06/18/szechuanbeef-2000.jpg", description: "A super flavorful and spicy dish that'll leave you coming back for more!", cuisine: "Chinese", user_id: 4)
Recipe.create(name: "Tonkotsu Ramen", image:"https://i1.wp.com/seonkyounglongest.com/wp-content/uploads/2020/09/Easy-Tonkotsu-26-mini.jpg?fit=1000%2C667&ssl=1" , description: "This iconic soup is packed with umami flavor and is perfect for a chilly day!", cuisine: "Japanese", user_id: 5)
Recipe.create(name: "Grilled Pork Banh Mi", image:"https://data.thefeedfeed.com/recommended/post_2416586.jpg" , description: "One the best sandwiches in existence, this work of art will quickly become one of your favorite comfort foods!", cuisine: "Vietnamese", user_id: 6)
Recipe.create(name: "Baked Ziti", image: "https://www.wholesomeyum.com/wp-content/uploads/2020/12/wholesomeyum-keto-cauliflower-baked-ziti-recipe-25.jpg", description: "This recipe will keep you and the whole family happy and satisfied.", cuisine: "Italian", user_id: 6)