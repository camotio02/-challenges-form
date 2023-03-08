var codigosDDD = [
    11, 12, 13, 14, 15, 16, 17, 18, 19,
    21, 22, 24, 27, 28, 31, 32, 33, 34,
    35, 37, 38, 41, 42, 43, 44, 45, 46,
    47, 48, 49, 51, 53, 54, 55, 61, 62,
    64, 63, 65, 66, 67, 68, 69, 71, 73,
    74, 75, 77, 79, 81, 82, 83, 84, 85,
    86, 87, 88, 89, 91, 92, 93, 94, 95,
    96, 97, 98, 99];

const validacao = () => {
    const today = new Date();
    const dada = document.forms["formvalidation"]
    const errorMessages = []

    // PEGANDO OS CAMPOS E SEUS RESPETIVOS VÁLORES
    const nome = dada?.name?.value
    const email = dada?.email?.value
    const number = dada?.number?.value
    const birth = dada?.birth?.value
    const sex = dada?.sex?.value
    const password = dada?.password?.value
    const passwordConfirm = dada?.confirmPassword?.value

    // SEPARANDO A DATA EM: DD,MM E AAAA
    const birthConfirm = {
        birthDay: birth.substring(0, 2),
        birthGetMonth: birth.substring(2, 4),
        birthGetYear: new Number(birth.substring(4, 8))
    }

    // CRIANDO REGRAS DE CADA CAMPO DO FORM
    const rulesfieldValidation = {
        rulesTheName: nome.indexOf(" ") == -1,
        rulesTheEmail: email.includes('@')
            && email.includes('.com'),
        rulesTheNumber: codigosDDD.indexOf(parseInt(number.substring(0, 2)))
            && number.length < 11,
        rulesTheBirthOne: birth.length != 8,
        rulesTheBirthTwo: (today.getFullYear() < birthConfirm?.birthGetYear),
        rulesThePasswordOne: password.match(/[0-9]/g) == null,
        rulesThePasswordTwo: password.match(/[a-z]/g) == null,
        rulesThePasswordThree: password.match(/[/@#$?]/g) == null,
        rulesTheConfirmPassword: passwordConfirm != password
    }



    // VERIFICANDO AS REGRAS
    if (rulesfieldValidation?.rulesTheName) {
        const error = alert(`Nome precisa ser nome completo, 
        não apenas um nome(Ex.: Abimael Neto, não ${nome}`)
        errorMessages.push(`${error}`)
    }
    if (!rulesfieldValidation?.rulesTheEmail) {
        const error = alert(`Email precisa ser um email válido, contendo @ e também .com,
        não ${email}`)
        errorMessages.push(`${error}`)
    }
    if (rulesfieldValidation?.rulesTheNumber) {
        const error = alert(`Telefone precisa conter o 
        DDD(Ex.: 41 99928238, não apenas ${number}`)
        errorMessages.push(`${error}`)
    }
    if (rulesfieldValidation?.rulesTheBirthOne) {
        const error = alert('Data de nascimento deve conter 8 números dd/mm/aaaa')
        errorMessages.push(`${error}`)
    }
    if (rulesfieldValidation?.rulesTheBirthTwo) {
        const error = alert('Data de nascimento não pode ser posterior à data de hoje')
        errorMessages.push(`${error}`)
    }
    if (rulesfieldValidation?.rulesThePasswordOne) {
        const error = alert('O campo senha pelo menos um número')
        errorMessages.push(`${error}`)
    }
    if (rulesfieldValidation?.rulesThePasswordTwo) {
        const error = alert('O campo senha deve conter uma letra minuscula pelo menos')
        errorMessages.push(`${error}`)
    }
    if (rulesfieldValidation?.rulesThePasswordThree) {
        const error = alert('O campo senha deve conter 1 simbolo pelo menos')
        errorMessages.push(`${error}`)
    }
    if (rulesfieldValidation?.rulesTheConfirmPassword) {
        const error = alert('A confirmação da senha deve ser igual á senha')
        errorMessages.push(`${error}`)
    }
    // VALIDÁÇÃO FINAL
    if (errorMessages.length == 0) {
        alert('Formulário válido')
    } else {
        return false
    }
}
