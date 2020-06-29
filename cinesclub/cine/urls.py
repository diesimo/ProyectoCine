from django.urls import include,path
from rest_framework import routers
from .views import UsuarioViewSet,PeliculaViewSet,Comedia,Diego2,Aventura,UsuarioContra



router=routers.DefaultRouter()
router.register('usuarios', UsuarioViewSet)
router.register('peliculas', PeliculaViewSet)



urlpatterns=[

    path('', include(router.urls)),
    path('Comedia/',Comedia, name="apa"),
    path('Aventura/',Aventura, name="apa"),
    path('UsuarioContra/',UsuarioContra, name="apa"),
    path('Diego2/',Diego2, name="apa")
    
] 