import mongoose from 'mongoose';

const SymptomLogSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: [true, 'El ID del paciente es obligatorio'],
  },
  symptomDescription: {
    type: String,
    required: [true, 'La descripción del síntoma es obligatoria'],
    trim: true,
  },
  severity: {
    type: Number,
    required: [true, 'La severidad es obligatoria'],
    min: 1,
    max: 10,
  },
  notes: {
    type: String,
    trim: true,
  },
  loggedAt: {
    type: Date,
    default: Date.now,
  },
}, {
  collection: 'symptoms',
});

export default mongoose.model('SymptomLog', SymptomLogSchema);