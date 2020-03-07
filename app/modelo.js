class App {
    /**
    * Base app
    * metodos de consulta
    */
    data = new Array(); // arreglo
    _length_ = function () {
        /** retorna el tamaño del arreglo */
        function length(data) {
            return data.length;

        }
        return length(this.data);

    }
    show_all = function () {
        return this.data;
    }
    show_done = function () {
        /**
         * Retorna tareas completadas
         */
        let response = new Array();
        let data = this.data;
        data.forEach(element => {
            if (element.status == false) response.push(element)
        });
        return response;
    }
    show_active = function () {
        /**
         * Retorna tareas activas
         */
        let response = new Array();
        let data = this.data;
        data.forEach(element => {
            if (element.status == true) response.push(element)
        });
        return response;
    }

}

class ToDo extends App {
    /**CRUD de la aplicacion */
    new_task = function (task = null) {
        // agrega elemento a la lista
        /**
         * 
         *   {
         *      "id":num,
         *       "task": string,
         *       "status": boolean,
         *    }
         */
        let index = this._length_() + 1;
        let data = this.data;
        data.push({
            "id": index,
            "task": task,
            "status": true,

        });

    }
    search_id = function (id = 0) {
        /** devuelve el elemento por id */
        let response = new Array();
        let data = this.data;
        data.forEach(element => {
            if (element.id == id) response = element
        });
        return response
    }

    edit_id = function (id = 0, task = null) {
        /** Edita tarea existente activa */
        let response = new Array();
        let data = this.data;
        let new_task = {
            "id": id,
            "task": task,
            "status": true,
        };
        data.forEach((element, pos) => {
            if (element.id == id) {
                data.splice(pos, 1, new_task);
                response =
                {
                    "message": "se actualizo correctamente",
                    "status": "sucess",
                }

            }
        });
        return response;
    }

    complete_id = function (id) {
        let response = {
            "message": "error !!!",
            "status": "error,",

        };
        let data = this.data;
        data.forEach((element, pos) => {
            if (element.id == id) {
                data.splice(pos, 1, {
                    "id": element.id,
                    "task": element.task,
                    "status": false,
                });
                response =
                {
                    "message": "tarea completa",
                    "status": "done",
                };
            }
        });
        return response;
    }
    delete_id = function (id) {
        let response = {
            "message": "Error !!!",
            "status": "error"
        };
        let data = this.data;
        data.forEach((element, pos) => {
            if (element.id == id) {
                data.splice(pos, 1);
                response = {
                    "message": `Tarea Eliminada, ID ${id}`,
                    "status": "done"
                }
            }
        });
        return response;
    }
}
/** 
let objeto = new ToDo();
objeto.new_task("Tarea 1");
objeto.new_task("Tarea 2");
objeto.new_task("Tarea 3");
objeto.new_task("Tarea 4");

console.log(objeto.search_id(3));

console.log(objeto.edit_id(3, "nueva tarea"));

console.log(objeto.search_id(3));

console.log(objeto.complete_id(3));

console.log(objeto.show_all());

//console.log(objeto.delete_id(3));

console.log(objeto.show_active());
console.log(objeto.show_done());
*/







