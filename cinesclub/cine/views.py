from django.shortcuts import render
from  rest_framework import viewsets
from .serializers import UsuarioSerializer, PeliculaSerializer, DiegoSerializer
from . models import Usuario,Pelicula
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response


class UsuarioViewSet(viewsets.ModelViewSet):
    queryset=Usuario.objects.all()
    serializer_class=UsuarioSerializer

    
class PeliculaViewSet(viewsets.ModelViewSet):
    queryset=Pelicula.objects.all()
    serializer_class=PeliculaSerializer

#QUERYS-----------------------------------------------------------------------

#Comedia
@api_view(['GET'])
def Comedia (request):
   pelicula=Pelicula.objects.values('idpelicula','categoria','titulo','duracion','sinopsis','idioma','subtitulos','clase','namedire','apelldire','raking','categoria','imagen')
   

   categoria=[]
   for x in pelicula:
       categoria.append(x['categoria'])
    
   aux=[]
   for w in range(len(categoria)):
       for z in range(len(categoria[w])):
           if((categoria[w][z]=="Comedia") ):
               aux.append(pelicula[w])

    
   
   serealizer=PeliculaSerializer(aux,many=True)
   return Response(aux)

#Aventura

@api_view(['GET'])
def Aventura (request):
   pelicula=Pelicula.objects.values('idpelicula','categoria','titulo','duracion','sinopsis','idioma','subtitulos','clase','namedire','apelldire','raking','categoria','imagen')
   

   categoria=[]
   for x in pelicula:
       categoria.append(x['categoria'])
    
   aux=[]
   for w in range(len(categoria)):
       for z in range(len(categoria[w])):
           if((categoria[w][z]=="Aventura") ):
               aux.append(pelicula[w])


   return Response(aux)

#Me traer el user y la contraseña
@api_view(['GET'])
def UsuarioContra (request):
   usuarios=Usuario.objects.values('identi','passw')
   
   return Response(usuarios)




def Diego2(request):
    name=[] 
    t=[]
    idp=[]
    imagenmodificada=[]

    usuario=Pelicula.objects.values('idpelicula','categoria')
    imagen=Pelicula.objects.values('imagen')

     
    for x in usuario:
        name.append(x['categoria'])
    
    for r in usuario:
        idp.append(r['idpelicula'])
    
        
    titulo=[]
    apellido=[]
    pelicula=[]
    for w in range(len(name)):
         
       
        for z in range(len(name[w])):
               if((name[w][z]=="Aventura") ):
                titulo.append(idp[w])
                apellido.append(name[w])
    
    m="http://127.0.0.1:8000/media/"
    

    for i in range(len(imagen)):
       g=imagen[i]
       
       imagenmodificada.append(g)
                
                
                
    for x in range(len(titulo)):
        k={'idpelicula':x+1,'categoria':apellido[x]}
        pelicula.append(k)
                    
           
               
    
 
    
    n=1
   

    data={
        1:imagenmodificada
    }
    return JsonResponse(data)
