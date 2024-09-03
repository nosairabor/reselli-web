import Input from "../input/input";
import SelectField from "../input/select";

// interface IFormikControlProps {
//   control: "input" | "textarea" | "select" | "radio" | "checkbox" | "date";
//   [key: string]: any;
// }
//will implement the other forms of input  like radio, select soon

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "select":
      return <SelectField {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;