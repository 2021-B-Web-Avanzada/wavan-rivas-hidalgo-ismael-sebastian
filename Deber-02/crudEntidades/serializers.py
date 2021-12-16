from rest_framework import serializers
from .models import Genero, Pelicula


class GeneroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genero
        fields = '__all__'

class PeliculaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pelicula
        fields = '__all__'
