# Generated by Django 3.1.7 on 2021-03-22 01:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productos', '0014_producto_imagen'),
    ]

    operations = [
        migrations.AddField(
            model_name='detallepedido',
            name='cantidad',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
            preserve_default=False,
        ),
    ]
