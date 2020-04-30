import React, { Component } from 'react'

import Picanto from '../../assets/picanto.jpg'

class Reply extends Component {
    constructor(props){
        super (props)
        this.state = {
            carros: [{"nome":"Azera V6","preco":85000}, {"nome":"Onix 1.6","preco":35000}, {"nome":"Fiesta 2.0","preco":52000}, {"nome":"C3 1.0","preco":22000}, {"nome":"Uno Fire","preco":11000}, {"nome":"Sentra 2.0","preco":53000}, {"nome":"Astra Sedan","preco":39000}, {"nome":"Vectra 2.0 Turbo","preco":37000}, {"nome":"Hilux 4x4","preco":90000}, {"nome":"Montana Cabine dupla","preco":57000}, {"nome":"Outlander 2.4","preco":99000}, {"nome":"Brasilia Amarela","preco":9500}, {"nome":"Omega Hatch","preco":8000}],
            fipe: [],
        }
        this.apiFipe = this.apiFipe.bind(this)
    }

    componentDidMount(){
        let state = this.state
        let stateCar = this.state.carros
        let carroPlus = stateCar.filter( stateCar => stateCar.preco > 30000)
        state.carros = carroPlus

        this.apiFipe()

        this.setState(state)
    }


    apiFipe() {
        let url = 'https://fipeapi.appspot.com/api/1/carros/veiculo/31/4142/2013-1.json'
        fetch(url)
        .then((response) => response.json())
        .then((result) => {
            this.setState({fipe: result})
        })
    }


    render() {
        return(
            <div className='container'>
                <div className='row center-align'>
                    <div className='card col s12 m5'>
                        <div className='card-title'>
                            <h3>Pergunta - 1</h3>
                        </div>
                        <div className='card-content'>
                            <div className='query center-align'>
                                <p>Escreva um JSON contendo a informação de UMA empresa e 3 Funcionários fazendo parte dessa empresa.</p>
                            </div>
                        </div>
                        <div className='reply'>
                            <p><span className='azul'>let</span> <span className='verm'>empresa</span> = &#123; 'proafuncionarios' :
                                [&#123;'João'&#125;, &#123;'Maria'&#125;, &#123;'José'&#125;] &#125; </p>
                        </div>
                    </div>
                    <div className='card col s12 m5 offset-m2'>
                        <div className='card-title'>
                            <h3>Pergunta - 2</h3>
                        </div>
                        <div className='card-content'>
                            <div className='query center-align'>
                                <p>Dado seletor, propriedade e valor, qual é a forma correta de declarar regra css?</p>
                            </div>
                        </div>
                        <div className='reply'>
                            <p><span className='azul'>seletor</span> &#123; propriedade: valor; &#125;</p>
                        </div>
                    </div>
                </div>
                <div className='row center-align'>
                    <div className='card col s12 m5'>
                        <div className='card-title'>
                            <h3>Pergunta - 3</h3>
                        </div>
                        <div className='card-content'>
                            <div className='query center-align'>
                                <p>Trabalhando com menus, que valores a propriedade Position pode receber?</p>
                            </div>
                        </div>
                        <div className='reply'>
                            <p>
                            <span className='azul'>position</span>: absolute e fixed
                            </p>
                            <p>
                            (depende do tipo de menu)
                            </p>
                        </div>
                    </div>                
                    <div className='card col s12 m5 offset-m2'>
                        <div className='card-title'>
                            <h3>Pergunta - 4</h3>
                        </div>
                        <div className='card-content'>
                            <div className='query center-align'>
                                <p>Que função é utilizada para exibir valores em uma página?</p>
                            </div>
                        </div>
                        <div className='reply'>
                            <button className='btn' onClick={() => alert('Hello')}>
                            alert(“Hello”)
                            </button>
                        </div>
                    </div>
                </div>
                <div className='row center-align'> 
                    <div className='card col s12 m5'>
                        <div className='card-title'>
                            <h3>Pergunta - 5</h3>
                        </div>
                        <div className='card-content'>
                            <div className='query center-align'>
                                <p>Quantas e quais são as TAGs utilizadas para criar uma lista DROPDOWN?</p>
                            </div>
                        </div>
                        <div className='reply'>
                            <p>
                                São 2 tags: <span className='azul'>&#60;select&#62;</span>, <span className='azul'>&#60;option&#62;</span>	
                            </p>
                        </div>                                  
                    </div>                        
                    <div className='card col s12 m5 offset-m2'>
                        <div className='card-title'>
                            <h3>Pergunta - 6</h3>
                        </div>
                        <div className='card-content'>
                            <div className='query center-align'>
                                <p>Declare e atribua um valor a uma variável em JavaScript.</p>
                            </div>
                        </div>
                        <div className='reply'>
                                <p>
                                <span className='azul'>let</span> <span className='verm'>Teste</span> = ‘Hello World’
                                </p>
                        </div>
                    </div>
                </div>
                <div className='row center-align'>  
                    <div className='card col s12 m12'>
                        <div className='card-title'>
                            <h3>Pergunta - 7</h3>
                        </div>
                        <div className='card-content'>
                            <div className='query center-align'>
                                <p>O que entende por Conhece ES6 (EcmaScript)?</p>
                            </div>
                        </div>
                        <div className='reply card-footer'>
                                <p>
                                    Novo formato de escrita do JS que revolucionou a linguagem, trazendo muitos conceitos e evoluções… o carro chefe das mudanças e migrações de tantos sistemas, sites e apps para o JS.
                                    Para leitura correta os navegadores ainda precisam de compiladores como o Babel.
                                </p>
                        </div>
                    </div>
                    <div className='card col s12 m12'>
                        <div className='card-title'>
                            <h3>Pergunta - 8</h3>
                        </div>
                        <div className='card-content'>
                            <div className='query'>
                                <p>Em js, dada a lista JSON abaixo, retorne somente os veículos com valores acima de R$ 30.000,00</p>
                                <br/>
                                <p>
                                const carros = [&#123;"nome":"Azera V6","preco":85000&#125;,
                                &#123;"nome":"Onix 1.6","preco":35000&#125;,
                                &#123;"nome":"Fiesta 2.0","preco":52000&#125;,
                                &#123;"nome":"C3 1.0","preco":22000&#125;,
                                &#123;"nome":"Uno Fire","preco":11000&#125;,
                                &#123;"nome":"Sentra 2.0","preco":53000&#125;,
                                &#123;"nome":"Astra Sedan","preco":39000&#125;,
                                &#123;"nome":"Vectra 2.0 Turbo","preco":37000&#125;,
                                &#123;"nome":"Hilux 4x4","preco":90000&#125;,
                                &#123;"nome":"Montana Cabine dupla","preco":57000&#125;,
                                &#123;"nome":"Outlander 2.4","preco":99000&#125;,
                                &#123;"nome":"Brasilia Amarela","preco":9500&#125;,
                                &#123;"nome":"Omega Hatch","preco":8000&#125;]
                                </p>
                            </div>
                        </div>
                        <div className='reply card-footer'>
                                <p>
                                <span className='azul'>let</span> <span className='verm'>carroPlus</span> = carros.filter(carros => carros.preco > 30000)
                                </p>
                                <h4>Retorno do Filter</h4>
                                {this.state.carros.map((carro) => {
                                    return(
                                        <div key={carro.nome}>
                                            <p><span className='azul'>{carro.nome}</span> - <span className='verm'>R$ {carro.preco}</span></p>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                    <div className='card col s12 m12'>
                        <div className='card-title'>
                            <h3>Consumo de API</h3>
                        </div>
                        <div className='card-content'>
                            <div className='query center-align'>
                                <p>API consumida - Tabela FIPE</p>
                                <p>Link: <a target='_blank' rel="noopener noreferrer" href='http://fipeapi.appspot.com/api/1/carros/veiculo/31/4142/2013-1.json'>Tabela Fipe</a></p>
                            </div>
                        </div>
                        <div className='reply card-footer'>
                                <img alt='imagem carro' className='card-image responsive-img' src={Picanto}></img>
                                <p>
                                    Carro: {this.state.fipe.name}
                                </p>
                                <p>
                                    Preço: {this.state.fipe.preco}
                                </p>
                                <p>
                                    Ano: {this.state.fipe.ano_modelo}
                                </p>
                                <p>
                                    Consulta: {this.state.fipe.referencia}   
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reply