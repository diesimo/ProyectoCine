from django.db import models
# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from multiselectfield import MultiSelectField
from django.core.validators import MinValueValidator, MaxValueValidator

class Usuario(models.Model):
    cedula = models.IntegerField('Cedula',primary_key=True)
    nombre = models.CharField('Nombre',max_length=20)
    apellido = models.CharField('Apellido',max_length=20)
    alias = models.CharField('User',max_length=20)
    passw = models.CharField('Password',max_length=30)
    email = models.CharField('Email',max_length=40)
    telefono = models.IntegerField('Telefono')
    fechain = models.DateField('Fecha de Nacimiento',db_column='fechaIn')  # Field name made lowercase.
    fechana = models.DateField('Fecha de ingreso',db_column='fechaNa')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'usuario'




class Pelicula(models.Model):
    categoria_choices=(
        ('Terror', 'Terror'),
        ('Comedia', 'Comedia'),
        ('Romantico', 'Romantico'),
        ('Suspenso', 'Suspenso'),
        ('Drama','Drama'),
        ('Ciencia Ficcion', 'Ciencia Ficcion'),
        ('Accion', 'Accion'),
        ('Aventura' ,' Aventura'),



    )



    idpelicula = models.AutoField('ID Pelicula',db_column='idPelicula', primary_key=True)  # Field name made lowercase.
    clase = models.CharField('Tipo de Clase',max_length=4)
    duracion = models.CharField('Duracion',max_length=10)
    raking = models.IntegerField('Raking', validators=[MinValueValidator(1), MaxValueValidator(7)])
    namedire = models.CharField('Nombre del Director',db_column='nameDire', max_length=20)  # Field name made lowercase.
    secnamedire = models.CharField('Apellido del Director',db_column='secnameDire', max_length=20)  # Field name made lowercase.
    sinopsis = models.TextField('Sinopsis')
    categoria = MultiSelectField('Categorias',choices=categoria_choices)
    titulo = models.CharField('Titulo',max_length=50)

    class Meta:
        managed = False
        db_table = 'pelicula'



class Producto(models.Model):
    namepro = models.CharField('Producto',db_column='namePro', max_length=20)  # Field name made lowercase.
    costo = models.IntegerField('Costo')
    tipopro = models.CharField('Tipo de Producto',db_column='tipoPro', max_length=30)  # Field name made lowercase.
    stock = models.IntegerField('Stock')
    idprov = models.ForeignKey('Proveedor', models.DO_NOTHING, db_column='idprov')

    class Meta:
        managed = False
        db_table = 'producto'



class Proveedor(models.Model):
    idprov = models.AutoField('ID Provedor',primary_key=True)
    nameprov = models.CharField('Nombre del Provedor',db_column='nameProv', max_length=40)  # Field name made lowercase.
    direc = models.CharField('Direccion',db_column='Direc', max_length=200)  # Field name made lowercase.
    rif = models.CharField('RIF',max_length=30)

    class Meta:
        managed = False
        db_table = 'proveedor'

class Factura(models.Model):
    idfac = models.AutoField('ID Factura',primary_key=True)
    montobru = models.IntegerField('Monto Bruto',db_column='montoBru')  # Field name made lowercase.
    montonet = models.IntegerField('Monto Neto',db_column='montoNet')  # Field name made lowercase.
    descuento = models.IntegerField('Descuento')
    datefac = models.DateField('Fecha de Factura',db_column='dateFac')  # Field name made lowercase.
    ceduser = models.ForeignKey('Usuario', models.DO_NOTHING, db_column='cedUser')  # Field name made lowercase.
    tippago = models.CharField('Tipo de Pago',db_column='tipPago', max_length=30)  # Field name made lowercase.
    cantticket = models.IntegerField('Cantidad de boletos',db_column='cantTicket')  # Field name made lowercase.
    funcion = models.CharField('Funcion',max_length=50, blank=True, null=True)
    idfuncion = models.ForeignKey('Pelicula', models.DO_NOTHING, db_column='idfuncion', blank=True, null=True)
    idprofac = models.ForeignKey('Producto', models.DO_NOTHING, db_column='idprofac', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'factura'


