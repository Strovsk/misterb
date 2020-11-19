
class Particula{
    constructor(classe_container, quantidade){
        this.container_name = classe_container;
        this.universal_container = document.getElementById(this.container_name);

        this.item = [];

        this.quantidade_de_lumins = quantidade;

    }

    gerar_parOrdenado(){
        this.dimensoes = {'x': this.universal_container.offsetWidth, 'y': this.universal_container.offsetHeight};

        return {'x':Math.floor(Math.random() * this.dimensoes.x), 'y':Math.floor(Math.random() * this.dimensoes.y)};
    }

    // sortear_direcao(){
    //     this.direction = {
    //         'vertical':0,
    //         'horizontal':1,
    //         'diagonalA': 2,
    //         'diagonalB':3
    //     }
    // }

    // descrever_container(){
    //     console.log(this.universal_container.offsetHeight + 'px de altura e '+ this.universal_container.offsetWidth + 'px de largura');
    // }

    renderizar_lumins(){
        for (let i = 0; i < this.quantidade_de_lumins; i++) {
            this.par = this.gerar_parOrdenado()
            this.item[i] = document.createElement('div');
            this.item[i].className = 'particula';
            // this.item[i].style.left = `${this.par.x}px`;
            // this.item[i].style.top = `${this.par.y}px`;
            this.universal_container.appendChild(this.item[i]);
            
            
            this.update(this.item[i]);
        }
    }

    update(semente){
        // this.par = this.gerar_parOrdenado()
        this.direcao = Math.floor(Math.random() * 2);
        this.semente = semente;

        this.semente.animate(
            [
                {left:`${this.gerar_parOrdenado().x}px`, top:`${this.gerar_parOrdenado().y}px`, backgroundColor: 'rgba(255, 239, 69, 0)'}, 
                {top: `0px`, backgroundColor: 'transparent', backgroundColor: 'rgba(255, 239, 69, 1)'}
            ], 
                {duration: Math.floor((Math.random() * 2000) + 3000), iterations: Infinity});
        
        this.semente.style.left = `${this.par.x}px`;
        this.semente.style.top = `${this.par.y}px`;
    }
}