from django.contrib import admin

from gestionPedidos.models import Clientes,Articulos,Pedidos

# Register your models here.

class ClientesAdmin(admin.ModelAdmin):
    list_display=('nombre','direccion','tfno')

    search_fields=('nombre','tfno')

    list_filter=('nombre',) #No Olvidar coma al final

admin.site.register(Clientes, ClientesAdmin)
admin.site.register(Articulos)
admin.site.register(Pedidos)

