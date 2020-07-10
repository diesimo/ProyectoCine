from rest_framework import serializers,fields
from .models import Usuario, Pelicula,Categoria,Formatos,Sede,Funcion,Sala,Provedor,Producto,Bebida,Comida,Factura,Facturaboleto,Detallado

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model=Usuario
        fields='__all__'
        

class PeliculaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Pelicula
        fields='__all__'

class SedeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Sede
        fields='__all__'

class FuncionSerializer(serializers.ModelSerializer):
    class Meta:
        model=Funcion
        fields='__all__'

class SalaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Sala
        fields='__all__'

class ProveedorSerializer(serializers.ModelSerializer):
    class Meta:
        model=Provedor
        fields='__all__'

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Producto
        fields=('idprod','tipo','preciobruto','iva','nombrepro','idprove','vista')

class BebidaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Bebida
        fields='__all__'

class ComidaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Comida
        fields='__all__'

class FacturaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Factura
        fields='__all__'

class CustomMultipleChoiceField(fields.MultipleChoiceField):
    def to_representation(self, value):
        return list(super().to_representation(value))


class PruebaSerializer(serializers.ModelSerializer):
    class Meta:
        model=Pelicula
        fields=('idpelicula','titulo','horas','minutos','sinopsis','idioma','subtitulos','clase','namedire','apelldire','raking','imagen','vista','formatos','categoria')
    
    categoria=fields.MultipleChoiceField(choices=Categoria)
    formatos=fields.MultipleChoiceField(choices=Formatos)


class UpdateVista(serializers.ModelSerializer):
    class Meta:
        model=Pelicula
        fields=('idpelicula','subtitulos','vista')

class editProveSerializer(serializers.ModelSerializer):
    class Meta:
        model=Provedor
        fields=("idprove",'nombre','direc','rif')

class AgregarFunSerializer(serializers.ModelSerializer):
    class Meta:
        model=Funcion
        fields=('idfuncion','idpelicula','precioboleto','horario','cantbutacas','fecha','idsala')

class UpdateVistaProSerializer(serializers.ModelSerializer):
    class Meta:
        model=Producto
        fields=('idprod','vista')