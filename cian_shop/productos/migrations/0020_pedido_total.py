# Generated by Django 3.1.7 on 2021-03-22 04:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productos', '0019_auto_20210322_0336'),
    ]

    operations = [
        migrations.AddField(
            model_name='pedido',
            name='total',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
            preserve_default=False,
        ),
    ]