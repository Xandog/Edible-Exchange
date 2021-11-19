class RecipesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    wrap_parameters false
    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]

  # GET /recipe
  def index
    recipes = Recipe.all
    render json: recipes
  end

  # POST /recipe
  def create
    recipe = Recipe.create!(recipe_params)
    render json: recipe, status: :created
  end

  # GET /recipe/:id
  def show
    recipe = find_recipe
    render json: recipe
  end

  # PATCH /recipe/:id
  def update
    recipe = find_recipe
    recipe.update(recipe_params)
    render json: recipe
  end

  # PATCH /recipe/:id/like
#   def increment_likes
#     recipe = find_recipe
#     recipe.update(likes: recipe.likes + 1)
#     render json: recipe
#   end

  # DELETE /recipe/:id
  def destroy
    recipe = find_recipe
    recipe.destroy
    head :no_content
  end

  private

  def find_recipe
    Recipe.find(params[:id])
  end

  def recipe_params
    params.permit(:name, :image, :description, :cuisine, :user_id)
  end

  def render_not_found_response
    render json: { error: "recipe not found" }, status: :not_found
  end

  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors }, status: :unprocessable_entity
end

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end
end
