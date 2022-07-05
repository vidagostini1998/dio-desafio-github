#Flex container:
    ##display
        -Torna a tag um elemento do tipo flex container, e assim automaticamente todos os seus filhos diretos desta tag, tornam-se em flex items.

    ##flex-direction 
        - É a propriedade que estabelece o eixo principal do container, definindo assim a direção que os flex items são colocados no flex container || Eixos: row(padrão): a direção do texto, esquerda para direita / row-reverse: sentido oposto a direção do texto / column: ordenação de cima para baixo, em coluna unica / column-reverse: ordenação inversa, de baixo para cima/

    ##flex-wrap 
        - É a propriedade que define se os itens devem ou não quebrar a linha. Por padrão eles não quebram linhas, isso faz com que os flex itens sejam compactados alem do limite do conteudo. || nowrap: é o padrão, não permite a quebra de linha / wrap: permite a quebra de linha assim que um dos flex itens não puder mais ser compactado / wrap-reverse: permite a quebra de linha assim que um dos flex itens não puder mais ser compactado, porem na direção contraria da linha, acima/

    ##flex-flow 
        - É um atalho para as propriedades flex-direction e flex-wrap. Porém seu uso não é tão comum, visto que, quando mudamos o flex-direction para column, mantemos o padrão do flex-wrap que é nowrap.

    ##justify-content 
        - Essa propriedade vai se encarregar de alinhar os itens dentro do container de acordo com a direção pretendida e tratar da distribuição de espaçamento entre eles || flex-start: inicio do container / flex-end: final do container / center: ao centro do container / space-between: cria um espaçamento igual entre os elementos / space-around: os espaçamentos do meio são duas vezes maiores que o inicial e final/

    ##align-items 
        - Trata do alinhamento dos flex itens de acordo com o eixo do container. O alinhamento é diferente para quando os itens estão em colunas ou linhas. Permite o alinhamento central no eixo vertical || center: alinhamento dos itens ao centro / stretch: padrão, e os flex itens cresçam igualmente / flex-start: alinhamento dos itens no inicio / flex-end: alinhamento dos itens no final / baseline: alinhamento de acordo com a linha base da tipografia dos itens/

    ##align-content 
        - É a propriedade responsavel por tratar o alinhamento das linhas do container em relação ao eixo vertical do container. O container utiliza quebra de linhas. A altura do container seja maior que a soma das linhas dos itens. || center: alinhamento dos itens ao centro / stretch: é o padrão e os flex itens crescem igualmente / flex-start: alinhamento dos itens no inicio / flex-end: alinhamento dos itens no final / space-between: cria um espaçamento igual entre os elementos / space-around: os espaçamentos do meio são duas vezes maiores que o inicial e final

#Flex item:
    ##flex-grow
        - Define a proporcionalidade de crescimentos dos itens, respeitando o tamanho de seus conteudos internos.

    ##flex-basis
        - É a propriedade que estabelece o tamanho inicial do item antes das distribuições de espaço restante dentro dele, usando como base o conteudo interno disposto. || auto: caso o item não tenha tamanho, este será proporcional ao conteudo do item / px,%,em,...:são valores exatos previamente definidos / 0(zero): terá relação com a definição do flex-grow/

    ##flex-shrink
        - É a propriedade que estabelece a capacidade de redução ou compressão do tamanho de um item.

    ##flex
        - Esta propriedade é um atalho ou abreviação de escrita para as propriedades: grow, shrink e basis.

    ##order
        - Relacionada aos items

    #align-self
        - É a propriedade que estabelece o alinhamento de modo individual sobre um determinado item. || auto: valor padrão, ira respeitas a definição de align-items do container / flex-start: ao inicio do container / flex-end: ao final do container / center: relativo ao centro de acordo com o eixo / stretch: ocupa todo os espaçoes relativo / baseline: utiliza a linha base da tipografia/

