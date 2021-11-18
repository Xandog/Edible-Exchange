class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :cuisine, :user_id
end
