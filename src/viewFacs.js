import {
    onGetTasks,
    saveTask,
    deleteTask,
    getTask,
    updateTask,
    getTasks,
  } from "./firebaseFac.js";
  
  const taskForm = document.getElementById("task-formFac");
  const tasksContainer = document.getElementById("tasks-containerFac");
  const facD = document.getElementById("facDon")
  console.log(taskForm["task-nitFac"]);

  console.log(facD["task-nomFac"]);
  
  let editStatus = false;
  let id = "";
  
  const arrayNum =[]
  console.log(arrayNum);


function encontrarMaximo() {
  let maximo;

  // Verifica si el arreglo tiene elementos
  if (arrayNum.length > 0) {
    // Encuentra el número más grande y asigna a la variable maximo
    maximo = Math.max(...arrayNum);
    console.log("El número más grande es:", maximo);
  } else {
    console.log("El arreglo está vacío.");
  }

  // Devuelve el número máximo
  return maximo;
}



  // function validar() {
  //   for (let i = 0; i < arrayNum.length; i++) {
  //     if (arrayNum[i]>cont) {
  //       cont = arrayNum[i];
  //     }
  //   }
  //   const valorNum = cont
  //   console.log(valorNum);
  //   return valorNum;
  // }
  // const validado = validar();
  // console.log(validado);

   
  window.addEventListener("DOMContentLoaded", async (e) => {
    // const querySnapshot = await getTasks();
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    // });

    
  
    onGetTasks((querySnapshot) => {
      tasksContainer.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        let temp= task.numFac
        arrayNum.push(temp);
        // if (typeof task.numFac === "number") {
        //   arrayNum.push(task.numFac)
        // }
        // console.log(arrayNum);
        // validar();
        tasksContainer.innerHTML += `
      <tr>
        <th scope="row">${task.ccFac}</th>
        <td>${task.nameFac}</td>
        <td></td>
        <td>      <button class="btn bg-info btn-edit" data-id="${doc.id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
Ver
      </button></td>
      </tr>
      `;
      });
  
      const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
      btnsDelete.forEach((btn) =>
        btn.addEventListener("click", async ({ target: { dataset } }) => {
          try {
            await deleteTask(dataset.id);
          } catch (error) {
            console.log(error);
          }
        })
      );
  
      const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");
      btnsEdit.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          try {
            const doc = await getTask(e.target.dataset.id);
            const task = doc.data();
            taskForm["task-fechFac"].value = task.fech,
          taskForm["task-nomFac"].value = task.nameFac,
          taskForm["task-nitFac"].value = task.ccFac,
          taskForm["lentes"].value = task.lenFac,
          taskForm["lentesDes"].value = task.lenFacVal,
          taskForm["monturas"].value = task.monFac,
          taskForm["monturasDes"].value = task.monFacVal,
          taskForm["otros"].value = task.otrFac,
          taskForm["otrosDes"].value = task.otrFacVal,
          taskForm["abono"].value =task.aboFac,
          taskForm["saldo"].value = task.salFac,
          taskForm["total"].value = task.totFac,
          taskForm["task-telFac"].value = task.telFac,
          facD["task-nFac"].value = task.numFac,
          facD["task-nomFac"].value = task.nameFac,
          facD["task-nitFac"].value = task.ccFac,
          facD["task-fechFac"].value = task.fech

          if (task.lenFac == '') {
            facD["lentes"].value = '-----'
          }else{
            facD["lentes"].value = task.lenFac
          }
          
          facD["lentesDes"].value = task.lenFacVal,
          facD["monturas"].value = task.monFac,
          facD["monturasDes"].value = task.monFacVal

          if (task.otrFacVal == "") {
            facD["otrosDes"].value = "-----"
          }else{
            facD["otrosDes"].value = task.otrFacVal
          }
          facD["otros"].value = task.otrFac,
          facD["otrosDes"].value = task.otrFacVal,
          facD["abono"].value =task.aboFac,
          facD["saldo"].value = task.salFac,
          facD["total"].value = task.totFac,
  
            editStatus = true;
            id = doc.id;
            taskForm["btn-task-formFac"].innerText = "Update";
          } catch (error) {
            console.log(error);
          }
        });
      });
    });
  });
  
  taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const fechF = taskForm["task-fechFac"];
    const nomF = taskForm["task-nomFac"];
    const ccF = taskForm["task-nitFac"];
    const lenF = taskForm["lentes"];
    const lenFV = taskForm["lentesDes"];
    const monF = taskForm["monturas"];
    const monFV = taskForm["monturasDes"];
    const otrF = taskForm["otros"];
    const otrFV = taskForm["otrosDes"];
    const aboF = taskForm["abono"];
    const salF = taskForm["saldo"];
    const totF = taskForm["total"];
    const telF = taskForm["task-telFac"];
    try {
      if (!editStatus) {
        await saveTask(
          fechF.value,
          nomF.value,
          ccF.value,
          lenF.value,
          lenFV.value,
          monF.value,
          monFV.value,
          otrF.value,
          otrFV.value,
          aboF.value,
          salF.value,
          totF.value,
          telF.value
        );
      } else {
        await updateTask(id, {
          fech : fechF.value,
          nameFac :           nomF.value,
          ccFac :           ccF.value,
          lenFac :           lenF.value,
          lenFacVal :        lenFV.value,
          monFac :           monF.value,
          monFacVal :        monFV.value,
          otrFac :           otrF.value,
          otrFacVal :        otrFV.value,
          totFac :           totF.value,
          aboFac :           aboF.value,
          salFac :           salF.value,
          telFac:            telF.value
        });
  
        editStatus = false;
        id = "";
        taskForm["btn-task-formFac"].innerText = "Save";
      }
  
      taskForm.reset();
    } catch (error) {
      console.log(error);
    }
  });


  
  
 

  