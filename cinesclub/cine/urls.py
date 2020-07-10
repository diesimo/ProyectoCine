from django.urls import include,path
from rest_framework import routers
from .views import UsuarioViewSet,PeliculaViewSet,ProveedorViewSet,Comedia,Diego2,Aventura,UsuarioContra,UpdateVistasProView
from .views import PostView,VistaPeli,UpdateVistas,SedeViewSet,FuncionViewSet,SalaViewSet,getProveEdit,ProductoViewSet,BebidaViewSet,ComidaViewSet
from .views import getFuncionPel,getFuncionFac,FacturaViewSet,FechaUsuarios


router=routers.DefaultRouter()
router.register('usuarios', UsuarioViewSet)
router.register('peliculas', PeliculaViewSet)
router.register('sede',SedeViewSet)
router.register('funcion',FuncionViewSet)
router.register('sala',SalaViewSet)
router.register('proveedor',ProveedorViewSet)
router.register('producto',ProductoViewSet)
router.register('comida',ComidaViewSet)
router.register('bebida',BebidaViewSet)
router.register('factura',FacturaViewSet)
urlpatterns=[

    path('', include(router.urls)),
    path('Comedia/',Comedia, name="apa"),
    path('Aventura/',Aventura, name="apa"),
    path('UsuarioContra/<str:identi>/<str:passw>/',UsuarioContra, name="apa"),
    path('Diego2/<int:monto>/<int:iduser>/',Diego2, name="apa"),
   
    path('list2/',PostView.as_view(), name="pelicula_list"),
    path('VistaPeli/',VistaPeli, name="vistaPeli"),
    path('UpdateVistas/<int:idpelicula>/',UpdateVistas, name="updateVistas"),
    path('getProveEdit/<int:idprove>/',getProveEdit, name="getProveEdit"),
    path('getFuncionPel/<int:idpelicula>/',getFuncionPel, name="getFuncionPel"),
    path('getFuncionFac/<int:idfuncion>/',getFuncionFac,name='getFuncionFac'),
    path('UpdateVistaProd/<int:idprod>/',UpdateVistasProView,name='UpdateVistaProd'),
    path('FechaUsuarios/<int:monto>/<int:iduser>/',FechaUsuarios, name="apa"),
] 