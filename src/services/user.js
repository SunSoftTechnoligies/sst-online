import { privateReq, publicReq } from "./axios-config";

export const enrollService = (data) => privateReq.post("/admin/enroll-intern-process", data);

export const loginternService = (data) => privateReq.post("/intern/log-intern-process", data);

export const reportinternService = (data) => privateReq.post("/intern/report-intern-process", data);

export const previewworkinternService = (data) => privateReq.post("/intern/preview-intern-process", data);

export const getreportService = (data) => privateReq.post("/collection/get-report-collection", data);

export const forgotpasswordService = (data) => privateReq.post("/intern/forgot-password-process", data);

export const profilesaveinternService = (data) => privateReq.post("/intern/profile-intern-save-process", data);

export const getinterndataService = (data) => privateReq.post("/intern/get-intern-process", data);

export const updateinterndataService=(data)=>privateReq.post("/intern/update-intern-process",data);

export const getprofileService = (data) => privateReq.post("/collection/get-profile-collection", data);

export const getinternService = (data) => privateReq.post("/collection/get-intern-collection", data);
