class UserDetailSerializer < UserSerializer
  has_many :recipes
end
