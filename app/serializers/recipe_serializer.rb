class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :cuisine, :user_id

  belongs_to :user
end
