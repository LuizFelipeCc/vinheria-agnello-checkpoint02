function validarNumero(mensagem) {
    let valor;
    do {
        valor = prompt(mensagem);
        if (valor === null) {
            return null;
        }
        valor = parseInt(valor);
        if (isNaN(valor) || valor < 0) {
            alert("Entrada inválida. Por favor, insira um número válido.");
        }
    } while (isNaN(valor) || valor < 0);
    return valor;
}

function validarTexto(mensagem) {
    let texto
    do {
        texto = prompt(mensagem);
        if (texto === null)
            return null;
        if (texto === "") {
            alert("Entrada inválida. Por favor, insira um nome válido.");
        }
    } while (texto === "");
    return texto;
}


function verificarEstoqueBaixo(quantidade) {
    return quantidade < 5;
}

function classificarVinho(safra) {
    let anoAtual = 2026;
    let idade = anoAtual - safra;
    if (idade <= 3) {
        return "Jovem";
    } else if (idade <= 7) {
        return "Amadurecido";
    } else {
        return "Antigo";
    }
}

function registrarConsoleAlert(nome, quantidade, safra, tipo, estoqueBaixo){
    let statusEstoque;
    if (estoqueBaixo) {
        statusEstoque = "ALERTA: Estoque Baixo!";
    } else {
        statusEstoque = "Estoque Normal.";
    }
    console.log(`Nome do Vinho: ${nome}`);
    console.log(`Quantidade em Estoque: ${quantidade}`);
    console.log(`Safra: ${safra}`);
    console.log(`Tipo: ${tipo}`);
    alert(`Vinho cadastrado: ${nome}\nTipo: ${tipo}\nSafra: ${safra}\nQuantidade: ${quantidade}\n${statusEstoque}`);
}

function iniciarSistema() {
    let totalCadastros = 0;
    let totalEstoqueBaixo = 0;

    let nome1 = "", nome2 = "", nome3 = "", nome4 = "", nome5 = "";
    let quant1 = 0, quant2 = 0, quant3 = 0, quant4 = 0, quant5 = 0;
    let safra1 = 0, safra2 = 0, safra3 = 0, safra4 = 0, safra5 = 0;
    alert("Bem-vindo ao sistema de cadastro de vinhos!\nDigite \"sim\" para continuar");
    let continuar = "sim"
    while (continuar.toLowerCase() === "sim" && totalCadastros < 5) {
        totalCadastros++;
        let nome = validarTexto("Digite o nome do vinho:");
        if (nome === null) {
            break;
        }
        let quantidade = validarNumero("Digite a quantidade em estoque do vinho:");
        if (quantidade === null) {
            break;
        }
        let safra = validarNumero("Digite a safra do vinho:")   ;
        if (safra === null) {
            break;
        }
        let estoqueBaixo = verificarEstoqueBaixo(quantidade);
        if (estoqueBaixo) {
            totalEstoqueBaixo++;
        }
        let classificacao = classificarVinho(safra);
        if (totalCadastros === 1) { nome1 = nome; quant1 = quantidade; safra1 = safra; }
        else if (totalCadastros === 2) { nome2 = nome; quant2 = quantidade; safra2 = safra; }
        else if (totalCadastros === 3) { nome3 = nome; quant3 = quantidade; safra3 = safra; }
        else if (totalCadastros === 4) { nome4 = nome; quant4 = quantidade; safra4 = safra; }
        else if (totalCadastros === 5) { nome5 = nome; quant5 = quantidade; safra5 = safra; }
        registrarConsoleAlert(nome, quantidade, safra, classificacao, estoqueBaixo);

        if (totalCadastros < 5) {
            continuar = prompt("Deseja cadastrar outro vinho? (sim/não)");
            if (continuar === null) {
                break;
            } else {
                alert("Limite máximo de 5 cadastros.");
            }
        }
    }       
    let vinhoMaisAntigoNome = "Nenhum";
    let menorSafra = 9999;
    if (totalCadastros >= 1 && safra1 < menorSafra) { menorSafra = safra1; vinhoMaisAntigoNome = nome1; }
    if (totalCadastros >= 2 && safra2 < menorSafra) { menorSafra = safra2; vinhoMaisAntigoNome = nome2; }
    if (totalCadastros >= 3 && safra3 < menorSafra) { menorSafra = safra3; vinhoMaisAntigoNome = nome3; }
    if (totalCadastros >= 4 && safra4 < menorSafra) { menorSafra = safra4; vinhoMaisAntigoNome = nome4; }
    if (totalCadastros >= 5 && safra5 < menorSafra) { menorSafra = safra5; vinhoMaisAntigoNome = nome5; }
    let relatorioResultado = `Relatório Final do Estoque:\nTotal de cadastros realizados: ${totalCadastros}\nTotal de vinhos com estoque baixo: ${totalEstoqueBaixo}\nVinho mais antigo: ${vinhoMaisAntigoNome} (Safra: ${menorSafra})`;
    console.log(relatorioResultado);
    alert(relatorioResultado);

    const cadastros = [
        {
            nome: nome1,
            safra: safra1,
            quantidade: quant1,
            tipo: classificarVinho(safra1)
        },
        {
            nome: nome2,
            safra: safra2,
            quantidade: quant2,
            tipo: classificarVinho(safra2)
        },
        {
            nome: nome3,
            safra: safra3,
            quantidade: quant3,
            tipo: classificarVinho(safra3)
        },
        {
            nome: nome4,
            safra: safra4,
            quantidade: quant4,
            tipo: classificarVinho(safra4)
        },
        {
            nome: nome5,
            safra: safra5,
            quantidade: quant5,
            tipo: classificarVinho(safra5)
        }
    ];
    let caixaCadastro = document.getElementById("lista-cadastros");
    if (caixaCadastro){
        caixaCadastro.innerHTML = "";
        cadastros.forEach((cadastro) => {
            if (cadastro.nome !== "") {
                caixaCadastro.innerHTML += `
                    <div class='card'>
                        <h2>${cadastro.nome}</h2>
                        <p><strong>Safra:</strong> ${cadastro.safra}</p>
                        <p><strong>Quantidade:</strong> ${cadastro.quantidade}</p>
                        <p><strong>Tipo:</strong> ${cadastro.tipo}</p>
                        <hr>
                    </div>
                `;
            }
        });
    }
}