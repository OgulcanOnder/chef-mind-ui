import axios from "axios";
import { notification } from "antd";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9090/api/v1",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const messages: Record<number, string> = {
      400: "Geçersiz istek.",
      401: "Oturum süreniz doldu.",
      403: "Bu işlem için yetkiniz yok.",
      404: "İstenen kaynak bulunamadı.",
      500: "Sunucu hatası, lütfen tekrar deneyin.",
    };
    notification.error({
      title: "Hata",
      description: messages[status] ?? "Beklenmeyen bir hata oluştu.",
      placement: "topRight",
      duration: 0,
    });
    console.error("[Response Error]", {
      url: error.config?.url,
      status: error.response?.status,
      message: error.message,
    });
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.request.use(
  (request) => request,
  (error) => {
    notification.error({
      title: "Hata",
      description: "İstek Gönderilemedi",
      placement: "topRight",
      duration: 0,
    });
    console.error("[Request Error]", {
      url: error.config?.url,
      message: error.message,
    });
  },
);

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
};
