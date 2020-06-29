from rest_framework import serializers
from .models import Usuario, Pelicula

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model=Usuario
        fields='__all__'

class PeliculaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Pelicula
        fields='__all__'


class DiegoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Usuario
        fields='__all__'
