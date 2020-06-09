# Generated by Django 3.0.7 on 2020-06-09 04:20

import django.core.validators
from django.db import migrations, models
import multiselectfield.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('iduser', models.AutoField(primary_key=True, serialize=False, verbose_name='ID User')),
                ('fechaingreso', models.DateField(db_column='fechaIngreso', verbose_name='Fecha de Ingreso')),
                ('passw', models.CharField(max_length=20, verbose_name='Password')),
                ('identi', models.CharField(max_length=20, verbose_name='User')),
                ('telefono', models.IntegerField(verbose_name='Telefono')),
                ('nombre', models.CharField(max_length=20, verbose_name='Nombre')),
                ('apellido', models.CharField(max_length=20, verbose_name='Apellido')),
                ('cedula', models.IntegerField(verbose_name='Cedula')),
                ('email', models.CharField(max_length=30, verbose_name='Email')),
                ('fechnaci', models.DateField(db_column='fechNaci', verbose_name='Fecha de Nacimiento')),
            ],
            options={
                'db_table': 'usuario',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Pelicula',
            fields=[
                ('idpelicula', models.AutoField(primary_key=True, serialize=False, verbose_name='ID Pelicula')),
                ('titulo', models.CharField(max_length=40, verbose_name='Titulo')),
                ('duracion', models.TimeField(verbose_name='Duracion')),
                ('sinopsis', models.TextField(verbose_name='Sinopsis')),
                ('idioma', models.CharField(max_length=15, verbose_name='Idioma')),
                ('subtitulos', models.BooleanField(verbose_name='Subtitulos')),
                ('clase', models.CharField(max_length=2, verbose_name='Clase')),
                ('namedire', models.CharField(blank=True, db_column='nameDire', max_length=15, verbose_name='Nombre del Director')),
                ('apelldire', models.CharField(blank=True, db_column='apellDire', max_length=15, verbose_name='Apellido del Director')),
                ('raking', models.IntegerField(default=1, validators=[django.core.validators.MaxValueValidator(7), django.core.validators.MinValueValidator(1)], verbose_name='Raking')),
                ('categoria', multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('Terro', 'Terror'), ('Romance', 'Romance'), ('Comedia', 'Comedia'), ('Suspenso', 'Suspenso'), ('Aventura', 'Aventura'), ('Accion', 'Accion'), ('Drama', 'Drama'), ('Musical', 'Musical'), ('Ciencia Ficcion', 'Ciencia Ficcion'), ('Fantasia', 'Fantasia'), ('Documental', 'Documental')], max_length=97, verbose_name='Categoria')),
                ('imagen', models.ImageField(db_column='imagen', upload_to='pelicula', verbose_name='Imagen')),
            ],
            options={
                'db_table': 'pelicula',
                'managed': True,
            },
        ),
    ]
