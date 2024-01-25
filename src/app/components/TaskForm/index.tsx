import { FC } from "react";
import { Formik } from "formik";

import TextField from "../TextField";

type TaskFormProps = {
  onSubmitFormTask: (task: string) => void;
};

type ErrorsSchema = {
  text?: string;
};

//criado form para controlar o input de nova task
const TaskForm: FC<TaskFormProps> = ({ onSubmitFormTask }) => {
  return (
    <Formik
      initialValues={{ text: "" }}
      validate={(values) => {
        const errors: ErrorsSchema = {};
        if (values.text.trim().length === 0) {
          errors.text = "Não deixe o campo em branco";
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        onSubmitFormTask(values.text.trim());
        resetForm();
      }}
    >
      {({ values, errors, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <TextField
            value={values.text}
            onInputChange={(value) => setFieldValue("text", value)}
            error={errors.text}
            placeholder="Adicione uma tarefa"
          />
        </form>
      )}
    </Formik>
  );
};

export default TaskForm;
