// $.ajaxSetup({
// 	cache = false
// });

class animatedTimer{
    constructor(){
		this.universalContainer = document.getElementById('regressor-container');
		this.pointer = document.getElementById('ponteiros');
		this.border = document.getElementById('borda-interna');
		this.textArea = document.getElementById('textArea');
		this.timerBuffer = 0;
	}

	turnIn(day, hour, min, sec){
		// console.log(this.universalContainer.classList.length);
		if(this.universalContainer.classList.length == 1){
			// console.log('executando expandir');
			// this.turnOn();
			this.timer(day, hour, min, sec);
			// console.log('expandindo TurnIn\n');
		}
	}
	
    turnOn(){
		this.universalContainer.classList.add('On');
        this.pointer.classList.add('giro');
        this.border.classList.add('anim');
		this.textArea.style.display= 'block';
	}
    
    turnOff(){
		// console.log('recolhendo\n'+'nome da classe: ' +this.universalContainer.classList[this.universalContainer.classList.length-1]+'\ntamanho: '+this.universalContainer.classList.length);
		if(this.universalContainer.classList[this.universalContainer.classList.length-1] == 'Today'){
			this.universalContainer.classList.remove('Today');
		}
		else{
			this.universalContainer.classList.remove('On');
		}
		// console.log('tamanho da lista: ' + this.universalContainer.classList.length);
        this.pointer.classList.remove('giro');
        this.border.classList.remove('anim');
		this.textArea.style.display = 'none';
    }
    
    timer(days=0, hours=0, mins=0, sec=0){
		this.date = new Date();

		this.timer_days = Math.abs(this.date.getDate() - days);
		this.timer_hours = Math.abs(this.date.getHours() - hours);
		this.timer_mins = Math.abs(this.date.getMinutes() - mins);
		this.timer_sec = Math.abs(this.date.getSeconds() - sec);


		this.timerBuffer = setInterval(()=>{
			// console.log('so pra testar se parou -> '+this.universalContainer.classList.length+'\n'+this.universalContainer.classList[this.universalContainer.classList.length-1]);

			if(this.timer_sec == 0) {
				this.timer_sec = 60;
				this.timer_mins--;
			}
			this.timer_sec--;
			if(this.timer_mins==0){
				this.timer_mins = 59;
				this.timer_hours--;
			}
			if(this.timer_hours == 0){
				this.timer_hours = 23;
				this.timer_days--;
			}

			if (this.universalContainer.classList.length != 1){
				this.universalContainer.classList.add('Today');
				this.universalContainer.classList.remove('On');
			}

			if(this.timer_days == 0){
				this.textArea.innerHTML = 'Inaugura hoje em: ' + this.timer_hours + 'h ' + this.timer_mins + 'min';
			}
			else{
				this.textArea.innerHTML = 'Inaugura em: ' + this.timer_days + 'd ' + this.timer_hours + 'h ' + this.timer_mins + 'min ' + this.timer_sec + 'sec';
			}
			
			if (this.universalContainer.classList.length == 1) {
				// console.log('recolhendo na função timer');
				clearInterval(this.timerBuffer);
				this.textArea.innerHTML = '';
			}
			
		}, 1000);
	}
  }
  
function changeStatusTimer(stat){
	var objAnimatedTimer = new animatedTimer();

	objAnimatedTimer.turnIn(19, 20, 15, 30);

	if(document.getElementById('regressor-container').getBoundingClientRect().width == 40){
		objAnimatedTimer.turnOn();
		// console.log('expandir');
	}
	else{
		objAnimatedTimer.turnOff();
		// console.log('não expandir');
	}

	if(stat=='open'){
		objAnimatedTimer.turnOn();
	}else if(stat == 'close'){
		objAnimatedTimer.turnOff();
	}

	// console.log(document.getElementById('regressor-container').getBoundingClientRect().width);
}