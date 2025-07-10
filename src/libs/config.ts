import { error } from "console";

export const serverApi: string = `${process.env.REACT_APP_API_URL}`;
export const MORGAN_FORMAT: string = `:method :url :response-time [:status] \n`;

export const Message = {
  error1: "Something went wrong!",
  error2: "Please login first!",
  error3: "Please fullfill all fields!",
  error4: "Message is empty!",
  error5: "Only images with jpg, jpeg, png, format allowed!",
};
