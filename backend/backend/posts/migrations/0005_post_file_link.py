# Generated by Django 5.0.1 on 2024-01-27 09:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0004_rename_cateogory_post_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='file_link',
            field=models.CharField(max_length=300, null=True),
        ),
    ]
