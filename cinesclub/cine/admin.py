from django.contrib import admin
from .models import Usuario,Trabajador,Factura,Facturaboleto
from .models import Pelicula,Sala,Funcion,Sede,Stock
from .models import Producto,Provedor,Detallado,Bebida,Comida


admin.site.register(Usuario)
admin.site.register(Pelicula)
admin.site.register(Sala)
admin.site.register(Funcion)
admin.site.register(Sede)
admin.site.register(Stock)
admin.site.register(Trabajador)
admin.site.register(Factura)
admin.site.register(Facturaboleto)
admin.site.register(Producto)
admin.site.register(Provedor)
admin.site.register(Detallado)
admin.site.register(Bebida)
admin.site.register(Comida)

# Register your models here.
