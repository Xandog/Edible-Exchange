class Recipe < ApplicationRecord
    belongs_to :user

    validates :name, presence: true
    validates :image, presence: true
    validates :description, presence: true
    validates :description, length: {in: 1..500}
    validates :cuisine, presence: true
end
