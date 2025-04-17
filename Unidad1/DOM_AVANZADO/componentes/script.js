import Form from "./formulario.js";
import taskTable from "./tabla.js";
import cards from "./cards.js";

(() => {
    Form.setDatos((task) => {
        taskTable.addTask(task);
        cards.update();
    });
})();