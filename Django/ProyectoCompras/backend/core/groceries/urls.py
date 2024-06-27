from django.urls import path
from .views import GroceryListCreateView, GroceryItemRetrieveUpdateDestroyView

urlpatterns = [
    path('groceryitems/', GroceryListCreateView.as_view(),name='creacion-listar-comestible'),   

    path('groceryitems/<int:pk>/', GroceryItemRetrieveUpdateDestroyView.as_view(),name='recuperar-actualizar')
]
