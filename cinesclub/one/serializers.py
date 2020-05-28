from rest_framework import serializers
from .models import Cliente


class CLienteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta: 
        model=Cliente
        fields='__all__'