import { Form, Input, Button } from "@heroui/react";
import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";

const validateRegiserData = async (data: {
  [k: string]: FormDataEntryValue;
}) => {
  const result = await axios
    .get("/api/auth/register/validate", {
      params: data,
    })
    .catch(console.log);
  if (result && result.status === 200) {
    return result.data;
  } else {
    throw new Error("Error while fetching axios data");
  }
};

export default function ProfileForm({ data }: { data: unknown }) {
  return (
    <Form validationBehavior="native" className="">
      <Input
        label="First Name"
        labelPlacement="outside"
        variant="bordered"
        name="username"
        placeholder={data.first_name}
        validate={(value) => {
          if (value.length < 3) {
            return "Username must be at least 3 characters long";
          }

          return value === "admin" ? "Nice try!" : null;
        }}
      />
      <Input
        label="Last Name"
        labelPlacement="outside"
        variant="bordered"
        name="username"
        placeholder={data.last_name}
        validate={(value) => {
          if (value.length < 3) {
            return "Username must be at least 3 characters long";
          }

          return value === "admin" ? "Nice try!" : null;
        }}
      />
      <Input
        label="Username"
        labelPlacement="outside"
        variant="bordered"
        name="username"
        placeholder={data.username}
        validate={(value) => {
          if (value.length < 3) {
            return "Username must be at least 3 characters long";
          }

          return value === "admin" ? "Nice try!" : null;
        }}
      />
      <Button value="Submit" type="submit">
        Submit
      </Button>
    </Form>
  );
}
