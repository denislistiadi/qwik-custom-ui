import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div class='p-10'>Hello Qwik example!</div>;
});

export const head: DocumentHead = {
  title: "Example",
  meta: [
    {
      name: "description",
      content: "Qwik UI Custom site description",
    },
  ],
};
