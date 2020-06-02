# Generated by Django 3.0.6 on 2020-06-02 18:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Factura',
            fields=[
                ('idfac', models.AutoField(primary_key=True, serialize=False)),
                ('montobru', models.IntegerField(db_column='montoBru')),
                ('montonet', models.IntegerField(db_column='montoNet')),
                ('descuento', models.IntegerField()),
                ('datefac', models.DateField(db_column='dateFac')),
                ('tippago', models.CharField(db_column='tipPago', max_length=30)),
                ('cantticket', models.IntegerField(db_column='cantTicket')),
                ('funcion', models.CharField(blank=True, max_length=50, null=True)),
            ],
            options={
                'db_table': 'factura',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Pelicula',
            fields=[
                ('idpelicula', models.AutoField(db_column='idPelicula', primary_key=True, serialize=False)),
                ('clase', models.CharField(max_length=4)),
                ('duracion', models.CharField(max_length=10)),
                ('raking', models.IntegerField()),
                ('namedire', models.CharField(db_column='nameDire', max_length=20)),
                ('secnamedire', models.CharField(db_column='secnameDire', max_length=20)),
                ('sinopsis', models.TextField()),
                ('categoria', models.CharField(max_length=71)),
                ('titulo', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'pelicula',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('namepro', models.CharField(db_column='namePro', max_length=20)),
                ('costo', models.IntegerField()),
                ('tipopro', models.CharField(db_column='tipoPro', max_length=30)),
                ('stock', models.IntegerField()),
            ],
            options={
                'db_table': 'producto',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Proveedor',
            fields=[
                ('idprov', models.AutoField(primary_key=True, serialize=False)),
                ('nameprov', models.CharField(db_column='nameProv', max_length=40)),
                ('direc', models.CharField(db_column='Direc', max_length=200)),
                ('rif', models.CharField(max_length=30)),
            ],
            options={
                'db_table': 'proveedor',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('cedula', models.IntegerField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=20)),
                ('apellido', models.CharField(max_length=20)),
                ('alias', models.CharField(max_length=20)),
                ('passw', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=40)),
                ('telefono', models.IntegerField()),
                ('fechain', models.DateField(db_column='fechaIn')),
                ('fechana', models.DateField(db_column='fechaNa')),
            ],
            options={
                'db_table': 'usuario',
                'managed': False,
            },
        ),
    ]
