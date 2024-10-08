from django.contrib import admin

from .models import Users, Categorie, Doctor, Record, Price, Scheduled
from django.contrib.auth.admin import UserAdmin


class CategorieAdmin(admin.ModelAdmin):
    list_display = ('name', 'active')

class ScheduledProductAdmin(admin.ModelAdmin):
    list_display = ('doctor', 'date', 'time')


class RecordAdmin(admin.ModelAdmin):
    list_display = ('doctor', 'patient', 'date', 'time')


class PriceAdmin(admin.ModelAdmin):
    list_display = ('doctor', 'category', 'price')


class DoctorAdmin(admin.ModelAdmin):
    list_display = ('doctor', 'about', 'specialization', 'experience', 'rating')


admin.site.register(Users, UserAdmin)
admin.site.register(Doctor, DoctorAdmin)
#
admin.site.register(Categorie, CategorieAdmin)
admin.site.register(Record, RecordAdmin)
admin.site.register(Scheduled, ScheduledProductAdmin)

