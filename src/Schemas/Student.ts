import { Schema, model, Document } from "mongoose";

export type TStudent = {
    name: string,
    avgGrade: number
}

interface IStudent extends TStudent, Document {}

const StudentSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    avgGrade: {
        type: Number,
        default: 60,
        min: [0, "Grade Need to be positive"],
        max: 100
    },
},
{
    timestamps: true,
}
)

const Student = model<IStudent>("Student", StudentSchema);

export default Student
