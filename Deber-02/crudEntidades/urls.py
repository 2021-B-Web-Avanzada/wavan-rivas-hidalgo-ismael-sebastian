from django.urls import path
from .views import genero_api_view, genero_detail_view, pelicula_api_view, pelicula_detail_view

urlpatterns = [
    path('genero/', genero_api_view, name='genero_list'),
    path('genero/<int:pk>/', genero_detail_view, name='genero_detail'),
    path('pelicula/', pelicula_api_view, name='pelicula_list'),
    path('pelicula/<int:pk>/', pelicula_detail_view, name='pelicula_detail'),
]
