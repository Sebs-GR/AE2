// symptom-tracker-monorepo/client/vue-symptom-app/src/services/api.js
import axios from 'axios';

// Solo usamos el API Gateway
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const patientsApi = {
  getAll() {
    return axios.get(`${API_URL}/patients`);
  },
  getById(id) {
    return axios.get(`${API_URL}/patients/${id}`);
  },
  create(patientData) {
    return axios.post(`${API_URL}/patients`, patientData);
  },
  update(id, patientData) {
    return axios.put(`${API_URL}/patients/${id}`, patientData);
  },
  delete(id) {
    return axios.delete(`${API_URL}/patients/${id}`);
  }
};

export const symptomsApi = {
  getAll() {
    return axios.get(`${API_URL}/symptoms`);
  },
  getByPatientId(patientId) {
    return axios.get(`${API_URL}/symptoms/patient/${patientId}`);
  },
  create(symptomData) {
    return axios.post(`${API_URL}/symptoms`, symptomData);
  }
};