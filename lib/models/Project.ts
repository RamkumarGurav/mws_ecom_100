import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    name: { type: String, required: true },
    link: { type: String, required: true },
    description: { type: String, default: "This is a Web application" },
    image: { type: String, default: "default.jpg" },
    status: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Project = models.ProjectSchema || model("Project", ProjectSchema);

export default Project;
