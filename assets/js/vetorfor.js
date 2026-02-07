

        function exercicio01() {
            // Criar lista vazia
            let smartphones = [];

            // Solicitar o nome de 5 smartphones
            for (let i = 0; i < 5; i++) {
                let nomeSmartphone = prompt(`Digite o nome do ${i + 1}º smartphone:`);
                smartphones.push(nomeSmartphone);
            }

            // Apresentar o nome dos 5 smartphones
            let mensagem = "📱 LISTA DE SMARTPHONES\n";
            mensagem += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
            
            for (let i = 0; i < smartphones.length; i++) {
                mensagem += `${i + 1}. ${smartphones[i]}\n`;
            }

            alert(mensagem);
        }

        function exercicio02() {
            // Criar listas vazias
            let smartphones = [];
            let quantidadeEstoque = [];

            // Solicitar nome e quantidade de estoque de 5 smartphones
            for (let i = 0; i < 5; i++) {
                let nomeSmartphone = prompt(`Digite o nome do ${i + 1}º smartphone:`);
                let quantidade = parseInt(prompt(`Digite a quantidade em estoque de ${nomeSmartphone}:`));
                
                smartphones.push(nomeSmartphone);
                quantidadeEstoque.push(quantidade);
            }

            // Apresentar smartphones com quantidade em estoque
            let mensagem = "📱 SMARTPHONES COM ESTOQUE\n";
            mensagem += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
            
            for (let i = 0; i < smartphones.length; i = i +1) {
                mensagem += `${i + 1}. ${smartphones[i]}\n`;
                mensagem += `   📊 Estoque: ${quantidadeEstoque[i]} unidades\n\n`;
            }

            alert(mensagem);
        }


        // ═══════════════════════════════════════════════════════════════════════════
        // EXERCÍCIO 3: Adicionar status do estoque
        // ═══════════════════════════════════════════════════════════════════════════

        function exercicio03() {
            // Criar listas vazias
            let smartphones = [];
            let quantidadeEstoque = [];

            // Solicitar nome e quantidade de estoque de 5 smartphones
            for (let i = 0; i < 5; i++) {
                let nomeSmartphone = prompt(`Digite o nome do ${i + 1}º smartphone:`);
                let quantidade = parseInt(prompt(`Digite a quantidade em estoque de ${nomeSmartphone}:`));
                
                smartphones.push(nomeSmartphone);
                quantidadeEstoque.push(quantidade);
            }

            // Apresentar smartphones com status
            let mensagem = "📱 SMARTPHONES COM STATUS\n";
            mensagem += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
            
            for (let i = 0; i < smartphones.length; i++) {
                let status = '';
                
                
                // Determinar status baseado na quantidade
                if (quantidadeEstoque[i] >= 10) {
                    status = 'Elevado';
                    emoji = '🟢';
                } else if (quantidadeEstoque[i] >= 7) {
                    status = 'Estável';
                    emoji = '🟡';
                } else if (quantidadeEstoque[i] >= 4) {
                    status = 'Preocupante';
                    emoji = '🟠';
                } else if (quantidadeEstoque[i] >= 1) {
                    status = 'Urgente';
                    emoji = '🔴';
                } else {
                    status = 'Esgotado';
                    emoji = '⛔';
                }
                
                mensagem += `${i + 1}. ${smartphones[i]}\n`;
                mensagem += `   📊 Estoque: ${quantidadeEstoque[i]} unidades\n`;
                mensagem += `   Status: ${emoji} ${status}\n\n`;
            }

            alert(mensagem);
        }


        // ═══════════════════════════════════════════════════════════════════════════
        // EXERCÍCIO 4: Apresentar a menor quantidade de estoque
        // ═══════════════════════════════════════════════════════════════════════════

        function exercicio04() {
            // Criar listas vazias
            let smartphones = [];
            let quantidadeEstoque = [];

            // Solicitar nome e quantidade de estoque de 5 smartphones
            for (let i = 0; i < 5; i++) {
                let nomeSmartphone = prompt(`Digite o nome do ${i + 1}º smartphone:`);
                let quantidade = parseInt(prompt(`Digite a quantidade em estoque de ${nomeSmartphone}:`));
                
                smartphones.push(nomeSmartphone);
                quantidadeEstoque.push(quantidade);
            }

            // Encontrar a menor quantidade de estoque
            let menorQuantidade = quantidadeEstoque[0];
            
            for (let i = 1; i < quantidadeEstoque.length; i++) {
                if (quantidadeEstoque[i] < menorQuantidade) {
                    menorQuantidade = quantidadeEstoque[i];
                }
            }

            // Apresentar smartphones com status
            let mensagem = "📱 SMARTPHONES COM STATUS\n";
            mensagem += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
            
            for (let i = 0; i < smartphones.length; i++) {
                let status = '';
                let emoji = '';
                
                if (quantidadeEstoque[i] >= 10) {
                    status = 'Elevado';
                    emoji = '🟢';
                } else if (quantidadeEstoque[i] >= 7) {
                    status = 'Estável';
                    emoji = '🟡';
                } else if (quantidadeEstoque[i] >= 4) {
                    status = 'Preocupante';
                    emoji = '🟠';
                } else if (quantidadeEstoque[i] >= 1) {
                    status = 'Urgente';
                    emoji = '🔴';
                } else {
                    status = 'Esgotado';
                    emoji = '⛔';
                }
                
                mensagem += `${i + 1}. ${smartphones[i]}\n`;
                mensagem += `   📊 Estoque: ${quantidadeEstoque[i]} unidades\n`;
                mensagem += `   Status: ${emoji} ${status}\n\n`;
            }

            // Adicionar informação da menor quantidade
            mensagem += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
            mensagem += `📊 MENOR QUANTIDADE: ${menorQuantidade} unidades`;

            alert(mensagem);
        }


        // ═══════════════════════════════════════════════════════════════════════════
        // EXERCÍCIO 5: Apresentar o nome do produto com maior estoque
        // ═══════════════════════════════════════════════════════════════════════════

        function exercicio05() {
            // Criar listas vazias
            let smartphones = [];
            let quantidadeEstoque = [];

            // Solicitar nome e quantidade de estoque de 5 smartphones
            for (let i = 0; i < 5; i++) {
                let nomeSmartphone = prompt(`Digite o nome do ${i + 1}º smartphone:`);
                let quantidade = parseInt(prompt(`Digite a quantidade em estoque de ${nomeSmartphone}:`));
                
                smartphones.push(nomeSmartphone);
                quantidadeEstoque.push(quantidade);
            }

            // Encontrar o produto com maior estoque
            let maiorQuantidade = quantidadeEstoque[0];
            let indiceMaior = 0;
            
            for (let i = 1; i < quantidadeEstoque.length; i++) {
                if (quantidadeEstoque[i] > maiorQuantidade) {
                    maiorQuantidade = quantidadeEstoque[i];
                    indiceMaior = i;
                }
            }

            // Apresentar smartphones com status
            let mensagem = "📱 SMARTPHONES COM STATUS\n";
            mensagem += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
            
            for (let i = 0; i < smartphones.length; i++) {
                let status = '';
                let emoji = '';
                
                if (quantidadeEstoque[i] >= 10) {
                    status = 'Elevado';
                    emoji = '🟢';
                } else if (quantidadeEstoque[i] >= 7) {
                    status = 'Estável';
                    emoji = '🟡';
                } else if (quantidadeEstoque[i] >= 4) {
                    status = 'Preocupante';
                    emoji = '🟠';
                } else if (quantidadeEstoque[i] >= 1) {
                    status = 'Urgente';
                    emoji = '🔴';
                } else {
                    status = 'Esgotado';
                    emoji = '⛔';
                }
                
                mensagem += `${i + 1}. ${smartphones[i]}\n`;
                mensagem += `   📊 Estoque: ${quantidadeEstoque[i]} unidades\n`;
                mensagem += `   Status: ${emoji} ${status}\n\n`;
            }

            // Adicionar informação do maior estoque
            mensagem += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
            mensagem += `🏆 MAIOR ESTOQUE:\n`;
            mensagem += `   ${smartphones[indiceMaior]}\n`;
            mensagem += `   ${maiorQuantidade} unidades`;

            alert(mensagem);
        

        function exercicio06() {
        
            let smartphones = [];
            let quantidadeEstoque = [];
            let precosUnitarios = [];

            // Solicitar nome, quantidade e preço de 5 smartphones
            for (let i = 0; i < 5; i++) {
                let nomeSmartphone = prompt(`Digite o nome do ${i + 1}º smartphone:`);
                let quantidade = parseInt(prompt(`Digite a quantidade em estoque de ${nomeSmartphone}:`));
                let preco = parseFloat(prompt(`Digite o preço unitário de ${nomeSmartphone}:`));
                
                smartphones.push(nomeSmartphone);
                quantidadeEstoque.push(quantidade);
                precosUnitarios.push(preco);
            }

            // Encontrar o produto com maior estoque
            let maiorQuantidade = quantidadeEstoque[0];
            let indiceMaior = 0;
            
            for (let i = 1; i < quantidadeEstoque.length; i++) {
                if (quantidadeEstoque[i] > maiorQuantidade) {
                    maiorQuantidade = quantidadeEstoque[i];
                    indiceMaior = i;
                }
            }

            // Encontrar a menor quantidade
            let menorQuantidade = quantidadeEstoque[0];
            
            for (let i = 1; i < quantidadeEstoque.length; i++) {
                if (quantidadeEstoque[i] < menorQuantidade) {
                    menorQuantidade = quantidadeEstoque[i];
                }
            }

            // Calcular valor total geral
            let valorTotalGeral = 0;
            for (let i = 0; i < smartphones.length; i++) {
                valorTotalGeral += quantidadeEstoque[i] * precosUnitarios[i];
            }

            // Apresentar smartphones completos
            let mensagem = "📱 LISTA COMPLETA DE SMARTPHONES\n";
            mensagem += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
            
            for (let i = 0; i < smartphones.length; i++) {
                let status = '';
                let emoji = '';
                
                if (quantidadeEstoque[i] >= 10) {
                    status = 'Elevado';
                    emoji = '🟢';
                } else if (quantidadeEstoque[i] >= 7) {
                    status = 'Estável';
                    emoji = '🟡';
                } else if (quantidadeEstoque[i] >= 4) {
                    status = 'Preocupante';
                    emoji = '🟠';
                } else if (quantidadeEstoque[i] >= 1) {
                    status = 'Urgente';
                    emoji = '🔴';
                } else {
                    status = 'Esgotado';
                    emoji = '⛔';
                }
                
                let valorTotalEstoque = quantidadeEstoque[i] * precosUnitarios[i];
                
                mensagem += `${i + 1}. ${smartphones[i]}\n`;
                mensagem += `   💰 Preço: R$ ${precosUnitarios[i].toFixed(2)}\n`;
                mensagem += `   📊 Estoque: ${quantidadeEstoque[i]} unidades\n`;
                mensagem += `   💵 Valor Total: R$ ${valorTotalEstoque.toFixed(2)}\n`;
                mensagem += `   Status: ${emoji} ${status}\n\n`;
            }

    
            mensagem += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
            mensagem += "📈 ESTATÍSTICAS\n";
            mensagem += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
            mensagem += `🏆 Maior Estoque:\n   ${smartphones[indiceMaior]} (${maiorQuantidade} un.)\n\n`;
            mensagem += `📊 Menor Quantidade: ${menorQuantidade} un.\n\n`;
            mensagem += `💰 Valor Total em Estoque:\n   R$ ${valorTotalGeral.toFixed(2)}`;

            alert(mensagem);
        }
    }