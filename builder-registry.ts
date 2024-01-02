import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter")),
  {
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/MyButton/MyButton")),
  {
  name: 'MyButton',
  inputs: [
    // 'name' is the name of your prop
    { name: 'content', type: 'text' },
    { name: 'link', type: 'url' },
  ],
})