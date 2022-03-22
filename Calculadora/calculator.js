function Calculadora() {

    this.display = document.querySelector('.display');


    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.clearDisplay = () => this.display.value = '';

    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);


    this.realizaConta = () => {
        /* let conta = this.display.value; */

        try {

            //conta =  eval(conta);
            conta = eval(this.display.value);

            if (!conta) {
                alert('Conta inválida');
                return;
            }
            this.display.value = String(conta);
        } catch (e) {
            alert('Conta inválida');
            return;
        };
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', event => {
            const el = event.target;

            if (el.classList.contains('btn-num')) this.btnParaDisplay(el);

            if (el.classList.contains('btn-clear')) this.clearDisplay();

            if (el.classList.contains('btn-del')) this.apagaUm();

            if (el.classList.contains('btn-eq')) this.realizaConta(el);

        });
    };

    this.btnParaDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode == 13) this.realizaConta();

        });

    };


}


const calculadora = new Calculadora(); // criando uma nova instância do objeto.
calculadora.inicia();