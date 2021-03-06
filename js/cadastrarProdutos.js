//Essa função serve para adicionar produtos na key de produtos com um id especifico

//FIXME: Função não testada 100%. possibilidade de erros
function addProdutos(nome, tipo, id, estoque, preco, descricao, cor, imgs) {

    //verifica se todos os parametros são validos
    if (!nome && !tipo && !id && !estoque && !preco && !descricao && !cor && !imgs) {
        return {
            "status": false,
            "message": "Existem dados nulos ou não existentes"
        };
    }

    //Pega todos os produtos
    let prods = JSON.parse(localStorage.getItem("produtos"));

    //Se não existir produtos, declara um vetor vazio e adiciona o produto sem nenhuma verificação, pois é desnecessario
    if (!prods) {
        prods = [];
        prods.push({
            "nome": nome,
            "tipo": tipo,
            "id": id,
            "estoque": estoque,
            "preco": preco,
            "dados": {
                "descricao": descricao,
                "cor": cor,
                "imgs": imgs
            }
        });

        localStorage.setItem("produtos", JSON.stringify(prods));

        return {
            "status": true,
            "message": `Produto adivionado com sucesso`
        };
    }

    //Se o produto existir, faz a verificação de id unicas
    else {
        for (let i in prods) {

            //Se a id já existir, retorna false
            if (id == prods[i].id) {
                return {
                    "status": false,
                    "message": "O id desse produto já existe"
                };
            }


        }

        //Se não existir, adiciona todos os dados no vetor de produtos
        prods.push({
            "nome": nome,
            "tipo": tipo,
            "id": id,
            "estoque": estoque,
            "preco": preco,
            "dados": {
                "descricao": descricao,
                "cor": cor,
                "imgs": imgs
            }
        });

        localStorage.setItem("produtos", JSON.stringify(prods));

        return {
            "status": true,
            "message": `Produto adivionado com sucesso`
        };

    }
}

//Essa função serve para adionar produtos com um numero de id automatico
function addProdutos_AutoId(nome, tipo, estoque, preco, descricao, cor, imgs) {
    //verifica se todos os parametros são validos
    if (!nome && !tipo && !estoque && !preco && !descricao && !cor && !imgs) {
        return {
            "status": false,
            "message": "Existem dados nulos ou não existentes"
        };
    }

    //Pega todos os produtos
    let prods = JSON.parse(localStorage.getItem("produtos"));

    //Se não existir nenhum produto, adiciona o produto sem nenhuma verificação de erro, e com o id 0
    if (!prods) {
        prods = [];
        prods.push({
            "nome": nome,
            "tipo": tipo,
            "id": 0,
            "estoque": estoque,
            "preco": preco,
            "dados": {
                "descricao": descricao,
                "cor": cor,
                "imgs": imgs
            }
        });

        localStorage.setItem("produtos", JSON.stringify(prods));

        return {
            "status": true,
            "message": `Produto adivionado com sucesso`
        };
    }

    //caso exista, vai começar a procura por um id valido
    else {

        //aqui começa a proucura da id
        let idCont = 1;
        let idValid = true;

        do {

            idValid = true;


            for (let i in prods) {
                //se a id já existir, para o for e coloca a $idValid como false para o while poder continuar

                if (idCont == prods[i].id) {
                    idValid = false;
                    idCont++;
                    break;
                }
            }

        } while (!idValid);

        prods.push({
            "nome": nome,
            "tipo": tipo,
            "id": idCont,
            "estoque": estoque,
            "preco": preco,
            "dados": {
                "descricao": descricao,
                "cor": cor,
                "imgs": imgs
            }
        });

        localStorage.setItem("produtos", JSON.stringify(prods));

    }
}

function cadastrar() {
    if (prompt("Digite a senha de admistrador") == "2553") {

        /* Declaros sempre essa variavel $ por ela ser muito usada tanto para pegar elementos da pagina tanto para colocarmos lá
        Tiramos a ideia de usar o $ do Jquerry, pois estamos muitos famiarizados em usar esse recurso envolvendo o $ do propio Jquerry */
        var $ = (element) => {
            return document.querySelector(element).value;
        };

        let name = $("#nameI");
        let tipo = $("#tipoI");
        let estoque = $("#estoqueI");
        let preco = $("#precoI");
        let descricao = $("#descriçãoI");
        let cor = $("#corI");
        let img = $("#imgI");

        if (!name && !tipo && !id && !estoque && !preco && !descricao && !cor && !img) {
            alert("Alguns campos não foram digitados");
        }
        else {
            var logg = addProdutos_AutoId(name, tipo, estoque, preco, descricao, cor, img);
            alert("Produto cadastrado com sucesso");
        }

    }
    else {
        alert("Senha incoreta");
    }
}
