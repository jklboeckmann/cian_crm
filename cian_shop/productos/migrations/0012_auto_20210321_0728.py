# Generated by Django 3.1.7 on 2021-03-21 07:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('productos', '0011_auto_20210321_0725'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='detallepedido',
            name='cian_pedido',
        ),
        migrations.RemoveField(
            model_name='detallepedido',
            name='cian_producto',
        ),
    ]
