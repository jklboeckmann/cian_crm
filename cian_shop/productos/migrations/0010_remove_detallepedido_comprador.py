# Generated by Django 3.1.7 on 2021-03-21 07:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('productos', '0009_remove_detallepedido_cantidad'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='detallepedido',
            name='comprador',
        ),
    ]
