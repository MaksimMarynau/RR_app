from django.urls import path
from recipe.views import (category_create_api_view, random_api_view,
                          random_private_api_view, recipe_create_api_view,
                          recipe_detail_api_view, recipe_list_api_view,
                          category_list_api_view, recipe_private_list_api_view)

app_name = "recipe"


urlpatterns = [
    path("list/", recipe_list_api_view, name="recipe-list"),
    path("list_own/", recipe_private_list_api_view, name="recipe-list-private"),
    path("<int:id>/", recipe_detail_api_view, name="recipe-detail"),
    path("create/", recipe_create_api_view, name="recipe-create"),
    path("create_category/", category_create_api_view, name="category-create"),
    path("list_category/", category_list_api_view, name="category-list"),
    path("random/", random_api_view, name="recipe-random"),
    path("random_own/", random_private_api_view, name="recipe-random-private"),
]
