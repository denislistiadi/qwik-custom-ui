import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div class='p-10'>Hello Qwik about!</div>;
});

export const head: DocumentHead = {
  title: "About",
  meta: [
    {
      name: "description",
      content: "Qwik UI Custom site description",
    },
  ],
};
