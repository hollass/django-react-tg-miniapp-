from django.db import models
from django.contrib.auth.models import AbstractUser


class Users(AbstractUser):
    class Meta:
        db_table = 'Users'
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"

    userid = models.BigIntegerField(blank=True, null=True, verbose_name="telegram id")
    first_name = models.CharField(max_length=100, blank=True, null=True, verbose_name="Имя", unique=True)
    last_name = models.CharField(max_length=100, blank=True, null=True, verbose_name="Фамилия")
    phone = models.BigIntegerField(blank=True, null=True, verbose_name="Телефон")
    date_birth = models.DateTimeField(blank=True, null=True, verbose_name="Дата рождения")
    avatar = models.TextField(blank=True, null=True)
    role = models.IntegerField(default=0)


class Categorie(models.Model):
    class Meta:
        db_table = 'categories'
        verbose_name = "Специализация"
        verbose_name_plural = "Специализации"

    name = models.CharField(max_length=100, unique=True)
    img = models.URLField(blank=True, null=True)
    active = models.BooleanField(default=True)
    sorted_at = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Doctor(models.Model):
    class Meta:
        db_table = 'doctors'
        verbose_name = "Доктор"
        verbose_name_plural = "Докторы"

    doctor = models.ForeignKey('Users', on_delete=models.CASCADE)
    about = models.TextField(blank=True, null=True, unique=True)
    specialization = models.ForeignKey('Categorie', on_delete=models.CASCADE)
    experience = models.IntegerField(default=0)
    rating = models.IntegerField(default=0)
    last_visit = models.DateTimeField(blank=True, null=True)

class Price(models.Model):
    class Meta:
        db_table = 'prices'
        verbose_name = "Цена"
        verbose_name_plural = "Цены"

    doctor = models.ForeignKey('Doctor', on_delete=models.CASCADE)
    category = models.ForeignKey('Categorie', on_delete=models.CASCADE)
    name = models.CharField(blank=True, null=True)
    price = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
class Record(models.Model):
    class Meta:
        db_table = 'records'
        verbose_name = "Запись"
        verbose_name_plural = "Записи"

    doctor = models.ForeignKey('Doctor', on_delete=models.CASCADE)
    patient = models.ForeignKey('Users', on_delete=models.CASCADE)
    date = models.DateTimeField()
    time = models.CharField(max_length=50)
    status = models.IntegerField(default=1)
    prod = models.IntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)





class Scheduled(models.Model):
    class Meta:
        db_table = 'scheduled'
        verbose_name = "Расписание"
        verbose_name_plural = "Расписания"

    doctor = models.ForeignKey('Doctor', on_delete=models.CASCADE)
    date = models.DateTimeField()
    time = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
