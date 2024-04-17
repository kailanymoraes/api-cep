document.querySelector('#cep').addEventListener('blur', async (event) => {

    //capturando valor do campo cep e armazenamento na variavel cep
    let cep = document.querySelector('#cep').value;

    let results = await fetch(`https://viacep.com.br/ws/${cep}/json`);

    //verifica se a resposta obtida do fetch foi concluida que no caso seria 200
    //convertendo os resultados para json
    let json = await results.json();

    if (json.erro != true) {

        showInfo(json)
    } else if (json.erro === true) {
        alert('CEP inválido')
    }
})

function showInfo(json) {

    document.querySelector('#uf').value = `${json.uf}`;
    document.querySelector('#cidade').value = `${json.localidade}`;
    document.querySelector('#logradouro').value = `${json.logradouro}`;
    document.querySelector('#bairro').value = `${json.bairro}`;
}










/******** jquery *********/
/*$("#btn").on("click", function(){
    var numCep = $("#cep").val();
    var url = "https://viacep.com.br/ws/"+numCep+"/json";

    $.ajax({
        url: url,
        type: "get",
        dataType: "json",

        success:function(dados){
            console.log(dados);
            $("#uf").val(dados.uf);
            $("#cidade").val(dados.localidade);
            $("#logradouro").val(dados.logradouro);
            $("#bairro").val(dados.bairro);
        }
    })


})*/