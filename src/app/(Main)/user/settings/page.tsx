"use client";
import { Tabs, Tab, Avatar, Form, Input, Button } from "@heroui/react";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import ProfileForm from "./components/profileForm";
import SettingsForm from "./components/settingsForm";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page() {
  const [data, setData] = useState({});
  useEffect(() => {
    const access_token = Cookies.get("access_token");
    if (access_token === undefined) {
      redirect("/");
    }
    const user_data = axios
      .get("/api/user/data", {
        params: {
          access_token: access_token,
        },
      })
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div className="flex flex-col h-screen items-center">
      <div className="flex flex-col items-center w-full max-w-screen-xl">
        <div className="w-full mt-16">
          <div className="flex items-center gap-4">
            <Avatar
              isBordered
              color="secondary"
              size="lg"
              name={data.first_name}
            />
            <div>
              <span className="font-semibold text-lg">{data.first_name} </span>
              <span className="font-semibold text-lg">{data.last_name}</span>
              <p className="text-default-500">@{data.username}</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col my-4">
          <Tabs
            color="secondary"
            variant="underlined"
            aria-label="Tabs variants"
          >
            <Tab key="profile" title="Profile">
              <div className="w-1/4">
                <ProfileForm data={data} />
              </div>
            </Tab>
            <Tab key="settings" title="Settings">
              <div className="w-1/4">
                <SettingsForm data={data} />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
