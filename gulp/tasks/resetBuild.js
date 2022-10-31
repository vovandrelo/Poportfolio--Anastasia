/* <================================================================================================================> */
/* <============================================== НЕОБХОДИМЫЕ МОДУЛИ ==============================================> */
/* <================================================================================================================> */

// 1. Модуль Del - предоставляет функционал по удалению файлов:
import del from "del";

// 2. Пользовательский модуль Path - предоставляет информацию о путях к необходимым файлам/папкам:
import { path } from "../config/path.js";

/* <================================================================================================================> */
/* <=============================== РЕАЛИЗАЦИЯ ЗАДАЧИ ОТЧИСТКИ ПАПКИ С РЕЗУЛЬТАТОМ =================================> */
/* <================================================================================================================> */

// Функция удаляет все данные из папки с результатом:
export const resetBuild = () => {
    return del(path.clean);
};