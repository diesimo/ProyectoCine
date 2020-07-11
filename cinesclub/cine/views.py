from django.shortcuts import render
from  rest_framework import viewsets
from .serializers import UsuarioSerializer,SedeSerializer,ProveedorSerializer,FuncionSerializer,FacturaSerializer,SalaSerializer, PeliculaSerializer, PruebaSerializer, UpdateVista
from .serializers import SedeSerializer,editProveSerializer,AgregarFunSerializer,ProductoSerializer,BebidaSerializer,ComidaSerializer,UpdateVistaProSerializer,FacturaBoletoSerializer,DetalladoSerializer
from . models import Usuario,Pelicula,Sede,Funcion,Sala,Provedor,Producto,Comida,Bebida,Factura,Facturaboleto,Detallado
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status,generics
from rest_framework.views import APIView
import datetime
from re import split
import datetime
from datetime import date

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset=Usuario.objects.all()
    serializer_class=UsuarioSerializer

    
class PeliculaViewSet(viewsets.ModelViewSet):
    queryset=Pelicula.objects.all()
    serializer_class=PruebaSerializer

class SedeViewSet(viewsets.ModelViewSet):
    queryset=Sede.objects.all()
    serializer_class=SedeSerializer

class FuncionViewSet(viewsets.ModelViewSet):
    queryset=Funcion.objects.all()
    serializer_class=FuncionSerializer

class SalaViewSet(viewsets.ModelViewSet):
    queryset=Sala.objects.all()
    serializer_class=SalaSerializer

class ProveedorViewSet(viewsets.ModelViewSet):
    queryset=Provedor.objects.all()
    serializer_class=ProveedorSerializer

class ProductoViewSet(viewsets.ModelViewSet):
    queryset=Producto.objects.all()
    serializer_class=ProductoSerializer

class ComidaViewSet(viewsets.ModelViewSet):
    queryset=Comida.objects.all()
    serializer_class=ComidaSerializer

class BebidaViewSet(viewsets.ModelViewSet):
    queryset=Bebida.objects.all()
    serializer_class=BebidaSerializer

class FacturaViewSet(viewsets.ModelViewSet):
    queryset=Factura.objects.all()
    serializer_class=FacturaSerializer
class FacturaBoletoViewSet(viewsets.ModelViewSet):
    queryset=Facturaboleto.objects.all()
    serializer_class=FacturaBoletoSerializer
class DetalladoViewSet(viewsets.ModelViewSet):
    queryset=Detallado.objects.all()
    serializer_class=DetalladoSerializer
#QUERYS-----------------------------------------------------------------------

#Comedia
@api_view(['GET'])
def Comedia (request):
   pelicula=Pelicula.objects.values('idpelicula','categoria','titulo','sinopsis','idioma','subtitulos','clase','namedire','apelldire','raking','categoria','imagen','horas','minutos','formatos','vista')
   
   vista=[]

   categoria=[]
   for x in pelicula:
       categoria.append(x['categoria'])
       vista.append(x['vista'])
    
    
   aux=[]
   
   for w in range(len(categoria)):
       for z in range(len(categoria[w])):
           if((categoria[w][z]=="Comedia" and vista[w]==True) ):
               aux.append(pelicula[w])

    
   
   serealizer=PeliculaSerializer(aux,many=True)
   return Response(aux)

#Aventura

@api_view(['GET'])
def Aventura (request):
   pelicula=Pelicula.objects.values('idpelicula','categoria','titulo','sinopsis','idioma','subtitulos','clase','namedire','apelldire','raking','categoria','imagen','horas','minutos','vista')
   
   vista=[]
   categoria=[]
   for x in pelicula:
       categoria.append(x['categoria'])
       vista.append(x['vista'])
    
   aux=[]
   for w in range(len(categoria)):
       for z in range(len(categoria[w])):
           if((categoria[w][z]=="Aventura") and vista[w]==True):
               aux.append(pelicula[w])


   return Response(aux)

@api_view(['GET'])
def Suspenso (request):
   pelicula=Pelicula.objects.values('idpelicula','categoria','titulo','sinopsis','idioma','subtitulos','clase','namedire','apelldire','raking','categoria','imagen','horas','minutos','vista')
   
   vista=[]
   categoria=[]
   for x in pelicula:
       categoria.append(x['categoria'])
       vista.append(x['vista'])
    
   aux=[]
   for w in range(len(categoria)):
       for z in range(len(categoria[w])):
           if((categoria[w][z]=="Suspenso") and vista[w]==True):
               aux.append(pelicula[w])


   return Response(aux)

@api_view(['GET'])
def Romantica (request):
   pelicula=Pelicula.objects.values('idpelicula','categoria','titulo','sinopsis','idioma','subtitulos','clase','namedire','apelldire','raking','categoria','imagen','horas','minutos','vista')
   
   vista=[]
   categoria=[]
   for x in pelicula:
       categoria.append(x['categoria'])
       vista.append(x['vista'])
    
   aux=[]
   for w in range(len(categoria)):
       for z in range(len(categoria[w])):
           if((categoria[w][z]=="Romance") and vista[w]==True):
               aux.append(pelicula[w])


   return Response(aux)

@api_view(['GET'])
def ComidaView (request):
   producto=Producto.objects.values('idprod','tipo','preciobruto','iva','nombrepro','idprove','vista')
   

   tipo=[]
   for x in producto:
       tipo.append(x['tipo'])
    
   aux=[]
   for w in range(len(tipo)):
        if((tipo[w]=="Comida") ):
            aux.append(producto[w])


   return Response(aux)

@api_view(['GET'])
def BebidaView  (request):
   producto=Producto.objects.values('idprod','tipo','preciobruto','iva','nombrepro','idprove','vista')
   

   tipo=[]
   for x in producto:
       tipo.append(x['tipo'])
    
   aux=[]
   for w in range(len(tipo)):
        if((tipo[w]=="Bebida") ):
            aux.append(producto[w])


   return Response(aux)

#Me traer el user y la contraseña y verifica si exsite
@api_view(['GET'])
def UsuarioContra (request,identi,passw):
   usuarios=Usuario.objects.values('iduser','identi','passw')
  
   boo=False
   aux=""
   contr=[]
   aux2=''

   for x in usuarios:
       contr.append(x['passw'])
       
   for x in usuarios:
       aux=(x['identi'])
       aux2=(x['passw'])
       
       if(aux==identi and passw==aux2):
           
           k={'iduser':(x['iduser']),'bool':True}
           

    

   return Response(k)
#Me trae solo algunas propiedaes de peliculas
@api_view(['GET'])
def VistaPeli (request):
   peliculas=Pelicula.objects.values('titulo','imagen', 'vista','idpelicula','subtitulos')
   
   return Response(peliculas)



def Diego2(request,monto,iduser):
    usuario=Usuario.objects.values('iduser','fechaingreso','passw','identi','telefono','nombre','apellido','cedula','email','fechnaci')
    fechas=[]
    usuario2=Usuario.objects.filter(iduser=iduser)
   
    for x in usuario:
       fechas.append(x['fechaingreso'])

    
    
   

   
    month=''
    year=''
    caracter=''
    today_year = datetime.datetime.today().year
    today_month = datetime.datetime.today().month
    usuariosF=[]
    montoT=''
   
   
    month=fechas[iduser].month
    year=fechas[iduser].year
   
        
    if(year!=today_year):
        if(((12-today_month)+month)>6):
               
            descuento=(int(monto)*0.3)
            montoT=float(monto)-descuento
            
    elif((today_month-month)>=6):
            descuento=(int(monto)*0.3)
            montoT=float(monto)-descuento
            print(montoT)
               
   
    
    data={
        1:montoT
    }
    return JsonResponse(data)
#Me modifica las vistas de las peliculas
@api_view(['PUT'])
def UpdateVistas( request, idpelicula):
    try:
        pelicula = Pelicula.objects.get(idpelicula=idpelicula)
        
    except Pelicula.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        serializer = UpdateVista(pelicula, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Guarda peliculas
class PostView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        pelicula = Pelicula.objects.all()
        serializer = PruebaSerializer(pelicula, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        pelicula_serializer = PruebaSerializer(data=request.data)
        if pelicula_serializer.is_valid():
            pelicula_serializer.save()
            return Response(pelicula_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', pelicula_serializer.errors)
            return Response(pelicula_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

 #Trae y modifica los proveedores
@api_view(['GET','PUT'])
def getProveEdit(request,idprove):
    try:
        proveedor= Provedor.objects.get(idprove=idprove)
        
    except Provedor.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        data = Provedor.objects.filter(idprove=idprove)

        serializer = editProveSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = editProveSerializer(proveedor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Trae las peliculas egun su id especificado
@api_view(['GET'])
def getFuncionPel(request,idpelicula):
   if request.method == 'GET':
        funcionP=Funcion.objects.values('idfuncion','idpelicula','precioboleto','horario','cantbutacas','fecha','idsala')
        
        idPelicula=[]

        for x in funcionP:
            idPelicula.append(x['idpelicula'])
            
        aux=[]
        for w in range(len(idPelicula)):
             print(idPelicula[w])
             if((idPelicula[w]==idpelicula) ):
                 
                 aux.append(funcionP[w])

        serializer = AgregarFunSerializer(aux, many=True)

        return Response(aux)

#Obtiene la funcion respectiva
@api_view(['GET'])
def getFuncionFac(request,idfuncion):
   if request.method == 'GET':
        funcionP=Funcion.objects.filter(idfuncion=idfuncion)
       
        serializer = AgregarFunSerializer(funcionP, many=True)

        return Response(serializer.data)

#Funcion para registrar un producto
@api_view(['PUT'])
def UpdateVistasProView( request, idprod):
    try:
        producto = Producto.objects.get(idprod=idprod)
        
    except Producto.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        serializer = UpdateVistaProSerializer(producto, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#Funcion que detenca los usuarios que llevan mas de 6 meses
@api_view(['GET'])
def FechaUsuarios(request,monto,iduser):
    usuario=Usuario.objects.values('iduser','fechaingreso','passw','identi','telefono','nombre','apellido','cedula','email','fechnaci')
    fechas=[]
    usuario2=Usuario.objects.filter(iduser=iduser)
   
    for x in usuario:
       fechas.append(x['fechaingreso'])

   
    month=''
    year=''
    caracter=''
    today_year = datetime.datetime.today().year
    today_month = datetime.datetime.today().month
    usuariosF=[]
    montoT=''
   
   
    month=fechas[iduser-1].month
    year=fechas[iduser-1].year
    
   
        
    if(year!=today_year):
        if(((12-today_month)+month)>6):
               
            descuento=(int(monto)*0.3)
            montoT=(float(monto)-descuento)
            montotal={'montoT':montoT,'apro':True,'Descuento':format(descuento,'.2f')}
            
            return Response(montotal)

    elif((today_month-month)>=6):
            descuento=(int(monto)*0.3)
            montoT=float(monto)-descuento
            montotal={'montoT':format(montoT,'.2f'),'apro':True,'Descuento':format(descuento,'.2f')}
            
            return Response(montotal)
    else:
        montotal={'montoT':monto,'apro':False,'Descuento':0}
        return Response(montotal)

def veri(variable):
            try:
                int(variable)
                return True
            except:
                   return False

#Obtener productos anexados a la factura ficticia
@api_view(['GET'])
def getProducFac(request,idprod):
   if request.method == 'GET':
       
        
        
        producto=Producto.objects.values('idprod','preciobruto','iva','nombrepro')
        idsP=[]
        prodSelec=[]  
        Lista=split('\D+', idprod)
        
        for n in Lista:
            
            if(veri(n)==True):
                idsP.append(n)
                print(veri(n))
        print(idsP)
        for x in range(len(idsP)):
            a=int(idsP[x])
            print(producto[a-1])
            prodSelec.append(producto[a-1])


        return Response(prodSelec)

@api_view(['GET'])

#Suma todo lo generado en 1 venta y para luego ser pasado a la funcion de verificar si el suario lleva mas de 1 mes
def DescuentoPorFecha(request,cant,idfuncion,idprod):
   if request.method == 'GET':
    funcion=Funcion.objects.values('precioboleto')
    productoiva=Producto.objects.values('iva')
    productobruto=Producto.objects.values('preciobruto')
    idsP=[]
    prodSelec=[]
    sumaP='' 
    
    Lista=split('\D+', idprod)
        
    for n in Lista:
            
        if(veri(n)==True):
            idsP.append(n)
            
    
    suma=0
    if(int(idsP[0])!=0):
        for x in range(len(idsP)):
            print(int(idsP[x]))
            iva=productoiva[int(idsP[x])-1]
            bruto=productobruto[int(idsP[x])-1]
            suma=iva['iva']+bruto['preciobruto']+suma
            print(suma)
            
        

    
    if(cant!=0):
        print("entreeee")
        fun=funcion[int(idfuncion)-1]
        suma=suma+(fun['precioboleto']*cant)
    
    

    return Response(suma)

#Ganancias de 1 mes
@api_view(['GET'])
def GananciasMes(request):
   if request.method == 'GET':
       
        factura=Factura.objects.values('fecha','monttotal')
        today_year = datetime.datetime.today().year
        today_month = datetime.datetime.today().month
        today_day=datetime.datetime.today().day

        fechas=[]
        for x in factura:
            
            fechas.append(x['fecha'])
        monto=[]
        for x in factura:
            monto.append(x['monttotal'])

        sumarT=0
        for x in range(len(factura)):
            
            month=fechas[x].month
            print("Mes de ahora:"+str(today_month))
            print("Mes de antes:"+str(month))
            resta=today_month-month
            if(resta==1):
                print("id:"+ str(x+2))
                print(fechas[x].day)
                print(today_day)
                restadia=31-fechas[x].day
                sumadia=restadia+today_day
                if(sumadia==31):
                    print("id:"+ str(x+2))
                    print(monto[x])
                    sumarT=monto[x]+sumarT

        return Response(sumarT)
            

        



