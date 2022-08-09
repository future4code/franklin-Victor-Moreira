function printTasks(array) {

    console.log("tarefas:[ ")

    for (let index = 0; index < array.length; index++) {

        if (index === (array.length - 1)) {
            console.log(`\t${array[index]}`)
        } else {
            console.log(`\t${array[index]},`)
        }
    }
    console.log("]")
}

export default printTasks
