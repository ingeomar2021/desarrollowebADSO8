from django.http import HttpResponse
import datetime

def saludo(request):
    documento="<html><body><h1> Primera página de Django </h1></body></html>"
    return HttpResponse(documento)


def despedida(request):
    return HttpResponse("Hasta Luego Adso 8 Django")

#Vista para mostrar fecha y hora
def dame_fecha(request):
    fecha_actual=datetime.datetime.now()
    documento=f"<html><body><h2>Fecha y hora actual: </h2><p>{fecha_actual}</p></body></html>"
    return HttpResponse(documento)

#Saluda con el nombre pasado
def saludopersonal(request,numero):
    total=numero+10
    documento=f"<html><body><h2>Hola {total} </h2></body></html>"
    return HttpResponse(documento)

#Calcular edad futura d euna persona de 18 años a partir del año 2024
def calcula_edad(request,anio):
    edad_actual=18
    periodo=anio-2024
    edad_futura=edad_actual+periodo
    documento=f"<html><body><h2>En el año {anio} tendras {edad_futura} </h2></body></html>"
    return HttpResponse(documento)






