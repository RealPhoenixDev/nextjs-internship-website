"use client";
import {
  Form,
  Radio,
  RadioGroup,
  Button,
  DatePicker,
  Slider,
} from "@heroui/react";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { parseDate } from "@internationalized/date";

export default function SettingsForm() {
  const [data, setData] = useState({});
  const [renderData, setRenderData] = useState(<></>);
  useEffect(() => {
    const user_data = axios
      .get("/api/user/settings", {
        params: {
          access_token: Cookies.get("access_token"),
        },
      })
      .then((res) => {
        if (Object.keys(res.data).length < 1) {
          setData({ empty: true });
          return;
        }
        setData(res.data);
      });
  }, []);
  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setRenderData(renderPage(data));
    }
  }, [data]);

  return renderData;
}

function renderPage(data: object) {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const access_token = Cookies.get("access_token") || "";
    const formData = new FormData(e.currentTarget);
    formData.append("access_token", access_token);
    const _data = Object.fromEntries(formData);
    await axios.post("/api/user/settings", {
      data: _data,
    });
    location.reload();
  };
  return (
    <Form validationBehavior="native" className="gap-6" onSubmit={onSubmit}>
      <RadioGroup
        color="secondary"
        label="Favorite city"
        name="fav_city"
        defaultValue={data.fav_city}
      >
        <Radio description="The capital of Latvia" value="riga">
          Riga
        </Radio>
        <Radio description="The capital of Germany" value="berlin">
          Berlin
        </Radio>
        <Radio description="The capital of England" value="london">
          London
        </Radio>
        <Radio description="The capital of Japan" value="tokyo">
          Tokyo
        </Radio>
      </RadioGroup>
      <DatePicker
        className="max-w-[284px]"
        label="Favourite date"
        name="fav_date"
        variant="bordered"
        labelPlacement="outside"
        defaultValue={data.fav_date ? parseDate(data.fav_date) : ""}
      />
      <Slider
        label="Bumpscosity"
        name="bumpscosity"
        minValue={0}
        maxValue={100}
        step={1}
        size="sm"
        defaultValue={data.bumpscosity}
      />
      <Button value="Submit" type="submit" radius="sm">
        Update
      </Button>
    </Form>
  );
}
