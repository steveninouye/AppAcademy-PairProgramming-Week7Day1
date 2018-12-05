# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Step.destroy_all
Todo.destroy_all

todos = []
10.times do
  todos << Todo.create(title: Faker::HowIMetYourMother.catch_phrase,body: Faker::ChuckNorris.fact, done: [false, true].sample)
end

todos.each do |todo|
  (1..4).to_a.sample.times do
    Step.create(todo_id: todo.id, title: Faker::Movie.quote,  done:[false, true].sample)
  end
end
