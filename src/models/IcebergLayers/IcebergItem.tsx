import { Moment } from "../Moments/Moment";

class IcebergItem {
  title: string;
  description: string;
  timestamps: Moment[];
  constructor(title: string, description: string, timestamps: Moment[]) {
    this.title = title;
    this.description = description;
    this.timestamps = timestamps;
  }
}

export default IcebergItem;
