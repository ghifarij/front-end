import Modal from "../modal";
import { Form, Formik, FormikHelpers } from "formik";
import { Input } from "../input";
import { UserRegister } from "../../types/user";
import { registerSchema } from "../../helpers/schema";
import useModal from "../../hooks/useModal";
import axios from "../../helpers/axios";
import { toast } from "react-toastify";

const initialValues: UserRegister = {
  username: "",
  email: "",
  password: "",
};

export const RegisterModal = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const onRegister = async (
    data: UserRegister,
    action: FormikHelpers<UserRegister>
  ) => {
    try {
      await axios.post("/users", data);
      toast.success("User Registered !");
      action.resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="w-full bg-blue-500 rounded-3xl hover:opacity-90 p-2 my-2 font-semibold"
      >
        Create account
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={(values, action) => {
            onRegister(values, action);
            action.resetForm();
          }}
        >
          {() => {
            return (
              <Form className="h-full flex flex-col justify-between py-4">
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl font-bold">Create account</h1>
                  <Input name="username" type="text" placeholder="Username" />
                  <Input name="email" type="email" placeholder="Email" />
                  <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-400 font-bold rounded-3xl text-sm w-full sm:w-auto px-5 py-2.5 text-center my-5"
                >
                  Create
                </button>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </div>
  );
};
