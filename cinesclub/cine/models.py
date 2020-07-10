from django.db import models

from multiselectfield import MultiSelectField
from django.core.validators import MinValueValidator, MaxValueValidator
Categoria=(
        ('Terro','Terror'),
        ('Romance','Romance'),
        ('Comedia','Comedia'),
        ('Suspenso','Suspenso'),
        ('Aventura','Aventura'),
        ('Accion','Accion'),
        ('Drama','Drama'),
        ('Musical','Musical'),
        ('Ciencia Ficcion','Ciencia Ficcion'),
        ('Fantasia','Fantasia'),
        ('Documental','Documental'),
        ('Familia','Familia'),
        ('Animacion','Animacion')
    )

Formatos=(
        ('2D','2D'),
        ('3D','3D'),
        ('4D','4D'),
    )
    
class Pelicula(models.Model):

    
    

    Idioma=(
        ('Español','Español'),
        ('Ingles','Ingles'),
        


    )


    idpelicula = models.AutoField('ID Pelicula',primary_key=True)
    titulo = models.CharField('Titulo',max_length=40)
    horas =models.IntegerField('Horas')
    minutos=models.IntegerField('Minutos',validators=[MaxValueValidator(60),MinValueValidator(0)])
    sinopsis = models.TextField('Sinopsis')
    idioma = models.CharField('Idioma',max_length=15, choices=Idioma)
    subtitulos = models.BooleanField('Subtitulos')
    clase = models.CharField('Clase',max_length=2)
    namedire = models.CharField('Nombre del Director',db_column='nameDire', max_length=15, blank=True)  # Field name made lowercase.     
    apelldire = models.CharField('Apellido del Director',db_column='apellDire', max_length=15, blank=True)  # Field name made lowercase.   
    raking = models.IntegerField('Raking',default=1, validators=[MaxValueValidator(7),MinValueValidator(1)] )
    categoria = MultiSelectField('Categoria',max_length=97, blank=True,choices=Categoria )
    imagen = models.ImageField('Imagen', db_column='imagen', upload_to='pelicula' )
    vista = models.BooleanField('Vista')
    formatos=MultiSelectField('Formatos',max_length=97, blank=True,choices=Formatos )
    def __str__(self):
        return (self.titulo)

    class Meta:
        managed = False
        db_table = 'pelicula'


class Usuario(models.Model):
    iduser = models.AutoField('ID User',primary_key=True)
    fechaingreso = models.DateField('Fecha de Ingreso',db_column='fechaIngreso')  # Field name made lowercase.
    passw = models.CharField('Password',max_length=20)
    identi = models.CharField('User',max_length=20)
    telefono = models.IntegerField('Telefono')
    nombre = models.CharField('Nombre',max_length=20)
    apellido = models.CharField('Apellido',max_length=20)
    cedula = models.IntegerField('Cedula')
    email = models.CharField('Email',max_length=30)
    fechnaci = models.DateField('Fecha de Nacimiento',db_column='fechNaci')  # Field name made lowercase.
    def __str__(self):
        return str(self.iduser)

    class Meta:
        managed = True
        db_table = 'usuario'
    


class Bebida(models.Model):
    litros = models.IntegerField()
    sabor = models.CharField(max_length=20)
    tipo = models.CharField(max_length=7)
    idproduc = models.OneToOneField('Producto', models.DO_NOTHING, db_column='idproduc', primary_key=True)
    def __str__(self):
        return str(self.idproduc)
    class Meta:
        managed = False
        db_table = 'bebida'




class Comida(models.Model):
    tipo = models.CharField(max_length=6)
    piezas = models.IntegerField()
    idproduc = idproduc = models.OneToOneField('Producto', models.DO_NOTHING, db_column='idproduc', primary_key=True)
   
    def __str__(self):
        return str(self.idproduc)

    class Meta:
        managed = False
        db_table = 'comida'


class Detallado(models.Model):
    idetall = models.AutoField(primary_key=True)
    cantidad = models.IntegerField('Cantidad')
    idobjeto = models.ForeignKey('Producto', models.DO_NOTHING, db_column='idobjeto')
    montoneto = models.IntegerField('Monto neto')
    idfactura = models.ForeignKey('Factura', models.DO_NOTHING, db_column='idfactura')
    def __str__(self):
        return str(self.idetall)
    class Meta:
        managed = False
        db_table = 'detallado'



class Factura(models.Model):
    idfactura = models.AutoField(primary_key=True)
    fecha = models.DateField('Fecha')
    monttotal = models.IntegerField('Monto total')
    tipoinstru = models.CharField('Tipo de Instrumento',max_length=20)
    idcliente = models.ForeignKey('Usuario', models.DO_NOTHING, db_column='idcliente')
    def __str__(self):
        return str(self.idfactura)
    class Meta:
        managed = False
        db_table = 'factura'


class Facturaboleto(models.Model):
    idfuncion = models.ForeignKey('Funcion', models.DO_NOTHING, db_column='idfuncion')
    cantentradas = models.IntegerField()
    idfactura = models.OneToOneField(Factura, models.DO_NOTHING, db_column='idfactura', primary_key=True)
    def __str__(self):
        return str(self.idfactura)
    class Meta:
        managed = False
        db_table = 'facturaboleto'


class Funcion(models.Model):
    idfuncion = models.AutoField(primary_key=True)
    precioboleto = models.IntegerField('Precio del Boleto')
    horario = models.TimeField('horario')
    cantbutacas = models.IntegerField('Cantidad de Butacas')
    fecha = models.DateField('Fecha',blank=True, null=True)
    idsala = models.ForeignKey('Sala', models.DO_NOTHING, db_column='idsala')
    idpelicula = models.ForeignKey('Pelicula', models.DO_NOTHING, db_column='idpelicula')
    
    def __str__(self):
        return str(self.idfuncion)
    class Meta:
        managed = False
        db_table = 'funcion'



class Producto(models.Model):
    idprod = models.AutoField(primary_key=True)
    tipo = models.CharField('Tipo de producto',max_length=15)
    preciobruto = models.IntegerField('Precio Bruto')
    iva = models.IntegerField('Iva del producto')
    nombrepro = models.CharField('Nombre del producto',max_length=20)
    idprove = models.ForeignKey('Provedor', models.DO_NOTHING, db_column='idprove')
    vista=models.BooleanField('Vista')
    def __str__(self):
        return (self.nombrepro )
    class Meta:
        managed = False
        db_table = 'producto'


class Provedor(models.Model):
    idprove = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    direc = models.CharField(max_length=200)
    rif = models.CharField(max_length=15)
    def __str__(self):
        return (self.nombre)
    class Meta:
        managed = False
        db_table = 'provedor'


class Sala(models.Model):
    tipoSala=(
        ('2D','2D'),
        ('3D','3D'),
        ('4D','4D'),
    )

    idsala = models.AutoField(primary_key=True)
    tiposala = models.CharField('Tipo de sala',max_length=2,choices=tipoSala)
    canbutacas = models.IntegerField('Cantidad de butacas')
    nsala = models.CharField('Numero de Sala',max_length=8)
    idsede = models.ForeignKey('Sede', models.DO_NOTHING, db_column='idsede')
    def __str__(self):
        return str(self.idsede)
    class Meta:
        managed = False
        db_table = 'sala'


class Sede(models.Model):
    idsede = models.AutoField(primary_key=True)
    ubicacion = models.CharField(max_length=200)
    nombre=models.CharField(max_length=30)
    def __str__(self):
        return (self.nombre)

    class Meta:
        managed = False
        db_table = 'sede'


class Stock(models.Model):
    idstock = models.AutoField(primary_key=True)
    idsede = models.ForeignKey(Sede, models.DO_NOTHING, db_column='idsede')
    idproducto = models.ForeignKey(Producto, models.DO_NOTHING, db_column='idproducto')
    canstock = models.IntegerField('Cantidad en el stock')
    def __str__(self):
        return (self.idstock)
    class Meta:
        managed = False
        db_table = 'stock'


class Trabajador(models.Model):
    idtrabajador = models.AutoField(primary_key=True)
    idusuario = models.ForeignKey('Usuario', models.DO_NOTHING, db_column='idusuario')
    numebancario = models.IntegerField('Numero bancario')
    banco = models.CharField('Banco',max_length=20)
    def __str__(self):
        return (self.idtrabajador)
    class Meta:
        managed = False
        db_table = 'trabajador'


