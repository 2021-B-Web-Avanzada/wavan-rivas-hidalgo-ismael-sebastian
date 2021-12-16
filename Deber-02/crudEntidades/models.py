from django.db import models


class Genero(models.Model):
    nombre_genero = models.CharField(max_length=50)
    num_subgeneros = models.IntegerField()
    genero_activo = models.BooleanField()
    genero_ganancias = models.FloatField()


class Pelicula(models.Model):
    nombre_pelicula = models.CharField(max_length=50)
    pelicula_ganancias = models.FloatField()
    pelicula_en_cartelera = models.BooleanField()
    pelicula_director = models.CharField(max_length=50)
    genero = models.ForeignKey("Genero", on_delete=models.CASCADE)
