function verificarEntrada()
{
    let entrada=document.getElementById('entrada').value;

    if(entrada=="")
    {
        document.getElementById('div-salida-inicial').style.display="unset";
        document.getElementById("salida").innerHTML="";
    }
};

function hideSalidaInicial()
{
    document.getElementById('div-salida-inicial').style.display="none";
}

function encriptar()
{
    let entrada=document.getElementById("entrada").value;
    if(entrada!="")
    {
        hideSalidaInicial();
        document.getElementById("salida").innerHTML=entrada.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
    }
}

function desencriptar()
{
    let entrada=document.getElementById("entrada").value;
    
    if(entrada!="")
    {
        hideSalidaInicial();
        document.getElementById("salida").innerText=entrada.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u").replace(/ai/g,"a");
    }
}

function copiarTextoAlPortapapeles()
{
    
    navigator.clipboard.writeText(document.getElementById('salida').innerText);
}