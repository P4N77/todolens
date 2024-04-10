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

  const arrayNum =[]


  function encontrarMaximo() {
    var maximo;
  
    // Verifica si el arreglo tiene elementos
    if (arrayNum.length>0) {
      if (arrayNum.length > 0) {
        // Encuentra el número más grande y asigna a la variable maximo
        maximo = Math.max(...arrayNum);
        console.log(maximo);
      }
    }else{
      maximo = 1
    }
    
  
    // Devuelve el número máximo
    return maximo;
  }

 
  




  

  // const arrayNum =[]
  // 


  // }
  window.addEventListener("DOMContentLoaded", async (e) => {
    // const querySnapshot = await getTasks();
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    // });
  
    onGetTasks((querySnapshot) => {

      querySnapshot.forEach((doc) => {
        const task = doc.data();
        console.log(task);
        if (typeof task.numFac =="number") {
          arrayNum.push(task.numFac);
          
        }
        console.log(arrayNum);
      });
  //     // tasksContainer.innerHTML = "";
  
  //     // querySnapshot.forEach((doc) => {
  //     //   const task = doc.data();
  //       // if (typeof task.numFac === "number") {
  //       //   arrayNum.push(task.numFac)
  //       // }
  //       // console.log(arrayNum);
  //       // console.log(valorNum);
  //       // validar();
  //     //   tasksContainer.innerHTML += `
  //     // <tr>
  //     //   <th scope="row">${task.ccFac}</th>
  //     //   <td>${task.nameFac}</td>
  //     //   <td>   <button class="btn btn-primary btn-delete" data-id="${doc.id}">
  //     //   🗑 Delete
  //     // </button></td>
  //     //   <td>      <button id="boton1" class="btn btn-secondary btn-edit" data-id="${doc.id}">
  //     //   🖉 Edit
  //     // </button></td>
  // //     // </tr>
  // //     // `;
      });


  //     const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
  //     btnsDelete.forEach((btn) =>
  //       btn.addEventListener("click", async ({ target: { dataset } }) => {
  //         var confirmacion = confirm("¿Estás seguro de querer eliminar esta fila?");
  //         if (confirmacion){
  //           try {
  //             await deleteTask(dataset.id);
  //             mostrarToastDel();
  //           } catch (error) {
  //             console.log(error);
  //             mostrarToastBad();
  //           }
  //         }else{
  //           mostrarToastDelBad();
  //         }
  //       })
  //     );
  
  //     const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");
  //     btnsEdit.forEach((btn) => {
  //       btn.addEventListener("click", async (e) => {
  //         try {
  //           const doc = await getTask(e.target.dataset.id);
  //           const task = doc.data();
  //           taskForm["task-fechFac"].value = task.fech,
  //         taskForm["task-nomFac"].value = task.nameFac,
  //         taskForm["task-nitFac"].value = task.ccFac,
  //         taskForm["lentes"].value = task.lenFac,
  //         taskForm["lentesDes"].value = task.lenFacVal,
  //         taskForm["monturas"].value = task.monFac,
  //         taskForm["monturasDes"].value = task.monFacVal,
  //         taskForm["otros"].value = task.otrFac,
  //         taskForm["otrosDes"].value = task.otrFacVal,
  //         taskForm["abono"].value =task.aboFac,
  //         taskForm["saldo"].value = task.salFac,
  //         taskForm["total"].value = task.totFac,
  //         taskForm["task-telFac"].value = task.telFac,
  
  //           editStatus = true;
  //           id = doc.id;
  //           taskForm["btn-task-formFac"].innerText = "Update";
  //         } catch (error) {
  //           console.log(error);
  //           mostrarToastBad()
  //         }
  //       });
  //     });
  //   });
  });
  
  taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const num = encontrarMaximo();
    const nFac = num+1
    console.log(nFac);
    console.log(num);

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
          telF.value,
          nFac
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
          telFac:            telF.value,
          numFac: nFac
        });
  
        editStatus = false;
        id = "";
        taskForm["btn-task-formFac"].innerText = "Save";
      }
  
      taskForm.reset();
      mostrarToastGood();
    } catch (error) {
      console.log(error);
      mostrarToastBad();
    }
  });

 


 
  function mostrarToastGood() {
    var toastGood = new bootstrap.Toast(document.getElementById('liveToastGood'));
    toastGood.show();
  }   

  function mostrarToastBad() {
    var toastBad = new bootstrap.Toast(document.getElementById('liveToastBad'));
    toastBad.show();
  } 
  
  function mostrarToastUp() {
    var toastUp= new bootstrap.Toast(document.getElementById('liveToastUp'));
    toastUp.show();
  }  

  function mostrarToastDel() {
    var toastDel = new bootstrap.Toast(document.getElementById('liveToastDel'));
    toastDel.show();
  }  

  function mostrarToastDelBad() {
    var toastDelBad = new bootstrap.Toast(document.getElementById('liveToastDelBad'));
    toastDelBad.show();
  }  

  