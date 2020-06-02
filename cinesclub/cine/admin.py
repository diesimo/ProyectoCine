from django.contrib import admin
from .models import Usuario
from .models import Pelicula
from .models import Producto
from .models import Proveedor
from .models import Factura

admin.site.register(Usuario)
admin.site.register(Pelicula)
admin.site.register(Producto)
admin.site.register(Proveedor)
admin.site.register(Factura)


# Register your models here.
