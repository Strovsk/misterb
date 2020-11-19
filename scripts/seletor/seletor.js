var dotNow = 0;

function setIndexDot(walkTo='right', autoChange=false, timingSec=2){
    if(walkTo=='right'){
        seletor.resetAutoChange();
        
        dotNow+=1;
        if(dotNow>=seletor.number_of_selectors){
            seletor.offDot(dotNow-1);
            dotNow=0;
            seletor.onDot(dotNow);

            if (seletor.containerGallery.getBoundingClientRect().width>700){
                seletor.changeImage(dotNow+1, 'background-', '');
            }
            else{
                seletor.changeImage(dotNow+1, 'background-', '1');
            }
            // seletor.changeImage(dotNow+1, 'background-');
        }
        else{
            seletor.offDot(dotNow-1);
            seletor.onDot(dotNow);
            
            if (seletor.containerGallery.getBoundingClientRect().width>700){
                seletor.changeImage(dotNow+1, 'background-', '');
            }
            else{
                
                seletor.changeImage(dotNow+1, 'background-', '1');
            }
            // seletor.changeImage(dotNow+1, 'background-');
        }
        
    }
    else if(walkTo=='left'){
        seletor.resetAutoChange();
        
        dotNow-=1;
        if(dotNow<0){
            seletor.offDot(dotNow+1);
            dotNow=seletor.number_of_selectors-1;
            seletor.onDot(dotNow);
            
            
            if (seletor.containerGallery.getBoundingClientRect().width>700){
                seletor.changeImage(dotNow+1, 'background-', '');
            }
            else{
                seletor.changeImage(dotNow+1, 'background-', '1');
            }
            // seletor.changeImage(dotNow+1, 'background-');
        }
        else{
            seletor.offDot(dotNow+1);
            seletor.onDot(dotNow);
            
            if (seletor.containerGallery.getBoundingClientRect().width>700){
                seletor.changeImage(dotNow+1, 'background-', '');
            }
            else{
                seletor.changeImage(dotNow+1, 'background-', '1');
            }
        }
    }
    
    if(autoChange){
        seletor.autoChange(timingSec);
    }
}


class Seletor{
    constructor(number_of_selectors=5, defaultOnDot=3, IDgalleryContainer, sheetGallery){
        this.number_of_selectors = number_of_selectors;
        this.defaultOnDot = defaultOnDot-1;
        this.IDgalleryContainer = IDgalleryContainer;
        this.universal_container = document.getElementById(this.IDgalleryContainer);
        this.containerGallery = document.getElementById(sheetGallery);
    }
    
    renderDots(){
        this.dots = []
        for(let i=0; i<this.number_of_selectors; i++){
            this.dots[i] = document.createElement('div');
            this.dots[i].className = 'seletor-dot';
            this.universal_container.appendChild(this.dots[i]);
        }
        this.onDot(this.defaultOnDot);
        if (this.containerGallery.getBoundingClientRect().width>700){
            this.changeImage(this.defaultOnDot+1, 'background-', '');
        }
        else{
            this.changeImage(this.defaultOnDot+1, 'background-', '1');
        }
        
        dotNow = this.defaultOnDot;
    }
    
    onDot(dotIndex){
        this.dots[dotIndex].classList.add('selecionado');
    }
    
    offDot(dotIndex){
        
        this.dots[dotIndex].classList.remove('selecionado');
    }
    
    changeImage(imageIndex, defaultIdentifier, min){
        
        this.pathImage = `${defaultIdentifier}${min}${imageIndex}`;
        // console.log(`Inicio da iteração\nQuantidade de classes na lista :${this.containerGallery.classList.length}\nIndex da imagem: ${imageIndex}\nNome da classe atual(na variável): ${this.pathImage}\nNome da ultima classe atual(na lista de classes): ${this.containerGallery.classList[this.containerGallery.classList.length-1]}`);
        
        if(this.containerGallery.classList.length == 2){
            this.containerGallery.classList.remove(this.containerGallery.classList[this.containerGallery.classList.length-1]);
            // console.log(`Quantidade de classes na lista :${this.containerGallery.classList.length}\nIndex da imagem: ${imageIndex}\nNome da classe atual(na variável): ${this.pathImage}\nNome da ultima classe atual(na lista de classes): ${this.containerGallery.classList[this.containerGallery.classList.length-1]}\n\n Fim da Iteração`);
        }
        
        this.containerGallery.classList.add(this.pathImage);
    }

    autoChange(timingSec){
        this.intervalToChangeNext = setInterval(()=>{
            if(dotNow==this.number_of_selectors-1){
                this.offDot(dotNow);
                dotNow = 0;
                this.onDot(dotNow);
                if (this.containerGallery.getBoundingClientRect().width>700){
                    this.changeImage(dotNow+1, 'background-', '');
                }
                else{
                    this.changeImage(dotNow+1, 'background-', '1');
                }
            }
            else{
                this.offDot(dotNow);
                dotNow += 1;
                this.onDot(dotNow);
                // this.changeImage(dotNow+1, 'background-');
                if (this.containerGallery.getBoundingClientRect().width>700){
                    this.changeImage(dotNow+1, 'background-', '');
                }
                else{
                    this.changeImage(dotNow+1, 'background-', '1');
                }
            }
            // console.log(dotNow+1);
        }
        , timingSec * 1000);
    }
    
    resetAutoChange(){
        clearInterval(this.intervalToChangeNext);
    }
}