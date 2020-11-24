function maxim(indexLetter, status='on'){
    if(status=='on'){
        document.getElementById('iframeGallery').classList.add('stay');
        document.getElementById('iframeGallery').contentWindow.document.getElementById('extImage').style.backgroundImage = `url("../images/galleryPage2/image${indexLetter}.jpg")`;
        if(indexLetter=='A'){
            document.getElementById('iframeGallery').contentWindow.document.getElementById('extImage').children[0].innerHTML = 'Temos um time<br>preparado<br>&nbsp;&nbsp;&nbsp;&nbsp;para atendê-lo';
        }else if(indexLetter=='B'){
            document.getElementById('iframeGallery').contentWindow.document.getElementById('extImage').children[0].innerHTML = 'Local Agradável';
        }else if(indexLetter=='C'){
            document.getElementById('iframeGallery').contentWindow.document.getElementById('extImage').children[0].innerHTML = 'Cozinha de primeira';
        }
    }
    else if(status=='off'){
        window.parent.document.getElementById('iframeGallery').classList.remove('stay');
    }
}


function scrollAnim(){
    const scrollElements = document.querySelectorAll('[data-scroll]');
    var MasterTop = window.pageYOffset + (window.innerHeight * 4/5);

    scrollElements.forEach((element)=>{
        // console.log('Aparecendo: '+element.offsetTop);
        if(MasterTop > element.offsetTop){
            element.classList.add('stay');
            // console.log('ligou');
        }
        else{
            element.classList.remove('stay');
        }
    });
    
    if(MasterTop > document.getElementById('calendard').offsetTop){
        changeStatusTimer('open');
    }
    else{
        changeStatusTimer('close');
    }
    // console.log('\nDistância até o topo:'+MasterTop);
    // console.log(scrollElements);
}

if(document.querySelectorAll('[data-scroll]').length == 0){
    window.addEventListener('scroll', ()=>{
    scrollAnim();
    });
}

var current_index = 0;
function changeGalleryMin(where){
    var containerElement = document.getElementById('gallery-phone');
    var correspondente = {0:'A', 1:'B', 2:'C'};
    // var prev_index = current_index;

    if(where == 'right'){
        current_index = current_index+1;
        if(current_index==3){
            current_index = 0;
        }
    } else if(where == 'left'){
        current_index = current_index-1;
        if(current_index==-1){
            current_index = 2;
        }
    }
    // console.log(current_index);
    // console.log(`image${correspondente[prev_index]} Para image${correspondente[current_index]}`);
    containerElement.style.backgroundImage = 'url("../images/galleryPage2/image'+correspondente[current_index]+'.jpg")';
}

window.onresize = ()=>{
    if(window.innerWidth > 660){
        document.getElementById('gallery-phone').style.background = 'transparent';
    }
    else{
        changeGalleryMin('left');
    }
}
