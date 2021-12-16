from rest_framework.views import APIView
from .serializers import GeneroSerializer, PeliculaSerializer
from .models import Genero, Pelicula
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET', 'POST'])
def genero_api_view(request):
    if request.method == 'GET':
        lista_generos = Genero.objects.all()
        generos_serializer = GeneroSerializer(lista_generos, many=True)
        return Response(generos_serializer.data)

    elif request.method == 'POST':
        genero_serializer = GeneroSerializer(data=request.data)
        if genero_serializer.is_valid():
            genero_serializer.save()
            return Response(genero_serializer.data)
        return Response(genero_serializer.errors)


@api_view(['GET', 'PUT', 'DELETE'])
def genero_detail_view(request, pk=None):
    genero = Genero.objects.filter(id=pk).first()

    if genero:
        if request.method == 'GET':
            genero_serializer = GeneroSerializer(genero)
            return Response(genero_serializer.data)

        elif request.method == 'PUT':
            genero_serializer = GeneroSerializer(genero, data=request.data)
            if genero_serializer.is_valid():
                genero_serializer.save()
                return Response(genero_serializer.data)
            return Response(genero_serializer.errors)

        elif request.method == 'DELETE':
            genero.delete()
            return Response('Genero Eliminado')

    return Response({'message:' 'No se ha encontrado el género con ese identificador'})

######### Pelicula

@api_view(['GET', 'POST'])
def pelicula_api_view(request):
    if request.method == 'GET':
        lista_peliculas = Pelicula.objects.all()
        peliculas_serializer = PeliculaSerializer(lista_peliculas, many=True)
        return Response(peliculas_serializer.data)

    elif request.method == 'POST':
        pelicula_serializer = PeliculaSerializer(data=request.data)
        if pelicula_serializer.is_valid():
            pelicula_serializer.save()
            return Response(pelicula_serializer.data)
        return Response(pelicula_serializer.errors)

@api_view(['GET', 'PUT', 'DELETE'])
def pelicula_detail_view(request, pk=None):
    pelicula = Pelicula.objects.filter(id=pk).first()

    if pelicula:
        if request.method == 'GET':
            pelicula_serializer = PeliculaSerializer(pelicula)
            return Response(pelicula_serializer.data)

        elif request.method == 'PUT':
            pelicula_serializer = PeliculaSerializer(pelicula, data=request.data)
            if pelicula_serializer.is_valid():
                pelicula_serializer.save()
                return Response(pelicula_serializer.data)
            return Response(pelicula_serializer.errors)

        elif request.method == 'DELETE':
            pelicula.delete()
            return Response('Película Eliminada')

    return Response({'message:' 'No se ha encontrado la película con ese identificador'})
