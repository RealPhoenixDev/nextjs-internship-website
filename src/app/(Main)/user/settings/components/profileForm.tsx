import { Form, Input, Button, Textarea } from "@heroui/react";
import axios from "axios";
import { FormEvent, useState } from "react";
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
  const [submitErrors, setSubmitErrors] = useState({});
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const access_token = Cookies.get("access_token") || "";
    const formData = new FormData(e.currentTarget);
    formData.append("access_token", access_token);
    const _data = Object.fromEntries(formData);
    const validationData = await validateRegiserData(_data);
    if (Object.keys(validationData.errors).length === 0) {
      console.log("no errors");
      await axios.post("/api/user/data", {
        data: _data,
      });
      location.reload();
    } else {
      setSubmitErrors(validationData.errors);
    }
  };

  return (
    <Form
      validationBehavior="native"
      className="gap-4"
      onSubmit={onSubmit}
      validationErrors={submitErrors}
    >
      <Input
        label="First Name"
        labelPlacement="outside"
        variant="bordered"
        name="first_name"
        radius="sm"
        placeholder={data.first_name}
        validate={(value) => {
          if (value.length < 3 && value.length > 0) {
            return "Username must be at least 3 characters long";
          }

          return value === "admin" ? "Nice try!" : null;
        }}
      />
      <Input
        label="Last Name"
        labelPlacement="outside"
        variant="bordered"
        name="last_name"
        radius="sm"
        placeholder={data.last_name}
        validate={(value) => {
          if (value.length < 3 && value.length > 0) {
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
        radius="sm"
        placeholder={data.username}
        validate={(value) => {
          if (value.length < 3 && value.length > 0) {
            return "Username must be at least 3 characters long";
          }

          return value === "admin" ? "Nice try!" : null;
        }}
      />
      <Input
        name="email"
        label="Email adress"
        labelPlacement="outside"
        placeholder={data.email}
        type="email"
        radius="sm"
        variant="bordered"
      />
      <Textarea
        variant="bordered"
        name="biography"
        label="Bio"
        radius="sm"
        labelPlacement="outside"
        placeholder={data.biography}
        classNames={{
          base: "max-w-xs",
          input: "resize-y min-h-[40px]",
        }}
      />
      <Button value="Submit" type="submit" radius="sm">
        Update
      </Button>
    </Form>
  );
}
