# Generated by Django 3.1.7 on 2021-03-22 02:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('productos', '0015_detallepedido_cantidad'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='detallepedido',
            unique_together={('cian_pedido', 'cian_detpedido')},
        ),
    ]
