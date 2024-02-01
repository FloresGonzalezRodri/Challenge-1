verificarEntrada();

function verificarEntrada()
{
    let entrada=document.getElementById('entrada').value;

    if(entrada=="")
    {
        let divDerecho=document.getElementById('div-derecho');
        divDerecho.style.textAlign="center";
        divDerecho.style.justifyContent="center";
        divDerecho.style.alignItems="center";
        document.getElementById('div-salida-inicial').style.display="unset";
        document.getElementById("salida").innerHTML="";
    }
};

function hideSalidaInicial()
{
    let divDerecho=document.getElementById('div-derecho');

    divDerecho.style.textAlign="unset";
    divDerecho.style.justifyContent="unset";
    divDerecho.style.alignItems="unset";
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