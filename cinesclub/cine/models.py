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

class Pelicula(models.Model):

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
    )



    idpelicula = models.AutoField('ID Pelicula',primary_key=True)
    titulo = models.CharField('Titulo',max_length=40)
    duracion = models.TimeField('Duracion')
    sinopsis = models.TextField('Sinopsis')
    idioma = models.CharField('Idioma',max_length=15)
    subtitulos = models.BooleanField('Subtitulos')
    clase = models.CharField('Clase',max_length=2)
    namedire = models.CharField('Nombre del Director',db_column='nameDire', max_length=15, blank=True)  # Field name made lowercase.     
    apelldire = models.CharField('Apellido del Director',db_column='apellDire', max_length=15, blank=True)  # Field name made lowercase.   
    raking = models.IntegerField('Raking',default=1, validators=[MaxValueValidator(7),MinValueValidator(1)] )
    categoria = MultiSelectField('Categoria',max_length=97, blank=True,choices=Categoria )
    imagen = models.ImageField('Imagen', db_column='imagen', upload_to='pelicula' )

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

    class Meta:
        managed = False
        db_table = 'usuario'

