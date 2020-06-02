from django.db import models
# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class Usuario(models.Model):
    cedula = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=20)
    apellido = models.CharField(max_length=20)
    alias = models.CharField(max_length=20)
    passw = models.CharField(max_length=30)
    email = models.CharField(max_length=40)
    telefono = models.IntegerField()
    fechain = models.DateField(db_column='fechaIn')  # Field name made lowercase.
    fechana = models.DateField(db_column='fechaNa')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'usuario'




class Pelicula(models.Model):
    idpelicula = models.AutoField(db_column='idPelicula', primary_key=True)  # Field name made lowercase.
    clase = models.CharField(max_length=4)
    duracion = models.CharField(max_length=10)
    raking = models.IntegerField()
    namedire = models.CharField(db_column='nameDire', max_length=20)  # Field name made lowercase.
    secnamedire = models.CharField(db_column='secnameDire', max_length=20)  # Field name made lowercase.
    sinopsis = models.TextField()
    categoria = models.CharField(max_length=71)
    titulo = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'pelicula'



class Producto(models.Model):
    namepro = models.CharField(db_column='namePro', max_length=20)  # Field name made lowercase.
    costo = models.IntegerField()
    tipopro = models.CharField(db_column='tipoPro', max_length=30)  # Field name made lowercase.
    stock = models.IntegerField()
    idprov = models.ForeignKey('Proveedor', models.DO_NOTHING, db_column='idprov')

    class Meta:
        managed = False
        db_table = 'producto'



class Proveedor(models.Model):
    idprov = models.AutoField(primary_key=True)
    nameprov = models.CharField(db_column='nameProv', max_length=40)  # Field name made lowercase.
    direc = models.CharField(db_column='Direc', max_length=200)  # Field name made lowercase.
    rif = models.CharField(max_length=30)

    class Meta:
        managed = False
        db_table = 'proveedor'

class Factura(models.Model):
    idfac = models.AutoField(primary_key=True)
    montobru = models.IntegerField(db_column='montoBru')  # Field name made lowercase.
    montonet = models.IntegerField(db_column='montoNet')  # Field name made lowercase.
    descuento = models.IntegerField()
    datefac = models.DateField(db_column='dateFac')  # Field name made lowercase.
    ceduser = models.ForeignKey('Usuario', models.DO_NOTHING, db_column='cedUser')  # Field name made lowercase.
    tippago = models.CharField(db_column='tipPago', max_length=30)  # Field name made lowercase.
    cantticket = models.IntegerField(db_column='cantTicket')  # Field name made lowercase.
    funcion = models.CharField(max_length=50, blank=True, null=True)
    idfuncion = models.ForeignKey('Pelicula', models.DO_NOTHING, db_column='idfuncion', blank=True, null=True)
    idprofac = models.ForeignKey('Producto', models.DO_NOTHING, db_column='idprofac', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'factura'


