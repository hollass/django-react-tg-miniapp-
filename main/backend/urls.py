from django.urls import path
from .views import (view_cats, view_docs, view_doc,
                    view_prods, view_sched, add_record, view_records, view_main, view_spec)

urlpatterns = [
    path('view_cats/', view_cats, name='view_cats'),
    path('view_docs/', view_docs, name='view_docs'),
    path('view_cat/', view_doc, name='view_doc'),
    path('view_sched/', view_sched, name='view_sched'),
    path('view_prods/', view_prods, name='view_prods'),
    path('add_record/', add_record, name='add_record'),
    path('view_records/', view_records, name='view_records'),
    path('view_spec/', view_spec, name='view_spec'),
    path('view_main/', view_main, name='view_main')
]
