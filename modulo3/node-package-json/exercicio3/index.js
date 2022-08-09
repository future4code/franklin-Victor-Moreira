// Exercício 3

import fs from 'fs'
import printTasks from "./printTasks.js";

const fileNamePath = "./listaDeTarefas.txt"
const task = process.argv[2]
const taskList = []
const FgRed = "\x1b[31m"

if (task === undefined) {
    console.log(FgRed, "É esperada uma tarefa para adicionar a lista.");
} else {
    taskList.push(task)

    try {
        fs.appendFileSync(fileNamePath, task + ',\n');
    } catch (err) {
        console.error(err);
    }

    console.log("Tarefa adicionada com sucesso!\n");

    const dados = fs.readFileSync(fileNamePath, 'utf-8')
    const completeTaskList = dados.split(',\n');

    printTasks(completeTaskList)
}
