# Generated by Django 3.1.7 on 2021-03-22 03:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('productos', '0018_auto_20210322_0335'),
    ]

    operations = [
        migrations.AlterField(
            model_name='detallepedido',
            name='cian_producto',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='productos', to='productos.producto'),
        ),
    ]
