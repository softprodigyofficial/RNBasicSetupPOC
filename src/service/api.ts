import axios from "axios";
import * as Storage from "./asyncStoreConfig";

const ERRORMes = {
  response: {
    data: {
    //   message: strings.NO_INTERNET_FOUND,
    },
  },
};

const timeoutMes = {
  response: {
    data: {
    //   message: strings.CONNECTION_TIME_OUT,
    },
  },
};
const instance = axios.create({ timeout: 20000 });

export class ApiConfig {
  /**
   * Function will return post result of register user
   * @param data
   * @param URL
   * @returns promise
   */
  postRegisterJSON(data: any, URL: string) {
    return new Promise((resolve, reject) => {
      instance({
        method: "POST",
        url: URL,
        data: data,
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then(res => {
          resolve(res);
        })
        .catch(ERROR => {
          console.log("ERROR=>", ERROR);
          if (ERROR.toJSON().message === "Network Error") {
            reject(ERRORMes);
            return;
          } else if (
            ERROR.code === "ECONNABORTED" &&
            ERROR.message.includes("timeout")
          ) {
            reject(timeoutMes);
            return;
          }
          reject(ERROR);
        });
    });
  }

  /**
   * Function will return post result
   * @param data
   * @param URL
   * @returns promise
   */

  postJSON(data: object, URL: string, isFormData: Boolean) {
    return new Promise((resolve, reject) => {
      Storage.getItem("userToken").then((authtoken: any) => {
        instance({
          method: "POST",
          headers: isFormData
            ? {
                "Content-Type": "multipart/form-data",
                Authorization: authtoken,
              }
            : {
                accept: "application/json",
                "Content-Type": "application/json",
                Authorization: authtoken,
              },
          url: URL,
          data: data,
        })
          .then(res => {
            resolve(res);
          })
          .catch(ERROR => {
            console.log("ERROR=>", ERROR);
            if (ERROR.toJSON().message === "Network Error") {
              reject(ERRORMes);
              return;
            } else if (
              ERROR.code === "ECONNABORTED" &&
              ERROR.message.includes("timeout")
            ) {
              reject(timeoutMes);
              return;
            }
            reject(ERROR);
          });
      });
    });
  }

  /**
   * Function will return put result
   * @param URL
   * @returns promise
   */
  putJSON(params = {}, URL: string) {
    return new Promise((resolve, reject) => {
      Storage.getItem("userToken").then((authtoken: any) => {
        instance({
          method: "PUT",
          headers: {
            authtoken: authtoken,
          },
          url: URL,
          data: params,
        })
          .then(res => {
            resolve(res);
          })
          .catch(ERROR => {
            console.log("ERROR=>", ERROR);
            if (ERROR.toJSON().message === "Network Error") {
              reject(ERRORMes);
              return;
            } else if (
              ERROR.code === "ECONNABORTED" &&
              ERROR.message.includes("timeout")
            ) {
              reject(timeoutMes);
              return;
            }
            reject(ERROR);
          });
      });
    });
  }

  /**
   * Function will return get result
   * @param URL
   * @returns promise
   */
  getJSON(URL: string) {
    return new Promise((resolve, reject) => {
      Storage.getItem("userToken").then((authtoken: any) => {
        //using console statement here for using the token in postman
        console.log("authtoke==>", authtoken);
        instance({
          method: "GET",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: authtoken,
          },
          url: URL,
        })
          .then(res => {
            resolve(res);
          })
          .catch(ERROR => {
            console.log("ERROR=>", ERROR);
            if (ERROR.toJSON().message === "Network Error") {
              reject(ERRORMes);
              return;
            } else if (
              ERROR.code === "ECONNABORTED" &&
              ERROR.message.includes("timeout")
            ) {
              reject(timeoutMes);
              return;
            }
            reject(ERROR);
          });
      });
    });
  }

  /**
   * Function will return PATCH result
   * @param URL
   * @returns promise
   */
  patchJSON(data: any, URL: string, isFormData: Boolean) {
    return new Promise((resolve, reject) => {
      Storage.getItem("userToken").then((authtoken: any) => {
        instance({
          method: "PATCH",
          headers: isFormData
            ? {
                "Content-Type": "multipart/form-data",
                Authorization: authtoken,
              }
            : {
                accept: "application/json",
                "Content-Type": "application/json",
                Authorization: authtoken,
              },
          url: URL,
          data: data,
        })
          .then(res => {
            resolve(res);
          })
          .catch(ERROR => {
            console.log("ERROR=>", ERROR);
            if (ERROR.toJSON().message === "Network Error") {
              reject(ERRORMes);
              return;
            } else if (
              ERROR.code === "ECONNABORTED" &&
              ERROR.message.includes("timeout")
            ) {
              reject(timeoutMes);
              return;
            }
            reject(ERROR);
          });
      });
    });
  }

  deleteJSON(URL: string) {
    return new Promise((resolve, reject) => {
      Storage.getItem("userToken").then((authtoken: any) => {
        instance({
          method: "DELETE",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: authtoken,
          },
          url: URL,
        })
          .then(res => {
            resolve(res);
          })
          .catch(ERROR => {
            console.log("ERROR=>", ERROR);
            if (ERROR.toJSON().message === "Network Error") {
              reject(ERRORMes);
              return;
            } else if (
              ERROR.code === "ECONNABORTED" &&
              ERROR.message.includes("timeout")
            ) {
              reject(timeoutMes);
              return;
            }
            reject(ERROR);
          });
      });
    });
  }
}
