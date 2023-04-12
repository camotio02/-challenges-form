// CRINADO DDD's
var codigosDDD = [
    11, 12, 13, 14, 15, 16, 17, 18, 19,
    21, 22, 24, 27, 28, 31, 32, 33, 34,
    35, 37, 38, 41, 42, 43, 44, 45, 46,
    47, 48, 49, 51, 53, 54, 55, 61, 62,
    64, 63, 65, 66, 67, 68, 69, 71, 73,
    74, 75, 77, 79, 81, 82, 83, 84, 85,
    86, 87, 88, 89, 91, 92, 93, 94, 95,
    96, 97, 98, 99
];
//CRIANDO O ARRAY DE ERROS
var errorMessages = []
var button = document.querySelector('.button')
var forms = document.querySelector('.forms')
var buttonError = document.querySelector('.showFieldsErros')
var container = document.querySelector('.container')
const validacao = () => {
    // PEGANDO A DATA DE HOJE
    const today = new Date();

    // PEGANDO OS INPUTS DO FORM
    const data = document.forms["formvalidation"]
    // PEGANDO OS CAMPOS E SEUS RESPETIVOS VÁLORES
    const fieldValues = {
        nome: data?.name?.value,
        email: data?.email?.value,
        number: data?.number?.value,
        password: data?.password?.value,
        passwordConfirm: data?.confirmPassword?.value,
    }
    // SEPARANDO A DATA EM: DD,MM E AAAA,  E CRIANDO CADA UM DELE 
    // COMO NÚMERO
    const birthConfirm = data?.date?.value
    const newDate = birthConfirm.split('-')
    // CRIANDO REGRAS DE CADA CAMPO DO FORMULÁRIO
    const rulesfieldsValidationForm = {
        name: { rule: fieldValues?.nome.indexOf(" ") !== -1, message: '' },
        email: {
            rule: fieldValues?.email.includes('@')
                && fieldValues?.email.includes('.com'), message: ''
        },
        number: {
            rule: codigosDDD.includes(parseInt(fieldValues?.number.substring(0, 2)))
                && fieldValues?.number.length === 11,
            message: ''
        },

        // DUAS REGRAS PARA O INPUT DATA DE NASCIMENTO
        birth: {
            rule: 1 > new Number(newDate[2]) < 31 &&
                1 > new Number(newDate[1]) < 12 &&
                1900 > new Number(newDate[0]) < 2023,
                message: 'Por favor digite uma data válida!'
        },
        // TRÊS REGRAS PARA O INPUT PASSWORD
        password: {
            rule: fieldValues?.password.match(/[0-9]/g) &&
                fieldValues?.password.match(/[a-z]/g) &&
                fieldValues?.password.match(/[@#$%]/g),
            messsage: 'A senha deve conter uma letra mauscula, minuscula e um símbolo'
        },
        confirmPassword: {
            rule: fieldValues?.passwordConfirm === fieldValues?.password,
            message: 'A confirmação da senha deve ser igual à senha, :(!'
        }
    }
    console.log(rulesfieldsValidationForm)
    return false
    // VERIFICANDO AS REGRAS
    // if (rulesfieldsValidationForm?.Name) {
    //     const error = `Nome precisa ser nome completo, 
    //         não apenas um nome(Ex.: Abimael Neto, não ${nome}`
    //     errorMessages.push(`${error}`)
    // }
    // if (!rulesfieldsValidationForm?.Email) {
    //     const error = `Email precisa ser um email válido, contendo @ e também .com,
    //         não ${email}`

    //     errorMessages.push(`${error}`)
    // }
    // if (rulesfieldsValidationForm?.rulesTheNumber?.NumberOne) {
    //     const error = `O telefone deve conter DDD, ${number} não é um DDD!`
    //     errorMessages.push(`${error}`)
    // } else if (rulesfieldsValidationForm?.rulesTheNumber?.NumberTwo) {
    //     const error = `Telefone deve ter 11 números`
    //     errorMessages.push(`${error}`)
    // }
    // if (rulesfieldsValidationForm?.rulesFieldBirth?.BirthOne) {
    //     const error = `o campo DD não pode ser maior que 31`
    //     errorMessages.push(`${error}`)
    // }
    // if (rulesfieldsValidationForm?.rulesFieldBirth?.BirthTwo) {
    //     const error = `o campo MM não pode ser maior que 12`
    //     errorMessages.push(`${error}`)
    // }
    // if (rulesfieldsValidationForm?.rulesFieldBirth?.BirthThree) {
    //     const error = `O ano não pode ser menor que 1900`
    //     errorMessages.push(`${error}`)
    // }
    // if (rulesfieldsValidationForm?.rulesFieldBirth?.BirthFour) {
    //     const error = `O ano não pode ser maior que atual!`
    //     errorMessages.push(`${error}`)
    // }
    // if (rulesfieldsValidationForm?.rulesFieldPassword?.PasswordOne) {
    //     const error = `O campo senha pelo menos um número`

    //     errorMessages.push(`${error}`)
    // }
    // if (rulesfieldsValidationForm?.rulesFieldPassword?.PasswordTwo) {
    //     const error = `O campo senha deve conter uma letra minuscula pelo menos`
    //     errorMessages.push(`${error}`)
    // }
    // if (rulesfieldsValidationForm?.rulesFieldPassword?.PasswordThree) {
    //     const error = (`O campo senha deve conter 1 simbolo pelo menos`)

    //     errorMessages.push(`${error}`)
    // }
    // if (rulesfieldsValidationForm?.ConfirmPassword) {
    //     const error = `A confirmação da senha deve ser igual á senha`
    //     errorMessages.push(`${error}`)
    // }

    // VALIDÁÇÃO FINAL, VERIFICANDO SE A ARRAY DE ERROR 
    // TEM ALGO OU NÃO.
    if (errorMessages.length == 0) {
        // SE NÃO TEM
        alert('Formulário válido')
        return true
    } else {
        // SE TEM
        alert(`${errorMessages.map((item) => {
            return item
        })}`)
        button.style.display = 'none'
        buttonError.style.display = 'flex'
        setTimeout(() => {
            buttonError.style.display = 'none'
            button.style.display = 'flex'
            errorMessages = []
        }, 4000)
        return false
    }
}

