from django.shortcuts import render
from  rest_framework import viewsets
from .serializers import UsuarioSerializer, PeliculaSerializer
from . models import Usuario,Pelicula


class UsuarioViewSet(viewsets.ModelViewSet):
    queryset=Usuario.objects.all()
    serializer_class=UsuarioSerializer

class PeliculaViewSet(viewsets.ModelViewSet):
    queryset=Pelicula.objects.all()
    serializer_class=PeliculaSerializer