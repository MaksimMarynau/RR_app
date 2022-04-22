from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


from .views import create_user_view, manage_user_view, MyTokenObtainPairView


app_name = 'account'


urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('login/', MyTokenObtainPairView.as_view(), name='login'),
    path('create/', create_user_view, name='create'),
    path('me/', manage_user_view, name='me'),

]