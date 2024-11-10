from datetime import datetime

from django.contrib.auth import get_user_model
from rest_framework.decorators import permission_classes, api_view
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

from .models import Categorie, Doctor, Price, Scheduled, Record
import urllib.parse
import json

User = get_user_model()


@api_view(['POST'])
@permission_classes([AllowAny])
def view_cats(request):
    data = Categorie.objects.all()
    cats = []
    for i in data:
        num = Doctor.objects.filter(specialization=i.id)
        cats.append({
            'id': i.id,
            'name': i.name,
            'active': i.active,
            'img': i.img,
            'num': len(num)
        })
    return Response(data=cats, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([AllowAny])
def view_spec(request):
    req = request.data
    data = Doctor.objects.filter(specialization=req['id'])
    docs = []

    for j in data:
        us = User.objects.get(id=j.doctor_id)
        docs.append({
            'id': j.doctor_id,
            'name': us.first_name,
            'img': us.avatar})

    return Response(data=docs, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([AllowAny])
def view_docs(request):
    data = request.data
    id = int(data['id'])

    pr = Price.objects.get(id=id)
    docs = Price.objects.filter(name=pr.name)
    data = []

    for i in docs:
        doc = {
            'id': '',
            'name': '',
            'img': '',
            'score': ''
        }
        doctor = Doctor.objects.get(id=i.doctor_id)
        us = User.objects.get(id=doctor.doctor_id)

        doc['id'] = us.id
        doc['name'] = us.first_name
        doc['img'] = us.avatar
        doc['score'] = doctor.experience
        data.append(doc)
    return Response(data=data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([AllowAny])
def view_prods(request):
    data = request.data
    id = int(data['id'])

    prods = Price.objects.filter(category_id=id).order_by('name').distinct('name')
    data = []

    for i in prods:
        prod = {
            'id': '',
            'name': '',
        }
        prod['id'] = i.id
        prod['name'] = i.name
        data.append(prod)
    return Response(data=data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([AllowAny])
def view_doc(request):
    data = request.data
    id = int(data['id'])
    product = data['product']
    us = User.objects.get(id=id)
    doc_id = Doctor.objects.get(doctor_id=us.id)

    doc_price = Price.objects.filter(doctor_id=doc_id)

    doc = {
        'id': '',
        'name': '',
        'img': '',
        'score': '',
        'prices': []
    }
    if product != 'all':

        price = {
            'id': '',
            'name': '',
            'price': ''
        }
        idprice = Price.objects.get(id=int(product))
        idprice = Price.objects.get(name=idprice.name, doctor=doc_id)

        price['id'] = idprice.id
        price['name'] = idprice.name
        price['price'] = idprice.price
        doc['prices'].append(price)
    else:
        for i in doc_price:
            prices = {
                'id': '',
                'name': '',
                'price': ''
            }
            prices['id'] = i.id
            prices['name'] = i.name
            prices['price'] = i.price
            doc['prices'].append(prices)
    doc['id'] = doc_id.doctor_id
    doc['name'] = us.first_name
    doc['img'] = us.avatar
    doc['score'] = doc_id.experience

    return Response(data=doc, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([AllowAny])
def view_sched(request):
    data = request.data
    id = int(data['id'])
    doc = Doctor.objects.get(doctor_id=id)
    schedules = Scheduled.objects.filter(doctor_id=doc)
    schedules_data = []
    for i in schedules:
        schedule = {
            'id': '',
            'date': '',
            'day': '',
            'time': '',
        }
        days_of_week = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
        schedule['id'] = i.id
        schedule['date'] = i.date.strftime('%d.%m')
        schedule['day'] = days_of_week[datetime.strptime(i.date.strftime('%Y-%m-%d'), '%Y-%m-%d').weekday()]
        schedule['time'] = i.time
        schedules_data.append(schedule)

    return Response(data=schedules_data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([AllowAny])
def add_record(request):
    data = request.data
    user = User.objects.get(userid=authData(request.headers['Authorization'])[0]['id'])
    doc = Doctor.objects.get(doctor_id=data['doctor_id'])
    date = data['date']
    time = data['time']
    current_year = datetime.now().year
    date_obj = datetime.strptime(f"{current_year}.{date.split(' ')[0]}", "%Y.%d.%m")
    formatted_date = date_obj.strftime("%Y-%m-%d")
    zapis = Record(
        doctor=doc,
        patient=user,
        date=formatted_date,
        time=time,
        prod=data['prod']
    )
    zapis.save()

    return Response(status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([AllowAny])
def view_records(request):
    user = User.objects.get(userid=authData(request.headers['Authorization'])[0]['id'])
    records = Record.objects.filter(patient=user).order_by('-date')
    records_data = []
    for i in records:
        record = {
            'id': '',
            'date': '',
            'time': '',
            'prod': '',
            'doctor': '',
            'status': '',
            'img': '',
        }
        doc = User.objects.get(id=i.doctor.doctor_id)
        prod = Price.objects.get(id=i.prod)
        record['id'] = i.id
        record['date'] = i.date.strftime('%d.%m.%Y')
        record['time'] = i.time
        record['prod'] = prod.name
        record['name_doctor'] = doc.first_name
        record['status'] = i.status
        record['img'] = doc.avatar
        records_data.append(record)

    return Response(data=records_data, status=status.HTTP_200_OK)


def authData(data):
    parsed_data = urllib.parse.parse_qs(data)
    user_data = json.loads(urllib.parse.unquote(parsed_data['user'][0]))
    return user_data, parsed_data


@api_view(['POST'])
@permission_classes([AllowAny])
def view_main(request):
    data = request.data
    user_data = authData(request.headers['Authorization'])[0]

    if not User.objects.filter(username=user_data['id']).exists():
        user = User.objects.create_user(
            username=user_data['id'],
            userid=user_data['id'],
            first_name=user_data['first_name'])
        user.save()
    cats = Categorie.objects.all()
    cats_data = []

    for i in cats:
        cat = {
            'id': '',
            'name': '',
            'img': '',
        }

        cat['id'] = i.id
        cat['name'] = i.name
        cat['img'] = i.img
        cats_data.append(cat)
    doc = {
        'id': '',
        'name': '',
        'age': '',
        'cat': '',
        'img': ''
    }
    list_docs = []
    docs = Doctor.objects.all()[:data['num']]
    for i in docs:
        user = User.objects.get(id=i.doctor_id)

        doc['id'] = i.doctor_id
        doc['name'] = user.first_name
        doc['age'] = i.experience
        doc['cat'] = i.specialization.name
        doc['img'] = user.avatar
        list_docs.append(doc)
        doc = {
            'id': '',
            'name': '',
            'age': '',
            'cat': '',
            'img': ''
        }

    data = {
        'cats': cats_data,
        'docs': list_docs,
    }
    return Response(data=data, status=status.HTTP_200_OK)
