# Generated by Django 2.2.1 on 2019-06-04 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('target', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='labeling',
            name='filter_rad',
            field=models.FloatField(default=30),
        ),
    ]
