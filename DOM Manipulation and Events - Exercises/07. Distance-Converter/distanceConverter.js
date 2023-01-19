function attachEventsListeners() {


    let convertButtonElement = document.querySelector('input[type="button"]');
    convertButtonElement.addEventListener('click', function () {

        let selectInputElement = document.getElementById('inputUnits');
        let numberElement = document.querySelector('#inputDistance');

        let outputElement = document.querySelector('#outputDistance');
        let selectOutPutElement = document.getElementById('outputUnits');

        if (numberElement.value !== '') {

            let number = Number(numberElement.value);
            switch (selectInputElement.value) {
                case 'km':
                    number *= 1000;
                    break;
                case 'm':
                    number *= 1;
                    break;
                case 'cm':
                    number *= 0.01;
                    break;
                case 'mm':
                    number *= 0.001;
                    break;
                case 'mi':
                    number *= 1609.34;
                    break;
                case 'yrd':
                    number *= 0.9144;
                    break;
                case 'ft':
                    number *= 0.3048;
                    break;
                case 'in':
                    number *= 0.0254;
                    break;
            }

            switch (selectOutPutElement.value) {
                case 'km':
                    number /= 1000;
                    break;
                case 'm':
                    number /= 1;
                    break;
                case 'cm':
                    number /= 0.01;
                    break;
                case 'mm':
                    number /= 0.001;
                    break;
                case 'mi':
                    number /= 1609.34;
                    break;
                case 'yrd':
                    number /= 0.9144;
                    break;
                case 'ft':
                    number /= 0.3048;
                    break;
                case 'in':
                    number /= 0.0254;
                    break;
            }
            outputElement.value = number;

        }

    })
}