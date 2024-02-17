import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div class='p-10'>Hello Qwik documentation!</div>;
});

export const head: DocumentHead = {
  title: "Documentation",
  meta: [
    {
      name: "description",
      content: "Qwik UI Custom site description",
    },
  ],
};
