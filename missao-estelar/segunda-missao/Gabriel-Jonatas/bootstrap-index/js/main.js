//Segunda Missão Estelar JS
/*
    Apertem os cintos para adentramos ao hiper-espaço
    rumo a uma nova Missão Estelar JS!:)
*/

    console.log("-------------------------------------------- Item 08");
var missao = "Segunda Missão Estelar JS";
console.log("Valor: ", missao);
console.log("Tipo: ", typeof missao);

    console.log("-------------------------------------------- Item 09");
var hiperespaco = new String("Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)");
console.log("Valor: ", hiperespaco.toString());
console.log("Tipo: ", typeof hiperespaco);

    console.log("-------------------------------------------- Item 10");
var nomeCliente = "João";
var renda = 3000;
var dataNascimento = new Date("1990-12-31");
    var aniver = String(dataNascimento.getDate()+1)+"/"+String(dataNascimento.getMonth()+1)+"/"+String(dataNascimento.getFullYear());
    //lógica: resgata o dia/mes/ano e converte com String(), além de concatenar com /
var ativo = true ? "Ativo" : "Desativado";
    function exibirDadosClienteVariaveis(){
        console.log("Nome: ", nomeCliente);
        console.log("Renda: R$", renda);
        console.log("Data de Nascimento: ", aniver);
        console.log("Status: ", ativo);
    }
console.log("--- Cliente Variáveis ---");
exibirDadosClienteVariaveis();

    console.log("-------------------------------------------- Item 11");
var clienteArray = [nomeCliente,renda,aniver,ativo];
function exibirDadosClienteArray(){
    for(var valor of clienteArray){
        console.log(valor);
    }
}
console.log("--- Cliente Array ---");
exibirDadosClienteArray();

    console.log("-------------------------------------------- Item 12");
var clienteObject = new Object();
clienteObject.nome = nomeCliente;
clienteObject.renda = renda;
clienteObject.nascimento = aniver;
clienteObject.ativo = ativo;
function exibirDadosClienteObjeto(){
    for(var chave in clienteObject){
        switch (clienteObject[chave]) {
            case nomeCliente:
                console.log("Nome: "+nomeCliente);
                break;
            case renda:
                console.log("Renda: R$"+renda);
                break;
            case aniver:
                console.log("Nascimento: "+aniver);
                break;            
            case ativo:
                console.log("Ativo: "+ativo);
                break;        
            default:
                break;
        }
    }
}
console.log("--- Cliente Object ---");
exibirDadosClienteObjeto();

    console.log("-------------------------------------------- Item 13");
function retornaDataAtualFormatada(){
    var data = new Date();
    var dataFormatada = "Data atual: "+String(data.getDate())+"/"+String(data.getMonth()+1)+"/"+String(data.getFullYear());
    console.log(dataFormatada);
}
console.log("--- Data Formatada ---");
retornaDataAtualFormatada();

    console.log("-------------------------------------------- Item 14");
console.log("--- ExpReg ---");
var hiperEspacoRegExp = /Estelar/;
var textoMissao = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)";
console.log("Test: ",hiperEspacoRegExp.test(textoMissao));
console.log("Exec: ",hiperEspacoRegExp.exec(textoMissao));

    console.log("-------------------------------------------- Item 15");
console.log("--- 30 a 0  ---");
for(var i = 30; i >= 0; i--){
    try {
        if(i == 29){
            throw new Error("Ocorreu um erro!");
        }else{
            console.log(i);
        }
    } catch (error) {
        console.log(error.stack);
        break;
    }
}

    console.log("-------------------------------------------- Item 16");
console.log("--- Objeto Form ---");
var objDadosForm = new Object();
function recebeDadosFormBoot(objFormElementos){
    console.log("Tipo de objeto: ", Object.prototype.toString.call(objFormElementos));
    objDadosForm.nomeBoot = nomeBoot.value;
    objDadosForm.emailBoot = emailBoot.value;
    objDadosForm.emailPromocionalCheckBoot = emailPromocionalCheckBoot.checked;
    objDadosForm.formaContatoRadioBoot = document.querySelectorAll("[name=formaContatoRadioBoot]");
        if(objDadosForm.formaContatoRadioBoot[0].checked){
            objDadosForm.formaContatoRadioBoot = "telefone";
        }else{
            objDadosForm.formaContatoRadioBoot = "email";
        }
    objDadosForm.estadoSelectBoot = estadoSelectBoot.value;
    console.log("Nome: ", objDadosForm.nomeBoot);
    console.log("Email: ", objDadosForm.emailBoot);
    console.log("Promocional: ", objDadosForm.emailPromocionalCheckBoot);
    console.log("Radio: ", objDadosForm.formaContatoRadioBoot);
    console.log("Estado: ", objDadosForm.estadoSelectBoot);

    console.log("--- Propriedades do objDadosForm ---");
    for(var p in objDadosForm){
        console.log(p);
    }

    preencherFormHtml(objDadosForm);
}

function preencherFormHtml(dados){
    document.getElementById("nomeHtml").value = dados.nomeBoot;
    document.getElementById("emailHtml").value = dados.emailBoot;
    document.getElementById("emailPromocionalCheckHtml").checked = dados.emailPromocionalCheckBoot;
    document.getElementById("estadoSelectHtml").value = dados.estadoSelectBoot;
    //campo radio
    if(dados.formaContatoRadioBoot == "email"){
        document.getElementById("formaContatoEmailRadioHtml").checked = true;
    }else{
        document.getElementById("formaContatoTelefoneRadioHtml").checked = true;
    }
}
