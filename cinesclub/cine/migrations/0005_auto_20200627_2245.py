# Generated by Django 3.0.7 on 2020-06-28 02:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cine', '0004_auto_20200620_1847'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bebida',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('litros', models.IntegerField()),
                ('sabor', models.CharField(max_length=20)),
                ('tipo', models.CharField(max_length=7)),
            ],
            options={
                'db_table': 'bebida',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Comida',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo', models.CharField(max_length=6)),
                ('piezas', models.IntegerField()),
            ],
            options={
                'db_table': 'comida',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Detallado',
            fields=[
                ('idetall', models.AutoField(primary_key=True, serialize=False)),
                ('cantidad', models.IntegerField()),
                ('montoneto', models.IntegerField()),
            ],
            options={
                'db_table': 'detallado',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Factura',
            fields=[
                ('idfactura', models.AutoField(primary_key=True, serialize=False)),
                ('fecha', models.DateField()),
                ('monttotal', models.IntegerField()),
                ('tipoinstru', models.CharField(max_length=20)),
            ],
            options={
                'db_table': 'factura',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Facturaboleto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantentradas', models.IntegerField()),
            ],
            options={
                'db_table': 'facturaboleto',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Funcion',
            fields=[
                ('idfuncion', models.AutoField(primary_key=True, serialize=False)),
                ('precioboleto', models.IntegerField()),
                ('horario', models.TimeField()),
                ('cantbutacas', models.IntegerField()),
                ('fecha', models.DateField(blank=True, null=True)),
            ],
            options={
                'db_table': 'funcion',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('idprod', models.AutoField(primary_key=True, serialize=False)),
                ('tipo', models.CharField(max_length=15)),
                ('preciobruto', models.IntegerField()),
                ('iva', models.IntegerField()),
                ('nombrepro', models.CharField(max_length=20)),
            ],
            options={
                'db_table': 'producto',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Provedor',
            fields=[
                ('idprove', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
                ('direc', models.CharField(max_length=200)),
                ('rif', models.CharField(max_length=15)),
            ],
            options={
                'db_table': 'provedor',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Sala',
            fields=[
                ('idsala', models.AutoField(primary_key=True, serialize=False)),
                ('tiposala', models.CharField(max_length=2)),
                ('canbutacas', models.IntegerField()),
                ('nsala', models.CharField(max_length=8)),
            ],
            options={
                'db_table': 'sala',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Sede',
            fields=[
                ('idsede', models.AutoField(primary_key=True, serialize=False)),
                ('ubicacion', models.CharField(max_length=200)),
            ],
            options={
                'db_table': 'sede',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Stock',
            fields=[
                ('idstock', models.AutoField(primary_key=True, serialize=False)),
                ('canstock', models.IntegerField()),
            ],
            options={
                'db_table': 'stock',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Trabajador',
            fields=[
                ('idtrabajador', models.AutoField(primary_key=True, serialize=False)),
                ('numebancario', models.IntegerField()),
                ('banco', models.CharField(max_length=20)),
            ],
            options={
                'db_table': 'trabajador',
                'managed': False,
            },
        ),
        migrations.AlterModelOptions(
            name='pelicula',
            options={'managed': False},
        ),
    ]
