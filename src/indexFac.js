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
  
  let editStatus = false;
  let id = "";
  
  window.addEventListener("DOMContentLoaded", async (e) => {
    // const querySnapshot = await getTasks();
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    // });
  
    onGetTasks((querySnapshot) => {
      tasksContainer.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const task = doc.data();
        tasksContainer.innerHTML += `
      <tr>
        <th scope="row">${task.ccFac}</th>
        <td>${task.nameFac}</td>
        <td>   <button class="btn btn-primary btn-delete" data-id="${doc.id}">
        🗑 Delete
      </button></td>
        <td>      <button id="boton1" class="btn btn-secondary btn-edit" data-id="${doc.id}">
        🖉 Edit
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
      mostrarToastGood();
    } catch (error) {
      console.log(error);
    }
  });
  
  
  
  async function filterTasksByTitle(title) {
    const tasksContainer = document.getElementById("tasks-containerFac");
    const querySnapshot = await getTasks();
  
    tasksContainer.innerHTML = "";
  
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      const taskTitle = task.title.toLowerCase();
  
      if (taskTitle.includes(title.toLowerCase())) {
        tasksContainer.innerHTML += `
          <tr>
            <th scope="row">${task.title}</th>
            <td>${task.description}</td>
            <td>
              <button class="btn btn-primary btn-delete" data-id="${doc.id}">
                🗑 Delete
              </button>
            </td>
            <td>
              <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
                🖉 Edit
              </button>
            </td>
          </tr>
        `;
      }
    });
  }
  
  // Ejemplo de uso:
  const btnTitulo = getElementById("botonTitulo")
  const titulo = getElementById("titulo");
  
  btnTitulo = addEventListener("click",()=>{
    filterTasksByTitle(titulo);
  })


  function mostrarToastGood() {
    var toast = new bootstrap.Toast(document.getElementById('liveToastGood'));
    toast.show();
  }  



  