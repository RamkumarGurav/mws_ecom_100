import { Schema, model, models } from "mongoose";

const SkillSchema = new Schema(
  {
    name: { type: String, required: true },
    percentage: { type: Number, required: true, default: 90 },
    description: { type: String },
    status: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

// Check if the model already exists
const Skill = models.Skill || model("Skill", SkillSchema);

export default Skill;
