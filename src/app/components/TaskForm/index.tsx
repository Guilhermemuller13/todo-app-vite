import { FC } from "react";
import { Formik } from "formik";

import TextField from "../TextField";

type TaskFormProps = {
  onSubmitFormTask: (task: string) => void;
};

const TaskForm: FC<TaskFormProps> = ({ onSubmitFormTask }) => {
  return (
    <Formik
      initialValues={{ text: "" }}
      validate={(values) => {
        const errors = {};
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
      {({ values, errors, touched, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <TextField
            value={values.text}
            onInputChange={(value) => setFieldValue("text", value)}
          />
          {errors.text && touched.text && errors.text}
        </form>
      )}
    </Formik>
  );
};

export default TaskForm;
