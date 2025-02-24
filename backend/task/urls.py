from rest_framework_simplejwt.views import (
    # TokenObtainPairView, 
    TokenRefreshView,
)

from django.urls import path
from .views import get_tasks, CustomTokenObtainPairView, CustomRefreshTokeView, logout, is_authenticated, register
urlpatterns = [
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', CustomRefreshTokeView.as_view(), name='token_refresh'),
    path('tasks/', get_tasks),
    path('logout/', logout),
    path('authenticated/', is_authenticated),
    path('register/', register)
]