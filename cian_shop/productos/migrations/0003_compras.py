# Generated by Django 3.1.7 on 2021-03-20 20:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('productos', '0002_auto_20210320_0827'),
    ]

    operations = [
        migrations.CreateModel(
            name='Compras',
            fields=[
                ('cian_compra', models.AutoField(primary_key=True, serialize=False)),
                ('cantidad', models.IntegerField(blank=True, null=True)),
                ('cian_producto', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='compras', to='productos.producto')),
                ('comprador', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='compras', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]