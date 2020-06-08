from rest_framework import serializers
from .models import Usuario, Pelicula

class UsuarioSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Usuario
        fields='__all__'

class PeliculaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Pelicula
        fields='__all__'