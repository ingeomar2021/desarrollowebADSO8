from django.http import HttpResponse
import datetime

from django.template import Template, Context

from django.template import loader


class Persona:
    def __init__(self,nombre,apellido,edad):
        self.nombre=nombre
        self.apellido=apellido
        self.edad=edad

def saludo_plantilla_loader(request):

    p1=Persona("Juan Fernando","Galan",28)
    fecha_actual=datetime.datetime.now()

    materias=["Algoritmos","Base de Datos","Java","Python"]

    #materias=[]

    doc_externo=loader.get_template('miplantilla.html')

    contexto={
        "nombre_profesor": p1.nombre,
        "edad":p1.edad,
        "fecha":fecha_actual,   
        "materias":materias     
        }
    
    documento=doc_externo.render(contexto)

    return HttpResponse(documento)


def saludo_plantilla_clase(request):

    p1=Persona("Juan Fernando","Galan",28)
    fecha_actual=datetime.datetime.now()

    materias=["Algoritmos","Base de Datos","Java","Python"]

    #materias=[]

    doc_externo=open("C:/Users/SENA/Documents/ADSO8DesarrolloWeb/CodigoEnClase/RepositorioDesarrolloWebADSO8/Django/proyecto1/proyecto1/plantillas/miplantilla.html")

    plantilla= Template(doc_externo.read())
    
    doc_externo.close()

    contexto=Context({
        "nombre_profesor": p1.nombre,
        "edad":p1.edad,
        "fecha":fecha_actual,   
        "materias":materias     
        })

    documento=plantilla.render(contexto)

    return HttpResponse(documento)

def saludo_plantilla(request):

    nombre="Omar Gutierrez Acosta"
    edad=48
    fecha_actual=datetime.datetime.now()

    doc_externo=open("C:/Users/SENA/Documents/ADSO8DesarrolloWeb/CodigoEnClase/RepositorioDesarrolloWebADSO8/Django/proyecto1/proyecto1/plantillas/miplantilla.html")

    plantilla= Template(doc_externo.read())
    
    doc_externo.close()

    contexto=Context({
        "nombre_profesor":nombre,
        "edad":edad,
        "fecha":fecha_actual        
        })

    documento=plantilla.render(contexto)

    return HttpResponse(documento)







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

#Calcular edad futura d euna persona a partir d ela edad enviada y a partir del año 2024
def calcula_edad_futura(request,edad_actual,anio):
    periodo=anio-2024
    edad_futura=edad_actual+periodo
    documento=f"<html><body><h2>En el año {anio} tendras {edad_futura} </h2></body></html>"
    return HttpResponse(documento)





