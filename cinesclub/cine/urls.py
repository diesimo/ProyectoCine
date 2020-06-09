from django.urls import include,path
from rest_framework import routers
from .import views



router=routers.DefaultRouter()
router.register('usuarios', views.UsuarioViewSet)
router.register('pelicula', views.PeliculaViewSet)

urlpatterns=[

    path('', include(router.urls)),
] 